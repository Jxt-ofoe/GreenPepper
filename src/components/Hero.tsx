'use client';

import React from 'react';
import { ShoppingBag, Star, StarHalf } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ padding: '2rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ 
          display: 'flex', 
          flexDirection: 'column-reverse',
          gap: '2rem', 
          alignItems: 'center', 
          padding: '2.5rem 5%', 
          background: 'linear-gradient(135deg, #ffffff 0%, #f3fdf3 100%)', 
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
        }}
        className="hero-container"
      >
        <div className="hero-content" style={{ width: '100%', textAlign: 'center' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            marginBottom: '1.5rem', 
            background: 'white', 
            padding: '8px 16px', 
            borderRadius: '12px', 
            width: 'fit-content', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            margin: '0 auto'
          }}>
            <div style={{ color: '#fbbf24', display: 'flex' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <StarHalf size={18} fill="currentColor" />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>4.3 (103 Reviews)</span>
          </div>
          <h1 style={{ lineHeight: 1.1, marginBottom: '1rem', fontStyle: 'italic', transform: 'skewX(-15deg)', display: 'inline-block' }} className="hero-title">
            <span style={{ color: '#F44336' }} className="hero-beebies">Beebie's</span> <span style={{ color: '#2E7D32' }} className="hero-suffix">Green Pepper Chinese</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: '#4b5563', marginBottom: '1.5rem' }}>
            Chinese comfort food – <span style={{ color: '#F44336', fontWeight: 600 }}>big portions</span>, bold flavours, delivered hot.
          </p>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem', 
            marginBottom: '2rem',
            alignItems: 'center'
          }} className="hero-btns">
            <a 
              href="https://wa.me/233208129361?text=Hello%20Beebie's%20Green%20Pepper%20Chinese,%20I'd%20like%20to%20place%20an%20order." 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: '#2E7D32', 
                color: 'white', 
                padding: '14px 32px', 
                borderRadius: '12px', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                width: '100%',
                maxWidth: '300px',
                justifyContent: 'center'
              }}
            >
              <ShoppingBag size={20} /> Order on WhatsApp
            </a>
          </div>
          <p style={{ color: '#4b5563', maxWidth: '600px', fontSize: '1rem', margin: '0 auto' }}>
            Authentic Chinese-style comfort food in Accra. Big portions, bold flavours, and delivered hot. Taste the pepper, feel the warmth.
          </p>
        </div>
        <div style={{ 
          width: '100%', 
          aspectRatio: '16/9',
          borderRadius: '20px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
        }}>
          <img 
            src="/images/hero.png" 
            alt="Beebie's signature dish" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </motion.div>
      <style jsx>{`
        .hero-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
        }
        @media (max-width: 768px) {
          .hero-beebies {
            font-size: 3.5rem !important;
            display: block;
            margin-bottom: 0.5rem;
          }
          .hero-suffix {
            font-size: 1.5rem !important;
          }
          .hero-title {
            font-size: 1rem !important;
          }
        }
        @media (min-width: 968px) {
          .hero-container {
            flex-direction: row !important;
            padding: 4rem 5% !important;
          }
          .hero-content {
            width: 60% !important;
            text-align: left !important;
          }
          .hero-content div {
            margin: 0 !important;
          }
          .hero-btns {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
          .hero-btns a, .hero-btns button {
            width: auto !important;
          }
          .hero-content p {
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
