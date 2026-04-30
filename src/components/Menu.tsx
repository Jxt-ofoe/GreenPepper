'use client';

import React from 'react';
import { menuData } from '@/data/menu';
import { Beef, Leaf, Utensils, Soup, Package, Salad, CookingPot, LayoutList, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  Beef, Leaf, Utensils, Soup, Package, Salad, CookingPot, LayoutList, Coffee
};

const Menu = () => {
  return (
    <section id="menu" style={{ padding: '2rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', color: '#2E7D32', marginBottom: '0.5rem' }}>Our Menu</h2>
        <p style={{ color: '#4b5563', fontSize: '1rem' }}>Delicious Chinese comfort food prepared with love.</p>
      </div>

      {menuData.map((category, catIndex) => {
        const Icon = iconMap[category.icon] || Beef;
        return (
          <motion.div 
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            style={{ marginBottom: '4rem' }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', 
              color: '#2E7D32', 
              borderBottom: '2px solid #66BB6A', 
              paddingBottom: '0.5rem', 
              marginBottom: '1.5rem' 
            }}>
              <Icon size={24} />
              <h3 style={{ margin: 0 }}>{category.category}</h3>
            </div>

            <div className="category-layout" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="category-image-wrapper" style={{ width: '100%' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
                  <img 
                    src={category.image} 
                    alt={category.category} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', width: '100%' }}>
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '10px 14px', 
                      background: 'white', 
                      borderRadius: '12px', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      border: '1px solid #f1f5f9'
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{item.name}</span>
                    <span style={{ fontWeight: 700, color: '#2E7D32', fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}

      <style jsx>{`
        @media (min-width: 968px) {
          .category-layout {
            flex-direction: row !important;
            gap: 3rem !important;
          }
          .category-image-wrapper {
            width: 350px !important;
            flex-shrink: 0 !important;
          }
          .category-image-wrapper div {
            aspect-ratio: 1 !important;
            position: sticky !important;
            top: 150px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;
