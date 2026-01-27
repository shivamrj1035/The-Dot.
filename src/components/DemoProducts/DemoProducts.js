import styles from './DemoProducts.module.css';
import { ExternalLink, Eye } from 'lucide-react';

const products = [
    {
        "title": "Aquaara – Water Bottle Product Showcase",
        "description": "A modern product showcase and advertisement website for Aquaara water bottles, built with a clean UI/UX design to present product features, branding, and a premium ecommerce-style experience.",
        "url": "https://shivamrj1035.github.io/Aquaara-Water-Bottle/",
        "tags": ["Product Showcase", "Ecommerce UI", "React", "UI/UX", "Frontend Development", "Branding"]
    },
    {
        "title": "Property Purchase Management System",
        "description": "A web app for tracking your home buying financial journey with features like funding sources, EMI tracking, reminders, analytics and comprehensive reports to help manage your home purchase process.",
        "url": "https://purchase-management-webapp.vercel.app/",
        "tags": ["finance", "management", "home purchase", "EMI", "analytics"]
    },
    {
        "title": "CrackIT – Interview Preparation Companion (inferred)",
        "description": "CrackIT appears to be an AI-powered interview preparation application designed to help users practice technical interview questions and track progress across topics like DSA, OS, CN, and more. (Live site couldn’t be fetched, description inferred from project context.)",
        "url": "https://crack-it-eight.vercel.app/",
        "tags": ["interview prep", "AI tool", "education", "coding practice", "tech learning"]
    },
    {
        "title": "True Shine Cleaning & Gardening Facilities",
        "description": "Professional cleaning and gardening services offered in Gold Coast & Brisbane. Services include eco-friendly residential and commercial cleaning, lawn maintenance, and property care.",
        "url": "http://Trueshine.info",
        "tags": ["cleaning", "gardening", "services", "property care", "eco-friendly"]
    },
    {
        "title": "Expense Tracker (MERN App)",
        "description": "An expense tracking web application (likely built with the MERN stack) for managing personal expenses, budgeting, and financial tracking — deployed on Netlify.",
        "url": "https://expense-tracking-mernapp.netlify.app",
        "tags": ["expense tracking", "budgeting", "MERN", "finance", "personal finance"]
    },
    {
        "title": "AI Image Generator (React App)",
        "description": "A React-based AI image generator web application deployed on Netlify, likely offering tools for generating images using AI models from user prompts.",
        "url": "https://ai-image-generator-reactapp.netlify.app/",
        "tags": ["AI", "image generation", "React", "creative tools", "machine learning"]
    }
];

export default function DemoProducts() {
    const handleImageError = (e) => {
        e.target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop'; // Technical/Software fallback
    };

    return (
        <section id="products" className={styles.productsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Demo <span>Products</span></h2>
                    <p className={styles.subtitle}>Explore our cutting-edge web solutions and digital experiences.</p>
                </div>

                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.card} data-scroll-reveal>
                            <div className={styles.previewContainer}>
                                <img
                                    src={`https://api.microlink.io/?url=${encodeURIComponent(product.url)}&screenshot=true&meta=false&waitForTimeout=4000&embed=screenshot.url`}
                                    alt={product.title}
                                    className={styles.previewImage}
                                    onError={handleImageError}
                                    loading="lazy"
                                />
                                <div className={styles.overlay}>
                                    <a href={product.url} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>
                                        View Live Site <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <p className={styles.productDesc}>{product.description}</p>
                                <div className={styles.tags}>
                                    {product.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
