"use client";

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Logo from '../Logo/Logo';

const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Demo Products', href: '#products' },
    { name: 'Technology', href: '#technology' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#hero" className={styles.logoLink}>
                    <Logo className={styles.logoSvg} />
                </a>

                <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.link}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className={styles.cta} onClick={() => setIsOpen(false)}>
                        Book a Call
                    </a>
                </div>

                <div className={styles.navActions}>
                    <ThemeToggle />
                    <button className={styles.mobileMenu} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
