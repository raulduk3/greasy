'use server';

import fs from 'fs';
import path from 'path';
import { sql } from '@vercel/postgres';
import { OpenAI } from "openai";
import { wrapOpenAI } from "langsmith/wrappers";
import { traceable } from "langsmith/traceable";
import sentenceGenerationPrompt from './sentenceGenerationPrompt';

const generateFlashcard = traceable(
    async function generateFlashcard(userData: any) {
        const openai = wrapOpenAI(new OpenAI({
            organization: process.env.OPENAI_ORG_ID,
            project: process.env.OPENAI_PROJECT_ID,
        }));

        const { name, friends, locations, activities } = userData;
        const prompt = sentenceGenerationPrompt(name, friends, locations, activities);

        const createCompletion = traceable(
            openai.chat.completions.create.bind(openai.chat.completions),
            { name: "Sentence Generation", run_type: "llm" }
        );
        const completion = await createCompletion({
            model: "gpt-3.5-turbo",
            stop: '.',
            max_tokens: 120,
            messages: [{ content: sentenceGenerationPrompt(name, friends, locations, activities), role: "system" }],
        });

        const flashCahrdSentence = completion.choices[0].message.content;

        console.log(flashCahrdSentence);
        return flashCahrdSentence;
    },
    {
        name: "generateFlashcard() server action",
        run_type: "llm",
    }
);

export default generateFlashcard;