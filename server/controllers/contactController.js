import validateContact from '../helpers/validateContact.js';
import verifyTurnstile from '../helpers/verifyTurnstile.js';
import sendContactEmail from '../helpers/sendContactEmail.js';

export async function submitContact(req, res) {
    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
        return res.status(400).json({
            message: 'Invalid request body'
        })
    }

    const validatedContactData = validateContact(req.body)

    if (validatedContactData.error) {
        return res.status(400).json({
            message: validatedContactData.error
        })
    }
    
    const { turnstileToken: validatedTurnstileToken, ...emailContactData } = validatedContactData

    try {
        const isVerified = await verifyTurnstile(validatedTurnstileToken);

        if (!isVerified) {
            return res.status(403).json({
                message: 'Verification failed. Please try again.'
            })
        }

        await sendContactEmail(emailContactData)

        return res.status(200).json({
            message: 'success'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Something went wrong. Please try again.'
        });
    }
};
