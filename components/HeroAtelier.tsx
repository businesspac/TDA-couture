// components/HeroAtelier.tsx
"use client";

import { useEffect, useRef } from 'react';

export default function HeroAtelier() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative h-[150vh]">
      {/* Sticky Visual Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-tda-black">
        
        {/* Dark Gradient Overlay (Adjusted for the daytime image to ensure text pops) */}
        <div className="absolute inset-0 bg-gradient-to-b from-tda-black/80 via-tda-black/60 to-tda-black z-10" />
        
        {/* The Daytime Store Image */}
        <div 
            className="absolute inset-0 bg-center bg-cover opacity-90 scale-105"
            style={{ backgroundImage: "url('/images/atelier-day.jpg')" }} 
        />

        {/* The Copy */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
            <div className="overflow-hidden mb-6">
                <p className="font-sans text-tda-gold text-[10px] md:text-xs tracking-[0.3em] uppercase animate-fade-up">Est. 2018 · Lagos & Abuja</p>
            </div>
            
            <div className="overflow-hidden">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-tda-ivory leading-[1.1] mb-8 animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                    Cut in Lagos.<br/>
                    <span className="text-tda-gold italic">Worn in 72 Hours.</span>
                </h1>
            </div>

            <div className="overflow-hidden">
                <p className="font-sans text-tda-ivory/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed animate-fade-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
                    Bespoke menswear for the society groom and the public figure. Swiss cotton, cashmere, and high-wool, tailored to the millimeter.
                </p>
            </div>

            <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <a href="#commission" className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase text-tda-ivory border-b border-tda-gold pb-1.5 hover:text-tda-gold transition-colors duration-500">
                    Commission a Garment
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
            <span className="font-sans text-[9px] tracking-widest uppercase text-tda-ivory">Scroll</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-tda-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}