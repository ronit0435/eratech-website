import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES, TESTIMONIALS, COMPANY_INFO } from '../data/content';
import { HeroPencilDraftboard } from '../components/HeroPencilDraftboard';
import { PencilUnderline, CrosshairMark } from '../components/DoodleDecorations';
import { ArrowUpRight, Code, Search, ShoppingBag, TrendingUp, Layers, Feather, ArrowRight } from 'lucide-react';
import { AnimatedPaperSky } from '../components/AnimatedPaperSky';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'marketing'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES.slice(0, 4) 
    : SERVICES.filter(s => s.category === activeTab);

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

  // Game-of-card attribute stats (light, professional, no black color)
  const getCardGameStats = (id: string, index: number) => {
    switch (id) {
      case 'custom-web-dev':
        return {
          rank: 'RANK S+',
          cardNo: 'ET-001',
          powerScore: '99.4',
          speedBadge: '< 300ms'
        };
      case 'ecommerce-solutions':
        return {
          rank: 'RANK S',
          cardNo: 'ET-002',
          powerScore: '98.8',
          speedBadge: '1-Click UPI'
        };
      case 'performance-seo':
        return {
          rank: 'RANK S+',
          cardNo: 'ET-003',
          powerScore: '99.1',
          speedBadge: 'Top 3 Maps'
        };
      default:
        return {
          rank: 'RANK S',
          cardNo: `ET-00${index + 1}`,
          powerScore: '97.9',
          speedBadge: '+3.8x ROAS'
        };
    }
  };

  return (
    <div className="relative w-full">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION WITH FIXED/STICKY BLUEPRINT GRID
         ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 px-4 md:px-8 overflow-hidden">
        
        {/* Sticky Blueprint Grid Pattern: Stays fixed/pinned in background of hero */}
        <div className="absolute inset-0 bg-graph-paper pointer-events-none opacity-85 z-0" />

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#F4F4F2]/60 pointer-events-none z-0" />

        {/* Animated Floating Paper Sky (Airplanes, Supersonic Jet & Jupiter with Rings) */}
        <AnimatedPaperSky />

        {/* Hero Content Container - Location watermark removed as requested */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-[#B53CB5] animate-pulse" />
              <span className="uppercase font-mono text-[11px] text-neutral-700 tracking-wider">Digital Engineering & Performance Systems</span>
            </div>

            {/* Big Pencil-Style Headline: "We Design Your Digital Future " */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2B2B2B] tracking-tight leading-[1.12] text-balance">
              We Design Your{' '}
              <span className="relative inline-block font-hand font-bold text-[#2B2B2B] rotate-[-1deg] text-5xl sm:text-6xl md:text-7xl">
               Digital Future
                {/* Hand-drawn pencil underline in #B53CB5 */}
                <PencilUnderline color="#B53CB5" className="absolute -bottom-2 left-0 right-0 h-4" />
              </span>
            </h1>

            {/* Ultra-professional description */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              EraTech delivers enterprise-grade web architectures, bespoke software platforms, and data-driven marketing systems engineered to maximize conversion velocity and dominate market share.
            </p>

            {/* Handwritten Note Callout */}
            <div className="flex items-center justify-center lg:justify-start gap-2 py-1">
              <span className="font-hand text-base text-neutral-800 font-semibold italic -rotate-1">
                &ldquo;Rooted in code, driven by data, built for compounding growth.&rdquo;
              </span>
            </div>

            {/* 2 Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-card hover:bg-white text-neutral-800 text-sm font-semibold border border-neutral-300/80 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer card-interactive"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Quick Proof Metrics adjacent to CTA */}
            <div className="pt-6 border-t border-neutral-300/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl font-extrabold text-[#2B2B2B] tabular-nums">120+</div>
                <div className="text-xs text-neutral-500 font-medium">Deployments</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#2B2B2B] tabular-nums">4.9 / 5</div>
                <div className="text-xs text-neutral-500 font-medium">Client Rating</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#B53CB5] tabular-nums">98%</div>
                <div className="text-xs text-neutral-500 font-medium">On-Time Milestones</div>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Pencil Draftboard */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <HeroPencilDraftboard />
          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE CAPABILITIES (LIGHT CARD-STYLE, NO BLACK, WELL STRUCTURED)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 md:px-8 border-t border-neutral-300/60 bg-[#F4F4F2]">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5] mb-2">
              <CrosshairMark />
              <span>Core Capabilities · Master Deck</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
              Engineered for Maximum Speed & Growth
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-xl">
              We eliminate template bloat. Each module is structured in a clear, collectible card framework with explicit deliverables and validated engineering specs.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-200/70 rounded-full w-fit">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-white text-[#2B2B2B] shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Expertise
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'web' ? 'bg-white text-[#2B2B2B] shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Web & Apps
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'marketing' ? 'bg-white text-[#2B2B2B] shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Digital Marketing
            </button>
          </div>
        </div>

        {/* Well-Structured Light Card Deck Grid (Compact Width & Proper Height on Desktop) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {filteredServices.map((service, idx) => {
            const cardMeta = getCardGameStats(service.id, idx);
            
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-neutral-300/80 bg-[#FAF9F5]/90 hover:bg-white p-5 md:p-6 shadow-xs hover:shadow-md hover:border-[#B53CB5]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* 1. Card Top Badge Bar */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200/80 text-[10.5px] font-mono">
                    <div className="flex items-center gap-2 font-bold text-neutral-700">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#B53CB5] rotate-45 shadow-2xs" />
                      <span>MODULE // {service.category.toUpperCase()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full font-bold tracking-wider bg-purple-100/80 text-[#B53CB5] border border-purple-200 text-[9.5px] shadow-2xs">
                        {cardMeta.rank}
                      </span>
                      <span className="text-neutral-400 font-mono text-[9.5px]">
                        {cardMeta.cardNo}
                      </span>
                    </div>
                  </div>

                  {/* 2. Visual Header Card Plate */}
                  <div className="mt-3 p-2.5 rounded-xl bg-white border border-neutral-200/90 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-purple-50/60 border border-purple-200/80 shadow-2xs flex items-center justify-center text-[#B53CB5] group-hover:scale-105 transition-transform">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider">
                          POWER RATING
                        </div>
                        <div className="text-base font-extrabold text-[#2B2B2B] font-mono tracking-tight flex items-center gap-1">
                          <span className="text-[#B53CB5]">{cardMeta.powerScore}</span>
                          <span className="text-[11px] text-neutral-400 font-normal">/ 100</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] font-mono text-neutral-400 uppercase font-semibold">STATUS</div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9.5px] font-mono text-emerald-700 font-bold mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>PRODUCTION SPEC</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Service Title & Clear Description */}
                  <div className="mt-3">
                    <h3 className="text-lg font-bold text-[#2B2B2B] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* 4. Well-Structured Deliverables & Specifications List */}
                  <div className="mt-3.5">
                    <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-2 flex items-center gap-1.5">
                      <span className="text-[#B53CB5]">✦</span>
                      <span>Key Deliverables & Specifications:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {service.deliverables.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-3.5 h-3.5 rounded-full bg-purple-100 text-[#B53CB5] flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 5. Hand-drawn Pencil Annotation Note */}
                  <div className="mt-3 p-2 rounded-xl bg-[#FAF0FA] border border-purple-200/80 text-xs font-hand text-[#B53CB5] flex items-center gap-2">
                    <span>✎</span>
                    <span>{service.pencilAnnotation}</span>
                  </div>

                </div>

                {/* 6. Card Footer: Tech Stack Badges & Specs Action */}
                <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9.5px] font-mono text-neutral-400 font-semibold mr-1">STACK:</span>
                    {service.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200/80 text-[9.5px] font-mono text-neutral-600 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xs font-bold text-[#B53CB5] hover:text-[#2B2B2B] flex items-center gap-1 cursor-pointer transition-colors group/btn shrink-0"
                  >
                    <span>Specs & Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2B2B2B] text-white text-xs font-bold hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>View All Engineering & Marketing Modules</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROCESS: THE HAND-SKETCHED BLUEPRINT TIMELINE
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 md:px-8 bg-[#ECECE8] border-t border-neutral-300/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5] mb-2">
              <span className="font-hand text-sm">✎</span>
              <span>Our Execution Methodology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
              From Drafting Paper to Silicon Execution
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              We never guess. Every delivery adheres to a 4-phase architectural pipeline with transparent milestone reviews.
            </p>
          </div>

          {/* Timeline 4 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-3xl glass-card border border-white shadow-sm hover:shadow-xl flex flex-col justify-between card-interactive">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <span className="font-hand text-xs text-neutral-500">Phase I</span>
                </div>
                <h3 className="text-lg font-bold text-[#2B2B2B]">Discover</h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Competitor benchmark audit, search intent mapping, and requirements discovery on the drafting table.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Deliverable: Scope Spec
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-3xl glass-card border border-white shadow-sm hover:shadow-xl flex flex-col justify-between card-interactive">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#B53CB5] text-white flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <span className="font-hand text-xs text-[#B53CB5]">Phase II</span>
                </div>
                <h3 className="text-lg font-bold text-[#2B2B2B]">Blueprint</h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Interactive Figma wireframes, database schemas, API contracts, and mathematical design systems.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Deliverable: Clickable Prototype
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-3xl glass-card border border-white shadow-sm hover:shadow-xl flex flex-col justify-between card-interactive">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <span className="font-hand text-xs text-neutral-500">Phase III</span>
                </div>
                <h3 className="text-lg font-bold text-[#2B2B2B]">Develop</h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Production TypeScript engineering, responsive styling, schema markup, and conversion tracking integration.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Deliverable: Staging QA Deploy
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-3xl glass-card border border-white shadow-sm hover:shadow-xl flex flex-col justify-between card-interactive">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <span className="font-hand text-xs text-emerald-700">Phase IV</span>
                </div>
                <h3 className="text-lg font-bold text-[#2B2B2B]">Deliver</h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Domain DNS propagation, Core Web Vitals verification, analytics calibration, and 30-day hypercare support.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Deliverable: 100% Ownership & Live System
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. TESTIMONIALS (STICKY-NOTE STYLE WITH TAPE & SLIGHT ROTATION)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 md:px-8 bg-[#EAEAE6] border-t border-neutral-300/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5] mb-2">
              <span className="font-hand text-base">★</span>
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
              Notebook Notes from Partners
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Verifiable testimonials from businesses in Mohali, Punjab, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => {
              const noteBgClass = t.noteColor === 'yellow' 
                ? 'sticky-note-yellow' 
                : t.noteColor === 'blue' 
                ? 'sticky-note-purple' 
                : 'sticky-note-green';

              return (
                <div
                  key={t.id}
                  className={`relative p-8 rounded-2xl ${noteBgClass} border border-black/5 flex flex-col justify-between transition-transform duration-300 hover:scale-103 hover:shadow-xl hover:z-20`}
                  style={{
                    transform: `rotate(${t.rotationDeg}deg)`
                  }}
                >
                  {/* Top masking tape strip */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />

                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-500 mb-3 text-sm">
                      {'★'.repeat(t.rating)}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed italic font-serif">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/10">
                    <div className="font-bold text-sm text-[#2B2B2B]">{t.clientName}</div>
                    <div className="text-xs text-neutral-600">{t.role}, {t.company}</div>
                    <div className="text-[11px] font-hand text-neutral-500 mt-0.5">
                      📍 {t.location} · {t.serviceReceived}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BOTTOM HERO CTA BANNER
         ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 md:px-8 bg-[#F4F4F2] border-t border-neutral-300/80">
        <div className="max-w-5xl mx-auto p-8 md:p-14 rounded-3xl glass-card border border-white shadow-xl relative overflow-hidden text-center space-y-6 card-interactive">
          
          <div className="absolute top-4 left-6 font-mono text-xs text-neutral-400">
            SPEC: PROPOSAL REQ
          </div>
          <div className="absolute top-4 right-6 font-mono text-xs text-neutral-400">
            MOHALI LABS
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#2B2B2B] text-white flex items-center justify-center mx-auto text-base font-bold shadow-md">
            ET
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-tight">
            Ready to Build Your Next Digital Breakthrough?
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Let us draft a comprehensive technical scope and marketing roadmap. Direct consultations available with Ronit in Mohali, Punjab.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Get a Customized Quote →
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card hover:bg-white text-neutral-800 text-sm font-semibold border border-neutral-300 shadow-xs hover:shadow-md transition-all duration-200 card-interactive"
            >
              Call Tech Lead: {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="pt-2 font-hand text-sm text-neutral-500">
            ✎ Response within 24 hours · Transparent pricing brackets
          </div>

        </div>
      </section>

    </div>
  );
};
