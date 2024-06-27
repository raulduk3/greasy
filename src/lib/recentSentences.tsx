import { sql } from '@vercel/postgres'; // Assume you have a db connection setup

export const getRecentSentences = async () => {
    const result = await sql`SELECT sentence FROM sentences ORDER BY sentence_id DESC LIMIT 5`;
    return result.rows.map(row => row.sentence);
};