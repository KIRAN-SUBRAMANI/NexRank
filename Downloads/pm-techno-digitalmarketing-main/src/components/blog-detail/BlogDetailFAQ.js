"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function BlogDetailFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
 <section className="py-10 md: bg-bg-secondary border-t border-border-divider">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Answers to common questions about this topic.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-surface rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-[#D4AF37] shadow-md' : 'border-border-divider hover:border-border-divider'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold pr-8 ${openIndex === index ? 'text-[#D4AF37]' : 'text-text-primary'}`}>
                  {faq.question}
                </span>
                <ChevronDownIcon 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#D4AF37]' : 'text-text-secondary'
                  }`}
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-text-secondary leading-relaxed pt-2 border-t border-border-divider">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
