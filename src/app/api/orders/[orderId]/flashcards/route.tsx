import { sql } from '@vercel/postgres';

export async function GET(req: Request, { params }: { params: { orderId: string } }) {
    const { orderId } = params;

    try {
        const { rows } = await sql`
            SELECT 
                f.flashcard_id,
                f.word_id,
                w.word,
                w.definition,
                w.part_of_speech,
                s.sentence
            FROM flashcards f
            JOIN words w ON f.word_id = w.word_id
            JOIN sentences s ON f.sentence_id = s.sentence_id
            JOIN orders o ON f.order_id = o.order_id
            WHERE o.paypal_order_id = ${orderId}
        `;
        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching flashcards:', error);
        return new Response(JSON.stringify({ error: 'Error fetching flashcards' }), { status: 500 });
    }
}
