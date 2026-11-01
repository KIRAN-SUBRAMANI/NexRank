"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isValidEmail, isValidPhone, isNotEmpty } from "@/lib/validation";

export default function ContactForm({ config }) {
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const [errors, setErrors] = useState({});

  const servicesList = config?.services || [
    "Enterprise SEO & Content",
    "Next.js Web Development",
    "Google Ads & PPC Management",
    "Meta & Social Performance Ads",
    "Google Business Profile Optimization",
    "Full-Funnel Digital Growth",
  ];

  const budgetsList = config?.budgets || [
    "< ₹50,000",
    "₹50,000 – ₹1,50,000",
    "₹1,50,000 – ₹5,00,000",
    "₹5,00,000+ (Enterprise)",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: servicesList[0],
    budget: budgetsList[1] || budgetsList[0],
    message: "",
    consent: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceSelect = (svc) => {
    setFormData((prev) => ({ ...prev, service: svc }));
  };

  const handleBudgetSelect = (bgt) => {
    setFormData((prev) => ({ ...prev, budget: bgt }));
  };

  const validate = () => {
    const newErrors = {};
    if (!isNotEmpty(formData.firstName)) newErrors.firstName = "First name is required.";
    if (!isNotEmpty(formData.lastName)) newErrors.lastName = "Last name is required.";
    if (!isNotEmpty(formData.email)) {
      newErrors.email = "Email address is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid work email address.";
    }
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!isNotEmpty(formData.message)) {
      newErrors.message = "Please share a brief overview of your project requirements.";
    }
    if (!formData.consent) {
      newErrors.consent = "Please agree to the privacy policy to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(2,18,106,0.06)] relative overflow-hidden">
      {/* Top Brand Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#02126a] via-[#1E40AF] to-[#D4AF37]" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 px-4"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/80 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-md text-3xl">
              ✓
            </div>

            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <span>INQUIRY CONFIRMED</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
              We&apos;ve Received Your Project Brief!
            </h3>

            <p className="text-base text-slate-600 max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <span className="font-bold text-[#0F172A]">{formData.firstName}</span>. Our lead digital growth strategist will review your submission and reply with a tailored strategy roadmap within 2 hours.
            </p>

            {/* Next Steps Checklist */}
            <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-6 text-left border border-slate-200/80 mb-8 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                What Happens Next:
              </h4>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0F172A] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Immediate technical review of your domain and selected service ({formData.service}).</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0F172A] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Direct email follow-up from our senior strategist to schedule a 30-min discovery call.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0F172A] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Comprehensive proposal detailing deliverables, timelines, and KPI commitments.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  firstName: "",
                  lastName: "",
                  company: "",
                  email: "",
                  phone: "",
                  service: servicesList[0],
                  budget: budgetsList[1] || budgetsList[0],
                  message: "",
                  consent: true,
                });
              }}
              className="px-6 py-2.5 bg-slate-100 hover:bg-[#0F172A] text-slate-700 hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="inquiry-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">
                <span>PROJECT INQUIRY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
                Tell Us About Your Goals
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Share a few details below. We review every brief thoroughly and reply with a tailored strategy roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* 1. Interactive Service Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  1. Which Service Are You Interested In? <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((svc) => {
                    const isSelected = formData.service === svc;
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => handleServiceSelect(svc)}
                        className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer text-left border ${
                          isSelected
                            ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {isSelected && <span className="mr-1.5 text-[#D4AF37]">✓</span>}
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Interactive Budget Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  2. Approximate Monthly / Project Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetsList.map((bgt) => {
                    const isSelected = formData.budget === bgt;
                    return (
                      <button
                        type="button"
                        key={bgt}
                        onClick={() => handleBudgetSelect(bgt)}
                        className={`text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer text-center border ${
                          isSelected
                            ? "bg-amber-100/80 text-[#0F172A] border-amber-300 shadow-2xs font-extrabold"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {bgt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    First Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      errors.firstName
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                        : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
                    } outline-none text-[#0F172A]`}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Last Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      errors.lastName
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                        : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
                    } outline-none text-[#0F172A]`}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* 4. Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      errors.email
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                        : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
                    } outline-none text-[#0F172A]`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      errors.phone
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                        : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
                    } outline-none text-[#0F172A]`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* 5. Company / Website */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company Name or Current Website URL
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp / www.acme.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm font-medium text-[#0F172A] transition-all"
                />
              </div>

              {/* 6. Message / Project Requirements */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Scope &amp; Growth Objectives <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business goals, target timeline, key bottlenecks, or any specific requirements..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    errors.message
                      ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                      : "border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20"
                  } outline-none text-[#0F172A] resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 font-semibold mt-1">{errors.message}</p>
                )}
              </div>

              {/* 7. Privacy & Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-slate-300 text-[#0F172A] focus:ring-[#D4AF37] mt-0.5"
                  />
                  <span className="text-xs text-slate-500 leading-relaxed">
                    I consent to NexRank processing my details to prepare a preliminary audit and project proposal. We guarantee 100% confidentiality under mutual NDA.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-rose-500 font-semibold mt-1">{errors.consent}</p>
                )}
              </div>

              {/* 8. Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B3891D] hover:from-[#C59B27] hover:to-[#A37B18] text-[#0F172A] font-extrabold text-sm sm:text-base rounded-2xl shadow-[0_6px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Transmitting Your Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Strategy Consultation</span>
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-2 text-center text-[11px] text-slate-400 font-medium">
                🔒 Protected by 256-bit SSL encryption · Mutual NDA signed upon request · Zero spam policy
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
