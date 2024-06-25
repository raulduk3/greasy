'use server';

import { sql } from '@vercel/postgres';
import { OpenAI } from "openai";
import { wrapOpenAI } from "langsmith/wrappers";
import { traceable } from "langsmith/traceable";
import sentenceGenerationPrompt from './sentenceGenerationPrompt';

import type { Flashcard, WordData, PromptData } from './types';
import type { UserData } from '../user/types';

/**
 * Sorts an array of objects alphabetically by a specified key.
 * 
 * @param {Array} arr - Array of objects to be sorted.
 * @param {string} key - Key by which to sort the objects.
 * @returns {Array} - Sorted array.
 */
function alphabetizeArrayByKey<T>(arr: T[], key: keyof T): T[] {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    });
}

/**
 * Retrieves a random selection of words from the database.
 * 
 * @param {number} wordCount - Number of words to retrieve.
 * @returns {Promise<WordData[]>} - A promise that resolves to an array of word objects.
 */
const getWords = async function(wordCount: number): Promise<WordData[]> {
    const { rows } = await sql`
        SELECT 
            word_id AS id, 
            word, 
            definition, 
            example_sentence AS example, 
            part_of_speech AS partOfSpeech 
        FROM words 
        ORDER BY RANDOM() 
        LIMIT ${wordCount};
    `;
    return rows.map((row) => ({
        id: row.id,
        word: row.word,
        definition: row.definition,
        example: row.example,
        partOfSpeech: row.partOfSpeech,
    }));
};

/**
 * Generates flashcards for a user by retrieving words, generating sentences, 
 * and storing the flashcards in the database.
 * 
 * @param {UserData} userData - Data about the user, including their preferences.
 * @param {number} orderId - The ID of the order for which to generate flashcards.
 * @param {number} wordCount - Number of words to retrieve for flashcards.
 * @returns {Promise<Flashcard[]>} - A promise that resolves to an array of generated flashcard objects.
 */
const generateFlashcards = traceable(
    async function generateFlashcards(userData: UserData, orderId: number, wordCount: number): Promise<Flashcard[]> {
        
        const openai = wrapOpenAI(new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            organization: process.env.OPENAI_ORG_ID,
            project: process.env.OPENAI_PROJECT_ID,
        }));

        // Retrieve random words from the database
        const wordsWithData = await getWords(wordCount);

        // Alphabetize the words by their text
        alphabetizeArrayByKey(wordsWithData, 'word');

        // Generate prompts for each word
        const prompts: (PromptData)[] = await Promise.all(wordsWithData.map(async (wordData): Promise<PromptData> => {
            const promptText = await sentenceGenerationPrompt(wordData, userData.friends, userData.locations, userData.activities);

            return {
                word: wordData.word,
                wordData,
                prompt: promptText,
            };
        }));

        // Generate sentences for each prompt using OpenAI
        const completions: (Flashcard)[] = await Promise.all(prompts.map(async (prompt): Promise<Flashcard> => {
            try {
                const completion = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    stop: '.',
                    max_tokens: 120,
                    messages: [{ content: prompt.prompt, role: "system" }],
                });

                return {
                    word: prompt.word,
                    word_id: prompt.wordData.id,
                    sentence: completion.choices[0].message.content || '',
                    def: prompt.wordData.definition,
                    partOfSpeech: prompt.wordData.partOfSpeech,
                };
            } catch (error) {
                console.error(`Error generating completion for word: ${prompt.word}`, error);
                throw error;
            }
        }));

        // Filter out any null completions
        const flashcardSentences: Flashcard[] = completions;

        // Insert sentences and flashcards into the database
        for (const flashcard of flashcardSentences) {
            const { rows: sentenceRows } = await sql`
                INSERT INTO sentences (sentence, word_id)
                VALUES (${flashcard.sentence}, ${flashcard.word_id})
                RETURNING sentence_id;
            `;
            const sentenceId: number = sentenceRows[0].sentence_id;

            await sql`
                INSERT INTO flashcards (word_id, sentence_id, order_id)
                VALUES (${flashcard.word_id}, ${sentenceId}, ${orderId});
            `;
        }

        // Insert into customers table if user has paid
        if (userData.paid) {
            await sql`
                INSERT INTO customers (user_id, payer_id, payer_email, payer_name)
                VALUES (${userData.user_id},  ${userData.payer.payer_id}, ${userData.payer.email_address}, ${userData.payer.name.given_name + ' '  + userData.payer.name.surname})
                ON CONFLICT (payer_id) DO UPDATE 
                SET payer_email = EXCLUDED.payer_email,
                    payer_name = EXCLUDED.payer_name;
            `;
        }

        return flashcardSentences.map((flashcard, index) => ({
            ...flashcard,
            order_id: orderId,
            paypal_order_id: userData.id,
        }));
    },
    {
        name: "generateFlashcard() server action",
        run_type: "llm",
    }
);

export default generateFlashcards;