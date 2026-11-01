"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQAccordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items || faq.items.length === 0) return null;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
 <section className="py-10 w-full lg: bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-700 mb-6">
              {faq.heading}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-bg-secondary border ${isOpen ? 'border-secondary' : 'border-border-divider'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button
                    suppressHydrationWarning
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg md:text-xl font-bold pr-8 ${isOpen ? 'text-brand-primary-700' : 'text-text-secondary'}`}>
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-secondary text-text-primary' : 'bg-surface text-text-secondary border border-border-divider'}`}>
                      <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 md:px-8 overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0 pb-0'}`}
                  >
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
