import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const PaperPlane3D: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 12, y: -18 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map offset to smooth degrees
    setRotate({
      x: - (y / rect.height) * 35,
      y: (x / rect.width) * 45,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 12, y: -18 });
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full max-w-md aspect-square mx-auto flex items-center justify-center perspective-1000 select-none cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Blueprint Grid Floor Target with concentric measurement rings */}
      <div className="absolute inset-4 rounded-3xl border border-neutral-300/80 bg-white/40 backdrop-blur-xs flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 rounded-full border border-dashed border-neutral-400/40" />
        <div className="w-36 h-36 rounded-full border border-neutral-400/30" />
        <div className="w-16 h-16 rounded-full border border-neutral-400/50" />
        
        {/* Crosshair marks */}
        <div className="absolute inset-x-8 top-1/2 h-[1px] bg-neutral-300" />
        <div className="absolute inset-y-8 left-1/2 w-[1px] bg-neutral-300" />

        {/* Hand-drawn margin notes */}
        <div className="absolute top-3 left-4 font-mono text-[10px] text-neutral-400">
          GRID: 120mm · AXIS: 30°
        </div>
        <div className="absolute bottom-3 right-4 font-hand text-xs text-[#3B4CCA] rotate-2">
          interactive 3d origami ↗
        </div>
      </div>

      {/* 3D Floating Paper Plane Model */}
      <div 
        className="relative w-64 h-64 preserve-3d transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${isHovered ? '-12px' : '0px'}) translateZ(30px)`,
        }}
      >
        {/* Shadow cast onto the grid plane */}
        <div 
          className="absolute inset-x-8 -bottom-10 h-10 bg-black/10 rounded-full blur-md transform rotateX(75deg) transition-all duration-300"
          style={{
            transform: `translateY(${rotate.x * 0.8}px) scale(${isHovered ? 1.15 : 1})`,
            opacity: isHovered ? 0.35 : 0.2
          }}
        />

        {/* Origami Paper Plane SVG Geometry */}
        <svg 
          viewBox="0 0 240 240" 
          className="w-full h-full filter drop-shadow-xl overflow-visible"
        >
          {/* Main Left Wing */}
          <polygon 
            points="120,20 20,200 120,165" 
            fill="#FFFFFF" 
            stroke="#D0D0C8" 
            strokeWidth="1.5"
            className="transition-colors hover:fill-[#FAFAFA]"
          />
          {/* Left Wing Under-Fold (darker tone for depth) */}
          <polygon 
            points="120,165 20,200 70,185" 
            fill="#E4E4DC" 
            stroke="#C4C4BC" 
            strokeWidth="1.2"
          />

          {/* Main Right Wing */}
          <polygon 
            points="120,20 220,200 120,165" 
            fill="#F2F2EC" 
            stroke="#D0D0C8" 
            strokeWidth="1.5"
          />
          {/* Right Wing Under-Fold */}
          <polygon 
            points="120,165 220,200 170,185" 
            fill="#DCDCD4" 
            stroke="#BCBCB4" 
            strokeWidth="1.2"
          />

          {/* Central Keel / Fold Spine */}
          <line 
            x1="120" y1="20" x2="120" y2="165" 
            stroke="#3B4CCA" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />

          {/* Pencil dotted flight trail */}
          <path 
            d="M120 165 C120 195 105 215 90 235" 
            stroke="#4A4A4A" 
            strokeWidth="2" 
            strokeDasharray="4 4" 
            opacity="0.6"
          />
          <path 
            d="M120 165 C120 200 135 220 150 240" 
            stroke="#3B4CCA" 
            strokeWidth="2" 
            strokeDasharray="4 4" 
            opacity="0.6"
          />

          {/* ERATECH stamped on paper wing */}
          <text 
            x="75" y="115" 
            fontSize="10" 
            fontWeight="bold" 
            fill="#4A4A4A" 
            letterSpacing="1"
            transform="rotate(-48 75 115)"
            opacity="0.8"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            ERATECH · 2026
          </text>
        </svg>

        {/* Floating Glass Blueprint Annotation Tag */}
        <div 
          className="absolute -top-6 -right-6 px-3 py-1.5 rounded-xl glass-card border border-white shadow-md text-xs pointer-events-none transform translateZ(40px)"
          style={{
            transform: `rotateZ(4deg) translateZ(45px)`
          }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3B4CCA] animate-ping" />
            <span className="font-mono text-[11px] font-semibold text-neutral-800">TRAJECTORY: +340%</span>
          </div>
          <span className="font-hand text-[10px] text-neutral-500 block leading-tight">
            calibrated for market growth
          </span>
        </div>

        {/* Sticky note folded behind */}
        <div 
          className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg bg-[#FFF9DB] border border-[#E8DC9C] shadow-sm text-xs pointer-events-none font-hand text-neutral-700 transform -rotate-6"
        >
          <span>✏️ Paper craft precision</span>
        </div>
      </div>
    </div>
  );
};
