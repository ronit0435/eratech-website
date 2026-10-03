import React, { useState, useEffect } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/content';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Share2, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  Check, 
  X 
} from 'lucide-react';
import { CrosshairMark } from '../components/DoodleDecorations';
import { AnimatedPaperSky } from '../components/AnimatedPaperSky';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

/* ─────────────────────────────────────────────────────────────
   ARRANGED PENCIL-DRAWN COVER ILLUSTRATIONS
   ───────────────────────────────────────────────────────────── */
export const PencilCoverAttribution: React.FC<{ className?: string }> = ({ className = "w-full h-40" }) => (
  <div className={`relative bg-[#FAF9F5] border border-neutral-300/80 rounded-xl overflow-hidden flex items-center justify-center p-2.5 select-none ${className}`}>
    <div className="absolute inset-0 bg-graph-paper opacity-40 pointer-events-none" />
    <svg viewBox="0 0 360 140" className="w-full h-full filter drop-shadow-2xs" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="coverPencilHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#4A4A4A" strokeWidth="1" strokeOpacity="0.3" />
        </pattern>
      </defs>
      {/* Grid Axes */}
      <line x1="25" y1="115" x2="335" y2="115" stroke="#4A4A4A" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="25" y1="15" x2="25" y2="115" stroke="#4A4A4A" strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Sketched Pipeline Curve */}
      <path
        d="M 25 105 Q 110 98, 175 70 T 325 22"
        stroke="#2B2B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dashed Vanity Metrics Curve */}
      <path
        d="M 25 65 Q 110 60, 200 64 T 325 68"
        stroke="#777777"
        strokeWidth="1.4"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />
      
      {/* Crosshatch shading */}
      <path
        d="M 175 70 Q 245 42, 325 22 L 325 115 L 175 115 Z"
        fill="url(#coverPencilHatch)"
      />

      {/* Sketched Nodes */}
      <circle cx="110" cy="90" r="3.5" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.8" />
      <circle cx="175" cy="70" r="3.5" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.8" />
      <circle cx="250" cy="40" r="4" fill="#B53CB5" stroke="#2B2B2B" strokeWidth="1.4" />
      <circle cx="325" cy="22" r="4" fill="#2B2B2B" />

      {/* Pencil Labels */}
      <text x="35" y="28" fill="#2B2B2B" fontSize="9.5" fontFamily="Caveat, cursive, sans-serif" fontWeight="bold">
        ✎ Attributed Revenue Pipeline (Compound ROI)
      </text>
      <text x="200" y="58" fill="#777777" fontSize="8" fontFamily="Caveat, cursive, sans-serif">
        - - Vanity Impressions
      </text>
      <text x="230" y="36" fill="#B53CB5" fontSize="7" fontFamily="monospace" fontWeight="bold">
        ★ ATTRIBUTION MODEL
      </text>
    </svg>
    <div className="absolute top-1 left-3 w-12 h-3 bg-[#F6EED7]/90 -rotate-2 border-x border-dashed border-[#C0B490]/70 pointer-events-none" />
  </div>
);

