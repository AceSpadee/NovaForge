import { useState, useEffect, useRef } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [turnstileToken, setTurnstileToken] = useState('');
    const turnstileRef = useRef(null);
    const turnstileWidgetId = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
            sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
            callback: (token) => {
                setTurnstileToken(token)
            },
            'expired-callback': () => {
                setTurnstileToken('')
            },
            'error-callback': () => {
                setTurnstileToken('')
            }
        });
    }, [])

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken
                }),
            });

            let data
            try {
               data = await response.json(); 
            } catch {
                throw new Error("Something went wrong. Please try again.");
            }
            
            if (!response.ok) {
                throw new Error(`${data.message}`);
            };

            setStatus('success');
            setFormData({
                name: '',
                company: '',
                email: '',
                message: '',
            });
            setErrorMessage('');

        } catch (error) {
            setStatus('error');
            setErrorMessage(error.message);
        } finally {
            setTurnstileToken('')
            window.turnstile.reset(turnstileWidgetId.current)
        }
    }

    return (
        <section id="contact" className="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
            <p className="contact-intro">Tell us about your project, goals, or website needs and we’ll get back to you with the next steps.</p>

            <form onSubmit={handleSubmit} className="contact-card">
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} maxLength={100} required autoComplete="name" />

                <label htmlFor="company">Company: </label>
                <input id="company" name="company" value={formData.company} onChange={handleChange} maxLength={150} autoComplete="organization" />

                <label htmlFor="email">Email: </label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} type="email" maxLength={254} required autoComplete="email" />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} maxLength={3000} required></textarea>

                <div ref={turnstileRef}></div>

                <button type="submit" disabled={status === 'submitting' || turnstileToken === ''}>
                    {status === 'submitting' ? 'Sending...' : 'Submit'}
                </button>
            </form>

            <div role="status" aria-live="polite" aria-atomic="true">
                {status === 'submitting' && <p>Sending your message…</p>}
                {status === 'success' && <p>Your message was sent successfully.</p>}
                {errorMessage !== '' && <p>{errorMessage}</p>}
            </div>
        </section>
    )
};

export default Contact;