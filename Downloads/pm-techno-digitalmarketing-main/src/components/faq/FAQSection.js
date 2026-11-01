"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const extraFaqs = [
  {
    id: "extra-1",
    category: "Our Approach",
    question: "How do you create a customized strategy?",
    answer: "We begin with a comprehensive audit of your digital presence, competitor analysis, and a deep dive into your business goals. This allows us to craft a data-driven strategy tailored specifically to your target audience."
  },
  {
    id: "extra-2",
    category: "Our Approach",
    question: "What makes NexRank different?",
    answer: "We combine transparent reporting, proven strategies, and a dedicated team of specialists. We focus on ROI and measurable business growth, not just vanity metrics."
  },
  {
    id: "extra-3",
    category: "Our Approach",
    question: "How do you measure campaign success?",
    answer: "Success is measured against your specific KPIs—whether that's lead generation, sales, or brand awareness. We track conversions, CPA, ROAS, and overall traffic quality using advanced analytics."
  },
  {
    id: "extra-4",
    category: "Our Approach",
    question: "How often will we receive performance reports?",
    answer: "We provide detailed monthly reports along with a strategic review call. Additionally, you'll have access to a real-time dashboard to monitor performance anytime."
  },
  {
    id: "extra-5",
    category: "Our Approach",
    question: "Can you work with our existing marketing team?",
    answer: "Absolutely. We often act as an extension of in-house teams, providing specialized expertise in areas like technical SEO, complex ad management, or custom web development."
  }
];

export default function FAQSection({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const allFaqs = useMemo(() => {
    const items = data?.items || [];
    const combined = [...items];
    extraFaqs.forEach((extra) => {
      if (!combined.some((item) => item.question.toLowerCase() === extra.question.toLowerCase())) {
        combined.push(extra);
      }
    });
    return combined;
  }, [data?.items]);

  const categories = useMemo(() => {
    const cats = new Set(allFaqs.map((f) => f.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [allFaqs]);

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [allFaqs, selectedCategory, searchQuery]);

  const displayedFaqs = useMemo(() => {
    if (searchQuery.trim() || selectedCategory !== "All" || showAll) {
      return filteredFaqs;
    }
    return filteredFaqs.slice(0, 8);
  }, [filteredFaqs, searchQuery, selectedCategory, showAll]);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (!data) return null;

  return (
    <section id="faq" className="w-full relative bg-[#F8FAFC]">
      {/* TOP BOX: Website Theme Colors (#2D3436 charcoal with luxury gold accents) */}
      <div className="w-full bg-[#2D3436] pt-16 pb-36 md:pt-20 md:pb-44 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            How can we help you?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
          >
            Find answers to frequently asked questions about our digital marketing services, web development, SEO strategies, pricing, and process.
          </motion.p>

          {/* Search Box - Matches Image Structure with Website Colors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto relative"
          >
            <input
              type="text"
              suppressHydrationWarning
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type keywords here..."
              className="w-full pl-5 pr-12 py-3.5 sm:py-4 bg-white text-gray-900 rounded-lg shadow-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm sm:text-base placeholder:text-gray-400"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#D4AF37]">
              {searchQuery ? (
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none p-1"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* THE BOX: White Card Containing All FAQ Questions Overlapping the Top Box */}
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 md:-mt-32 relative z-20 pb-20 sm:pb-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-100 p-6 sm:p-10 md:p-14 lg:p-16"
        >
          {/* Heading for FAQ inside the Box */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D3436] text-center mb-6 font-sans tracking-tight">
            Frequently Asked Questions
          </h3>

          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-4 border-b border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#2D3436] text-[#D4AF37] shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Search Result Indicator */}
          {searchQuery.trim() && (
            <div className="mb-4 text-sm text-gray-500 flex items-center justify-between">
              <span>
                Found <strong className="text-gray-800">{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? "question" : "questions"} for "{searchQuery}"
              </span>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setSearchQuery("")}
                className="text-xs text-[#D4AF37] hover:underline font-semibold"
              >
                Clear filter
              </button>
            </div>
          )}

          {/* FAQ Accordion List - Exactly Styled Like the Reference Image */}
          {displayedFaqs.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {displayedFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-4 sm:py-5">
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-base sm:text-lg font-medium pr-4 transition-colors ${
                        isOpen ? "text-[#D4AF37] font-semibold" : "text-[#2D3436] group-hover:text-[#D4AF37]"
                      }`}>
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 text-gray-600 group-hover:text-[#D4AF37] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#D4AF37]" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-2 text-sm sm:text-base text-gray-600 leading-relaxed pr-6">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p className="text-base">No questions found matching your keywords.</p>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#2D3436] hover:bg-[#1E2325] rounded-full transition-colors"
              >
                View all FAQs
              </button>
            </div>
          )}

          {/* Show More / Show Less Button if viewing All without active search */}
          {!searchQuery.trim() && selectedCategory === "All" && filteredFaqs.length > 8 && (
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold border border-[#D4AF37]/50 text-[#2D3436] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <span>{showAll ? "Show Less" : `View All Questions (${filteredFaqs.length})`}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
