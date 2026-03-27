import styles from './Hero.module.css';
import Logo from '../Logo/Logo';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.visualStack}>
                <div className={styles.theDot} data-narrative-dot></div>
                <div className={styles.theLine} data-narrative-line></div>
            </div>

            <div className={styles.narrativeText} data-narrative-text>
                Every Big thing is Born from one single Dot.
            </div>

            <div className={styles.content} data-hero-content>
                <Logo className={styles.heroLogo} width={400} height={100} />
                <p className={styles.tagline}>IT ALL STARTS WITH THE DOT.</p>
                <p className={styles.description}>Your Partner in Digital Excellence</p>
            </div>
        </section>
    );
}
