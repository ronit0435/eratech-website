import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, RotateCcw, PenTool, Layout, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export const HeroPencilDraftboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pencilPos, setPencilPos] = useState({ x: 260, y: 180 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState<'graphite' | 'purple'>('purple');
  const [activePreset, setActivePreset] = useState<'wireframe' | 'growth' | 'freehand'>('wireframe');
  const animFrameRef = useRef<number | null>(null);
  const autoStepRef = useRef<number>(0);

  // Colors
  const graphiteColor = 'rgba(43, 43, 43, 0.75)';
  const purpleColor = 'rgba(163, 0, 163, 0.85)';
  const currentColor = strokeColor === 'purple' ? purpleColor : graphiteColor;

  // Initialize and clear canvas
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Draw wireframe blueprint preset
  const drawWireframePreset = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw browser window outline
    ctx.strokeStyle = graphiteColor;
    ctx.lineWidth = 1.8;
    ctx.setLineDash([]);
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Browser header
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(canvas.width - 30, 60);
    ctx.stroke();

    // Browser dots
    ctx.fillStyle = graphiteColor;
    ctx.beginPath();
    ctx.arc(45, 45, 3.5, 0, Math.PI * 2);
    ctx.arc(60, 45, 3.5, 0, Math.PI * 2);
    ctx.arc(75, 45, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Search bar sketch
    ctx.strokeRect(100, 38, canvas.width - 150, 14);

    // Hero section block inside browser
    ctx.strokeStyle = purpleColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(48, 80, 140, 75);

    // Headline sketch lines
    ctx.fillStyle = purpleColor;
    ctx.fillRect(58, 92, 90, 8);
    ctx.fillRect(58, 108, 110, 5);
    ctx.fillRect(58, 120, 70, 5);

    // CTA button sketch
    ctx.strokeRect(58, 134, 45, 12);

    // 3D Box / Architecture block on right
    ctx.strokeStyle = graphiteColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(205, 80, 115, 75);
    // diagonal isometric line
    ctx.beginPath();
    ctx.moveTo(205, 80);
    ctx.lineTo(225, 68);
    ctx.lineTo(340, 68);
    ctx.lineTo(320, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(340, 68);
    ctx.lineTo(340, 143);
    ctx.lineTo(320, 155);
    ctx.stroke();

    // 3 Cards below (matching user's 3-tile preference)
    const cardY = 175;
    const cardW = 80;
    const cardH = 90;
    const gap = 16;
    const startX = 48;

    for (let i = 0; i < 3; i++) {
      const cx = startX + i * (cardW + gap);
      ctx.strokeStyle = i === 1 ? purpleColor : graphiteColor;
      ctx.lineWidth = 1.6;
      ctx.strokeRect(cx, cardY, cardW, cardH);
      
      // icon circle
      ctx.beginPath();
      ctx.arc(cx + 20, cardY + 20, 7, 0, Math.PI * 2);
      ctx.stroke();

      // text lines
      ctx.fillStyle = graphiteColor;
      ctx.fillRect(cx + 12, cardY + 36, 55, 4);
      ctx.fillRect(cx + 12, cardY + 46, 45, 3);
      ctx.fillRect(cx + 12, cardY + 54, 50, 3);

      // tiny pill button
      ctx.strokeStyle = i === 1 ? purpleColor : graphiteColor;
      ctx.strokeRect(cx + 12, cardY + 68, 40, 9);
    }

    // Annotation
    ctx.font = '10px Kalam, cursive';
    ctx.fillStyle = purpleColor;
    ctx.fillText('EraTech Blueprint // Mohali', 52, 290);
  }, [clearCanvas, graphiteColor, purpleColor]);

  // Draw future prediction curve preset
  const drawGrowthPreset = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    clearCanvas();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Grid axes
    ctx.strokeStyle = graphiteColor;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(45, 260);
    ctx.lineTo(330, 260); // X-axis
    ctx.moveTo(45, 260);
    ctx.lineTo(45, 40);  // Y-axis
    ctx.stroke();

    // Dotted guide lines
    ctx.strokeStyle = 'rgba(74, 74, 74, 0.2)';
    ctx.setLineDash([4, 4]);
    for (let y = 80; y < 260; y += 45) {
      ctx.beginPath();
      ctx.moveTo(45, y);
      ctx.lineTo(330, y);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Curve sketch: Future Prediction exponential curve
    ctx.strokeStyle = purpleColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50, 245);
    ctx.bezierCurveTo(120, 240, 180, 180, 230, 120);
    ctx.bezierCurveTo(270, 75, 300, 60, 320, 48);
    ctx.stroke();

    // Glowing Purple Data points
    const points = [
      { x: 50, y: 245, label: 'Start' },
      { x: 140, y: 220, label: 'Q1' },
      { x: 210, y: 145, label: 'Deploy' },
      { x: 270, y: 80, label: 'Scale' },
      { x: 320, y: 48, label: 'Future Prediction' },
    ];

    points.forEach((p, idx) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = purpleColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.font = '10px Kalam, cursive';
      ctx.fillStyle = idx === points.length - 1 ? purpleColor : graphiteColor;
      ctx.fillText(p.label, p.x - 15, p.y - 10);
    });

    // Arrowhead at the top
    ctx.fillStyle = purpleColor;
    ctx.beginPath();
    ctx.moveTo(320, 48);
    ctx.lineTo(312, 58);
    ctx.lineTo(326, 56);
    ctx.closePath();
    ctx.fill();

    // Note
    ctx.font = '11px Kalam, cursive';
    ctx.fillStyle = purpleColor;
    ctx.fillText('⚡ 10x Velocity Architecture', 150, 285);
  }, [clearCanvas, graphiteColor, purpleColor]);

  // Initial draw
  useEffect(() => {
    drawWireframePreset();
  }, [drawWireframePreset]);

  // Handle Preset Switching
  const handleSelectPreset = (preset: 'wireframe' | 'growth' | 'freehand') => {
    setActivePreset(preset);
    if (preset === 'wireframe') {
      drawWireframePreset();
    } else if (preset === 'growth') {
      drawGrowthPreset();
    } else {
      clearCanvas();
    }
  };

  // Automated gentle idle pencil animation when not hovering
  useEffect(() => {
    if (isHovering) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const animateIdle = () => {
      autoStepRef.current += 0.035;
      const t = autoStepRef.current;
      // Gentle figure-8 sketching trajectory
      const newX = 185 + Math.sin(t) * 90;
      const newY = 160 + Math.sin(t * 2) * 50;
      setPencilPos({ x: newX, y: newY });
      animFrameRef.current = requestAnimationFrame(animateIdle);
    };

    animFrameRef.current = requestAnimationFrame(animateIdle);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovering]);

  // Mouse interaction: direct drawing and pencil cursor following
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(10, Math.min(rect.width - 10, e.clientX - rect.left));
    const y = Math.max(10, Math.min(rect.height - 10, e.clientY - rect.top));

    setPencilPos({ x, y });

    if (isDrawing && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = strokeColor === 'purple' ? 2.5 : 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDrawing(true);
    if (canvasRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      
      {/* Tape Strip top-center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs z-30 pointer-events-none" />

      {/* Main Glass Draftboard Container */}
      <div 
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsDrawing(false);
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="relative w-full aspect-[4/3.4] rounded-3xl overflow-hidden glass-card border border-white/95 shadow-2xl p-4 bg-white/80 backdrop-blur-md cursor-crosshair group card-interactive"
        style={{
          boxShadow: '0 20px 45px -10px rgba(43, 43, 43, 0.12), 0 0 30px -5px rgba(163, 0, 163, 0.15)',
        }}
      >
        {/* Graph Paper Grid Background on Draftboard */}
        <div className="absolute inset-0 bg-graph-paper opacity-85 pointer-events-none" />

        {/* Top Header Bar inside Draftboard */}
        <div className="relative z-10 flex items-center justify-between border-b border-neutral-200/80 pb-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#B53CB5] text-white flex items-center justify-center font-bold text-[10px] shadow-xs">
              ET
            </div>
            <div>
              <span className="text-xs font-bold text-[#2B2B2B] block leading-none">Pencil Draftpad</span>
              <span className="text-[9px] font-mono text-neutral-400">ARCH-STUDIO // MOHALI</span>
            </div>
          </div>

          {/* Quick preset selector */}
          <div className="flex items-center gap-1 bg-neutral-100/90 p-1 rounded-full border border-neutral-200/70 text-[10px]">
            <button
              onClick={(e) => { e.stopPropagation(); handleSelectPreset('wireframe'); }}
              className={`px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                activePreset === 'wireframe' 
                  ? 'bg-white text-[#B53CB5] shadow-xs' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Wireframe
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleSelectPreset('growth'); }}
              className={`px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                activePreset === 'growth' 
                  ? 'bg-white text-[#B53CB5] shadow-xs' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Prediction
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleSelectPreset('freehand'); }}
              className={`px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                activePreset === 'freehand' 
                  ? 'bg-white text-[#B53CB5] shadow-xs' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Freehand
            </button>
          </div>
        </div>

        {/* The Drawing Canvas */}
        <canvas
          ref={canvasRef}
          width={380}
          height={280}
          className="relative z-10 w-full h-[76%] rounded-xl bg-white/40 border border-neutral-200/50 shadow-inner"
        />

        {/* Bottom Control Strip */}
        <div className="relative z-10 mt-2 flex items-center justify-between text-[11px] text-neutral-600 pt-1">
          <div className="flex items-center gap-2">
            <span className="font-hand text-xs text-[#B53CB5]">
              {isHovering ? '✎ Drawing with Cursor' : '✨ Animated Blueprint Drawing'}
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setStrokeColor(strokeColor === 'purple' ? 'graphite' : 'purple');
              }}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-neutral-200 bg-white/70 hover:border-[#B53CB5] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: strokeColor === 'purple' ? '#B53CB5' : '#4A4A4A' }} 
              />
              <span>{strokeColor === 'purple' ? '#B53CB5 Ink' : 'Graphite'}</span>
            </button>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); clearCanvas(); }}
            className="p-1 rounded-md text-neutral-500 hover:text-[#B53CB5] hover:bg-white/80 transition-colors cursor-pointer"
            title="Clear Draft"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            ANIMATED REALISTIC PENCIL CURSOR OVERLAY
           ───────────────────────────────────────────────────────────── */}
        <div
          className="absolute pointer-events-none z-30 transition-transform duration-75 ease-out"
          style={{
            left: `${pencilPos.x}px`,
            top: `${pencilPos.y}px`,
            transform: 'translate(-5px, -50px)',
          }}
        >
          {/* Detailed SVG Pencil with tilted wooden body, brass ferrule, pink eraser and graphite tip */}
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md transform -rotate-12"
          >
            {/* Eraser */}
            <path d="M42 6 L49 13 L45 17 L38 10 Z" fill="#FCA5A5" stroke="#4A4A4A" strokeWidth="1" />
            {/* Brass Ferrule */}
            <path d="M38 10 L45 17 L41 21 L34 14 Z" fill="#FBBF24" stroke="#4A4A4A" strokeWidth="1" />
            {/* Wooden Hexagonal Pencil Body in #B53CB5 Purple */}
            <path d="M34 14 L41 21 L16 46 L9 39 Z" fill="#B53CB5" stroke="#4A4A4A" strokeWidth="1" />
            {/* Body Facet Shadow */}
            <path d="M30 18 L34 22 L13 43 L9 39 Z" fill="#820082" />
            {/* Sharpened Wood Cone */}
            <path d="M9 39 L16 46 L5 51 Z" fill="#FDE68A" stroke="#4A4A4A" strokeWidth="1" />
            {/* Graphite / Ink Lead Tip */}
            <path d="M7 49 L9 50 L5 51 Z" fill={strokeColor === 'purple' ? '#B53CB5' : '#1F2937'} />
          </svg>

          {/* Graphite Drawing Sparkle / Dust Particle */}
          <div 
            className="absolute left-[3px] top-[48px] w-2 h-2 rounded-full bg-[#B53CB5] animate-ping opacity-75"
          />
        </div>

      </div>

      {/* Floating Sticky Note in bottom-left */}
      <div className="absolute -bottom-4 -left-4 z-20 px-3 py-2 rounded-xl sticky-note-purple border border-purple-200/80 shadow-md font-hand text-[11px] text-[#B53CB5] rotate-[-2deg] pointer-events-none">
        ✏️ &ldquo;Drawn on paper, deployed in code.&rdquo;
      </div>

      {/* Floating Speed Chip in top-right */}
      <div className="absolute -top-4 -right-4 z-20 px-3 py-1.5 rounded-full bg-white/95 border border-purple-200 text-[#B53CB5] text-[11px] font-bold shadow-lg flex items-center gap-1.5 rotate-[2deg] pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-[#B53CB5]" />
        <span>Sub-Second Engine</span>
      </div>

    </div>
  );
};
