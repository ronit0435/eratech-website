
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  X,
  CheckCircle2,
  Send,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId = null,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });

  const selectedPlan = PRICING_PLANS.find(
    (plan) => plan.id === selectedPlanId
  );

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen, selectedPlanId]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 55,
        origin: { y: 0.6 },
      });
    } catch {
      // The form can still work without confetti.
    }

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    [
      'Hello EraTech, I would like to discuss a project.',
      `Selected Package: ${selectedPlan?.title ?? 'General Inquiry'}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Project Details: ${formData.details || 'Not provided'}`,
    ].join('\n')
  );

  const resetAndClose = () => {
    setSubmitted(false);

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      details: '',
    });

    onClose();
  };

  const inputClass =
    'w-full px-3.5 py-3 text-sm rounded-xl bg-white/45 backdrop-blur-md border border-white/75 text-[#2B2B2B] placeholder:text-neutral-500 shadow-[0_4px_18px_rgba(43,43,43,0.04)] transition-all duration-300 ease-out hover:bg-white/65 hover:border-[#B53CB5]/60 hover:shadow-[0_8px_24px_rgba(181,60,181,0.09)] focus:bg-white/80 focus:outline-none focus:border-[#B53CB5] focus:ring-4 focus:ring-[#B53CB5]/15';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17121b]/45 backdrop-blur-md animate-in fade-in duration-300">
      {/* Background overlay */}
      <button
        type="button"
        aria-label="Close quote form"
        onClick={onClose}
        className="absolute inset-0 w-full h-full cursor-default"
      />

      {/* Glass modal */}
      <div className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[1.75rem] bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_28px_100px_rgba(20,15,25,0.28)] p-6 md:p-8 transition-all duration-300 animate-in zoom-in-95">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-500 hover:text-[#B53CB5] hover:bg-white/70 transition-all duration-300 hover:rotate-90 hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success screen */
          <div className="py-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2B2B2B]">
                Inquiry Submitted!
              </h2>

              <p className="text-sm text-neutral-600 max-w-md mx-auto mt-3 leading-relaxed">
                Thank you,{' '}
                <strong className="text-neutral-900">
                  {formData.name}
                </strong>
                . Your project details are ready for review.
                You can continue the conversation with our team
                using WhatsApp below.
              </p>
            </div>

            {selectedPlan && (
              <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 text-left">
                <p className="text-[11px] uppercase tracking-wider font-bold text-[#B53CB5]">
                  Selected Package
                </p>

                <h3 className="mt-1 text-base font-bold text-[#2B2B2B]">
                  {selectedPlan.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-600">
                  {selectedPlan.description}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/918872282955?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20ba59] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Continue on WhatsApp
                <Send className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-3 rounded-xl bg-white/55 border border-white/70 text-neutral-800 text-sm font-semibold hover:bg-white/85 transition-all duration-300 hover:-translate-y-0.5"
              >
                Close Window
              </button>
            </div>

            <p className="text-xs text-neutral-500">
              This on-screen confirmation does not send an email
              automatically.
            </p>
          </div>
        ) : (
          /* Inquiry form */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="pr-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B53CB5] uppercase tracking-wide">
                <FileText className="w-4 h-4" />
                <span>Project Inquiry</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2B2B2B] tracking-tight mt-2">
                {selectedPlan
                  ? 'Tell Us About Your Project'
                  : 'Let’s Discuss Your Project'}
              </h2>

              <p className="text-sm text-neutral-600 mt-2">
                Share your contact details and project requirements.
                Our team can review the scope with you.
              </p>
            </div>

            {/* Selected package: no price shown */}
            {selectedPlan && (
              <div className="rounded-xl border border-[#B53CB5]/25 bg-white/45 backdrop-blur-md p-4 shadow-[0_8px_24px_rgba(181,60,181,0.06)]">
                <div className="text-[11px] font-bold text-[#B53CB5] uppercase tracking-wider">
                  Package Selected
                </div>

                <h3 className="mt-1 text-base font-bold text-[#2B2B2B]">
                  {selectedPlan.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                  {selectedPlan.description}
                </p>
              </div>
            )}

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                className={inputClass}
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    name: event.target.value,
                  })
                }
              />

              <input
                className={inputClass}
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Work Email *"
                value={formData.email}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    email: event.target.value,
                  })
                }
              />

              <input
                className={inputClass}
                type="tel"
                name="phone"
                autoComplete="tel"
                required
                placeholder="Phone / WhatsApp Number *"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    phone: event.target.value,
                  })
                }
              />

              <input
                className={inputClass}
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Company / Brand Name"
                value={formData.company}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    company: event.target.value,
                  })
                }
              />
            </div>

            {/* Project requirements */}
            <div>
              <label
                htmlFor="project-details"
                className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2"
              >
                Project Details
              </label>

              <textarea
                id="project-details"
                name="details"
                className={`${inputClass} resize-y`}
                rows={4}
                placeholder="Describe the features, pages, integrations, goals, or other requirements you need..."
                value={formData.details}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    details: event.target.value,
                  })
                }
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-xl bg-[#2B2B2B] hover:bg-[#B53CB5] text-white text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,60,181,0.25)] active:translate-y-0 active:scale-[0.99] shadow-md flex items-center justify-center gap-2"
            >
              Submit Inquiry
              <Send className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-neutral-500 text-center">
              No price calculator, budget field, or timeline selector.
              Pricing remains on the service cards.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};