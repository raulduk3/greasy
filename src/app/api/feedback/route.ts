import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { feedback } = await req.json();
        const { data, error } = await resend.emails.send({
            from: 'GREasy <noreply@greasyvocab.com>',
            to: ['rawalvarez731@gmail.com'],
            subject: 'New Feedback Received',
            text: feedback,
        });

        if (error) {
            console.log(error);
            return new Response(JSON.stringify({ message: 'Failed to send feedback.' }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: 'Feedback sent successfully!' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Failed to send feedback.' }), { status: 500 });
    }
}