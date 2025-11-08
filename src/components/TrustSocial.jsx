import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Alex R.', text: 'The frame finish is unreal — looks like an art gallery at home.' },
  { id: 2, name: 'Maya S.', text: 'My GT3 shot turned into a museum-grade piece. Subtle glow, perfect blacks.' },
  { id: 3, name: 'Kenji T.', text: 'Packaging, print, metal edge — everything feels premium.' },
];

const TrustSocial = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl tracking-[0.18em] uppercase text-white/90">Trusted by Enthusiasts</h2>
          <p className="text-white/50 text-sm">Auto-synced feed + verified reviews</p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="mb-3 flex items-center gap-1 text-white/80">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-white" fill="white" />
                ))}
              </div>
              <p className="text-white/80">“{r.text}”</p>
              <p className="mt-4 text-xs text-white/50">— {r.name}</p>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_60px_at_10%_10%,rgba(255,255,255,0.15),transparent)] opacity-40 mix-blend-screen" />
            </div>
          ))}
        </div>

        {/* Instagram feed mock (auto sync placeholder visuals only) */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517940310602-75f765e2ccd7?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-30 mix-blend-screen" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSocial;
