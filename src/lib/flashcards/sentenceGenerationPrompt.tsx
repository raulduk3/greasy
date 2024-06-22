'use server';

function getRandomElement(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default async function sentenceGenerationPrompt(word: { id: any; word: any; definition: any; example: any; partOfSpeech: any; }, friends: string[], locations: string[], activities: string[]) {
    return `
        ${word.definition}
        ${word.example}
        Use the name ${getRandomElement(friends)} in ${getRandomElement(locations)}, inspired by ${getRandomElement(activities)}.
        Write a 20-25 word GRE-style sentence that clearly illustrates the definition of '${word}.' You MUST use ${word.word}.
    `.trim().replace(/\n/g, '');
}