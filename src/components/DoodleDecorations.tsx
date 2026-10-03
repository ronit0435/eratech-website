import React from 'react';

export const PencilUnderline: React.FC<{ color?: string; className?: string }> = ({ 
  color = '#2B2B2B', 
  className = '' 
}) => (
  <svg 
    viewBox="0 0 240 18" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-full overflow-visible ${className}`}
    preserveAspectRatio="none"
  >
    <path 
      d="M2.5 12C35 4.5 90 2 135 7.5C170 11.5 205 13 237.5 5" 
      stroke={color} 
      strokeWidth="3.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      opacity="0.85"
    />
    <path 
      d="M10 15C55 10 120 7.5 175 11C195 12.2 215 13 230 11" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      opacity="0.5"
    />
  </svg>
);

export const DoodleArrow: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#4A4A4A' 
}) => (
  <svg 
    viewBox="0 0 100 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`overflow-visible ${className}`}
  >
    <path 
      d="M10 45C30 50 65 42 78 18" 
      stroke={color} 
      strokeWidth="2.4" 
      strokeLinecap="round" 
      strokeDasharray="1 1"
    />
    <path 
      d="M60 14L79 17L77 36" 
      stroke={color} 
      strokeWidth="2.4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const ScribbleCircle: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#B53CB5' 
}) => (
  <svg 
    viewBox="0 0 200 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`absolute pointer-events-none ${className}`}
  >
    <path 
      d="M185 35C182 18 140 6 95 8C45 10 10 24 12 45C14 66 60 74 110 72C165 70 190 54 185 36C180 20 135 15 100 17" 
      stroke={color} 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      opacity="0.8"
    />
  </svg>
);

export const PaperClip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    viewBox="0 0 24 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-6 h-12 text-[#7A7A72] ${className}`}
  >
    <path 
      d="M12 4V36C12 40.4 15.6 44 20 44C24.4 44 28 40.4 28 36V12C28 5.4 22.6 0 16 0C9.4 0 4 5.4 4 12V38" 
      stroke="currentColor" 
      strokeWidth="2.4" 
      strokeLinecap="round" 
      transform="scale(0.7) translate(2, 4)"
    />
  </svg>
);

export const CrosshairMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-4 h-4 text-neutral-400 opacity-60 ${className}`}>
    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-current -translate-y-1/2" />
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-current -translate-x-1/2" />
    <div className="absolute inset-0 border border-current rounded-full scale-75" />
  </div>
);

export const RulerMarks: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-end gap-1.5 h-3 text-neutral-400/70 select-none ${className}`}>
    <div className="w-[1px] h-3 bg-current" />
    <div className="w-[1px] h-1.5 bg-current" />
    <div className="w-[1px] h-2 bg-current" />
    <div className="w-[1px] h-1.5 bg-current" />
    <div className="w-[1px] h-3 bg-current" />
    <div className="w-[1px] h-1.5 bg-current" />
    <div className="w-[1px] h-2 bg-current" />
    <div className="w-[1px] h-1.5 bg-current" />
    <div className="w-[1px] h-3 bg-current" />
  </div>
);
