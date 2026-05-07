import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: '📡',
    title: 'Emissions Monitoring',
    desc: 'Real-time tracking of VOC, CO, NO₂, and HC emissions with live alerts. Ideal for regulatory compliance and fleet optimisation.',
    features: ['Live sensor data', 'Automated alerts', 'Regulatory reports', 'Historical trends'],
  },
  {
    icon: '⚡',
    title: 'Electric Tricycles',
    desc: 'Zero-emission cargo tricycles purpose-built for African terrain — steady performance in rural and peri-urban logistics.',
    features: ['Zero emissions', 'Low maintenance', 'Rural terrain ready', 'Long battery life'],
  },
  {
    icon: '🌐',
    title: 'IoT Fleet Management',
    desc: 'Smart dashboards for full operational visibility. Monitor every vehicle live and automate insights for maximum efficiency.',
    features: ['Live GPS tracking', 'Multi-vehicle support', 'Role-based access', 'Data export'],
  },
  {
    icon: '🔧',
    title: 'Vehicle Inspection & Repair',
    desc: 'Pollution-related diagnostics and certified repair services to keep your fleet compliant and road-ready.',
    features: ['Certified technicians', 'Diagnostic scanning', 'Emissions repair', 'Compliance checks'],
  },
  {
    icon: '🌿',
    title: 'Green System Installation',
    desc: 'Professional installation of green vehicle systems by certified technicians — minimal downtime, maximum impact.',
    features: ['Expert installation', 'Minimal downtime', 'Post-install support', 'Warranty included'],
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    desc: 'Automated compliance reports, emission trend analysis, and fleet benchmarking for data-driven decisions.',
    features: ['Auto-generated reports', 'Trend analysis', 'Fleet benchmarking', 'Custom dashboards'],
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

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Our Services</p>
            <h1 className={styles.heroTitle}>
              Solutions for every <span>part of your fleet</span>
            </h1>
            <p className={styles.heroSub}>
              From real-time emissions monitoring to full electrification — we have the right solution for your operations.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Services Grid Section - REMOVED inner sectionHeader */}
      <section className={styles.section}>
        <div className={styles.container}>
          {/* DELETED: sectionHeader div with "What We Offer" etc. */}
          
          {/* Services Grid */}
          <div className={styles.grid}>
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`${styles.card} ${hovered === i ? styles.cardHovered : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.cardAccent} />
                  <div className={styles.icon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className={styles.features}>
                    {s.features.map((f, j) => (
                      <li key={j}><span className={styles.check}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <a href="/contact" className={styles.cardBtn}>Get started →</a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className={styles.cta}>
        <FadeIn>
          <h2>Not sure which service fits you?</h2>
          <p>Talk to our team and we will recommend the right solution for your fleet size and goals.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaWhite}>Contact us</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaOutline}>💬 WhatsApp us</a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}