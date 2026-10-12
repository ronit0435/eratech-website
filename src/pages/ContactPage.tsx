
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CrosshairMark } from '../components/DoodleDecorations';
import { AnimatedPaperSky } from '../components/AnimatedPaperSky';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

const BUDGET_OPTIONS = [
  '$199 — Starter Business Web Sprint (one-time)',
  '$499 — Growth Web & App Architecture (one-time)',
  '$299/month — Digital Marketing & SEO Growth',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: 'Custom Web & Application Development',
  budget: BUDGET_OPTIONS[1],
  timeline: 'Standard (3–4 Weeks)',
  preferredChannel: 'WhatsApp',
  ndaRequested: false,
  message: '',
};

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate: _onNavigate,
  onOpenQuote: _onOpenQuote,
}) => {
  const [formData, setFormData] = useState({ ...INITIAL_FORM });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputClass =
    'w-full px-4 py-3 text-sm rounded-xl bg-white/45 backdrop-blur-md border border-white/70 text-[#2B2B2B] placeholder:text-neutral-500 shadow-[0_4px_18px_rgba(43,43,43,0.04)] transition-all duration-300 ease-out hover:bg-white/65 hover:border-[#B53CB5]/60 hover:shadow-[0_8px_24px_rgba(181,60,181,0.09)] focus:bg-white/80 focus:border-[#B53CB5] focus:ring-4 focus:ring-[#B53CB5]/15 focus:outline-none';

  const updateField = <K extends keyof typeof INITIAL_FORM>(
    field: K,
    value: (typeof INITIAL_FORM)[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: '',
    }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = 'Please provide a valid email address.';
    }

    if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'Please provide a valid phone number.';
    }

    if (formData.message.trim().length < 8) {
      nextErrors.message =
        'Please provide at least 8 characters about your project.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // 1. Save the inquiry in Supabase.
      const { error: dbError } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            preferred_channel: formData.preferredChannel,
            message: formData.message.trim(),
            nda_requested: formData.ndaRequested,
          },
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        alert(
          'Your inquiry could not be saved. Please try again.'
        );
        return;
      }

      // 2. Send the notification through the existing Supabase function.
      const { error: emailError } =
        await supabase.functions.invoke('send-contact-email', {
          body: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            preferredChannel: formData.preferredChannel,
            message: formData.message.trim(),
            ndaRequested: formData.ndaRequested,
          },
        });

      if (emailError) {
        console.error('Email notification error:', emailError);

        // The inquiry has already been saved.
        setSubmitted(true);

        alert(
          'Your inquiry was saved, but the email notification failed. Our team may need to check the email service.'
        );

        return;
      }

      // 3. Successful submission.
      setSubmitted(true);

      try {
        confetti({
          particleCount: 85,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // Submission does not depend on confetti.
      }
    } catch (error) {
      console.error('Contact form error:', error);

      alert(
        'Something went wrong while submitting your inquiry. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ ...INITIAL_FORM });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="relative w-full py-10 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />
      <AnimatedPaperSky />

      <div className="relative max-w-7xl mx-auto z-10 space-y-12">
        {/* Page heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B53CB5]">
            <CrosshairMark />
            <span>Direct Consultation & Studio Presence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2B2B2B] tracking-tight">
            Connect with EraTech
          </h1>

          <p className="text-sm sm:text-base text-neutral-600">
            Discuss your web engineering, custom software, or digital
            marketing requirements with EraTech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-7 md:p-9 rounded-3xl glass-card border border-white/70 shadow-[0_24px_70px_rgba(43,43,43,0.12)] relative flex flex-col card-interactive backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_28px_80px_rgba(181,60,181,0.13)]">
              <div className="absolute -top-3 left-10 w-28 h-6 bg-[#F6EED7]/90 -rotate-1 border-x border-dashed border-[#C0B490]/70 pointer-events-none" />

              {submitted ? (
                <div className="py-12 text-center space-y-5 my-auto">
                  <div className="w-16 h-16 rounded-full bg-purple-100 text-[#B53CB5] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h2 className="text-2xl font-bold text-[#2B2B2B]">
                    Consultation Request Received!
                  </h2>

                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you,{' '}
                    <strong className="text-neutral-900">
                      {formData.name}
                    </strong>
                    . Your inquiry has been saved. Our team can contact
                    you using your preferred channel:{' '}
                    {formData.preferredChannel}.
                  </p>

                  <div className="p-4 rounded-xl bg-white/50 backdrop-blur-md border border-white/70 max-w-md mx-auto text-left text-xs text-[#B53CB5] space-y-1">
                    <p>Selected service: {formData.service}</p>
                    <p>Selected package: {formData.budget}</p>
                    <p>Timeline: {formData.timeline}</p>
                    <p>Company email: {COMPANY_INFO.email}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                    <a
                      href={`https://wa.me/918872282955?text=${encodeURIComponent(
                        `Hello EraTech, I submitted an inquiry.\nName: ${formData.name}\nService: ${formData.service}\nPackage: ${formData.budget}\nDetails: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Follow Up on WhatsApp →
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-3 rounded-xl bg-white/55 border border-white/70 text-neutral-800 text-xs font-semibold hover:bg-white/85 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B]">
                        Send a Project Inquiry
                      </h2>

                      <span className="text-[10px] font-mono text-[#B53CB5] font-semibold bg-white/50 px-2 py-1 rounded-md border border-white/80">
                        PROJECT FORM
                      </span>
                    </div>

                    <p className="text-xs text-neutral-500 mt-2">
                      Your inquiry will be saved to our contact database.
                    </p>
                  </div>

                  {/* Name and email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          updateField('name', e.target.value)
                        }
                        className={inputClass}
                      />

                      {errors.name && (
                        <p className="text-[10px] text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          updateField('email', e.target.value)
                        }
                        className={inputClass}
                      />

                      {errors.email && (
                        <p className="text-[10px] text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          updateField('phone', e.target.value)
                        }
                        className={inputClass}
                      />

                      {errors.phone && (
                        <p className="text-[10px] text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Primary Service *
                      </label>

                      <select
                        value={formData.service}
                        onChange={(e) =>
                          updateField('service', e.target.value)
                        }
                        className={`${inputClass} cursor-pointer`}
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

                  {/* Package and timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Preferred Package
                      </label>

                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          updateField('budget', e.target.value)
                        }
                        className={`${inputClass} cursor-pointer`}
                      >
                        {BUDGET_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Target Timeline
                      </label>

                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          updateField('timeline', e.target.value)
                        }
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option>Sprint (1–2 Weeks)</option>
                        <option>Standard (3–4 Weeks)</option>
                        <option>Comprehensive (6–8 Weeks)</option>
                        <option>Flexible / Ongoing</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred contact channel */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Preferred Communication Mode
                    </label>

                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Email', 'Phone Call'].map((channel) => (
                        <button
                          key={channel}
                          type="button"
                          onClick={() =>
                            updateField('preferredChannel', channel)
                          }
                          className={`py-2.5 text-xs font-semibold rounded-xl border transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                            formData.preferredChannel === channel
                              ? 'bg-white/80 border-[#B53CB5] text-[#B53CB5] font-bold shadow-[0_6px_18px_rgba(181,60,181,0.10)]'
                              : 'bg-white/35 border-white/70 text-neutral-600 hover:bg-white/65 hover:border-[#B53CB5]/50'
                          }`}
                        >
                          {channel}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project details */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Project Summary & Objectives *
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your brand, goals, required features, integrations, and expected timeline..."
                      value={formData.message}
                      onChange={(e) =>
                        updateField('message', e.target.value)
                      }
                      className={`${inputClass} resize-y min-h-[110px]`}
                    />

                    {errors.message && (
                      <p className="text-[10px] text-red-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* NDA */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="ndaCheck"
                      checked={formData.ndaRequested}
                      onChange={(e) =>
                        updateField('ndaRequested', e.target.checked)
                      }
                      className="w-4 h-4 mt-0.5 accent-[#B53CB5] cursor-pointer"
                    />

                    <label
                      htmlFor="ndaCheck"
                      className="text-xs text-neutral-600 cursor-pointer"
                    >
                      Please send a standard Mutual Non-Disclosure Agreement
                      (NDA) before our call.
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/60">
                    <span className="text-xs text-[#B53CB5]">
                      Your project requirements matter to us.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#2B2B2B] hover:bg-[#B53CB5] text-white text-xs font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,60,181,0.25)] active:translate-y-0 active:scale-[0.99] shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Company details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-3xl glass-card border border-white/70 shadow-[0_18px_50px_rgba(43,43,43,0.09)] space-y-5 backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_22px_58px_rgba(181,60,181,0.12)]">
              <div className="border-b border-neutral-200/80 pb-3">
                <span className="text-xs text-[#B53CB5]">
                  📍 Company Information
                </span>

                <h3 className="text-xl font-bold text-[#2B2B2B] mt-1">
                  EraTech Headquarters
                </h3>

                <p className="text-xs text-neutral-600 mt-1">
                  Mohali, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/55 backdrop-blur-md border border-white/80 text-[#B53CB5]">
                  <Phone className="w-4 h-4" />
                </div>

                <div>
                  <span className="font-bold text-xs text-neutral-700 block">
                    Phone Number
                  </span>

                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-sm font-bold text-[#2B2B2B] transition-colors duration-300 hover:text-[#B53CB5]"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Company email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/55 backdrop-blur-md border border-white/80 text-[#B53CB5]">
                  <Mail className="w-4 h-4" />
                </div>

                <div>
                  <span className="font-bold text-xs text-neutral-700 block">
                    Company Email
                  </span>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-[#2B2B2B] transition-colors duration-300 hover:text-[#B53CB5] break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/55 backdrop-blur-md border border-white/80 text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>

                <div>
                  <span className="font-bold text-xs text-neutral-700 block">
                    WhatsApp
                  </span>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#25D366] transition-all duration-300 hover:underline hover:opacity-80"
                  >
                    Contact EraTech →
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/45 backdrop-blur-md border border-white/70 text-xs text-[#B53CB5]">
                Please arrange in-person meetings in advance.
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden glass-card border border-white/70 shadow-[0_18px_50px_rgba(43,43,43,0.09)] transition-all duration-300 hover:shadow-[0_22px_58px_rgba(181,60,181,0.12)]">
              <div className="p-3 border-b border-neutral-200/80 bg-white/55 backdrop-blur-md flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B53CB5]" />
                  <span>Office Location</span>
                </div>

                <span className="font-mono text-[10px] text-neutral-400">
                  PUNJAB, INDIA
                </span>
              </div>

              <div className="w-full h-64 bg-neutral-200">
                <iframe
                  title="EraTech Office Location"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};