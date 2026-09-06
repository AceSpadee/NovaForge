const processes = [
    {
        id: 1,
        title: 'Discover',
        description: 'Learn about your business, goals, audience, and the problem the project needs to solve.'
    },
    {
        id: 2,
        title: 'Plan',
        description: 'Define the project scope, structure, features, and a clear path for development.'
    },
    {
        id: 3,
        title: 'Build',
        description: 'Develop the website or application, test key functionality, and refine the user experience.'
    },
    {
        id: 4,
        title: 'Launch',
        description: 'Complete final testing, prepare the site for production, and deploy it for customers to use.'
    },
];

function Process() {
    return (
        <section id="process" className="process" aria-labelledby="process-heading">
            <h2 id="process-heading">Process</h2>
            <p>A straightforward process that keeps each project organized from planning through launch.</p>
            
            <div className="process-descriptions">
                {processes.map((process) => (
                    <article key={process.id} className="process-card">
                        <h3>{process.title}</h3>
                        <p>{process.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Process;