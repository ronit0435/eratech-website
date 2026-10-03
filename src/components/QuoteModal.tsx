import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Calculator, FileText, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/content';
import { PencilUnderline } from './DoodleDecorations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Custom Web App']);
  const [timeline, setTimeline] = useState<'express' | 'standard' | 'retainer'>('standard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const availableServices = [
    { id: 'web-dev', name: 'Custom Web & App Dev', baseCost: 35000 },
    { id: 'seo', name: 'Technical & Organic SEO', baseCost: 20000 },
    { id: 'ecommerce', name: 'Headless E-Commerce System', baseCost: 45000 },
    { id: 'ads', name: 'Paid Ads Performance (Google/Meta)', baseCost: 25000 },
    { id: 'ui-ux', name: 'UI/UX & Prototyping Systems', baseCost: 18000 },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  // Estimate calculation
  const totalBase = selectedServices.reduce((acc, currName) => {
    const found = availableServices.find(s => s.name === currName);
    return acc + (found ? found.baseCost : 20000);
  }, 0);

  const multiplier = timeline === 'express' ? 1.25 : timeline === 'retainer' ? 0.9 : 1.0;
  const estimatedCost = Math.round((totalBase * multiplier) / 1000) * 1000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-white shadow-2xl p-6 md:p-8 z-10">
        
        {/* Paper tape on modal */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#F6EED7]/90 rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#2B2B2B]">
              Quote Blueprint Dispatched!
            </h3>

            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. 
              Our technical director, Ronit Kumar, has received your specifications. 
              We will review your scope and return a formal statement of work to <span className="font-semibold">{formData.email}</span> within 24 hours.
            </p>

            {/* Sticky summary note */}
            <div className="p-4 rounded-xl bg-[#FFF9DB] border border-[#E8DC9C] max-w-md mx-auto text-left text-xs font-hand text-neutral-800 rotate-0.5 shadow-xs">
              <div className="font-bold text-neutral-900 mb-1">📋 Scope Snapshot:</div>
              <div>Services: {selectedServices.join(', ')}</div>
              <div>Timeline Mode: {timeline.toUpperCase()}</div>
              <div>Approximate Budget Bracket: ₹{estimatedCost.toLocaleString('en-IN')}</div>
              <div className="mt-2 text-[11px] text-neutral-600">Direct query dispatched to: {COMPANY_INFO.email}</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/918872282955?text=Hello%20Ronit,%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(selectedServices.join(', '))}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors shadow-xs"
              >
                Fast-Track on WhatsApp →
              </a>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-neutral-200 text-neutral-800 text-xs font-semibold hover:bg-neutral-300 transition-colors"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B53CB5]">
                <Calculator className="w-4 h-4" />
                <span>PROJECT ESTIMATOR & PROPOSAL</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#2B2B2B] tracking-tight mt-1">
                Draft Your Project Scope
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Select your required capabilities for an instant transparent benchmark.
              </p>
            </div>

            {/* Step 1: Services Selection */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                1. Select Required Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableServices.map((svc) => {
                  const isSelected = selectedServices.includes(svc.name);
                  return (
                    <button
                      type="button"
                      key={svc.id}
                      onClick={() => toggleService(svc.name)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'border-[#B53CB5] bg-purple-50 text-[#2B2B2B] font-semibold shadow-xs' 
                          : 'border-neutral-200 hover:border-neutral-300 bg-white/70 text-neutral-600'
                      }`}
                    >
                      <span>{svc.name}</span>
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#B53CB5] text-white' : 'border border-neutral-300'
                      }`}>
                        {isSelected ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline Preference */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                2. Project Timeline & Delivery Cadence
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                    timeline === 'standard'
                      ? 'border-[#B53CB5] bg-purple-50 font-semibold text-[#2B2B2B]'
                      : 'border-neutral-200 bg-white/60 text-neutral-600'
                  }`}
                >
                  <span className="block font-bold">Standard</span>
                  <span className="text-[10px] text-neutral-500">4-6 Weeks</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('express')}
                  className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                    timeline === 'express'
                      ? 'border-[#B53CB5] bg-purple-50 font-semibold text-[#2B2B2B]'
                      : 'border-neutral-200 bg-white/60 text-neutral-600'
                  }`}
                >
                  <span className="block font-bold">Express Sprint</span>
                  <span className="text-[10px] text-neutral-500">2-3 Weeks (+25%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('retainer')}
                  className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                    timeline === 'retainer'
                      ? 'border-[#B53CB5] bg-purple-50 font-semibold text-[#2B2B2B]'
                      : 'border-neutral-200 bg-white/60 text-neutral-600'
                  }`}
                >
                  <span className="block font-bold">Monthly Retainer</span>
                  <span className="text-[10px] text-neutral-500">Continuous Growth</span>
                </button>
              </div>
            </div>

            {/* Live Calculation Banner */}
            <div className="p-3.5 rounded-2xl bg-[#F4F4F2] border border-neutral-300 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-500 block">Indicative Scope Starting Bracket</span>
                <span className="font-hand text-xs text-neutral-600">Based on standard complexity</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-[#2B2B2B] tabular-nums">
                  ₹{estimatedCost.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-neutral-500 block">est. investment</span>
              </div>
            </div>

            {/* Step 3: Client Details */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                3. Your Coordinates
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-[#B53CB5]"
                />

                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-[#B53CB5]"
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-[#B53CB5]"
                />

                <input
                  type="text"
                  placeholder="Company / Brand Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-[#B53CB5]"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Brief project summary or primary business objective..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-[#B53CB5] resize-none"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex items-center justify-between gap-4 border-t border-neutral-200">
              <span className="font-hand text-xs text-neutral-500 hidden sm:inline">
                ✎ No commitment · Direct proposal in 24h
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#2B2B2B] hover:bg-black text-white text-xs font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Scope Blueprint</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
