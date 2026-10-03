import React, { useState } from 'react';
import { Terminal, Shield, Zap, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeroArchitectural3D: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 8, y: -12 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: - (y / rect.height) * 20,
      y: (x / rect.width) * 24,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 8, y: -12 });
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center perspective-1000 select-none cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background blueprint drafting floor */}
      <div className="absolute inset-2 rounded-3xl border border-neutral-300/80 bg-white/35 backdrop-blur-xs flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full border border-dashed border-neutral-400/40 animate-[spin_60s_linear_infinite]" />
        <div className="w-40 h-40 rounded-full border border-neutral-400/30" />
        <div className="w-20 h-20 rounded-full border border-[#3B4CCA]/30" />
        
        {/* Drafting Axis Lines */}
        <div className="absolute inset-x-6 top-1/2 h-[1px] bg-neutral-300" />
        <div className="absolute inset-y-6 left-1/2 w-[1px] bg-neutral-300" />

        {/* Technical Coordinate Annotations */}
        <div className="absolute top-3 left-4 font-mono text-[10px] text-neutral-500">
          NODE: MOHALI · LAT: 30.7046° N
        </div>
        <div className="absolute bottom-3 right-4 font-hand text-xs text-[#3B4CCA]">
          interactive 3d architecture ↗
        </div>
      </div>

      {/* 3D Main Floating Architecture Hub */}
      <div 
        className="relative w-72 sm:w-80 h-80 preserve-3d transition-transform duration-200 ease-out flex flex-col justify-between"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${isHovered ? '-10px' : '0px'}) translateZ(25px)`,
        }}
      >
        {/* Dynamic Shadow */}
        <div 
          className="absolute inset-x-6 -bottom-8 h-8 bg-black/15 rounded-full blur-md transform rotateX(80deg) transition-all duration-300"
          style={{
            transform: `translateY(${rotate.x * 0.7}px) scale(${isHovered ? 1.1 : 1})`,
            opacity: isHovered ? 0.35 : 0.2
          }}
        />

        {/* Main Central Card: 25% Glassy Component with 3D Visual Asset */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/95 shadow-xl p-3.5 space-y-3 bg-white/75 backdrop-blur-md">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-neutral-200/80 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-bold text-[10px]">
                ET
              </div>
              <div>
                <span className="text-xs font-bold text-[#2B2B2B] block leading-none">EraTech Core</span>
                <span className="text-[9px] font-mono text-neutral-400">ARCH-V2026</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* 3D Isometric Architecture Image Frame */}
          <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/60 shadow-inner group">
            <img
              src="/src/assets/images/hero_3d_architecture_1790948986037.jpg"
              alt="EraTech 3D Digital Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            />
            {/* Scrim and Grid overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[10px] font-mono">
              <span>MOHALI LABS</span>
              <span className="text-amber-300">FUTURE PREDICTION</span>
            </div>
          </div>

          {/* Terminal / Code snippet simulator */}
          <div className="p-2.5 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-[10px] space-y-1 shadow-inner">
            <div className="flex items-center gap-1.5 text-neutral-400 text-[9px] border-b border-neutral-800 pb-1">
              <Terminal className="w-3 h-3 text-[#3B4CCA]" />
              <span>system_status.ts</span>
            </div>
            <div className="text-emerald-400">✓ Stack: React 19 · Next.js · TypeScript</div>
            <div className="text-neutral-300">→ Latency: &lt;45ms | SEO: 100/100</div>
          </div>
        </div>

        {/* Floating Glass Satellite Pill 1 (Top-Right Depth Layer) */}
        <div 
          className="absolute -top-5 -right-6 px-3.5 py-2 rounded-2xl glass-card border border-white shadow-lg text-xs pointer-events-none transition-transform duration-300 bg-white/85 backdrop-blur-md"
          style={{
            transform: `translateZ(50px) rotate(3deg)`
          }}
        >
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-[#3B4CCA]/10 text-[#3B4CCA]">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-bold text-[11px] text-[#2B2B2B]">Sub-Second Speed</div>
              <div className="font-hand text-[10px] text-neutral-500">Core Web Vitals Calibrated</div>
            </div>
          </div>
        </div>

        {/* Floating Glass Satellite Pill 2 (Bottom-Left Depth Layer) */}
        <div 
          className="absolute -bottom-4 -left-6 px-3.5 py-2 rounded-2xl bg-[#FFF9DB] border border-[#E8DC9C] shadow-md text-xs pointer-events-none transition-transform duration-300"
          style={{
            transform: `translateZ(45px) rotate(-4deg)`
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm">📍</span>
            <div>
              <div className="font-bold text-[11px] text-neutral-800">Mohali, Punjab</div>
              <div className="font-hand text-[10px] text-neutral-600">Headquarters & Tech Studio</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
