import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ n, label }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
    <div className="mb-4 inline-flex items-center gap-3">
      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-black text-[11px] tracking-widest text-white/70">
        {n}
      </span>
      <span className="text-xs uppercase tracking-[0.22em] text-white/70">STEP</span>
    </div>
    <p className="text-white/80">{label}</p>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30" />
  </div>
);

const BuySection = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl md:text-3xl tracking-[0.18em] uppercase text-white/90">Order Now</h2>
          <p className="text-white/50 text-sm max-w-lg">Choose your car, upload a photo, and we print and ship a gallery-grade frame. Ultra-minimal, one-click flow.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <Step n={1} label="Choose your Car" />
          <Step n={2} label="Upload your photo" />
          <Step n={3} label="We craft & print" />
          <Step n={4} label="Express insured shipping" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:flex-row">
          <div>
            <h3 className="text-white/90 text-xl tracking-wider">A3 / A4 Premium Frames</h3>
            <p className="text-white/50 text-sm">Matte Black or Brushed Aluminum. Museum-grade print.</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white text-black px-6 py-3 text-sm font-medium tracking-wider transition-colors hover:bg-white"
          >
            One-Click Order
            <span className="h-2 w-2 rounded-full bg-black shadow-[0_0_10px_2px_rgba(255,255,255,0.9)]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
