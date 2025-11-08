import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const LogoUpload = ({ onUpload, currentLogo }) => {
  const inputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      alert('Please upload an image file (PNG, SVG, JPG).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => onUpload?.(e.target?.result);
    reader.readAsDataURL(file);
  };

  return (
    <section className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl md:text-2xl tracking-[0.18em] uppercase text-white/90">Upload Your Logo</h2>
          <p className="text-white/50 text-xs md:text-sm">PNG, SVG, JPG • shown live in the hero</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative flex h-44 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur"
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            <div className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
              Choose File
            </div>
            <p className="text-white/60 text-sm">Click to upload your mark. We’ll preview it instantly.</p>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20" />
          </motion.div>

          <div className="flex items-center justify-center">
            <div className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              {currentLogo ? (
                <img
                  src={currentLogo}
                  alt="Brand logo preview"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-white/20 to-white/5" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-30 mix-blend-screen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoUpload;
