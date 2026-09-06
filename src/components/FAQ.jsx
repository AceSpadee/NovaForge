import { useState } from "react";

const faqArray = [
    {
        id: 1,
        question: 'What types of websites do you build?',
        answer: 'We build responsive business websites, custom web applications, and front-end interfaces based on the needs of each project.',
    },
    {
        id: 2,
        question: 'How long does a project take?',
        answer: 'Project timelines depend on scope and complexity, but smaller front-end projects can often be completed within a few weeks.',
    },
    {
        id: 3,
        question: 'Can you update an existing website?',
        answer: 'Yes. We can improve an existing website’s design, responsiveness, usability, and front-end functionality.',
    }
];

function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);

    function handleOpen(id) {
        if (!openFaq || openFaq !== id) {
            setOpenFaq(id)
        } else {
            setOpenFaq(null)
        }
    }

    return (
        <section id="faq" className="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <p>Answers to common questions about our services and development process.</p>

            <div className="faq-descriptions">
                {faqArray.map((faq) => (
                    <article key={faq.id} className="faq-card">
                        <button type="button" aria-controls={`faq-answer-${faq.id}`} aria-expanded={openFaq === faq.id} onClick={() => handleOpen(faq.id)}>{faq.question} <span aria-hidden="true">
                            {openFaq === faq.id ? '-' : '+'}
                        </span></button>
                        {openFaq === faq.id && <p id={`faq-answer-${faq.id}`}>{faq.answer}</p>}
                    </article>
                ))}
            </div>
        </section>
    )
};

export default FAQ;