"use client";

import { useEffect, useRef, useState } from "react";

export default function FAQItem({ faq, index, isOpen, onToggle }) {
  const { question, answer } = faq;
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isOpen]);

  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <div 
      className={`border transition-all duration-400 ease-out rounded-lg overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] relative ${
        isOpen 
          ? 'border-[rgba(212, 175, 55,0.45)] bg-gray-50' 
          : 'border-gray-200 bg-white hover:border-[#D4AF37]/40 hover:shadow-[0_0_20px_rgba(212, 175, 55,0.08)]'
      }`}
    >
      {/* Orange accent line when open */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] transition-transform duration-300 ${isOpen ? 'scale-y-100' : 'scale-y-0'}`} />
      <button 
        suppressHydrationWarning
        id={`faq-question-${faq.id}`}
        onClick={onToggle}
        className="w-full px-5 py-3 md:px-6 md:py-3.5 flex items-start justify-between focus:outline-none text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex gap-4 md:gap-6 items-start relative z-10">
          <span className={`text-sm md:text-base font-bold mt-0.5 transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-[#D4AF37]'}`}>
            {displayIndex}
          </span>
          <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
            isOpen ? 'text-[#D4AF37]' : 'text-[#2D3436] group-hover:text-[#D4AF37]'
          }`}>
            {question}
          </span>
        </div>
        
        <span 
          className={`flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center transition-colors duration-300 relative z-10 ${
            isOpen ? 'text-[#D4AF37]' : 'text-[#D4AF37] group-hover:text-[#D4AF37]'
          }`}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>

      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        style={{ height: contentHeight }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div ref={contentRef} className="px-5 pb-5 md:px-6 md:pb-6 md:pl-[3.25rem] text-gray-600 leading-relaxed text-sm md:text-base relative z-10">
          {answer}
        </div>
      </div>
    </div>
  );
}
