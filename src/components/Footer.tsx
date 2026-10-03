import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { PencilUnderline, CrosshairMark, RulerMarks } from './DoodleDecorations';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#EAEAE6] text-[#2B2B2B] pt-16 pb-12 px-4 md:px-8 border-t border-neutral-300/80 overflow-hidden">
      
      {/* Background blueprint grid subtle overlay */}
      <div className="absolute inset-0 bg-graph-paper opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Main Footer Paper Card */}
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-white/90 shadow-lg relative mb-12">
          
          {/* Tape strip on top edge */}
          <div className="absolute -top-3 left-12 w-28 h-6 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />
          <div className="absolute -top-3 right-12 w-24 h-6 bg-[#F6EED7]/90 rotate-2 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand & Tagline */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  ET
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#2B2B2B]">EraTech</h3>
                  <p className="font-hand text-sm text-neutral-600 -rotate-0.5">
                    &ldquo;{COMPANY_INFO.tagline}&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed max-w-md pt-2">
                A premier IT solutions and digital media agency rooted in Mohali, Punjab. 
                We engineer performant web architectures and predictive digital marketing pipelines for regional leaders and global enterprises.
              </p>

              {/* Hand-drawn note */}
              <div className="inline-block p-2.5 rounded-lg bg-[#FFF9DB] border border-[#E8DC9C]/80 shadow-xs text-xs font-hand text-neutral-700 rotate-1">
                📍 Headquartered in Mohali, Punjab · Delivering Globally
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/90 border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-[#B53CB5] hover:border-[#B53CB5] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-white/90 border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-[#B53CB5] hover:border-[#B53CB5] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full bg-white/90 border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-[#B53CB5] hover:border-[#B53CB5] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/90 border border-neutral-300 flex items-center justify-center text-neutral-700 hover:text-[#B53CB5] hover:border-[#B53CB5] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <div className="font-semibold text-xs tracking-wider uppercase text-neutral-500 mb-4 flex items-center gap-1.5">
                <span className="font-hand text-sm text-[#B53CB5]">§</span>
                Navigation
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button 
                    onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-neutral-600 hover:text-[#B53CB5] hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                  >
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-neutral-600 hover:text-[#B53CB5] hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                  >
                    <span>Core Services</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-neutral-600 hover:text-[#B53CB5] hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                  >
                    <span>About EraTech</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-neutral-600 hover:text-[#B53CB5] hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                  >
                    <span>Insights & Blog</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-neutral-600 hover:text-[#B53CB5] hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                  >
                    <span>Contact Us</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <div className="font-semibold text-xs tracking-wider uppercase text-neutral-500 mb-4 flex items-center gap-1.5">
                <span className="font-hand text-sm text-[#B53CB5]">★</span>
                Expertise
              </div>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li>Custom Web Applications</li>
                <li>Next.js & React Architectures</li>
                <li>Technical & Local SEO</li>
                <li>Google & Meta Paid Growth</li>
                <li>Headless E-Commerce</li>
                <li>UI/UX Design Systems</li>
              </ul>
            </div>

            {/* Column 4: Direct Contact & Newsletter */}
            <div>
              <div className="font-semibold text-xs tracking-wider uppercase text-neutral-500 mb-4 flex items-center gap-1.5">
                <span className="font-hand text-sm text-[#B53CB5]">✉</span>
                Get In Touch
              </div>
              
              <div className="space-y-2.5 text-xs text-neutral-600">
                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`} 
                  className="flex items-center gap-2 hover:text-[#B53CB5] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B53CB5] shrink-0" />
                  <span className="tabular-nums font-semibold">{COMPANY_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center gap-2 hover:text-[#B53CB5] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B53CB5] shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="flex items-start gap-2 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#B53CB5] shrink-0 mt-0.5" />
                  <span>Mohali, Punjab, India</span>
                </div>
              </div>

              {/* Newsletter Field */}
              <div className="mt-5 pt-4 border-t border-neutral-200/80">
                <span className="text-[11px] font-semibold text-neutral-700 block mb-1">
                  Drafting Room Digest
                </span>
                <span className="text-[11px] text-neutral-500 block mb-2 font-hand">
                  Monthly engineering & marketing insights
                </span>

                {subscribed ? (
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex items-center gap-1.5 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Subscribed! Welcome aboard.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex items-center gap-1">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter work email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg bg-white/90 border border-neutral-300 focus:outline-none focus:border-[#B53CB5] text-neutral-800"
                    />
                    <button 
                      type="submit"
                      aria-label="Subscribe"
                      className="p-2 rounded-lg bg-[#2B2B2B] hover:bg-black text-white transition-colors cursor-pointer shrink-0"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Quick CTA ribbon inside footer card */}
          <div className="mt-8 pt-6 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-neutral-700">Currently accepting new Q4/Q1 client projects</span>
            </div>
            <button
              onClick={onOpenQuote}
              className="text-xs font-semibold text-[#B53CB5] hover:text-[#2B2B2B] flex items-center gap-1 cursor-pointer group"
            >
              <span>Estimate Project Cost & Timeline</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 border-t border-neutral-300/50 pt-4">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} ERATECH IT Solutions. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-neutral-800 transition-colors">
              Privacy Notice
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-neutral-800 transition-colors">
              Service Terms
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-neutral-800 transition-colors">
              Mohali Office Directory
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
