"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CareerFAQ({ data }) {
  if (!data || !data.faqs || data.faqs.length === 0) return null;

  const { badge, heading, description, faqs } = data;

  return (
    <section
      id="career-faq"
      className="w-full py-10 md:py-14 bg-white relative overflow-hidden border-b border-slate-100"
      aria-labelledby="career-faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>{badge || "FREQUENTLY ASKED QUESTIONS"}</span>
          </div>

          <h2
            id="career-faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 font-sans"
          >
            {heading || "Answers to your career questions."}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {description || "Everything you need to know about our interview process, remote culture, and onboarding."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" role="list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      role="listitem"
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-[#D4AF37]/60 shadow-md ring-1 ring-[#D4AF37]/20"
          : "border-slate-200/80 hover:border-slate-300 shadow-xs"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 group"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors leading-snug">
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
            open ? "bg-[#D4AF37] text-[#0F172A] rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed pt-1 border-t border-slate-100 font-normal">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
