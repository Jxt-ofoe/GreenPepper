'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const InstagramIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer style={{ background: '#1F2937', color: '#d1d5db', padding: '5rem 5% 2rem', marginTop: '6rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/images/logo.png" alt="Beebie's Green Pepper Chinese Logo" style={{ height: '50px', width: 'auto', background: 'white', borderRadius: '8px', padding: '2px' }} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: '"Caveat", cursive',
              lineHeight: 0.8,
              position: 'relative',
              paddingLeft: '45px' // Space for the rotated 'Beebie's'
            }}>
              <span style={{
                color: '#F44336',
                fontSize: '1.2rem',
                position: 'absolute',
                left: '0',
                top: '5px',
                transform: 'rotate(-35deg)',
                fontWeight: 700
              }}>Beebie's</span>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#66BB6A', fontSize: '1.8rem', fontWeight: 700 }}>Green Pepper</span>
                <span style={{ color: '#66BB6A', fontSize: '1.6rem', fontWeight: 700, paddingLeft: '10px' }}>Chinese</span>
              </div>
            </div>
          </div>
          <p style={{ lineHeight: 1.8 }}>Authentic Chinese cooking in the heart of Accra. Big portions, bold flavours, delivered hot to your doorstep.</p>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Info</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><MapPin size={18} color="#66BB6A" /> Anum Yemoh Loop: +233 20 812 9361</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><MapPin size={18} color="#66BB6A" /> Tesano / Abeka Junction: +233 30 224 3636 / 059 524 4316</p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Clock size={18} color="#66BB6A" style={{ marginTop: '4px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p>Mon–Sat: 10:00am–10:30pm</p>
                <p>Sunday: 1:00pm–10:30pm</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Follow Us</h4>
          <a
            href="https://www.instagram.com/greenpeppergh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#66BB6A', transition: 'color 0.3s ease' }}
          >
            <InstagramIcon size={20} color="#66BB6A" /> @greenpeppergh
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2.5rem', borderTop: '1px solid #374151', fontSize: '0.9rem', color: '#9ca3af' }}>
        &copy; {new Date().getFullYear()} <span style={{ fontStyle: 'italic', transform: 'skewX(-15deg)', display: 'inline-block' }}><span style={{ color: '#F44336', fontFamily: '"Caveat", cursive', fontSize: '1.2em' }}>Beebie's</span> <span style={{ color: '#66BB6A' }}>Green Pepper Chinese</span></span>, Accra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
