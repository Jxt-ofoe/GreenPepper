'use client';

import React from 'react';
import { MapPin, Phone, Truck, Clock, Info as InfoIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <section id="info" style={{ padding: '2rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
      <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#2E7D32', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} /> Our Locations
            </h3>
            
            {/* Branch 1 */}
            <div style={{ marginBottom: '1.5rem', padding: '1.2rem', background: '#f9fafb', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem', color: '#1F2937' }}>Anum Yemoh Loop (East Legon)</p>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', marginBottom: '1rem' }}>Main Branch - Accra, Ghana</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <a href="tel:+233208129361" style={{ fontSize: '1rem', fontWeight: 600, color: '#1F2937', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={16} color="#2E7D32" /> +233 20 812 9361
                </a>
                <a 
                  href="https://wa.me/233208129361?text=Hello%20Beebie's%20Green%20Pepper%20Chinese%20(East%20Legon),%20I'd%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#25D366', color: 'white', padding: '8px 16px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Branch 2 */}
            <div style={{ padding: '1.2rem', background: '#f9fafb', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem', color: '#1F2937' }}>Tesano / Abeka Junction</p>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', marginBottom: '1rem' }}>New Branch - Accra, Ghana</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <a href="tel:+233302243636" style={{ fontSize: '1rem', fontWeight: 600, color: '#1F2937', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={16} color="#2E7D32" /> +233 30 224 3636
                </a>
                <a 
                  href="https://wa.me/233302243636?text=Hello%20Beebie's%20Green%20Pepper%20Chinese%20(Tesano),%20I'd%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#25D366', color: 'white', padding: '8px 16px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#2E7D32', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={20} /> General Inquiries
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="tel:+233208129361" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', textDecoration: 'none' }}>+233 20 812 9361</a>
              <a href="tel:+233302243636" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1F2937', textDecoration: 'none' }}>+233 30 224 3636</a>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#2E7D32', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Truck size={20} /> Delivery & Pickup
            </h3>
            <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Order via WhatsApp or call us directly for pickup orders.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="tel:+233302243636" style={{ border: '2px solid #2E7D32', color: '#2E7D32', padding: '10px 20px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Call Pickup</a>
            </div>
          </div>

          <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #22c55e', fontSize: '0.9rem' }}>
            <strong>Popular times:</strong><br />
            <span style={{ color: '#166534' }}>Busy at 8pm | No wait time | 25 min to 4 hours</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#2E7D32', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} /> Opening Hours
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9', fontWeight: 500, fontSize: '0.95rem' }}>
              <span>Mon – Sat</span>
              <span>10am – 10:30pm</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9', fontWeight: 500, fontSize: '0.95rem' }}>
              <span>Sunday</span>
              <span>1pm – 10:30pm</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#2E7D32', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <InfoIcon size={20} /> Special Note
            </h3>
            <div style={{ background: '#fee2e2', padding: '1.5rem', borderRadius: '16px', border: '1px solid #fecaca', color: '#F44336' }}>
              <p style={{ fontSize: '1rem', fontWeight: 600 }}>"We deliver to your doorstep Monday–Saturday"</p>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', borderRadius: '16px', overflow: 'hidden', height: '180px' }}>
            <img src="/images/takeaway.png" alt="Delivery packaging" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @media (min-width: 968px) {
          .info-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Info;
