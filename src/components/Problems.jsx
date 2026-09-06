const problems = [
    {
        id: 1,
        title: 'Outdated Website',
        description: 'Modernize an older website with a cleaner design, improved responsiveness, and a better experience for customers.'
    },
    {
        id: 2,
        title: 'Too Much Manual Work',
        description: 'Simplify repetitive tasks with custom web tools and workflows that make day-to-day operations more efficient.'
    },
    {
        id: 3,
        title: "Customers Can't Easily Find Information",
        description: 'Organize important information with clear navigation, readable layouts, and a better overall user experience.'
    },
];

function Problems() {
    return (
        <section id="solutions" className="solutions" aria-labelledby="solutions-heading">
            <h2 id="solutions-heading">Problems We Solve</h2>
            <p>We help solve common website and workflow problems with practical, custom-built solutions.</p>

            <div className="problem-descriptions">
                {problems.map((problem) => (
                    <article key={problem.id} className="problem-card">
                        <h3>{problem.title}</h3>
                        <p>{problem.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Problems;