// src/app/api/words/[id]/route.tsx
import { sql } from '@vercel/postgres';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

async function verifyAuthorization(req: Request) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { authorized: false, response: new Response(JSON.stringify({ error: 'Missing header' }), { status: 401 }) };
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);
    if (!payload) {
        return { authorized: false, response: new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 }) };
    }

    return { authorized: true, payload };
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { authorized, response } = await verifyAuthorization(req);
    if (!authorized) {
        return response;
    }

    const { id } = params;
    const { word, part_of_speech, definition, example_sentence } = await req.json();

    try {
        await sql`
            UPDATE words 
            SET 
                word = ${word}, 
                part_of_speech = ${part_of_speech}, 
                definition = ${definition}, 
                example_sentence = ${example_sentence}
            WHERE word_id = ${id}
        `;
        return new Response(JSON.stringify({ message: 'Word updated successfully' }), {
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

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { authorized, response } = await verifyAuthorization(req);
    if (!authorized) {
        return response;
    }

    const { id } = params;

    try {
        await sql`DELETE FROM words WHERE word_id = ${id}`;
        return new Response(JSON.stringify({ message: 'Word deleted successfully' }), {
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