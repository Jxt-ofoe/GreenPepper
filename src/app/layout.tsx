'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, ChevronUp } from 'lucide-react';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <html lang="en">
      <head>
        <title>Beebie's Green Pepper Chinese | Comfort Food in Accra</title>
        <meta name="description" content="Authentic Chinese-style comfort food in Accra, Ghana. Big portions, bold flavours, delivered hot." />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Floating Action Button */}
        <a 
          href="https://wa.me/233208129361?text=Hello%20Beebie's%20Green%20Pepper%20Chinese,%20I'd%20like%20to%20place%20an%20order." 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            position: 'fixed', 
            bottom: '2rem', 
            right: '2rem', 
            background: '#2E7D32', 
            color: 'white', 
            padding: '16px 24px', 
            borderRadius: '50px', 
            fontWeight: 700, 
            boxShadow: '0 10px 25px rgba(46, 125, 50, 0.4)', 
            zIndex: 999, 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <ShoppingCart size={20} /> Order Now
        </a>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          style={{ 
            position: 'fixed', 
            bottom: '2rem', 
            left: '2rem', 
            background: 'white', 
            color: '#2E7D32', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)', 
            cursor: 'pointer', 
            opacity: showBackToTop ? 1 : 0, 
            visibility: showBackToTop ? 'visible' : 'hidden', 
            transition: 'all 0.3s ease', 
            zIndex: 999,
            border: 'none'
          }}
        >
          <ChevronUp size={24} />
        </button>
      </body>
    </html>
  );
}
