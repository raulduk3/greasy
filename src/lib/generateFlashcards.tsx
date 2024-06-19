'use server';

import fs from 'fs';
import path from 'path';
import { sql } from '@vercel/postgres';
import { OpenAI } from "openai";
import { wrapOpenAI } from "langsmith/wrappers";
import { traceable } from "langsmith/traceable";
import sentenceGenerationPrompt from './sentenceGenerationPrompt';

const getWords = async function() {
    const { rows } = await sql`SELECT * FROM words ORDER BY RANDOM() LIMIT 20;`;
    return rows.map((row: any) => ({
        id: row.word_id,
        word: row.word,
        definition: row.definition,
        example: row.example_sentence,
        partOfSpeech: row.part_of_speech,
    }));
};

// TODO: Fix to generate a flashcard for 20 words selected randomly from the database. 
const generateFlashcards = traceable(
    async function generateFlashcards(userData) {
        const openai = wrapOpenAI(new OpenAI({
            organization: process.env.OPENAI_ORG_ID,
            project: process.env.OPENAI_PROJECT_ID,
        }));

        const words = await getWords();
        if (!words || words.length === 0) {
            console.error('No words retrieved from the database.');
            return [];
        }

        const prompts = words.map(word => {
            const promptText = sentenceGenerationPrompt(word.word, userData.friends, userData.locations, userData.activities);
            if (!promptText) {
                console.error(`Failed to generate prompt for word: ${word.word}`);
                return null;
            }
            return {
                word: word.word,
                prompt: promptText,
            };
        }).filter(prompt => prompt); // Filter out null prompts to avoid breaking the completion call

        if (prompts.length === 0) {
            console.error('No valid prompts generated.');
            return [];
        }

        const completions = await Promise.all(prompts.map(async prompt => {
            try {
                return await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    stop: '.',
                    max_tokens: 120,
                    messages: [{ content: prompt.prompt, role: "system" }],
                });
            } catch (error) {
                console.error(`Error generating completion for word: ${prompt.word}`, error);
                return null;
            }
        }));

        const flashcardSentences = completions.filter(completion => completion).map(completion => completion.choices[0].message.content);

        return flashcardSentences;
    },
    {
        name: "generateFlashcard() server action",
        run_type: "llm",
    }
);

export default generateSmehods omitted or if certain critical details are missing or mishandled.


export default generateFlashcards;