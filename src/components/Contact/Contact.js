"use client";

import { useState } from 'react';
import styles from './Contact.module.css';
import { MessageSquare, Calendar, Mail, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleWhatsApp = () => {
        const number = "917600167809";
        window.open(`https://wa.me/${number}?text=Hello The Dot Team, I'm interested in your services.`, '_blank');
    };

    const handleMeeting = () => {
        // Replace with actual Calendly link
        window.open('https://calendar.app.google/UWaUDEkmhbCb5KEX7', '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! (Email integration placeholder)");
    };

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactInterface}>
                    <div className={styles.leftCol}>
                        <h2 className={styles.heading}>Project <span>Inquiry</span></h2>
                        <p className={styles.desc}>Ready to transform your vision? Let's discuss your next breakthrough.</p>

                        <div className={styles.directActions}>
                            <button onClick={handleWhatsApp} className={styles.waButton}>
                                <MessageSquare size={20} />
                                WhatsApp Us
                            </button>
                            <button onClick={handleMeeting} className={styles.meetingButton}>
                                <Calendar size={20} />
                                Schedule Meeting
                            </button>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <textarea
                                placeholder="Briefly describe your project"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.sendButton}>
                            Send Inquiry <Send size={18} />
                        </button>
                    </form>
                </div>

                <div className={styles.bottom} suppressHydrationWarning>
                    <div className={styles.brand}>
                        <div className={styles.logo}>The Dot.</div>
                        <p>© 2026 The Dot. Intelligence, Solidified.</p>
                    </div>
                    <div className={styles.contactLinks}>
                        <a href="mailto:contact@thedot.com" suppressHydrationWarning><Mail size={16} /> contact@thedot.com</a>
                        <a href="tel:+917600167809">+91 7600167809</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
