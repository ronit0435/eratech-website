import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { CrosshairMark, RulerMarks } from './DoodleDecorations';

interface TopHeaderProps {
  onNavigate: (page: 'home') => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onNavigate }) => {
  return (
    <header className="relative w-full pt-4 pb-3 px-4 md:px-8 border-b border-neutral-300/40 select-none">
      {/* Blueprint Grid Accent / Corner Annotations */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Technical Quick Contact Strip */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-neutral-600 font-medium">
          <a 
            href={`tel:${COMPANY_INFO.phoneClean}`} 
            className="flex items-center gap-2 hover:text-[#3B4CCA] transition-colors group"
          >
            <span className="p-1 rounded-full bg-white/70 border border-neutral-200/80 shadow-xs group-hover:scale-105 transition-transform">
              <Phone className="w-3 h-3 text-[#3B4CCA]" />
            </span>
            <span className="tabular-nums tracking-tight">{COMPANY_INFO.phone}</span>
          </a>

          <span className="text-neutral-300">|</span>

          <a 
            href={`mailto:${COMPANY_INFO.email}`} 
            className="flex items-center gap-2 hover:text-[#3B4CCA] transition-colors group"
          >
            <span className="p-1 rounded-full bg-white/70 border border-neutral-200/80 shadow-xs group-hover:scale-105 transition-transform">
              <Mail className="w-3 h-3 text-[#3B4CCA]" />
            </span>
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>

        {/* Center: THE ERATECH LOGO + TAGLINE (Must sit at very top, ABOVE navbar, as a separate element) */}
        <div className="flex flex-col items-center text-center cursor-pointer group" onClick={() => onNavigate('home')}>
          {/* Glassy Minimalist Logo Plaque */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-sm group-hover:shadow-md transition-all duration-300">
            {/* Geometric Pencil-Sketched E-Monogram */}
            <div className="relative w-8 h-8 rounded-lg bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-base shadow-xs overflow-hidden">
              <span className="relative z-10 tracking-tighter">E</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B4CCA]/60 to-transparent" />
              {/* Drafting crosshair inside mark */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-white/40 rounded-full" />
            </div>

            {/* Wordmark */}
            <div className="text-left">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#2B2B2B] leading-none block">
                ERATECH
              </span>
              <span className="text-[10px] uppercase font-semibold text-neutral-500 tracking-widest block -mt-0.5">
                Digital & Web Labs
              </span>
            </div>
          </div>

          {/* TAGLINE: Directly BELOW the logo in small handwritten/pencil style font */}
          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-neutral-400 font-caveat text-sm">✎</span>
            <span className="font-hand text-base md:text-lg text-neutral-700 tracking-wide font-medium italic -rotate-1 group-hover:text-[#3B4CCA] transition-colors">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </span>
            <span className="text-neutral-400 font-caveat text-sm">✨</span>
          </div>
        </div>

        {/* Right Side: Location & Spec Marks */}
        <div className="hidden lg:flex items-center gap-5 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#3B4CCA]" />
            <span className="font-medium text-neutral-700">Dadu Majra, Mohali, Punjab</span>
          </div>
          <RulerMarks className="opacity-50" />
          <CrosshairMark />
        </div>

      </div>
    </header>
  );
};