export const PencilCoverArchitecture: React.FC<{ className?: string }> = ({ className = "w-full h-40" }) => (
  <div className={`relative bg-[#FAF9F5] border border-neutral-300/80 rounded-xl overflow-hidden flex items-center justify-center p-2.5 select-none ${className}`}>
    <div className="absolute inset-0 bg-graph-paper opacity-40 pointer-events-none" />
    <svg viewBox="0 0 360 140" className="w-full h-full filter drop-shadow-2xs" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="38" width="65" height="65" rx="4" stroke="#2B2B2B" strokeWidth="1.5" fill="#FFFFFF" />
      <text x="57" y="49" textAnchor="middle" fill="#2B2B2B" fontSize="7" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
      <circle cx="45" cy="70" r="3" fill="#B53CB5" />
      <circle cx="57" cy="70" r="3" fill="#777777" />
      <circle cx="69" cy="70" r="3" fill="#2B2B2B" />
      <text x="57" y="88" textAnchor="middle" fill="#4A4A4A" fontSize="6.5" fontFamily="monospace">EDGE</text>

      <line x1="90" y1="70" x2="130" y2="70" stroke="#2B2B2B" strokeWidth="1.3" strokeDasharray="3 2" />
      <polygon points="130,70 124,67 124,73" fill="#2B2B2B" />

      <rect x="130" y="24" width="105" height="92" rx="4" stroke="#2B2B2B" strokeWidth="1.6" fill="#FFFFFF" />
      <rect x="138" y="35" width="40" height="30" rx="3" stroke="#4A4A4A" strokeWidth="1" fill="#F4F4F2" />
      <text x="158" y="53" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace" fontWeight="bold">AUTH</text>

      <rect x="186" y="35" width="40" height="30" rx="3" stroke="#4A4A4A" strokeWidth="1" fill="#F4F4F2" />
      <text x="206" y="53" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace" fontWeight="bold">ENGINE</text>

      <rect x="138" y="74" width="88" height="32" rx="3" stroke="#B53CB5" strokeWidth="1.2" fill="#FAF0FA" />
      <text x="182" y="93" textAnchor="middle" fill="#B53CB5" fontSize="6.5" fontFamily="monospace" fontWeight="bold">SHARED DOMAIN</text>

      <line x1="235" y1="70" x2="265" y2="70" stroke="#2B2B2B" strokeWidth="1.3" strokeDasharray="3 2" />
      <polygon points="265,70 259,67 259,73" fill="#2B2B2B" />
      <ellipse cx="295" cy="44" rx="20" ry="6" stroke="#2B2B2B" strokeWidth="1.4" fill="#FFFFFF" />
      <path d="M 275 44 L 275 92 C 275 98, 315 98, 315 92 L 315 44" stroke="#2B2B2B" strokeWidth="1.4" fill="none" />
      <text x="295" y="80" textAnchor="middle" fill="#2B2B2B" fontSize="6.5" fontFamily="monospace" fontWeight="bold">DB / STATE</text>

      <text x="25" y="19" fill="#2B2B2B" fontSize="9.5" fontFamily="Caveat, cursive, sans-serif" fontWeight="bold">
        ✎ Modular Monolith // High-Concurrency Blueprint
      </text>
    </svg>
    <div className="absolute top-1 left-3 w-12 h-3 bg-[#F6EED7]/90 -rotate-2 border-x border-dashed border-[#C0B490]/70 pointer-events-none" />
  </div>
);

export const PencilCoverSemanticGraph: React.FC<{ className?: string }> = ({ className = "w-full h-40" }) => (
  <div className={`relative bg-[#FAF9F5] border border-neutral-300/80 rounded-xl overflow-hidden flex items-center justify-center p-2.5 select-none ${className}`}>
    <div className="absolute inset-0 bg-graph-paper opacity-40 pointer-events-none" />
    <svg viewBox="0 0 360 140" className="w-full h-full filter drop-shadow-2xs" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="80" y1="45" x2="160" y2="70" stroke="#4A4A4A" strokeWidth="1.2" strokeDasharray="3 2" />
      <line x1="80" y1="95" x2="160" y2="70" stroke="#4A4A4A" strokeWidth="1.2" strokeDasharray="3 2" />
      <line x1="160" y1="70" x2="250" y2="40" stroke="#2B2B2B" strokeWidth="1.6" />
      <line x1="160" y1="70" x2="260" y2="100" stroke="#2B2B2B" strokeWidth="1.6" />
      <line x1="250" y1="40" x2="315" y2="65" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="260" y1="100" x2="315" y2="65" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="3 2" />

      <circle cx="80" cy="45" r="16" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.3" />
      <text x="80" y="48" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace" fontWeight="bold">QUERY</text>

      <circle cx="80" cy="95" r="16" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.3" />
      <text x="80" y="98" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace" fontWeight="bold">CORPUS</text>

      <circle cx="160" cy="70" r="24" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.8" />
      <circle cx="160" cy="70" r="20" stroke="#B53CB5" strokeWidth="1" strokeDasharray="3 2" />
      <text x="160" y="69" textAnchor="middle" fill="#B53CB5" fontSize="7" fontFamily="monospace" fontWeight="bold">SEMANTIC</text>
      <text x="160" y="78" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace">ENTITY</text>

      <circle cx="250" cy="40" r="16" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.3" />
      <text x="250" y="43" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace" fontWeight="bold">INTENT</text>

      <circle cx="260" cy="100" r="18" fill="#FFFFFF" stroke="#2B2B2B" strokeWidth="1.4" />
      <text x="260" y="103" textAnchor="middle" fill="#2B2B2B" fontSize="6" fontFamily="monospace" fontWeight="bold">RANK</text>

      <circle cx="315" cy="65" r="13" fill="#FAF0FA" stroke="#B53CB5" strokeWidth="1.3" />
      <text x="315" y="67" textAnchor="middle" fill="#B53CB5" fontSize="5.5" fontFamily="monospace" fontWeight="bold">TOP 1</text>

      <text x="25" y="19" fill="#2B2B2B" fontSize="9.5" fontFamily="Caveat, cursive, sans-serif" fontWeight="bold">
        ✎ Algorithmic GEO // Knowledge Graph Triples
      </text>
    </svg>
    <div className="absolute top-1 left-3 w-12 h-3 bg-[#F6EED7]/90 -rotate-2 border-x border-dashed border-[#C0B490]/70 pointer-events-none" />
  </div>
);

