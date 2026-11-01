// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-tda-black/90 backdrop-blur-md py-4 border-b border-tda-ivory/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl text-tda-ivory tracking-widest hover:text-tda-gold transition-colors duration-300">
          TDA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="#collections" className="font-sans text-[11px] text-tda-ivory/70 tracking-[0.15em] uppercase hover:text-tda-gold transition-colors">Collections</Link>
          <Link href="#bespoke" className="font-sans text-[11px] text-tda-ivory/70 tracking-[0.15em] uppercase hover:text-tda-gold transition-colors">Bespoke</Link>
          <Link href="#commission" className="font-sans text-[11px] text-tda-ivory/70 tracking-[0.15em] uppercase hover:text-tda-gold transition-colors">Book a Fitting</Link>
        </div>

        {/* Commission Button */}
        <Link href="#commission" className="font-sans text-[11px] text-tda-black bg-tda-gold px-6 py-2.5 tracking-[0.15em] uppercase hover:bg-tda-ivory transition-colors duration-300">
          Commission
        </Link>
      </div>
    </nav>
  );
}