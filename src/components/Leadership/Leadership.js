"use client";

import styles from './Leadership.module.css';
import Image from 'next/image';

const leaders = [
    {
        name: 'Darshan Soni',
        role: 'CEO & Founder',
        initial: 'D',
        image: null // To be provided later
    },
    {
        name: 'Shivam Jayswal',
        role: 'CTO',
        initial: 'S',
        image: '/ShivamJayswal.png'
    }
];

export default function Leadership() {
    return (
        <section id="leadership" className={styles.leadership}>
            <div className={styles.header}>
                <h2 className={styles.title} data-scroll-reveal>Leadership</h2>
                <p className={styles.subtitle} data-scroll-reveal>The visionaries behind the excellence</p>
            </div>
            <div className={styles.container}>
                {leaders.map((leader, index) => (
                    <div key={index} className={styles.leaderCard} data-scroll-reveal>
                        <div className={styles.imageWrapper}>
                            <div className={styles.edgeTracing}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {leader.image ? (
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    width={300}
                                    height={300}
                                    className={styles.profileImg}
                                />
                            ) : (
                                <div className={styles.avatarPlaceholder}>
                                    <span>{leader.initial}</span>
                                </div>
                            )}
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{leader.name}</h3>
                            <p className={styles.role}>{leader.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
