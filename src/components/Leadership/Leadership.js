"use client";

import styles from './Leadership.module.css';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const leaders = [
    {
        name: 'Darshan Soni',
        website: 'https://www.linkedin.com/in/darshan-rojasara-768192243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByNE1DlyOQWeRfoYgIIchkA%3D%3D',
        role: 'CEO & Founder',
        initial: 'D',
        image: '/DarshanRojasara.jpg'
    },
    // {
    //     name: 'Shivam Jayswal',
    //     website: 'https://shivamrj1035.github.io/shivam-ai-persona/',
    //     role: 'CTO',
    //     initial: 'S',
    //     image: '/ShivamJayswal.png'
    // }
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
                            <div className={styles.nameWrapper}>
                                <h3 className={styles.name}>{leader.name}</h3>
                                {leader.website && (
                                    <a
                                        href={leader.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.websiteLink}
                                        title="Visit Website"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                            <p className={styles.role}>{leader.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
