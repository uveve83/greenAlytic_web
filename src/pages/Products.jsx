import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Products.module.css';

const PRODUCTS = [
  {
    badge: 'Most popular',
    icon: '📡',
    name: 'Emissions Monitor Pro',
    tagline: 'Real-time vehicle emissions tracking',
    price: 'Custom pricing',
    priceNote: 'Based on fleet size',
    features: [
      'VOC, CO, NO₂, HC tracking',
      'Live alerts & notifications',
      'Automated compliance reports',
      'Historical data & trends',
      'Multi-vehicle dashboard',
      'API access',
    ],
    cta: 'Request a quote',
    highlight: true,
  },
  {
    badge: 'Zero emission',
    icon: '⚡',
    name: 'E-Tricycle Cargo',
    tagline: 'Electric cargo tricycle for African terrain',
    price: 'Custom pricing',
    priceNote: 'Per unit, bulk discounts available',
    features: [
      'Zero emissions',
      'Built for rural roads',
      'Long-range battery',
      'Low maintenance design',
      'Local spare parts available',
      'After-sales support',
    ],
    cta: 'Request a quote',
    highlight: false,
  },
  {
    badge: 'Enterprise',
    icon: '🌐',
    name: 'IoT Fleet Suite',
    tagline: 'Complete fleet management platform',
    price: 'Custom pricing',
    priceNote: 'Scalable per vehicle count',
    features: [
      'Full emissions monitoring',
      'Live GPS fleet tracking',
      'Role-based user access',
      'Automated reporting',
      'Custom dashboards',
      'Dedicated support',
    ],
    cta: 'Request a quote',
    highlight: false,
  },
];

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

export default function Products() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Our products</p>
            <h1 className={styles.heroTitle}>Choose the right solution <span>for your fleet.</span></h1>
            <p className={styles.heroSub}>Purpose-built hardware and software for fleet emissions monitoring, electric transport, and IoT management across Africa.</p>
          </FadeIn>
        </div>
      </div>

      {/* Products */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {PRODUCTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`${styles.card} ${p.highlight ? styles.cardHighlight : ''}`}>
                  {p.highlight && <div className={styles.popularBadge}>⭐ Most popular</div>}
                  <div className={styles.cardTop}>
                    <div className={styles.icon}>{p.icon}</div>
                    <span className={styles.badge}>{p.badge}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className={styles.tagline}>{p.tagline}</p>
                  <div className={styles.price}>
                    <strong>{p.price}</strong>
                    <span>{p.priceNote}</span>
                  </div>
                  <ul className={styles.features}>
                    {p.features.map((f, j) => (
                      <li key={j}><span className={styles.check}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <a href="/contact" className={`${styles.ctaBtn} ${p.highlight ? styles.ctaPrimary : styles.ctaSecondary}`}>
                    {p.cta}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us - SAME FORMAT AS TESTIMONIALS */}
<section className={`${styles.section} ${styles.sectionGray}`}>
  <div className={styles.container}>
    <FadeIn>
      <div className={styles.testimonialsHeader}>
        <p className={styles.testimonialsLabel}>Why Greenalytic</p>
        <h2 className={styles.testimonialsTitle}>What makes us different</h2>
        <p className={styles.testimonialsSub}>
          Built in Rwanda, designed for Africa — here's why organisations trust us.
        </p>
      </div>
    </FadeIn>
    <div className={styles.whyGrid}>
      {[
        { icon: '🇷🇼', title: 'Built in Rwanda', desc: 'Our solutions are designed and engineered locally, meaning they are built for African roads, conditions, and regulations.' },
        { icon: '🔧', title: 'Full support', desc: 'From installation to after-sales, our team is available to keep your fleet running and compliant at all times.' },
        { icon: '📊', title: 'Data you can trust', desc: 'Real-time, accurate emissions data that meets regulatory standards and helps you make better fleet decisions.' },
        { icon: '🌍', title: 'Scalable for Africa', desc: 'Whether you have 1 vehicle or 100, our solutions scale with your fleet and your ambitions.' },
      ].map((w, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>{w.icon}</div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
</section>
      {/* CTA */}
      <div className={styles.ctaBanner}>
        <FadeIn>
          <h2>Ready to get started?</h2>
          <p>Contact us and our team will recommend the right product for your fleet.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaWhite}>Request a quote</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaOutline}>💬 WhatsApp us</a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}