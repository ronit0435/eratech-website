import React from 'react';

export const AnimatedPaperSky: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-90">
      
      {/* ─────────────────────────────────────────────────────────────
          ARCHITECTURAL DRAFTING DASHED GUIDE LINES (Grey Pencil Sketch Trails)
         ───────────────────────────────────────────────────────────── */}
      <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 50% 12% Q 70% 6%, 92% 24%"
          fill="none"
          stroke="#777777"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.3"
        />
        <path
          d="M 55% 26% Q 78% 34%, 95% 52%"
          fill="none"
          stroke="#777777"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.3"
        />
        <path
          d="M 60% 70% Q 78% 82%, 94% 86%"
          fill="none"
          stroke="#777777"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.3"
        />
      </svg>

      {/* ─────────────────────────────────────────────────────────────
          1. CODE ICON (< / >) (35x35 px, Shifted to the Pencil Draftpad side!)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[18%] right-[38%] lg:top-[20%] lg:right-[43%] animate-tech-float-alt">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1.5 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="Code < / > (Draftpad Node)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 7.5 7.5 L 3.5 12 L 7.5 16.5" stroke="#2B2B2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 16.5 7.5 L 20.5 12 L 16.5 16.5" stroke="#2B2B2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="14" y1="5.5" x2="10" y2="18.5" stroke="#4A4A4A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ &lt;code /&gt;
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. AWS ICON (35x35 px, Top-Right Corner above Draftpad)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[5%] right-[4%] lg:top-[6%] lg:right-[5%] animate-tech-float">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1.5 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="AWS"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="3" y="12.5" fontFamily="Caveat, cursive, sans-serif" fontSize="10.5" fontWeight="bold" fill="#2B2B2B">
                aws
              </text>
              <path d="M 3.5 15.5 Q 12 21 20 15.5" stroke="#2B2B2B" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M 18 14 L 20.5 15.5 L 18.5 18" stroke="#2B2B2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ aws
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. GOOGLE ICON (35x35 px, Top Mid-Right above Draftpad)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[5%] right-[20%] lg:top-[5%] lg:right-[24%] animate-tech-float-slow">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1.5 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="Google"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 18.5 12 C 18.5 15.8, 15.8 19, 12 19 C 8 19, 5 15.8, 5 12 C 5 8.2, 8 5, 12 5 C 14.2 5, 16.2 5.8, 17.5 7.2"
                stroke="#2B2B2B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line x1="12" y1="12" x2="18.5" y2="12" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ google
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. PERSON BOT (35x35 px, Right Margin beside Draftpad)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[44%] right-[1%] lg:top-[44%] lg:right-[1.5%] animate-tech-float-alt">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="Person Bot"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8.5" r="5" stroke="#2B2B2B" strokeWidth="1.2" fill="#F8F8F6" />
              <path d="M 8 8.5 C 7 5, 9.5 3.5, 13.5 3.5 C 16.5 3.5, 16.5 6, 16 8.5" stroke="#555555" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 1" />
              <circle cx="10.2" cy="8" r="0.7" fill="#2B2B2B" />
              <circle cx="13.8" cy="8" r="0.7" fill="#2B2B2B" />
              <path d="M 10.5 10.5 Q 12 11.8 13.5 10.5" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M 7.5 19.5 C 8.5 15, 11 14, 12 14 C 13 14, 15.5 15, 16.5 19.5" stroke="#2B2B2B" strokeWidth="1.1" fill="#4B4B4B" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ person bot
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. LINKEDIN ICON (35x35 px, Lower-Right below Draftpad)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[75%] right-[5%] lg:top-[76%] lg:right-[7%] animate-tech-float-delayed">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1.5 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" stroke="#2B2B2B" strokeWidth="1.3" fill="#F8F8F6" />
              <circle cx="7.5" cy="8.2" r="1" fill="#2B2B2B" />
              <line x1="7.5" y1="10.8" x2="7.5" y2="16.5" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M 11.5 16.5 L 11.5 12.8 C 11.5 11.4, 12.8 10.8, 14 10.8 C 15.2 10.8, 16.5 11.4, 16.5 13 L 16.5 16.5" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ in
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          6. INSTAGRAM ICON (35x35 px, Bottom Center-Right below Draftpad)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[85%] right-[20%] lg:top-[85%] lg:right-[25%] animate-tech-float-fast">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1.5 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="#2B2B2B" strokeWidth="1.3" fill="#F8F8F6" />
              <circle cx="12" cy="12" r="3.6" stroke="#2B2B2B" strokeWidth="1.3" />
              <circle cx="16.2" cy="7.8" r="0.8" fill="#2B2B2B" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ ig
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          7. FACEBOOK ICON (35x35 px, Far Bottom-Left Margin below stats)
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-[88%] left-[3%] lg:top-[90%] lg:left-[4%] animate-tech-float">
        <div className="group relative flex items-center justify-center">
          <div 
            className="w-[35px] h-[35px] rounded-full bg-white/95 border border-neutral-300 shadow-sm flex items-center justify-center p-1.5 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1.5 hover:scale-120 hover:shadow-lg pointer-events-auto cursor-pointer"
            title="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8.5" stroke="#2B2B2B" strokeWidth="1.2" fill="#F8F8F6" />
              <path d="M 13.5 8 C 12.5 8, 11 8.5, 11 10.2 L 11 12 L 9 12 L 9 14.2 L 11 14.2 L 11 19.5" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="9.5" y1="12" x2="13.8" y2="12" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <span className="hidden lg:block absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap pointer-events-none">
            ✎ fb
          </span>
        </div>
      </div>

    </div>
  );
};
