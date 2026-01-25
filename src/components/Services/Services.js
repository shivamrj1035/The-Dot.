import styles from './Services.module.css';

const services = [
    {
        id: '01',
        title: 'Website Making',
        desc: 'Custom-designed, responsive websites that captivate your audience and drive business results.'
    },
    {
        id: '02',
        title: 'Social Media Marketing',
        desc: 'Complete marketing including SEO, engaging reels, strategic posts, and targeted boosts.'
    },
    {
        id: '03',
        title: 'Photography',
        desc: "Professional photography that captures your brand's essence and tells compelling stories."
    },
    {
        id: '04',
        title: 'Photo & Video Editing',
        desc: 'Expert editing services that transform raw content into polished, professional media.'
    },
    {
        id: '05',
        title: 'AI Modeling',
        desc: 'Cutting-edge AI solutions to elevate your projects and streamline workflows.'
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.header}>
                <h2 className={styles.title} data-scroll-reveal>Our Services</h2>
                <p className={styles.subtitle} data-scroll-reveal>Comprehensive Digital Solutions for Your Success</p>
            </div>
            <div className={styles.grid}>
                {services.map((service) => (
                    <div key={service.id} className={styles.card} data-scroll-reveal>
                        <span className={styles.index}>{service.id}</span>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDesc}>{service.desc}</p>
                        <div className={styles.accentBar}></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
