import { Resend } from 'resend';
import { EmailTemplate } from '@/lib/emailTemplate';
import { QueryResultRow, sql } from '@vercel/postgres';
import { Flashcard } from '@/lib/flashcards/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, { params }: any) {
    try {
        const order_id = params.orderId;
        const { user_id } = await req.json();

        const userData = (await sql`
            SELECT 
                user_id,
                name,
                email
            FROM users 
            WHERE user_id=${user_id}
        `).rows[0];

        const flashcards: any = (await sql`
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
            WHERE o.paypal_order_id=${order_id}
        `).rows;

        const { data, error } = await resend.emails.send({
            from: 'GREasy <cards@greasyvocab.com>',
            to: [userData.email.trim()],
            subject: `Your GREasy Flashcards 🎉 ${order_id ? "Order #" + order_id : 'Free Pack'}`,
            react: <EmailTemplate
                flashcards={flashcards}
                paypalOrderId={order_id}
                name={userData.name.split(" ")[0]} />
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    }
}