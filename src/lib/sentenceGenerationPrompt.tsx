'use server';

function getRandomElement(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default function sentenceGenerationPrompt(word: { id: any; word: any; definition: any; example: any; partOfSpeech: any; }, friends: string[], locations: string[], activities: string[]) {
    return `
        ${word.definition}
        Write a GRE-style sentence that clearly illustrates the definition of '${word.word}.' Inspired by: ${getRandomElement(friends)}, ${getRandomElement(locations)}, ${getRandomElement(activities)}.
    `;
}