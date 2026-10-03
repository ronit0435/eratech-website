import React, { useState } from 'react';
import { PageId, AnimePoster } from '../types';
import { COMPANY_INFO, FOUNDER_INFO, ANIME_POSTERS, COMPANY_TIMELINE } from '../data/content';
import { CrosshairMark, RulerMarks, PaperClip } from '../components/DoodleDecorations';
import { Sparkles, Target, Compass, Heart, ArrowUpRight, Award, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

// Interactive 3D Anime Poster Card with Parallax Tilt, Glow & Layer Separation
const AnimePosterCard: React.FC<{ poster: AnimePoster }> = ({ poster }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: - (y / rect.height) * 22,
      y: (x / rect.width) * 22,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="relative perspective-1000 select-none cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tape strip at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#F6EED7]/90 rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs z-30 pointer-events-none" />

      {/* Card 3D container */}
      <div
        className="relative rounded-3xl overflow-hidden glass-card border border-white/95 shadow-lg group-hover:shadow-2xl transition-transform duration-200 ease-out preserve-3d card-interactive"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.03 : 1})`,
        }}
      >
        {/* Poster Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE8E3]">
          <img
            src={poster.image}
            alt={poster.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Ambient Glow Gradient Overlay with subtle #B53CB5 */}
          <div 
            className={`absolute inset-0 bg-radial from-transparent via-[#B53CB5]/10 to-black/65 transition-opacity duration-300 ${
              isHovered ? 'opacity-85' : 'opacity-50'
            }`} 
          />

          {/* Holographic grid overlay on hover */}
          <div className="absolute inset-0 bg-graph-paper opacity-25 mix-blend-overlay pointer-events-none" />

          {/* Floating Spec Tag (Parallax Depth Layer) */}
          <div 
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/30 text-[10px] font-mono text-white transition-transform duration-300 shadow-xs"
            style={{
              transform: `translateZ(${isHovered ? '35px' : '0px'})`
            }}
          >
            PENCIL SKETCH // SPEC
          </div>

          {/* Bottom Card Scrim & Text Content */}
          <div 
            className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-white transition-transform duration-300"
            style={{
              transform: `translateZ(${isHovered ? '25px' : '0px'})`
            }}
          >
            <div className="text-[11px] font-mono text-amber-300 mb-1">
              {poster.theme}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              {poster.title}
            </h3>
            <p className="text-xs text-neutral-300 italic font-serif leading-relaxed">
              {poster.quote}
            </p>

            {/* Pencil Annotation */}
            <div className="mt-3 pt-2 border-t border-white/20 text-[11px] font-hand text-amber-200">
              ✎ {poster.pencilCaption}
            </div>

            {/* Tags */}
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              {poster.tags.map((tag, idx) => (
                <span key={idx} className="text-[10px] text-neutral-400 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate: _onNavigate, onOpenQuote }) => {
  return (
    <div className="relative w-full py-10 px-4 md:px-8">
      
      {/* Background Graph Paper */}
      <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-20">
        
        {/* ─────────────────────────────────────────────────────────────
            1. NOTEBOOK STORY HERO
           ───────────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl glass-card border border-white shadow-xl relative card-interactive">
          
          {/* Top Paper Clip */}
          <div className="absolute -top-6 right-16">
            <PaperClip />
          </div>

          {/* Margin Lines */}
          <div className="border-l-2 border-red-300/60 pl-6 md:pl-10 space-y-5">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5]">
              <CrosshairMark />
              <span>Origin & Philosophy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-tight">
              Drafted in Mohali.{' '}
              <span className="font-hand text-[#B53CB5] -rotate-1 inline-block">
                Predicting the Digital Future.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              In 2021, EraTech was founded in <span className="font-semibold text-neutral-900">Mohali, Punjab</span> with a single notebook of architectural wireframes and a clear mandate: <span className="italic font-medium">&ldquo;We Believe in Future Prediction&rdquo;</span>.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              We observed that most agencies delivered sluggish templates, bloated plugins, and opaque vanity metrics that failed to drive commercial bottom lines. We set out to build an engineering-led agency that treats web architecture like structural engineering—precise, mathematically balanced, sub-second fast, and calibrated for compounding inbound revenue.
            </p>

            {/* Handwritten callout */}
            <div className="p-3.5 rounded-2xl bg-[#FFF9DB] border border-[#E8DC9C] font-hand text-sm text-neutral-800 -rotate-0.5 inline-block shadow-xs">
              📍 Headquartered in Mohali, Punjab · Engineering for North India & Global Enterprises
            </div>

          </div>

          {/* Rulers and Spec mark on bottom */}
          <div className="mt-8 pt-6 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <div>EST. 2021 · MOHALI, PUNJAB</div>
            <RulerMarks />
            <div>ISO STANDARD CODE QUALITY</div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. MISSION, VISION, VALUES (PAPER CARDS)
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="relative p-8 rounded-3xl glass-card border border-white shadow-md hover:shadow-2xl flex flex-col justify-between card-interactive">
            <div className="absolute -top-3 left-8 w-20 h-5 bg-[#F6EED7]/90 -rotate-2 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-neutral-200 flex items-center justify-center text-[#B53CB5] mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#2B2B2B]">Our Mission</h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                To liberate growing enterprises from fragile digital templates by architecting resilient web platforms and predictive performance marketing systems that reliably convert intent into revenue.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-hand text-neutral-500">
              ✎ No boilerplate · No compromises
            </div>
          </div>

          {/* Vision */}
          <div className="relative p-8 rounded-3xl glass-card border border-white shadow-md hover:shadow-2xl flex flex-col justify-between card-interactive">
            <div className="absolute -top-3 left-8 w-20 h-5 bg-[#F6EED7]/90 rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-neutral-200 flex items-center justify-center text-[#B53CB5] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#2B2B2B]">Our Vision</h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                To be North India&apos;s benchmark digital solutions and marketing laboratory—recognized for technical craftsmanship, mathematical precision, and absolute accountability to client outcomes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-hand text-neutral-500">
              ✎ We Believe in Future Prediction
            </div>
          </div>

          {/* Core Values */}
          <div className="relative p-8 rounded-3xl glass-card border border-white shadow-md hover:shadow-2xl flex flex-col justify-between card-interactive">
            <div className="absolute -top-3 left-8 w-20 h-5 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-neutral-200 flex items-center justify-center text-[#B53CB5] mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#2B2B2B]">Core Values</h2>
              <ul className="text-xs sm:text-sm text-neutral-600 mt-2.5 space-y-1.5 leading-relaxed">
                <li>• <strong>Mathematical Truth:</strong> Data over guesswork.</li>
                <li>• <strong>Sub-Second Speed:</strong> Latency is our adversary.</li>
                <li>• <strong>Craftsmanship:</strong> Written by hand, vetted by test.</li>
                <li>• <strong>Radical Transparency:</strong> Clear milestones, no hidden fees.</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-hand text-neutral-500">
              ✎ Integrity on every line of code
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. INTERACTIVE ANIME-STYLE POSTER SECTION
           ───────────────────────────────────────────────────────────── */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5] mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Artistic Gallery & Key Visuals</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
              Interactive Visionary Posters
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Hover over each poster to experience cursor-driven 3D parallax tilt, ambient depth illumination, and layer separation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ANIME_POSTERS.map((poster) => (
              <AnimePosterCard key={poster.id} poster={poster} />
            ))}
          </div>

          <div className="text-center mt-6">
            <span className="font-hand text-xs text-neutral-500">
              ✎ Illustrated Key Visuals depicting the convergence of paper drafting and futuristic IT execution
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. THE ARCHITECTURE BEHIND ERATECH: LEADERSHIP FEATURE (SINGLE)
           ───────────────────────────────────────────────────────────── */}
        <div className="pt-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5] mb-2">
              <Award className="w-4 h-4" />
              <span>Leadership & Technical Direction</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#2B2B2B] tracking-tight">
              The Architecture Behind EraTech
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct access to our founder and lead technical architect in Mohali, Punjab.
            </p>
          </div>

          {/* Single Featured Executive Layout: Image Left, Content Right */}
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl glass-card border border-white shadow-xl relative overflow-hidden card-interactive">
            
            {/* Top Masking Tape strip */}
            <div className="absolute -top-3 left-14 w-32 h-6 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Full-Proportioned Executive Portrait of Ronit in Suit & Tie */}
              <div className="md:col-span-5 relative group flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-md w-full h-[420px] md:h-full min-h-[420px]">
                  <img
                    src={FOUNDER_INFO.image}
                    alt={FOUNDER_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Gradient Scrim at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white">
                    <span className="font-bold text-base block">{FOUNDER_INFO.name}</span>
                    <span className="text-xs text-amber-300 font-mono">Mohali, Punjab, India</span>
                  </div>
                </div>

                {/* Hand-drawn sticky note below picture */}
                <div className="mt-3 p-2.5 rounded-xl sticky-note-purple border border-purple-200 font-hand text-xs text-[#B53CB5] -rotate-1 text-center shadow-xs">
                  ✎ Personally overseeing every client build & architectural specification
                </div>
              </div>

              {/* Right Column: Profile Content */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B53CB5] mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#B53CB5]" />
                    <span>FOUNDER & LEAD ARCHITECT</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#2B2B2B] tracking-tight">
                    {FOUNDER_INFO.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B53CB5]" />
                    <span>Mohali, Punjab · {FOUNDER_INFO.experience}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {FOUNDER_INFO.bio}
                </p>

                {/* Founder Vision Quote */}
                <div className="p-4 rounded-2xl bg-neutral-100/90 border border-neutral-200 text-xs sm:text-sm text-neutral-800 italic font-serif leading-relaxed">
                  &ldquo;{FOUNDER_INFO.quote}&rdquo;
                </div>

                {/* Core Competencies Checklist */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Core Technical Competencies:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    {FOUNDER_INFO.specialties.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 active:scale-95 text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consult Directly on WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenQuote}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Custom Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. TIMELINE OF COMPANY JOURNEY
           ───────────────────────────────────────────────────────────── */}
        <div className="pt-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-hand text-base text-[#B53CB5]">✎ The 2025–2026 Evolution</span>
            <h2 className="text-3xl font-extrabold text-[#2B2B2B] tracking-tight mt-1">
              From Mohali Drafting Table to Proven Scale: The 2025–2026 Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-dashed border-neutral-300 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
            {COMPANY_TIMELINE.map((item, i) => (
              <div key={i} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[#B53CB5] flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#B53CB5]" />
                </div>

                <div className="p-6 rounded-2xl glass-card border border-white shadow-xs group-hover:shadow-xl transition-all card-interactive">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B53CB5]">{item.year}</span>
                    <span className="font-hand text-xs text-neutral-400">Milestone // 0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B]">{item.milestone}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
