import styles from './DemoProducts.module.css';
import { ExternalLink, Eye } from 'lucide-react';

const products = [
    {
        title: 'Aquaara Water Bottle Advertisement',
        description: 'A premium, modern ecommerce experience for high-quality hydration product Water Bottles.',
        url: 'https://shivamrj1035.github.io/Aquaara-Water-Bottle/',
        tags: ['Ecommerce Advertisement', 'UI/UX', 'React']
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
