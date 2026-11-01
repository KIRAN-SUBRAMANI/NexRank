"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BenefitsGrid({ data }) {
  const perks = [
    {
      title: "Health & Family Care",
      desc: "Comprehensive health insurance for you and your dependents, plus preventative wellness checks and mental health days.",
      pill: "Family Covered",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      title: "Continuous Learning Stipend",
      desc: "₹50,000 annual education allowance for advanced courses, conferences, and fully sponsored Google & Meta certifications.",
      pill: "₹50,000 / Year",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: "Latest Gear & Workstation",
      desc: "Work on top-of-the-line Apple Silicon MacBook Pros, dual 4K monitors, and ergonomic setup allowances for your desk.",
      pill: "Apple M-Series Gear",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: "Generous Paid Leave",
      desc: "24 paid vacation days, paid recharge breaks, generous maternity/paternity leave, and flexible regional holidays.",
      pill: "24 Days + Breaks",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      title: "Transparent Performance Bonuses",
      desc: "Bi-annual KPI and agency-wide profit bonuses tied to clear client impact. When the company thrives, everyone gains.",
      pill: "Bi-Annual Payouts",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: "Hybrid-First Collaboration",
      desc: "Seamless blend of in-office collaboration and work-from-home focus. We trust you to organize your schedule effectively.",
      pill: "Flexible Schedule",
      icon: (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full py-10 md:py-14 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
            <span>PERKS &amp; BENEFITS</span>
          </div>

          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 font-sans"
          >
            Built to support every dimension of your life.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We offer competitive compensation packages designed to reward exceptional craft and promote long-term well-being.
          </p>
        </div>

        {/* 6 Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#D4AF37]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    {perk.icon}
                  </div>
                  <span className="text-xs font-bold text-[#0F172A] bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-full">
                    {perk.pill}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2.5">
                  {perk.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {perk.desc}
                </p>
              </div>

              <div className="w-full h-0.5 bg-slate-100 mt-6" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
