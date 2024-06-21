'use server';

import fs from 'fs';
import path from 'path';
import { sql } from '@vercel/postgres';
import { OpenAI } from "openai";
import { wrapOpenAI } from "langsmith/wrappers";
import { traceable } from "langsmith/traceable";
import sentenceGenerationPrompt from './sentenceGenerationPrompt';

function alphabetizeArrayByKey(arr: any, key: any) {
    return arr.sort((a: any, b: any) => {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    });
}

const getWords = async function() {
    const { rows } = await sql`SELECT * FROM words ORDER BY RANDOM() LIMIT 20;`;
    return rows.map((row) => ({
        id: row.word_id,
        word: row.word,
        definition: row.definition,
        example: row.example_sentence,
        partOfSpeech: row.part_of_speech,
    }));
};

const generateFlashcards = traceable(
    async function generateFlashcards(userData: any) {
        const openai = wrapOpenAI(new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            organization: process.env.OPENAI_ORG_ID,
            project: process.env.OPENAI_PROJECT_ID,
        }));

        const wordsWithData = await getWords();
        if (!wordsWithData || wordsWithData.length === 0) {
            console.error('No wordsWithData retrieved from the database.');
            return [];
        }

        alphabetizeArrayByKey(wordsWithData, 'word');

        const prompts = await Promise.all(wordsWithData.map(async wordData => {
            const promptText = await sentenceGenerationPrompt(wordData, userData.friends, userData.locations, userData.activities);
            if (!promptText) {
                console.error(`Failed to generate prompt for word: ${wordData.word}`);
                return null;
            }
            return {
                word: wordData.word,
                wordData: wordData,
                prompt: promptText,
            };
        }));

        const filteredPrompts = prompts.filter(prompt => prompt !== null); // Filter out null prompts

        if (filteredPrompts.length === 0) {
            console.error('No valid prompts generated.');
            return [];
        }

        const completions = await Promise.all(filteredPrompts.map(async (prompt: any) => {
            try {
                const completion = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    stop: '.',
                    max_tokens: 120,
                    messages: [{ content: prompt.prompt, role: "system" }],
                });
                return {
                    word: prompt.word,
                    sentence: completion.choices[0].message.content,
                    def: prompt.wordData.definition,
                    example: prompt.wordData.example,
                    partOfSpeech: prompt.wordData.partOfSpeech,
                };
            } catch (error) {
                console.error(`Error generating completion for word: ${prompt.word}`, error);
                return null;
            }
        }));

        const flashcardSentences = completions.filter(completion => completion !== null);

        return flashcardSentences;
    },
    {
        name: "generateFlashcard() server action",
        run_type: "llm",
    }
);

export default generateFlashcards;