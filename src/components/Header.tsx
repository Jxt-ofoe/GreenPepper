'use client';

import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [status, setStatus] = useState({ isOpen: false, message: 'Closed · Opens 10:30am' });

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

      let openTime = 10.5; // 10:30am
      let closeTime = 22.5; // 10:30pm
      let nextOpen = '10:30am';

      if (day === 0) { // Sunday
        openTime = 13; // 1pm
        closeTime = 22; // 10pm
        nextOpen = '1pm';
      }

      const isOpen = currentTime >= openTime && currentTime < closeTime;
      
      if (isOpen) {
        setStatus({ isOpen: true, message: 'Open Now · Closes ' + (day === 0 ? '10pm' : '10:30pm') });
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
    <header className={`sticky top-0 z-[1000] bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`} style={{ borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0.8rem 5%', 
        maxWidth: '1400px', 
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#F44336' }}>BB's</span>
            <span style={{ color: '#2E7D32' }}>Green Pepper Chinese</span>
          </div>
        </Link>
        
        <div style={{ 
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
          {status.message}
        </div>
      </div>
      
      <nav style={{ 
        borderTop: '1px solid #e5e7eb', 
        background: 'white', 
        overflowX: 'auto', 
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
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
      <style jsx>{`
        nav::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
