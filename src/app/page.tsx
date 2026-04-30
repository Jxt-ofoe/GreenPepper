'use client';

import React from 'react';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main style={{ minHeight: '80vh' }}>
      <Hero />
      {/* Optional: Add a small preview of other sections or CTA */}
      <section style={{ padding: '4rem 5%', textAlign: 'center', background: 'white' }}>
        <h2 style={{ color: '#2E7D32', marginBottom: '2rem' }}>Ready to Taste the Pepper?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="/menu" style={{ 
            padding: '12px 32px', 
            borderRadius: '12px', 
            background: '#2E7D32', 
            color: 'white', 
            fontWeight: 600,
            textDecoration: 'none'
          }}>Explore Menu</a>
          <a href="/info" style={{ 
            padding: '12px 32px', 
            borderRadius: '12px', 
            border: '2px solid #2E7D32', 
            color: '#2E7D32', 
            fontWeight: 600,
            textDecoration: 'none'
          }}>Find Us</a>
        </div>
      </section>
    </main>
  );
}
