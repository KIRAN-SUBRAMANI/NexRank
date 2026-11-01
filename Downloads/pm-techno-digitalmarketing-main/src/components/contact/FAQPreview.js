"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPreview({ faqs }) {
  const [openId, setOpenId] = useState(faqs?.[0]?.id || null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const defaultFaqs = [
    {
      id: "faq-1",
      question: "How quickly will I hear back after submitting an inquiry?",
      answer:
        "Every inquiry submitted through our contact portal is routed directly to a senior digital strategist. We guarantee a thoughtful, preliminary analysis within 2 business hours.",
    },
    {
      id: "faq-2",
      question: "Do you sign Non-Disclosure Agreements (NDAs) before discussion?",
      answer:
        "Yes, absolutely. We frequently handle proprietary algorithms, pre-launch SaaS products, and enterprise trade secrets. We are happy to execute a bilateral NDA before your discovery call.",
    },
    {
      id: "faq-3",
      question: "Can you provide a preliminary audit of our current SEO or website?",
      answer:
        "Yes. Ahead of our 30-minute discovery session, our team prepares an initial technical audit highlighting key indexing bottlenecks, conversion drop-offs, and immediate growth opportunities.",
    },
    {
      id: "faq-4",
      question: "What engagement models do you support?",
      answer:
        "We offer dedicated monthly growth retainers for ongoing SEO and performance marketing, as well as fixed-scope milestone sprints for Next.js web application development.",
    },
  ];

  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section className="w-full py-10 md:py-14 bg-white border-b border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>COMMON INQUIRIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Everything you need to know about initiating a partnership with NexRank.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-8">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openId === (faq.id || idx);
            return (
              <motion.div
                key={faq.id || idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-[#D4AF37]/60 shadow-md"
                    : "bg-white hover:bg-slate-50 border-slate-200/80 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id || idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#D4AF37] text-[#0F172A] rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* View All FAQs Link */}
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#02126a] hover:text-[#D4AF37] transition-colors"
          >
            <span>Have more questions? Browse our complete FAQ library</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
