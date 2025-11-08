import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

/*
  Frame-by-frame scroll sequence
  - Simulated with two stacked layers: raw car photo -> framed poster on wall
  - Crossfades + parallax + subtle glass reflection overlay
  - Uses scroll progress within the section to drive transforms
*/

const FrameStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const fadeCar = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const fadePoster = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);
  const scalePoster = useTransform(scrollYProgress, [0.25, 1], [0.85, 1]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative h-[220vh] w-full bg-black text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Wall background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />

        {/* Soft vignette + film grain */}
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 60%)' }} />

        {/* CAR RAW SHOT layer */}
        <motion.div style={{ opacity: fadeCar, y: yParallax }} className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[86%] md:w-[70%] aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_-20px_rgba(255,255,255,0.15)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            {/* Glass reflection layer */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-40 mix-blend-screen" />
          </div>
        </motion.div>

        {/* FRAMED POSTER on wall */}
        <motion.div style={{ opacity: fadePoster, scale: scalePoster }} className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[76%] md:w-[56%] aspect-[3/4] rounded-[20px]">
            {/* Frame shadow on wall */}
            <div className="absolute -inset-6 rounded-[28px] bg-black/0 shadow-[0_80px_140px_-20px_rgba(255,255,255,0.15),0_20px_60px_-10px_rgba(0,0,0,0.8)]" />

            {/* Frame body */}
            <div className="relative h-full w-full rounded-[20px] bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10">
              {/* Bezel (matte black) */}
              <div className="absolute inset-1 rounded-[16px] bg-gradient-to-br from-black via-black to-black border border-white/10" />

              {/* Brushed aluminum edge highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />

              {/* Poster art */}
              <div className="absolute inset-5 rounded-[12px] overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                {/* Micro reflections */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-screen opacity-40" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy overlay */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
          <motion.p
            className="text-white/60 text-xs md:text-sm tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0.2, y: inView ? 0 : 10 }}
            transition={{ duration: 0.6 }}
          >
            Scroll to morph — from raw machine to gallery-grade art
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FrameStory;
