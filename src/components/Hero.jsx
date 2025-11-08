import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle dark vignette to keep contrast high */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Brand mark placeholder frame for uploaded logo */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_60px_-20px_rgba(255,255,255,0.35)]">
            <div className="h-16 w-16 rounded-xl bg-gradient-to-tr from-white/20 to-white/5 shadow-inner" />
          </div>

          <h1 className="text-4xl md:text-6xl tracking-[0.14em] font-semibold uppercase text-white/90">
            DRIFT DESK
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-white/60">
            Luxury Automotive Frames. Built for Passion.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-px bg-white/25" />
            <div className="relative h-10 w-6 rounded-full border border-white/20 flex items-start justify-center p-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-bounce" />
              <span className="absolute inset-0 rounded-full ring-0 animate-[pulse_2s_ease-out_infinite]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
