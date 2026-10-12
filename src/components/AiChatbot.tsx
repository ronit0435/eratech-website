
import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  X,
  ArrowUpRight,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface AiChatbotProps {
  onOpenQuote: () => void;
  onNavigateContact?: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({
  onOpenQuote,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text:
        "Hello! Welcome to EraTech. I'm your AI assistant. I can help you explore our services, understand our technology stack, and connect with our team.",
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    {
      label: '💡 Pricing Packages',
      prompt: 'What are your pricing packages?',
    },
    {
      label: '⚡ Web Development',
      prompt: 'What web development services do you offer?',
    },
    {
      label: '📈 Marketing & SEO',
      prompt: 'Tell me about your digital marketing and SEO services.',
    },
    {
      label: '👤 Contact EraTech',
      prompt: 'How can I contact EraTech?',
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAiReply = (query: string): string => {
    const q = query.toLowerCase();

    if (
      q.includes('price') ||
      q.includes('pricing') ||
      q.includes('cost') ||
      q.includes('estimate') ||
      q.includes('package') ||
      q.includes('rate') ||
      q.includes('budget')
    ) {
      return (
        `EraTech offers website development and digital marketing packages for different business needs.\n\n` +
        `Our pricing packages are displayed in the Pricing section of our Services page. Please refer to those cards for the current USD prices and package details.\n\n` +
        `Would you like to submit an inquiry about a package? Click the "Instant Quote" button below, and you can share your project requirements with our team.`
      );
    }

    if (
      q.includes('stack') ||
      q.includes('tech') ||
      q.includes('code') ||
      q.includes('framework') ||
      q.includes('website') ||
      q.includes('web development') ||
      q.includes('app')
    ) {
      return (
        `EraTech helps businesses build modern digital experiences.\n\n` +
        `Our services can include:\n\n` +
        `• Responsive website design and development\n` +
        `• Custom web applications\n` +
        `• Frontend development with React and TypeScript\n` +
        `• Backend and database integrations\n` +
        `• Website performance and user experience improvements\n` +
        `• E-commerce website development\n\n` +
        `Tell us about your project through our inquiry form to discuss the right solution for your business.`
      );
    }

    if (
      q.includes('seo') ||
      q.includes('market') ||
      q.includes('ads') ||
      q.includes('google') ||
      q.includes('meta') ||
      q.includes('instagram') ||
      q.includes('facebook')
    ) {
      return (
        `EraTech provides digital marketing solutions to help businesses improve their online visibility and reach their target audience.\n\n` +
        `Our services may include:\n\n` +
        `• Search Engine Optimization (SEO)\n` +
        `• Google Business Profile optimization\n` +
        `• Google Ads and paid campaign management\n` +
        `• Social media marketing\n` +
        `• Website performance and conversion improvements\n` +
        `• Campaign reporting and performance analysis\n\n` +
        `Contact our team to discuss the services that best fit your goals.`
      );
    }

    if (
      q.includes('ronit') ||
      q.includes('call') ||
      q.includes('founder') ||
      q.includes('phone') ||
      q.includes('email') ||
      q.includes('contact') ||
      q.includes('mohali') ||
      q.includes('whatsapp')
    ) {
      return (
        `You can contact EraTech using the contact information below:\n\n` +
        `Phone / WhatsApp: ${COMPANY_INFO.phone}\n` +
        `Email: ${COMPANY_INFO.email}\n` +
        `Location: Mohali, India\n\n` +
        `You can also use the Contact page to send your inquiry. Our team can then discuss your requirements and the next steps.`
      );
    }

    if (
      q.includes('future prediction') ||
      q.includes('tagline') ||
      q.includes('vision')
    ) {
      return (
        `EraTech's creed is: "We Believe in Future Prediction".\n\n` +
        `Our approach focuses on understanding business goals, anticipating user needs, building scalable digital solutions, and adapting to changing technology and market trends.`
      );
    }

    return (
      `Thanks for reaching out to EraTech!\n\n` +
      `We help businesses with website development, custom digital solutions, and digital marketing.\n\n` +
      `You can ask me about our services, pricing packages, or contact details. If you already have a project in mind, use the "Instant Quote" button to submit your requirements.\n\n` +
      `You can also contact us at ${COMPANY_INFO.phone}.`
    );
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend ?? input).trim();

    if (!query || isTyping) {
      return;
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      const replyText = generateAiReply(query);

      const aiReply: Message = {
        id: `${Date.now()}-ai`,
        sender: 'ai',
        text: replyText,
        timestamp: 'Just now',
      };

      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 650);
  };

  const handleRestart = () => {
    setMessages([
      {
        id: `${Date.now()}`,
        sender: 'ai',
        text:
          "Chat restarted! How can EraTech help with your project today?",
        timestamp: 'Just now',
      },
    ]);

    setInput('');
    setIsTyping(false);
  };

  const handleOpenQuote = () => {
    setIsOpen(false);
    onOpenQuote();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
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
                  <span className="font-bold text-xs tracking-tight">
                    EraTech AI Assistant
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <span className="text-[10px] text-neutral-300 font-mono block">
                  Digital Solutions Assistant
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleRestart}
                title="Restart chat"
                aria-label="Restart chat"
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F4F4F2]/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user'
                    ? 'items-end'
                    : 'items-start'
                }`}
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
              <div
                className="flex items-center gap-1.5 p-2.5 rounded-2xl bg-white border border-neutral-200/80 w-24"
                aria-label="Assistant is typing"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B53CB5] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B53CB5] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B53CB5] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white/80 border-t border-neutral-200/70 overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickPrompts.map((qp) => (
              <button
                key={qp.label}
                type="button"
                onClick={() => handleSend(qp.prompt)}
                disabled={isTyping}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-neutral-100 hover:bg-purple-50 hover:text-[#B53CB5] border border-neutral-200 hover:border-purple-300 text-[10px] font-medium text-neutral-700 transition-all cursor-pointer shadow-2xs shrink-0 disabled:opacity-50"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Contact and Quote Actions */}
          <div className="px-3 py-1.5 bg-[#FAF0FA] border-t border-purple-100 flex items-center justify-between text-[10px] gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-[#B53CB5] hover:underline flex items-center gap-1 font-semibold min-w-0"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span className="truncate">
                Call: {COMPANY_INFO.phone}
              </span>
            </a>

            <button
              type="button"
              onClick={handleOpenQuote}
              className="font-bold text-[#B53CB5] hover:underline flex items-center gap-0.5 cursor-pointer shrink-0"
            >
              <span>Instant Quote</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Message Input */}
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
              className="flex-1 min-w-0 px-3.5 py-2 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-[#B53CB5] focus:outline-none transition-all shadow-2xs"
              aria-label="Message the EraTech assistant"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2 rounded-xl bg-[#B53CB5] hover:bg-[#820082] text-white disabled:opacity-40 transition-colors shadow-xs cursor-pointer"
              title="Send"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        /* Floating Chat Button */
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-purple-200 text-[#2B2B2B] text-xs font-semibold shadow-lg backdrop-blur-md animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#B53CB5] animate-pulse" />
            <span>Chat with EraTech AI</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-[52px] h-[52px] rounded-full bg-[#B53CB5] hover:bg-[#820082] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer group relative"
            aria-label="Open AI Assistant"
            style={{
              boxShadow:
                '0 8px 25px -4px rgba(163, 0, 163, 0.5), 0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span className="absolute inset-0 rounded-full bg-[#B53CB5] animate-ping opacity-25" />

            <Bot className="w-6 h-6 relative z-10 transition-transform group-hover:rotate-12" />

            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-neutral-900 flex items-center justify-center text-[9px] font-extrabold shadow-xs">
              ✨
            </div>
          </button>
        </div>
      )}
    </div>
  );
};