const renderPencilCover = (id: string, className = "w-full h-36") => {
  if (id === 'future-prediction') {
    return <PencilCoverAttribution className={className} />;
  }
  if (id === 'microfrontends-modular-monolith') {
    return <PencilCoverArchitecture className={className} />;
  }
  return <PencilCoverSemanticGraph className={className} />;
};

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate: _onNavigate, onOpenQuote }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const basePosts = BLOG_POSTS.slice(0, 3);
  const featuredPost = basePosts[2] || basePosts[0];

  // Filter posts based on search query and category
  const filteredPosts = basePosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || post.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Web Architecture', 'SEO Strategy', 'Digital Growth'];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const openPost = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePost = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when active post changes
  useEffect(() => {
    if (activePost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePost]);

  // Escape key to return to journal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activePost) {
        closePost();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePost]);

  // ─────────────────────────────────────────────────────────────
  // DEDICATED FULL-PAGE ARTICLE READER
  // ─────────────────────────────────────────────────────────────
  if (activePost) {
    const otherPosts = basePosts.filter((p) => p.id !== activePost.id);

    return (
      <div className="relative w-full py-8 md:py-12 px-4 md:px-8 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />
        <AnimatedPaperSky />

        <div className="relative max-w-4xl mx-auto z-10 space-y-8">
          
          {/* Top Sticky Editorial Navigation Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-300/80 bg-[#F4F4F2]/90 backdrop-blur-md sticky top-16 z-20 py-2">
            <button
              onClick={closePost}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-white text-xs font-bold text-neutral-800 border border-neutral-300/90 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-[#B53CB5] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Journal</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs font-mono text-neutral-500">
                {activePost.category.toUpperCase()} · {activePost.readTime}
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card hover:bg-white text-xs font-semibold text-neutral-700 border border-neutral-300/80 hover:scale-105 active:scale-95 cursor-pointer transition-all"
                title="Share / Copy Link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[11px] text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-neutral-600" />
                    <span className="text-[11px]">Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Main Article Document Container */}
          <article className="rounded-3xl glass-card border border-neutral-300/80 bg-white/80 backdrop-blur-xl shadow-xl p-6 sm:p-12 space-y-8">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#B53CB5] rotate-45" />
                <span className="font-bold text-neutral-800">{activePost.category.toUpperCase()}</span>
                <span className="text-neutral-400">·</span>
                <span className="px-2.5 py-0.5 rounded-full font-bold bg-purple-100/80 text-[#B53CB5] border border-purple-200">
                  FLAGSHIP ESSAY
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-neutral-600 font-semibold">{activePost.readTime}</span>
                <span className="text-neutral-400">·</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 text-[10px]">
                  PEER REVIEWED
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-tight leading-[1.16]">
                {activePost.title}
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal pt-1">
                {activePost.excerpt}
              </p>

              {/* Arranged Pencil Cover Image in Reader */}
              <div className="pt-2">
                {renderPencilCover(activePost.id, "w-full h-44 sm:h-56")}
              </div>

              {/* Author & Byline Card */}
              <div className="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    R
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-sm flex items-center gap-1.5">
                      <span>{activePost.author}</span>
                      <span className="text-neutral-400 font-normal">({activePost.authorRole})</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono">
                      Published {activePost.date} · Mohali, Punjab
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-[#FAF0FA] border border-purple-200 text-xs font-hand text-[#B53CB5]">
                  ✎ {activePost.pencilNote}
                </div>
              </div>
            </div>

            {/* Strategic Engineering Principles Callout Card */}
            <div className="p-6 rounded-2xl bg-neutral-50/90 border border-neutral-300/80 shadow-xs space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-[#B53CB5] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B53CB5]" />
                <span>Executive Brief & Strategic Engineering Principles</span>
              </div>
              <ul className="space-y-2 text-sm text-neutral-800">
                {activePost.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-[#B53CB5] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-Form Essay Prose */}
            <div className="prose prose-neutral max-w-none space-y-6 text-base sm:text-lg text-neutral-800 leading-relaxed pt-2">
              {activePost.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-lg sm:text-xl font-medium text-neutral-900 leading-relaxed' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Architectural Pull Quote Box */}
            <div className="p-6 rounded-2xl border-l-4 border-[#B53CB5] bg-purple-50/40 text-neutral-800 italic font-serif text-lg leading-relaxed">
              &ldquo;Software architecture is not merely about writing syntactically correct code; it is about engineering predictable, repeatable compounding velocity for the enterprise.&rdquo;
              <div className="not-italic font-sans text-xs font-bold text-neutral-600 mt-2 font-mono">
                — Ronit, Lead Architect, EraTech Labs
              </div>
            </div>

            {/* Author Sign-Off & Consultation Callout */}
            <div className="pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/70">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-bold text-neutral-900">
                  Published by Ronit · EraTech Digital Engineering
                </div>
                <p className="text-xs text-neutral-600 max-w-md">
                  Have questions about implementing these architectural patterns in your next web release?
                </p>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-xs font-bold shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group shrink-0"
              >
                <span>Discuss Technical Scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </article>

          {/* Bottom Navigation & Other Dispatches */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-neutral-800 uppercase tracking-wider font-mono">
                More from EraTech Journal
              </h3>
              <button
                onClick={closePost}
                className="text-xs font-bold text-[#B53CB5] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All Dispatches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => openPost(post)}
                  className="p-5 rounded-2xl glass-card border border-neutral-300/80 shadow-sm hover:shadow-md transition-all cursor-pointer space-y-3"
                >
                  {renderPencilCover(post.id, "w-full h-32")}

                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                    <span className="font-bold text-[#B53CB5]">{post.category.toUpperCase()}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#2B2B2B] leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-1 flex items-center text-xs font-bold text-neutral-900 hover:text-black gap-1">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 pb-8">
              <button
                onClick={closePost}
                className="px-6 py-3 rounded-full bg-white hover:bg-neutral-100 hover:scale-105 active:scale-95 text-neutral-800 text-xs font-bold border border-neutral-300 shadow-xs cursor-pointer inline-flex items-center gap-2 transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-[#B53CB5]" />
                <span>Return to Journal Overview</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // JOURNAL CATALOG / LIST VIEW (DEFAULT VIEW)
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="relative w-full py-10 px-4 md:px-8 overflow-hidden">
      
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />

      {/* Animated Floating Paper Sky */}
      <AnimatedPaperSky />

      <div className="relative max-w-7xl mx-auto z-10 space-y-8">
        
        {/* ─────────────────────────────────────────────────────────────
            1. HERO SECTION WITH 25% GLASSY SEARCH BAR & COMPACT FEATURED CARD
           ───────────────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto space-y-5 text-center">
          
          <div className="max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5]">
              <CrosshairMark />
              <span>Technical & Strategic Insights</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
              The EraTech Journal
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Pragmatic breakdowns of modern web engineering, algorithmic SEO shifts, and predictive pipeline architecture by Ronit in Mohali.
            </p>
          </div>

          {/* 25% Glassy Interactive Search Bar */}
          <div className="max-w-xl mx-auto relative pt-1">
            <div className="relative flex items-center rounded-full glass-search p-1">
              <Search className="w-4 h-4 text-[#B53CB5] absolute left-4.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, stack, or topic..."
                className="w-full pl-11 pr-10 py-2.5 text-xs sm:text-sm bg-transparent border-0 focus:outline-none placeholder:text-neutral-500 text-[#2B2B2B] font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 rounded-full hover:bg-neutral-200/50 text-neutral-500 absolute right-3 cursor-pointer transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center justify-center gap-1.5 pt-2.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-[#B53CB5] text-white shadow-xs'
                      : 'glass-card border border-neutral-200/80 text-neutral-700 hover:border-purple-300 hover:text-[#B53CB5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Arranged Compact Featured Card (80% Paper Style, Single Clean Corner Border) */}
          {!searchQuery && selectedCategory === 'All' && featuredPost && (
            <div 
              onClick={() => openPost(featuredPost)}
              className="mt-4 text-left group relative rounded-2xl border border-neutral-300/80 bg-[#FAF9F5]/90 hover:bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#B53CB5]/50 transition-all duration-300 cursor-pointer overflow-hidden max-w-4xl mx-auto w-full space-y-4"
            >
              {/* Top Tape Corner Accent */}
              <div className="absolute -top-3 left-8 w-20 h-4 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />

              {/* Arranged Cover Image Banner */}
              <div className="w-full">
                {renderPencilCover(featuredPost.id, "w-full h-36 sm:h-44")}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-sm bg-[#B53CB5] rotate-45" />
                    <span className="font-bold text-neutral-700">{featuredPost.category.toUpperCase()}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="px-2 py-0.5 rounded-full font-bold bg-purple-100/80 text-[#B53CB5] border border-purple-200 text-[9px]">
                      FLAGSHIP ESSAY
                    </span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-neutral-600 font-semibold">{featuredPost.readTime}</span>
                    <span className="hidden sm:inline text-neutral-400">·</span>
                    <span className="hidden sm:inline text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 text-[9px]">
                      PEER REVIEWED
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-1 text-[11px] text-neutral-500 font-mono">
                    <span className="font-semibold text-neutral-800">{featuredPost.author}</span>
                    <span>·</span>
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span className="font-hand text-[#B53CB5] text-xs">✎ {featuredPost.pencilNote}</span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPost(featuredPost);
                    }}
                    className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Read Flagship Essay</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. THE CURATED BLOG POSTS GRID (COMPACT, ARRANGED PENCIL COVERS)
           ───────────────────────────────────────────────────────────── */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-between border-b border-neutral-200/80 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#B53CB5] rotate-45" />
              <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider font-bold">
                {searchQuery ? `Search Results (${filteredPosts.length})` : 'Curated Engineering & Strategy Dispatches'}
              </span>
            </div>
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-xs text-[#B53CB5] font-bold hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-10 text-center rounded-2xl glass-card border border-white/70 shadow-sm space-y-3">
              <Sparkles className="w-7 h-7 text-[#B53CB5] mx-auto opacity-75" />
              <h3 className="text-base font-bold text-[#2B2B2B]">No Articles Matched</h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                No published articles matched &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;SEO&rdquo;, &ldquo;React&rdquo;, &ldquo;Vite&rdquo;, or &ldquo;Pipeline&rdquo;.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-4 py-2 rounded-xl bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Show All Dispatches
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => openPost(post)}
                  className="group relative rounded-2xl border border-neutral-300/80 bg-[#FAF9F5]/90 hover:bg-white p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#B53CB5]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden space-y-3"
                >
                  <div className="space-y-2">
                    {/* Arranged Pencil Cover Thumbnail */}
                    <div className="w-full">
                      {renderPencilCover(post.id, "w-full h-28 sm:h-32")}
                    </div>

                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span className="font-bold text-[#B53CB5] uppercase">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#2B2B2B] leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Pencil Note */}
                    <div className="p-1.5 rounded-lg bg-[#FAF0FA] border border-purple-200/80 text-[10px] font-hand text-[#B53CB5] flex items-center gap-1">
                      <span>✎</span>
                      <span className="truncate">{post.pencilNote}</span>
                    </div>
                  </div>

                  {/* Footer Author Name & Read Action CTA */}
                  <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                    <div className="text-[10px] text-neutral-500 font-mono">
                      <span className="font-semibold text-neutral-800">{post.author}</span>
                      <span className="block text-[9px] text-neutral-400">{post.date}</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPost(post);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
