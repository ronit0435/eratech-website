import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      
      {/* Speech bubble note */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-300 shadow-lg text-xs text-neutral-700 animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-medium">Direct WhatsApp with Tech Lead</span>
          <button 
            onClick={() => setTooltipVisible(false)}
            className="text-neutral-400 hover:text-neutral-700 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ERATECH on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
