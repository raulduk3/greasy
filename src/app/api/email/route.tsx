import { Resend } from 'resend';
import { EmailTemplate } from '@/lib/utils/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { userData, flashcards } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'GREasy <cards@greasyvocab.com>',
            to: [userData.email.trim()],
            subject: `Your GREasy Flashcards 🎉 ${userData.id ? "Order #" + userData.id : 'Free Pack'}`,
            react: <EmailTemplate
                flashcards={flashcards}
                paypalOrderId={userData.id}
                name={userData.name.split(" ")[0]} />
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