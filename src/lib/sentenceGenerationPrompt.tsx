export default function sentenceGenerationPrompt(name: string, friends: string[], locations: string[], activities: string[]) {
    return `
        Write a GRE-style sentence that clearly illustrates the definition of 'mercurial.'  ${friends[0]}, ${locations[0]}, ${activities[0]}.
    `;
}