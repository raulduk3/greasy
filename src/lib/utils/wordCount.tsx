import { sql } from '@vercel/postgres';

export const getWordCount = async () => {
    const result = await sql`SELECT COUNT(*) as count FROM words`;
    return result.rows[0].count;
};