import styles from './Technology.module.css';

const techStack = [
    {
        category: 'Programming',
        items: ['Python', 'JavaScript', 'SQL']
    },
    {
        category: 'Backend & Frameworks',
        items: ['Django', 'Fast API', 'Celery', 'Flower', 'REST APIs']
    },
    {
        category: 'Databases',
        items: ['MySQL', 'MongoDB', 'Postgres']
    },
    {
        category: 'Frontend',
        items: ['React.js', 'Next.js', 'Tailwind CSS', 'shadcn UI']
    },
    {
        category: 'Tools & Platforms',
        items: ['AWS', 'Azure', 'Databricks', 'Docker', 'Postman', 'GitHub', 'n8n', 'Cursor', 'Qoder']
    },
    {
        category: 'AI/ML Expertise',
        items: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Agentic AI', 'LLM', 'LangChain', 'RAG']
    }
];

export default function Technology() {
    return (
        <section id="technology" className={styles.technology}>
            <div className={styles.header}>
                <h2 className={styles.title} data-scroll-reveal>Our Technology Stack</h2>
                <p className={styles.subtitle} data-scroll-reveal>Forging intelligence with a modern, high-performance stack.</p>
            </div>

            <div className={styles.grid}>
                {techStack.map((tech, index) => (
                    <div key={index} className={styles.techCard} data-scroll-reveal>
                        <h3 className={styles.categoryTitle}>{tech.category}</h3>
                        <div className={styles.badges}>
                            {tech.items.map((item, i) => (
                                <span key={i} className={styles.badge}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.extraInfo} data-scroll-reveal>
                <p>Team with Hands-on experience using advanced AI-powered IDEs like Cursor and Qoder to accelerate development and improve code quality.</p>
            </div>
        </section>
    );
}
