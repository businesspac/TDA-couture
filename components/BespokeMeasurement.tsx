// components/BespokeMeasurement.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const TAILOR_WHATSAPP = "2347032123905"; // 07032123905 formatted for wa.me
const ADMIN_EMAIL = "couture@tdagroup.africa";
const DIY_GUIDE_LINK = "https://drive.google.com/file/d/1-25Zki8HJL5dtvfAeiuPNvQXfTM_c7iP/view?usp=drive_link";

export default function BespokeMeasurement() {
  const [activePath, setActivePath] = useState<'fitting' | 'diy' | 'outofoffice' | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", city: "Lagos", garmentType: "Senator Suit", notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    let pathContext = "";
    if (activePath === 'fitting') pathContext = "Book an in-store fitting.";
    if (activePath === 'diy') pathContext = "Submitting DIY measurements (Guide reviewed).";
    if (activePath === 'outofoffice') pathContext = "Requesting out-of-office measurement service.";

    return `*NEW TDA COUTURE COMMISSION*%0A%0A*Client:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*City:* ${formData.city}%0A*Garment:* ${formData.garmentType}%0A%0A*Service:* ${pathContext}%0A%0A*Notes:* ${formData.notes || 'None'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    // Open WhatsApp with pre-filled message to the tailor
    window.open(`https://wa.me/${TAILOR_WHATSAPP}?text=${message}`, '_blank');
    // Optional: Trigger email via mailto fallback or API
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=New Commission: ${formData.name}&body=${decodeURIComponent(message)}`;
  };

  return (
    <section id="commission" className="min-h-screen py-24 px-6 md:px-12 bg-tda-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-tda-ivory mb-4">The Commission</h2>
          <p className="font-sans text-tda-ivory/60 text-sm tracking-widest uppercase">Every masterpiece begins with a single measurement.</p>
        </div>

        {/* The 3 Paths */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <PathCard 
                title="Atelier Fitting" 
                desc="Visit our Lagos or Abuja studio for a precise, traditional fitting." 
                isActive={activePath === 'fitting'} 
                onClick={() => setActivePath('fitting')} 
            />
            <PathCard 
                title="DIY Measurement" 
                desc="For those abroad or unable to visit. Follow our masterguide." 
                isActive={activePath === 'diy'} 
                onClick={() => setActivePath('diy')} 
            />
            <PathCard 
                title="Out-of-Office" 
                desc="We come to you. Contact us to arrange our mobile tailoring service." 
                isActive={activePath === 'outofoffice'} 
                onClick={() => setActivePath('outofoffice')} 
            />
        </div>

        {/* Contextual Form / Action Area */}
        <div className="bg-tda-charcoal/50 border border-tda-gold/20 p-8 md:p-12 backdrop-blur-sm transition-all duration-700">
            {activePath === 'diy' ? (
                <div className="text-center space-y-6">
                    <h3 className="font-serif text-2xl text-tda-gold">The DIY Masterguide</h3>
                    <p className="font-sans text-tda-ivory/70 max-w-xl mx-auto">
                        Precision is the hallmark of TDA Couture. Before taking your own measurements, please review our comprehensive guide to ensure your garment fits flawlessly.
                    </p>
                    <Link 
                        href={DIY_GUIDE_LINK} 
                        target="_blank"
                        className="inline-block px-8 py-3 border border-tda-gold text-tda-gold font-sans text-xs tracking-widest uppercase hover:bg-tda-gold hover:text-tda-black transition-colors duration-500"
                    >
                        View Measurement Guide
                    </Link>
                    <p className="text-xs text-tda-ivory/40 pt-4">Once reviewed, please fill out the commission form below to submit your details.</p>
                </div>
            ) : activePath === 'outofoffice' ? (
                <div className="text-center space-y-6">
                    <h3 className="font-serif text-2xl text-tda-gold">Mobile Tailoring Service</h3>
                    <p className="font-sans text-tda-ivory/70 max-w-xl mx-auto">
                        We bring the atelier to your doorstep. Please submit your details below, and our concierge will contact you to arrange a time and discuss the service.
                    </p>
                </div>
            ) : (
                <div className="text-center space-y-6">
                    <h3 className="font-serif text-2xl text-tda-gold">Book Your Fitting</h3>
                    <p className="font-sans text-tda-ivory/70 max-w-xl mx-auto">
                        Select your preferred studio and submit your details. Our master tailors will confirm your appointment within the hour.
                    </p>
                </div>
            )}

            {/* The Form */}
            <form onSubmit={handleSubmit} className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required type="tel" />
                <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} required type="email" />
                
                <div className="space-y-2">
                    <label className="text-xs font-sans text-tda-ivory/50 tracking-widest uppercase">City</label>
                    <select name="city" value={formData.city} onChange={handleChange} className="w-full bg-transparent border-b border-tda-ivory/20 py-3 font-sans text-tda-ivory focus:border-tda-gold outline-none transition-colors">
                        <option value="Lagos" className="bg-tda-black">Lagos</option>
                        <option value="Abuja" className="bg-tda-black">Abuja</option>
                        <option value="Outside Nigeria" className="bg-tda-black">Outside Nigeria</option>
                    </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-sans text-tda-ivory/50 tracking-widest uppercase">Garment Type</label>
                    <select name="garmentType" value={formData.garmentType} onChange={handleChange} className="w-full bg-transparent border-b border-tda-ivory/20 py-3 font-sans text-tda-ivory focus:border-tda-gold outline-none transition-colors">
                        <option value="Senator Suit" className="bg-tda-black">Senator Suit</option>
                        <option value="Agbada" className="bg-tda-black">Agbada</option>
                        <option value="Three-Piece Suit" className="bg-tda-black">Three-Piece Suit</option>
                        <option value="Sherwani" className="bg-tda-black">Sherwani</option>
                        <option value="Other" className="bg-tda-black">Other / Consultation</option>
                    </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-sans text-tda-ivory/50 tracking-widest uppercase">Special Instructions / Fabric Preference</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-transparent border-b border-tda-ivory/20 py-3 font-sans text-tda-ivory focus:border-tda-gold outline-none transition-colors resize-none" />
                </div>

                <div className="md:col-span-2 flex justify-center mt-8">
                    <button type="submit" className="group relative px-12 py-4 bg-tda-gold text-tda-black font-sans text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,151,90,0.3)]">
                        <span className="relative z-10">Send to Master Tailor</span>
                        <div className="absolute inset-0 bg-tda-ivory transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}

// Sub-components for clean code
function PathCard({ title, desc, isActive, onClick }: any) {
    return (
        <button 
            onClick={onClick}
            className={`text-left p-6 border transition-all duration-500 group ${isActive ? 'border-tda-gold bg-tda-gold/5' : 'border-tda-ivory/10 hover:border-tda-ivory/30'}`}
        >
            <h3 className={`font-serif text-xl mb-2 transition-colors ${isActive ? 'text-tda-gold' : 'text-tda-ivory'}`}>{title}</h3>
            <p className="font-sans text-xs text-tda-ivory/50 leading-relaxed">{desc}</p>
        </button>
    );
}

function InputField({ label, ...props }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-sans text-tda-ivory/50 tracking-widest uppercase">{label}</label>
            <input {...props} className="w-full bg-transparent border-b border-tda-ivory/20 py-3 font-sans text-tda-ivory focus:border-tda-gold outline-none transition-colors" />
        </div>
    );
}