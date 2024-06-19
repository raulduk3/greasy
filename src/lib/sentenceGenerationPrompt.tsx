'use server';

function getRandomElement(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default async function sentenceGenerationPrompt(word: { id: any; word: any; definition: any; example: any; partOfSpeech: any; }, friends: string[], locations: string[], activities: string[]) {
    return `
        ${word.definition}
        ${word.example}
        Write a GRE-style sentence that clearly illustrates the definition of '${word}.' You MUST use ${word.word}. Inspired by: ${getRandomElement(friends)}, ${getRandomElement(locations)}, and ${getRandomElement(activities)}.
    `;
}