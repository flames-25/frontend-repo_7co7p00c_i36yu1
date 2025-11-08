import React, { useState } from 'react';
import Hero from './components/Hero';
import FrameStory from './components/FrameStory';
import ProductGrid from './components/ProductGrid';
import BuySection from './components/BuySection';
import TrustSocial from './components/TrustSocial';
import LogoUpload from './components/LogoUpload';

const App = () => {
  const [logo, setLogo] = useState(null);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <Hero logo={logo} />
      <FrameStory />
      <ProductGrid />
      <BuySection />
      <TrustSocial />
      <LogoUpload currentLogo={logo} onUpload={setLogo} />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-white/40">
        <p className="text-xs tracking-widest uppercase">© {new Date().getFullYear()} DRIFT DESK — Luxury Automotive Frames</p>
      </footer>
    </div>
  );
};

export default App;
