// src/app/api/words/route.tsx
import { sql } from '@vercel/postgres';

export async function GET(req: Request) {
    try {
        const result = await sql`SELECT * FROM words`;
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}