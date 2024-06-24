/**
 * Type definition for user data in the context of flashcards.
 */
export interface UserData {
    user_id?: number;
    name?: string,
    email: string,
    paid?: boolean;
    [key: string]: any;
}