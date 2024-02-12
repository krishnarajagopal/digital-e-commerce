import { EmailTemplate } from '../../(WithLayout)/_components/email-template'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
        const { email, name, amount } = await req.json();
        try {
                const data = await resend.emails.send({
                        from: 'onboarding@resend.dev',
                        to: ['pythontester1978@gmail.com', email,'Krishan.rajagopal@gmail.com'],
                        subject: 'Payment confirmation for your latest purchase',
                        react: EmailTemplate({ email, name, amount })
                });

                return Response.json(data);
        } catch (error) {
                return Response.json({ error });
        }
}
