import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
    title: 'A3 Matte Black',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517153295259-74eb0b080a5f?q=80&w=1600&auto=format&fit=crop',
    title: 'A4 Brushed Aluminum',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
    title: 'A3 Brushed Aluminum',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
    title: 'A4 Matte Black',
  },
];

const Card = ({ src, title }) => (
  <motion.div
    whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_40px_140px_-40px_rgba(255,255,255,0.25)]"
  >
    <div className="relative aspect-[4/5] w-full">
      <img src={src} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      {/* subtle gradient edge highlight */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/10 opacity-60 mix-blend-screen" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_18px_2px_rgba(255,255,255,0.7)]" />
        <span className="text-xs tracking-widest text-white/70 uppercase">{title}</span>
      </div>
    </div>
  </motion.div>
);

const ProductGrid = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl tracking-[0.18em] uppercase text-white/90">Gallery</h2>
          <p className="text-white/50 text-sm max-w-sm">Premium cinematic samples. Pure black backgrounds. Subtle parallax depth with glass reflections.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <Card key={it.id} src={it.src} title={it.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
