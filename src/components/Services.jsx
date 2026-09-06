const services = [
    {
        id: 1,
        title: 'Business Websites',
        description: 'Modern, responsive websites designed to help small businesses build a professional online presence and make information easy for customers to find.'
    },
    {
        id: 2,
        title: 'Custom Web Development',
        description: 'Custom web solutions built around your business needs, including interactive features, workflows, and tailored functionality.'
    },
    {
        id: 3,
        title: 'Front-End Development',
        description: 'Responsive, user-friendly interfaces built with modern web technologies for existing or new web applications.'
    },
];

function Services() {
    return (
        <section id="services" className="services" aria-labelledby="services-heading">
            <h2 id="services-heading">Our Services</h2>
            <p>Web solutions designed to help small businesses improve their online presence and customer experience.</p>

            <div className="descriptions">
                {services.map((service) => (
                    <article key={service.id} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Services;