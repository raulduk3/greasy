'use server';

function getRandomElement(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default async function sentenceGenerationPrompt(word: { id: any; word: any; definition: any; example: any; partOfSpeech: any; }, friends: string[], locations: string[], activities: string[]) {
    return `
    ${word}: ${word.partOfSpeech} ${word.definition}. 
    ${word.example}. 
    Using the name ${getRandomElement(friends)} and set in ${getRandomElement(locations)}, inspired by ${getRandomElement(activities)}, write a 20-23 word GRE-style sentence that correctly demonstrates the definition of '${word.word}'.
    `.trim().replace(/\n/g, '');
}