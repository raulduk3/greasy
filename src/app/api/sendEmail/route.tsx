import { Resend } from 'resend';
import { EmailTemplate } from '@/lib/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Make this more general, so that it can be used for any email.
export async function POST(req: Request) {
    try {
        const { userData, flashcards } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'GREasy <cards@greasyvocab.com>',
            to: [userData.email.trim()],
            subject: `Your GREasy Flashcards 🎉 Order #${flashcards[0].paypal_order_id}`,
            react: <EmailTemplate
                flashcards={flashcards}
                name={userData.payer.name.given_name ? userData.payer.name.given_name : userData.name} />
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}