import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenQuote 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollYRef.current;
      const scrollDiff = currentScrollY - prevScrollY;

      setIsScrolled(currentScrollY > 30);

      // User requirement:
      // "when the scroll up then the navigation bar get show and when the scroll down when navigation hide in the slide animated way"
      if (currentScrollY <= 25) {
        // At the very top, always show navbar so user can orient and navigate
        setIsVisible(true);
      } else if (scrollDiff > 4) {
        // Scrolling DOWN -> HIDE navigation bar with slide animation
        setIsVisible(false);
      } else if (scrollDiff < -4) {
        // Scrolling UP -> SHOW navigation bar with slide animation
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full pt-4 pb-2 px-4 pointer-events-none transition-all duration-300 ease-in-out transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-28 opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Pill Glassmorphic Container (25% translucent glassy component) */}
        <nav 
          className={`w-full flex items-center justify-between px-3 sm:px-5 py-2.5 rounded-full glass-nav transition-all duration-300 ${
            isScrolled ? 'shadow-xl border-white/95 bg-[#F4F4F2]/90 backdrop-blur-md' : 'shadow-md border-white/80'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo with circle containing 'ET' and name 'EraTech' */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 pl-1.5 text-left cursor-pointer group"
          >
            {/* Circle Logo with ET - remains dark */}
            <div className="w-8 h-8 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-xs group-hover:bg-black transition-colors duration-200">
              <span>ET</span>
            </div>

            {/* Brand text EraTech - only the alphabet letters turn purple on hover */}
            <span className="font-extrabold text-lg tracking-tight text-[#2B2B2B] group-hover:text-[#B53CB5] transition-colors duration-200">
              EraTech
            </span>
          </button>

          {/* Desktop Navigation Links - CLEAN UNNUMBERED */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#B53CB5] font-bold' 
                      : 'text-neutral-600 hover:text-[#2B2B2B] hover:bg-black/5'
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {item.label}
                  </span>

                  {/* Active Link Pencil Underline with #B53CB5 */}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2.5px] bg-[#B53CB5] rounded-full transform -rotate-1 shadow-xs" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button: Get a Quote */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#2B2B2B] hover:bg-black hover:scale-105 active:scale-95 rounded-full shadow-sm hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap group hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-200/60 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

      </div>

      {/* Mobile Slide-Down Glassy Menu */}
      {mobileMenuOpen && (
        <div className="max-w-md mx-auto mt-2 px-2 pointer-events-auto">
          <div className="p-4 rounded-3xl glass-nav shadow-2xl border border-white flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 px-2">
              <span className="font-bold text-sm text-[#2B2B2B]">EraTech</span>
              <span className="text-[11px] text-neutral-500 font-mono">Mohali, Punjab</span>
            </div>

            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-purple-50 text-[#B53CB5] shadow-xs font-bold' 
                      : 'text-neutral-700 hover:bg-white/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B53CB5]" />}
                </button>
              );
            })}

            <div className="pt-2 mt-1 border-t border-neutral-200/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 text-center text-xs font-bold text-white bg-[#B53CB5] hover:bg-[#820082] rounded-xl shadow-md transition-colors"
              >
                Request Custom Project Quote →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
