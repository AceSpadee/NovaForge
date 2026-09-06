import 'dotenv/config';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendContactEmail({ email, name, company, message }) {
    const { error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [process.env.CONTACT_TO_EMAIL],
        replyTo: email,
        subject: 'New NovaForge Contact',
        text: `
            Name: ${name}
            Company: ${company || 'Not provided'}
            Email: ${email}

            Message:
            ${message}.
        `,
    });

    if (error) {
        throw new Error(error.message);
    }
};

export default sendContactEmail;