"use client";

import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { MessageSquare, Calendar, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Logo from '../Logo/Logo';

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleWhatsApp = () => {
        const number = "917600167809";
        window.open(`https://wa.me/${number}?text=Hello The Dot Team, I'm interested in your services.`, '_blank');
    };

    const handleMeeting = () => {
        // Replace with actual Calendly link
        window.open('https://calendly.com/d-s-rojasara111/new-meeting', '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (status === 'sending') return;

        setStatus('sending');
        setErrorMessage('');

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const confirmTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !adminTemplateId || !publicKey) {
            console.error('EmailJS credentials missing');
            setStatus('error');
            setErrorMessage('Email configuration is missing. Please check .env.local');
            return;
        }

        try {
            // 1. Send inquiry to Admin
            await emailjs.sendForm(
                serviceId,
                adminTemplateId,
                form.current,
                publicKey
            );

            // 2. Send confirmation to User (if confirmation template is provided)
            if (confirmTemplateId && confirmTemplateId !== adminTemplateId) {
                try {
                    await emailjs.sendForm(
                        serviceId,
                        confirmTemplateId,
                        form.current,
                        publicKey
                    );
                } catch (confirmError) {
                    console.error('User Confirmation Email Error:', confirmError);
                    // We don't fail the whole process if just the confirmation fails, 
                    // but we log it.
                }
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Admin Notification Error:', error);
            setStatus('error');
            setErrorMessage('Failed to send inquiry. Please try again or use WhatsApp.');
        }
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

                    <form ref={form} className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <input
                                name="from_name"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                name="reply_to"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <textarea
                                name="message"
                                placeholder="Briefly describe your project"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <div className={styles.successMsg}>
                                <CheckCircle size={16} /> Inquiry sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className={styles.errorMsg}>
                                <AlertCircle size={16} /> {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={styles.sendButton}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <>Sending... <Loader2 size={18} className={styles.spinner} /></>
                            ) : (
                                <>Send Inquiry <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </div>

                <div className={styles.bottom} suppressHydrationWarning>
                    <div className={styles.brand}>
                        <Logo className={styles.footerLogo} width={150} height={40} />
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
