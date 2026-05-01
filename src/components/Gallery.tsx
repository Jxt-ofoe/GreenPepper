'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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

const media = [
  { type: 'video', src: '/images/tastiest_meals.mp4', label: 'Tastiest Meals Around' },
  { type: 'video', src: '/images/hangout_at_beebies.mp4', label: 'The Perfect Hangout' },
  { type: 'video', src: '/images/rice_meals_and_salads.mp4', label: 'Rice Meals & Salads' },
  { type: 'video', src: '/images/mother_day_v2.mp4', label: 'Our Restaurant' },
  { type: 'video', src: '/images/video_2026-04-30_12-30-45.mp4', poster: '/images/noodle_soup.png', label: 'Chef\'s Special' },
  { type: 'video', src: '/images/video_2026-04-30_12-31-05.mp4', poster: '/images/pork_dish.png', label: 'Sizzling Wok' },
  { type: 'video', src: '/images/Watch_as_we_prepare_our_perfectly_made_spring_rolls,_each_one_with.mp4', poster: '/images/takeaway.png', label: 'Handmade Spring Rolls' },
  { type: 'video', src: '/images/No_better_place_to_celebrate_Mother\'s_Day_than_with_us_We_have_a.mp4', poster: '/images/hero.png', label: 'Celebrate With Us' },
  { type: 'image', src: '/images/shawarma.png', label: 'Beebie\'s Shawarma' },
  { type: 'image', src: '/images/noodle_soup.png', label: 'Signature Noodle Soup' },
  { type: 'image', src: '/images/pork_dish.png', label: 'Szechuan Pork' },
  { type: 'image', src: '/images/noodles.png', label: 'House Special Noodles' },
  { type: 'image', src: '/images/salad.png', label: 'Fresh Garden Salad' },
  { type: 'image', src: '/images/takeaway.png', label: 'Hot & Ready' },
  { type: 'image', src: '/images/extras.png', label: 'Tasty Extras' },
  { type: 'image', src: '/images/drinks.png', label: 'Refreshing Drinks' },
  { type: 'image', src: '/images/banku.png', label: 'Local Favourites' },
  { type: 'image', src: '/images/fried_rice.png', label: 'Fried Rice' },
  { type: 'image', src: '/images/gallery1.png', label: 'Crispy Appetizers' },
  { type: 'image', src: '/images/gallery2.png', label: 'Spicy Chicken Wings' },
  { type: 'image', src: '/images/gallery3.png', label: 'Assorted Meat Rice' },
  { type: 'image', src: '/images/gallery4.png', label: 'Our Restaurant' },
  { type: 'image', src: '/images/hero.png', label: 'Beebie\'s Dining' },
];

const GalleryItem = ({ item, index }: { item: any, index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => item.type === 'video' && videoRef.current?.play()}
      onMouseLeave={() => {
        if (item.type === 'video' && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        aspectRatio: '1',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        cursor: 'pointer'
      }}
    >
      {item.type === 'video' ? (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <img
          src={item.src}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '1.5rem',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
      >
        <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>
          {item.label.split("Beebie's").map((part: string, i: number, arr: string[]) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span style={{ fontStyle: 'italic', transform: 'skewX(-15deg)', display: 'inline-block', fontWeight: 700 }}>
                  <span style={{ color: '#F44336', fontFamily: '"Caveat", cursive', fontSize: '1.2em' }}>Beebie's</span>
                </span>
              )}
            </span>
          ))}
        </span>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: '4rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <a
          href="https://instagram.com/greenpeppergh"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '2rem', fontWeight: 700, color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '0.5rem', textDecoration: 'none' }}
        >
          <InstagramIcon size={32} /> @greenpeppergh
        </a>
        <p style={{ fontWeight: 600, color: '#4b5563' }}>1.9K+ Followers</p>
        <p style={{ color: '#6b7280', marginTop: '10px' }}>"Follow us for daily specials and Chinese food cravings."</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {media.map((item, index) => (
          <GalleryItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
