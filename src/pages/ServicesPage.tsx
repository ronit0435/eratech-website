import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES, FAQ_ITEMS, PRICING_PLANS } from '../data/content';
import { CrosshairMark } from '../components/DoodleDecorations';
import { Code, Search, ShoppingBag, TrendingUp, Layers, Feather, Check, ChevronDown, ChevronUp, ArrowRight, Zap } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate: _onNavigate, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<'all' | 'web' | 'marketing'>('all');

  const filteredServices = filterCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filterCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-[#B53CB5]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#B53CB5]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#B53CB5]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#B53CB5]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#B53CB5]" />;
      default: return <Feather className="w-5 h-5 text-[#B53CB5]" />;
    }
  };

  return (
    <div className="relative w-full py-10 px-4 md:px-8">
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5]">
            <CrosshairMark />
            <span>Engineering & Marketing Blueprint</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B2B2B] tracking-tight">
            High-Performance IT Services
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Bespoke web architectures, sub-second headless e-commerce, and high-ROI local SEO engines built in Mohali, Punjab to give your brand an unfair market advantage.
          </p>

          {/* Filter Bar */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="p-1 rounded-full bg-neutral-200/80 inline-flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-4 sm:px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filterCategory === 'all' ? 'bg-white text-[#2B2B2B] shadow-xs font-bold' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All Capabilities ({SERVICES.length})
              </button>
              <button
                onClick={() => setFilterCategory('web')}
                className={`px-4 sm:px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filterCategory === 'web' ? 'bg-white text-[#2B2B2B] shadow-xs font-bold' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Web & Software ({SERVICES.filter(s => s.category === 'web').length})
              </button>
              <button
                onClick={() => setFilterCategory('marketing')}
                className={`px-4 sm:px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filterCategory === 'marketing' ? 'bg-white text-[#2B2B2B] shadow-xs font-bold' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Digital Marketing ({SERVICES.filter(s => s.category === 'marketing').length})
              </button>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SERVICES GRID: COMPACT 3 TILES PER ROW WITH HOVER SHADOW
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="relative p-6 rounded-2xl border border-neutral-300/80 bg-[#FAF9F5]/90 hover:bg-white shadow-xs hover:shadow-md hover:border-[#B53CB5]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Masking tape on top corner of alternating cards */}
              {idx % 2 === 0 && (
                <div className="absolute -top-2.5 right-6 w-16 h-4 bg-[#F6EED7]/90 rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />
              )}

              <div>
                {/* Top Module Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B53CB5]" />
                    <span className="font-mono text-[11px] text-neutral-600 font-bold uppercase tracking-wider">
                      MODULE // {service.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-purple-50 text-[#B53CB5] border border-purple-200">
                      RANK {idx === 0 ? 'S+' : idx === 1 ? 'S' : idx === 2 ? 'S+' : 'A+'}
                    </span>
                    <span className="text-neutral-400 font-mono text-[10px]">
                      ET-00{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Metrics / Spec Plate matching user screenshot */}
                <div className="mt-3.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-neutral-200/90 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-purple-50/50 border border-purple-200/90 text-[#B53CB5] shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
                        POWER RATING
                      </div>
                      <div className="text-lg font-extrabold text-[#2B2B2B] font-mono tracking-tight flex items-center gap-1">
                        <span className="text-[#B53CB5]">{idx === 0 ? '99.4' : idx === 1 ? '98.8' : idx === 2 ? '99.6' : '99.1'}</span>
                        <span className="text-xs text-neutral-400 font-normal">/ 100</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[9px] font-mono text-neutral-400 uppercase font-semibold">STATUS</div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9.5px] font-mono text-emerald-700 font-bold mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>PRODUCTION SPEC</span>
                    </div>
                  </div>
                </div>

                {/* Compact, Punchy Title */}
                <h2 className="text-xl font-extrabold text-[#2B2B2B] leading-tight mt-4">
                  {service.title}
                </h2>

                {/* Short, Professional Description */}
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables & Specifications List */}
                <div className="mt-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-700 font-bold flex items-center gap-1.5 mb-2">
                    <span className="text-[#B53CB5]">✦</span>
                    <span>KEY DELIVERABLES &amp; SPECIFICATIONS:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-purple-100/90 text-[#B53CB5] flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hand-drawn pencil note in purple accent */}
                <div className="mt-3.5 px-3 py-1.5 rounded-lg bg-[#FAF0FA] border border-purple-200/70 text-[11px] font-hand text-[#B53CB5] -rotate-0.5">
                  ✎ {service.pencilAnnotation}
                </div>
              </div>

              {/* Bottom Tech & CTA */}
              <div className="mt-5 pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 truncate max-w-[150px]">
                  {service.technologies.slice(0, 2).join(' · ')}
                </div>

                <button
                  onClick={onOpenQuote}
                  className="px-3.5 py-1.5 rounded-xl bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-xs font-bold transition-all shadow-xs hover:shadow-md flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  <span>Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            ENGAGEMENT MODELS / PRICING SECTION
           ───────────────────────────────────────────────────────────── */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5] mb-2">
              <Zap className="w-4 h-4" />
              <span>Transparent & Accessible Pricing</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#2B2B2B] tracking-tight">
              Predictable Collaboration Packages
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              No hidden fees, no ballooning retainers. Fixed scopes engineered for high ROI in Mohali, Punjab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`relative p-7 rounded-3xl glass-card border shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group card-interactive ${
                  plan.isPopular ? 'border-2 border-[#B53CB5] shadow-xl' : 'border-white'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#B53CB5] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular for Growth
                  </div>
                )}

                <div>
                  <span className={`font-mono text-xs block mb-1 ${plan.isPopular ? 'text-[#B53CB5] font-bold' : 'text-neutral-500'}`}>
                    {plan.code}
                  </span>
                  <h3 className="text-xl font-bold text-[#2B2B2B]">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-5 mb-5">
                    <span className={`text-3xl font-extrabold tabular-nums ${plan.isPopular ? 'text-[#B53CB5]' : 'text-[#2B2B2B]'}`}>
                      Starting {plan.price}
                    </span>
                    <span className="text-xs text-neutral-500 block mt-0.5">{plan.priceSubtitle}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-neutral-700">
                    {plan.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenQuote}
                  className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                    plan.isPopular 
                      ? 'bg-[#B53CB5] hover:bg-[#820082] text-white shadow-md' 
                      : 'border border-neutral-300 text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            FAQ ACCORDION
           ───────────────────────────────────────────────────────────── */}
        <div className="pt-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-hand text-base text-[#B53CB5]">✎ Got questions?</span>
            <h2 className="text-3xl font-extrabold text-[#2B2B2B] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-card border border-white shadow-xs overflow-hidden transition-all hover:shadow-md card-interactive"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#2B2B2B]">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-neutral-100 text-neutral-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
