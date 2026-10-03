import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, Send, X, Minimize2, MessageSquare, ArrowUpRight, Phone, Mail, RotateCcw } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  quickAction?: { label: string; action: () => void };
}

interface AiChatbotProps {
  onOpenQuote: () => void;
  onNavigateContact?: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ onOpenQuote, onNavigateContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am EraTech's AI Architect. How can I help you predict and engineer your digital future today?",
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    { label: '💡 Estimate Project Cost', prompt: 'What are your web development pricing packages and cost estimates?' },
    { label: '⚡ Web & App Tech Stack', prompt: 'What technologies and frameworks do you use for web development?' },
    { label: '📈 Digital Marketing & SEO', prompt: 'How does EraTech handle SEO and performance marketing?' },
    { label: '👤 Connect with Ronit', prompt: 'How can I connect directly with founder Ronit in Mohali?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAiReply = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('price') || q.includes('cost') || q.includes('estimate') || q.includes('package') || q.includes('rate')) {
      return `At EraTech, our pricing is transparent and ROI-driven:\n\n• Starter Web Sprint: ₹12,000 – ₹20,000 (Sub-second landing page or portfolio)\n• Growth Architecture: ₹20,000 – ₹35,000 (Custom multi-page web app with CMS & forms)\n• Headless E-Commerce: ₹35,000 – ₹60,000 (Full online store with 1-click checkout)\n• SEO & Growth Retainers: Starting from ₹15,000 / month.\n\nWould you like me to open the instant Project Cost Calculator for you?`;
    }

    if (q.includes('stack') || q.includes('tech') || q.includes('code') || q.includes('framework')) {
      return `Our engineering architecture is built for maximum speed and longevity:\n\n• Frontend: React 19, Next.js, TypeScript, Tailwind CSS\n• Performance: Calibrated for 99+ Core Web Vitals and <500ms load times\n• Backend & Cloud: Node.js, Express, PostgreSQL, Cloud SQL, Edge APIs\n• E-Commerce: Headless Shopify, WooCommerce, custom Stripe & Razorpay workflows.`;
    }

    if (q.includes('seo') || q.includes('market') || q.includes('ads') || q.includes('google') || q.includes('meta')) {
      return `Our Digital Marketing division in Mohali combines technical search architecture with high-converting performance ads:\n\n• Technical Organic SEO with Schema.org rich snippets & Google Local Business optimization\n• Targeted Google Ads & Meta (Instagram/Facebook) campaigns engineered for low Cost Per Acquisition (CPA)\n• Analytics attribution and monthly ROI dashboards.`;
    }

    if (q.includes('ronit') || q.includes('call') || q.includes('founder') || q.includes('phone') || q.includes('email') || q.includes('contact') || q.includes('mohali')) {
      return `You can reach out directly to Ronit, Founder & Lead Architect at EraTech:\n\n📞 Phone / WhatsApp: ${COMPANY_INFO.phone}\n📧 Email: ${COMPANY_INFO.email}\n📍 Headquarters: Mohali, Punjab, India\n\nIn-person studio meetings are warmly scheduled by prior appointment!`;
    }

    if (q.includes('future prediction') || q.includes('tagline') || q.includes('vision')) {
      return `Our creed is: "We Believe in Future Prediction". To us, future prediction is not mystical—it is anticipating user behavior, architectural scalability, search engine algorithms, and market shifts before competitors do.`;
    }

    return `Thank you for asking! EraTech specializes in high-velocity Web Development, Custom Software Engineering, and data-driven Digital Marketing based in Mohali, Punjab. We can tailor a custom sprint to your exact business goals. Would you like to request a detailed scope quote or speak directly with Ronit at ${COMPANY_INFO.phone}?`;
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateAiReply(query);
      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          1. CHAT WINDOW (WHEN OPEN)
         ───────────────────────────────────────────────────────────── */}
      {isOpen ? (
        <div className="w-[92vw] sm:w-[380px] h-[520px] max-h-[82vh] rounded-3xl glass-card border border-white/95 shadow-2xl flex flex-col overflow-hidden bg-white/95 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#2B2B2B] to-[#1F1F1F] text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B53CB5] flex items-center justify-center text-white shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xs tracking-tight">EraTech AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[10px] text-neutral-300 font-mono block">Mohali Studio • Solution Architect</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: '1',
                      sender: 'ai',
                      text: "Chat cleared. What can EraTech build or optimize for you?",
                      timestamp: 'Just now',
                    }
                  ]);
                }}
                title="Restart chat"
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F4F4F2]/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#B53CB5] text-white rounded-tr-xs'
                      : 'bg-white text-neutral-800 border border-neutral-200/80 rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-neutral-400 mt-1 px-1 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2.5 rounded-2xl bg-white border border-neutral-200/80 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B53CB5] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B53CB5] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B53CB5] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-2 bg-white/80 border-t border-neutral-200/70 overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp.prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-neutral-100 hover:bg-purple-50 hover:text-[#B53CB5] border border-neutral-200 hover:border-purple-300 text-[10px] font-medium text-neutral-700 transition-all cursor-pointer shadow-2xs shrink-0"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Chat Actions Strip: Direct Call & Quote */}
          <div className="px-3 py-1.5 bg-[#FAF0FA] border-t border-purple-100 flex items-center justify-between text-[10px]">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-[#B53CB5] hover:underline flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="font-bold text-[#B53CB5] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Instant Quote</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Text Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-neutral-200/80 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about EraTech..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-[#B53CB5] focus:outline-none transition-all shadow-2xs"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-[#B53CB5] hover:bg-[#820082] text-white disabled:opacity-40 transition-colors shadow-xs cursor-pointer"
              title="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      ) : (
        /* ─────────────────────────────────────────────────────────────
            2. FLOATING LAUNCHER BUTTON (REPLACING WHATSAPP)
           ───────────────────────────────────────────────────────────── */
        <div className="flex items-center gap-2">
          {/* Tooltip badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-purple-200 text-[#2B2B2B] text-xs font-semibold shadow-lg backdrop-blur-md animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#B53CB5] animate-pulse" />
            <span>Chat with EraTech AI</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-13 h-13 rounded-full bg-[#B53CB5] hover:bg-[#820082] text-white shadow-xl hover:shadow-2xl hover:scale-108 transition-all duration-300 flex items-center justify-center cursor-pointer group relative"
            aria-label="Open AI Assistant"
            style={{
              boxShadow: '0 8px 25px -4px rgba(163, 0, 163, 0.5), 0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full bg-[#B53CB5] animate-ping opacity-25" />
            
            <Bot className="w-6 h-6 relative z-10 transition-transform group-hover:rotate-12" />
            
            {/* Sparkle badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-neutral-900 flex items-center justify-center text-[9px] font-extrabold shadow-xs">
              ✨
            </div>
          </button>
        </div>
      )}

    </div>
  );
};
