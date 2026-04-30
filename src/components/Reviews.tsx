'use client';

import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Anowa Nyako",
    rating: 5,
    text: "The portion sizes for the Noodle Soups were very generous. Delicious!",
  },
  {
    name: "Anotida Chapfika",
    rating: 5,
    text: "My go‑to for delivery when I'm hungry – always tasty and delivered hot and fresh. Prices are very reasonable.",
  },
  {
    name: "Ama Mensah",
    rating: 3,
    text: "Ordered from Bolt Food. Gizzard well seasoned but too tough this time. Still, flavour is good.",
  },
  {
    name: "Kofi Mensah",
    rating: 5,
    text: "Best Chinese food in Accra! The Pork with Green Pepper is a must-try. Portions are massive.",
  },
  {
    name: "Esi Boateng",
    rating: 4,
    text: "Always reliable. The fried rice is fluffy and full of flavour. Great value for money.",
  },
  {
    name: "John Doe",
    rating: 5,
    text: "Steamed rice with pork is my favorite. Delivered hot every single time.",
  },
  {
    name: "Abena Appiah",
    rating: 4,
    text: "The soup noodles are incredibly comforting. Perfect for a rainy day in Accra.",
  },
  {
    name: "Kwame Nkrumah",
    rating: 5,
    text: "Great service and even better food. The Green Pepper Special is worth every Cedi.",
  }
];

const Reviews = () => {
  return (
    <section id="reviews" style={{ padding: '4rem 5%', maxWidth: '1400px', margin: '0 auto', background: '#f8fafc', borderRadius: '32px', marginTop: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#2E7D32', marginBottom: '1rem' }}>Customer Reviews</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: 700, color: '#2E7D32', lineHeight: 1 }}>4.3</div>
          <div style={{ color: '#fbbf24', display: 'flex', margin: '1rem 0' }}>
            <Star size={24} fill="currentColor" />
            <Star size={24} fill="currentColor" />
            <Star size={24} fill="currentColor" />
            <Star size={24} fill="currentColor" />
            <StarHalf size={24} fill="currentColor" />
          </div>
          <p style={{ color: '#6b7280' }}>Based on 103 Google reviews</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {reviews.map((review, index) => (
          <motion.div 
            key={review.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '24px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-10px', left: '20px', fontSize: '6rem', color: '#f1f5f9', fontFamily: 'serif', zIndex: 0 }}>“</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0 }}>{review.name}</h4>
                <div style={{ color: '#fbbf24', display: 'flex' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} stroke={i < review.rating ? 'none' : 'currentColor'} />
                  ))}
                </div>
              </div>
              <p style={{ fontStyle: 'italic', color: '#4b5563', lineHeight: 1.8 }}>"{review.text}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Removed Google reviews link */}
    </section>
  );
};

export default Reviews;
