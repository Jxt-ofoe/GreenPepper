'use client';

import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState({ isOpen: false, message: 'Closed · Opens 10am' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1-6 is Mon-Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      let openTime = 10; // 10am
      let closeTime = 22.5; // 10:30pm
      let nextOpen = '10am';

      if (day === 0) { // Sunday
        openTime = 10; // 10am
        closeTime = 22.5; // 10:30pm
        nextOpen = '10am';
      }

      const isOpen = currentTime >= openTime && currentTime < closeTime;
      
      if (isOpen) {
        setStatus({ isOpen: true, message: 'Open Now · Closes 10:30pm' });
      } else {
        setStatus({ isOpen: false, message: 'Closed · Opens ' + nextOpen });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const tabs = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'menu', label: 'Menu', href: '/menu' },
    { id: 'reviews', label: 'Reviews', href: '/reviews' },
    { id: 'info', label: 'Info & Hours', href: '/info' },
    { id: 'gallery', label: 'Gallery', href: '/gallery' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-[1000] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`} style={{ 
      background: 'rgba(255, 255, 255, 0.8)', 
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(229, 231, 235, 0.5)' 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0.8rem 5%', 
        maxWidth: '1400px', 
        margin: '0 auto',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            style={{ 
              background: 'none', 
              border: 'none', 
              padding: '8px', 
              cursor: 'pointer',
              color: '#1F2937',
              display: 'none', // Hidden on desktop
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              fontFamily: '"Caveat", cursive',
              lineHeight: 0.8,
              position: 'relative',
              paddingLeft: '50px' // Increased for larger 'Beebie's'
            }} className="nav-brand-container">
              <span style={{ 
                color: '#F44336', 
                fontSize: '1.5rem', // Increased from 1.2rem
                position: 'absolute', 
                left: '0', 
                top: '5px', 
                transform: 'rotate(-35deg)',
                fontWeight: 700
              }} className="nav-beebies">Beebie's</span>
              
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#2E7D32', fontSize: '2.2rem', fontWeight: 700 }} className="nav-green-pepper">Green Pepper</span>
                <span style={{ color: '#2E7D32', fontSize: '2.0rem', fontWeight: 700, paddingLeft: '15px' }} className="nav-chinese">Chinese</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="header-status" style={{ 
          background: status.isOpen ? '#f0fdf4' : '#fee2e2', 
          color: status.isOpen ? '#166534' : '#F44336', 
          padding: '6px 14px', 
          borderRadius: '20px', 
          fontSize: '0.85rem', 
          fontWeight: 600, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          border: `1px solid ${status.isOpen ? '#bbf7d0' : '#fecaca'}`
        }}>
          {status.isOpen ? <CheckCircle size={16} /> : <Clock size={16} />}
          <span className="status-text">{status.message}</span>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="desktop-nav" style={{ 
        borderTop: '1px solid #e5e7eb', 
        background: 'white', 
        overflowX: 'auto', 
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              style={{
                padding: '1rem 1.2rem',
                border: 'none',
                background: 'none',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: isActive(tab.href) ? '#2E7D32' : '#6b7280',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                textDecoration: 'none',
                flexShrink: 0
              }}
            >
              {tab.label}
              {isActive(tab.href) && (
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: '#2E7D32', borderRadius: '3px 3px 0 0' }} />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ 
              overflow: 'hidden', 
              background: 'white', 
              borderTop: '1px solid #e5e7eb'
            }}
            className="mobile-nav"
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 5%' }}>
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    padding: '1rem 0',
                    fontWeight: 600,
                    color: isActive(tab.href) ? '#2E7D32' : '#4b5563',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f3f4f6'
                  }}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        nav::-webkit-scrollbar {
          display: none;
        }

        .brand-container {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .status-text {
            display: none;
          }
          .header-status {
            padding: 8px !important;
            border-radius: 50% !important;
          }
          .nav-brand-container {
            padding-left: 40px !important;
          }
          .nav-beebies {
            font-size: 1.2rem !important;
            top: 2px !important;
          }
          .nav-green-pepper {
            font-size: 1.7rem !important;
          }
          .nav-chinese {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
