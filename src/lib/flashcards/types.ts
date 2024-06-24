/**
 * Type definition for flashcard data.
 */
export interface Flashcard {
    word: string;
    word_id: number;
    sentence: string;
    def: string;
    partOfSpeech: string;
    bundle_id?: number;
    order_id?: number;
}

export interface WordData {
    id: number;
    word: string;
    definition: string;
    example: string;
    partOfSpeech: string;
}

export interface PromptData {
    word: string;
    wordData: WordData;
    prompt: string;
}
