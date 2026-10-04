import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CrosshairMark } from '../components/DoodleDecorations';
import { AnimatedPaperSky } from '../components/AnimatedPaperSky';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate: _onNavigate, onOpenQuote: _onOpenQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web & Application Development',
    budget: '₹20,000 - ₹35,000 (Growth Web Architecture)',
    timeline: 'Standard (3-4 Weeks)',
    preferredChannel: 'WhatsApp',
    ndaRequested: false,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid business email.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    if (!formData.message.trim() || formData.message.length < 8) {
      errs.message = 'Please provide a brief summary of your project goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    // 1. Save inquiry in Supabase
    const { error: dbError } = await supabase
      .from("contact_inquiries")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          preferred_channel: formData.preferredChannel,
          message: formData.message,
          nda_requested: formData.ndaRequested,
        },
      ]);

    if (dbError) {
      console.error("Database error:", dbError);
      alert("Something went wrong while submitting your inquiry.");
      return;
    }

    // 2. Send email notification
    const { error: emailError } = await supabase.functions.invoke(
      "send-contact-email",
      {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          preferredChannel: formData.preferredChannel,
          message: formData.message,
          ndaRequested: formData.ndaRequested,
        },
      }
    );

    if (emailError) {
      console.error("Email error:", emailError);

      // Database entry is already saved,
      // so don't tell user that the whole submission failed.
      alert(
        "Your inquiry was submitted successfully, but email notification could not be sent."
      );
      return;
    }

    // 3. Success
    setSubmitted(true);

    try {
      confetti({
        particleCount: 85,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative w-full py-10 px-4 md:px-8 overflow-hidden">
      
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />

      {/* Animated Floating Paper Sky (Airplanes, Supersonic Jet & Jupiter with Rings) */}
      <AnimatedPaperSky />

      <div className="relative max-w-7xl mx-auto z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5]">
            <CrosshairMark />
            <span>Direct Consultation & Studio Presence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B2B2B] tracking-tight">
            Connect with EraTech
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Discuss your web engineering, custom software, or digital marketing requirements directly with Ronit in Mohali, Punjab.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2-COLUMN EQUAL-HEIGHT STRETCHED LAYOUT:
            Left Form stretches to match right column (HQ details + Map) equally!
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Form (Full Height Stretched to touch Map baseline) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-7 md:p-9 rounded-3xl glass-card border border-white shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between card-interactive">
              
              {/* Top Tape decoration */}
              <div className="absolute -top-3 left-10 w-28 h-6 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 shadow-xs pointer-events-none" />

              {submitted ? (
                <div className="py-16 text-center space-y-5 my-auto">
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-[#B53CB5] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2B2B]">
                    Consultation Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. 
                    Your query has been logged and assigned directly to Ronit. We will connect via <span className="font-semibold">{formData.preferredChannel}</span> ({formData.phone}) within 24 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF0FA] border border-purple-200 max-w-md mx-auto text-left text-xs font-hand text-[#B53CB5] rotate-0.5 shadow-xs">
                    <div>📍 Logged at Mohali, Punjab Studio</div>
                    <div>Direct telephone: {COMPANY_INFO.phone}</div>
                    <div>Direct email: {COMPANY_INFO.email}</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/918872282955?text=Hello%20Ronit,%20I%20just%20sent%20a%20message%20regarding%20${encodeURIComponent(formData.service)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors shadow-xs"
                    >
                      Follow up on WhatsApp →
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Custom Web & Application Development',
                          budget: '₹20,000 - ₹35,000 (Growth Web Architecture)',
                          timeline: 'Standard (3-4 Weeks)',
                          preferredChannel: 'WhatsApp',
                          ndaRequested: false,
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-neutral-200 text-neutral-800 text-xs font-semibold hover:bg-neutral-300 transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] tracking-tight">
                        Send a Project Inquiry
                      </h2>
                      <span className="text-[10px] font-mono text-[#B53CB5] font-semibold bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                        DIRECT ROUTE
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5 font-mono">
                      ALL INQUIRIES ROUTED DIRECTLY TO RONIT201103@GMAIL.COM
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Harpreet Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs"
                      />
                      {errors.name && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. harpreet@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs"
                      />
                      {errors.email && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Phone & Primary Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs"
                      />
                      {errors.phone && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Primary Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs cursor-pointer"
                      >
                        <option>Custom Web & Application Development</option>
                        <option>Technical & Organic SEO Architecture</option>
                        <option>High-Conversion Headless E-Commerce</option>
                        <option>Performance Paid Ads (Google & Meta)</option>
                        <option>UI/UX Prototyping & Design Systems</option>
                        <option>Website Maintenance & Speed Optimization</option>
                      </select>
                    </div>
                  </div>

                  {/* Investment Bracket & Target Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Estimated Investment
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs cursor-pointer"
                      >
                        <option>₹12,000 - ₹20,000 (Starter Web Sprint)</option>
                        <option>₹20,000 - ₹35,000 (Growth Web Architecture)</option>
                        <option>₹35,000 - ₹60,000 (Custom Portal / Headless Store)</option>
                        <option>₹15,000 / month (Ongoing Growth & SEO Retainer)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs cursor-pointer"
                      >
                        <option>Sprint (1 - 2 Weeks)</option>
                        <option>Standard (3 - 4 Weeks)</option>
                        <option>Comprehensive (6 - 8 Weeks)</option>
                        <option>Flexible / Ongoing</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Channel */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Preferred Communication Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Email', 'Phone Call'].map((ch) => (
                        <button
                          key={ch}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredChannel: ch })}
                          className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer text-center ${
                            formData.preferredChannel === ch
                              ? 'bg-purple-50 border-[#B53CB5] text-[#B53CB5] shadow-xs font-bold'
                              : 'bg-white/80 border-neutral-300 text-neutral-600 hover:border-neutral-400'
                          }`}
                        >
                          {ch}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Summary & Objectives (Increased height to balance container length) */}
                  <div className="flex-1 flex flex-col">
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Project Summary & Objectives *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your brand, current challenges, technical prerequisites, and target launch timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 min-h-[110px] px-3.5 py-2.5 text-xs rounded-xl bg-white/90 border border-neutral-300 hover:border-[#B53CB5] focus:border-[#B53CB5] focus:ring-2 focus:ring-[#B53CB5]/20 focus:outline-none transition-all shadow-2xs resize-none"
                    />
                    {errors.message && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.message}</span>}
                  </div>

                  {/* NDA Request Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="ndaCheck"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      className="w-4 h-4 rounded text-[#B53CB5] focus:ring-[#B53CB5] border-neutral-300 cursor-pointer accent-[#B53CB5]"
                    />
                    <label htmlFor="ndaCheck" className="text-xs text-neutral-600 cursor-pointer select-none">
                      Please send a standard Mutual Non-Disclosure Agreement (NDA) before call.
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-200/70">
                    <span className="font-hand text-xs text-[#B53CB5]">
                      ✎ Strict confidentiality · Verified Mohali presence
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#2B2B2B] hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 group hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Scope Inquiry</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right: Direct Coordinates & Office Details (Stacked with Map) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards */}
            <div className="p-7 rounded-3xl glass-card border border-white shadow-md hover:shadow-2xl transition-all duration-300 space-y-5 card-interactive">
              
              <div className="border-b border-neutral-200/80 pb-3">
                <span className="font-hand text-xs text-[#B53CB5]">📍 Verified Presence</span>
                <h3 className="text-xl font-bold text-[#2B2B2B] mt-0.5">
                  EraTech Headquarters
                </h3>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Mohali, Punjab, India
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-3.5 text-xs">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#B53CB5] shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-700 block">Direct Telephone</span>
                    <a 
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-sm font-extrabold text-[#2B2B2B] hover:text-[#B53CB5] transition-colors tabular-nums"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#B53CB5] shrink-0 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-700 block">Electronic Mail</span>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-semibold text-[#2B2B2B] hover:text-[#B53CB5] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-[10px] text-neutral-500 block">Direct access to Ronit</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#25D366] shrink-0 shadow-2xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-700 block">WhatsApp Fast Track</span>
                    <a 
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#25D366] hover:underline"
                    >
                      Contact with ET →
                    </a>
                    <span className="text-[10px] text-neutral-500 block">Typically answers in under 15 minutes</span>
                  </div>
                </div>

              </div>

              {/* Sticky note */}
              <div className="p-3 rounded-xl sticky-note-purple border border-purple-200 font-hand text-xs text-[#B53CB5] rotate-1 shadow-xs">
                ☕ In-person meetings in Mohali / Chandigarh scheduled by prior appointment.
              </div>

            </div>

            {/* Google Map of Mohali, Punjab Embed */}
            <div className="rounded-3xl overflow-hidden glass-card border border-white shadow-md hover:shadow-2xl transition-all duration-300 card-interactive">
              <div className="p-3 border-b border-neutral-200/80 bg-white/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B53CB5]" />
                  <span>Mohali, Punjab Map Embed</span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">PUNJAB, INDIA</span>
              </div>

              <div className="w-full h-64 bg-neutral-200 relative">
                <iframe
                  title="EraTech Office Location in Mohali, Punjab"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
