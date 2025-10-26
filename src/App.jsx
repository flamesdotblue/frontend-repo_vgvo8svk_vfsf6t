import React, { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProviderRankings from './components/ProviderRankings';
import CTAFooter from './components/CTAFooter';

export default function App() {
  const providersRef = useRef(null);

  const scrollToProviders = () => {
    if (!providersRef.current) return;
    providersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero onExploreProviders={scrollToProviders} />
      <Features />
      <div ref={providersRef}>
        <ProviderRankings />
      </div>
      <CTAFooter />
    </div>
  );
}
