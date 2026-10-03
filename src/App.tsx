/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { AiChatbot } from './components/AiChatbot';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync hash routing for shareable links & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'about', 'blog', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F2] text-[#2B2B2B] relative selection:bg-[#B53CB5]/20 selection:text-[#2B2B2B]">
      
      {/* 1. FLOATING GLASS NAVBAR: ET circle logo + EraTech with scroll-animated reveal */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* 2. MAIN MULTI-PAGE VIEWPORT */}
      <main className="flex-1 w-full relative pt-16">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} onOpenQuote={() => setQuoteModalOpen(true)} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={navigateTo} onOpenQuote={() => setQuoteModalOpen(true)} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} onOpenQuote={() => setQuoteModalOpen(true)} />
        )}
        {currentPage === 'blog' && (
          <BlogPage onNavigate={navigateTo} onOpenQuote={() => setQuoteModalOpen(true)} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} onOpenQuote={() => setQuoteModalOpen(true)} />
        )}
      </main>

      {/* 3. SHARED FOOTER ON ALL PAGES */}
      <Footer onNavigate={navigateTo} onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* 4. INTERACTIVE QUOTE & SCOPE ESTIMATOR MODAL */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />

      {/* 5. FLOATING AI CHATBOT (REPLACED WHATSAPP AS REQUESTED) */}
      <AiChatbot 
        onOpenQuote={() => setQuoteModalOpen(true)}
        onNavigateContact={() => navigateTo('contact')}
      />

      {/* 6. FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md border border-neutral-300 shadow-md hover:shadow-lg text-neutral-700 hover:text-[#B53CB5] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
