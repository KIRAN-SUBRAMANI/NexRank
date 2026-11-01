"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HiringTimeline({ data }) {
  const steps = [
    {
      num: "01",
      title: "Application Review",
      time: "Within 72 Hours",
      desc: "Our senior talent lead personally reviews your background and portfolio. Every application is reviewed by real humans.",
    },
    {
      num: "02",
      title: "Initial Conversation",
      time: "30 Min Video",
      desc: "A casual video call to explore your goals, introduce our team, and answer all your questions about life at NexRank.",
    },
    {
      num: "03",
      title: "Practical Assessment",
      time: "2–3 Days",
      desc: "A focused, real-world case study or code review that mirrors the high-impact problems you’ll actually solve here.",
    },
    {
      num: "04",
      title: "Team Deep Dive",
      time: "45 Min Video",
      desc: "Meet your future team lead and peers to discuss strategy, methodology, and how we will collaborate day-to-day.",
    },
    {
      num: "05",
      title: "Transparent Offer",
      time: "Within 48 Hours",
      desc: "A competitive, transparent offer package with complete clarity on base salary, performance bonuses, and benefits.",
    },
  ];

  return (
    <section
      id="hiring-process"
      className="w-full py-10 md:py-14 bg-white relative overflow-hidden border-b border-slate-100"
      aria-labelledby="hiring-process-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>OUR HIRING PROCESS</span>
          </div>

          <h2
            id="hiring-process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 font-sans"
          >
            A simple, transparent hiring journey.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We respect your time. Our hiring process is straightforward, communicative, and typically wraps up in 2–3 weeks.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Desktop Horizontal Connector Line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#D4AF37] via-slate-200 to-[#D4AF37]/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-slate-50/70 lg:bg-transparent rounded-2xl p-6 lg:p-2 border border-slate-200/60 lg:border-none"
              >
                {/* Node Pill */}
                <div className="flex items-center justify-between lg:justify-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#D4AF37] shadow-md flex items-center justify-center text-lg font-black text-[#0F172A] flex-shrink-0">
                    {step.num}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-[#D4AF37] border border-amber-200/60 px-2.5 py-1 rounded-full lg:hidden">
                    {step.time}
                  </span>
                </div>

                {/* Desktop time pill */}
                <span className="hidden lg:inline-block w-fit text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-[#D4AF37] border border-amber-200/60 px-2.5 py-1 rounded-full mb-3">
                  {step.time}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Respectful Commitment Banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-center gap-3">
          <span className="text-xl">🤝</span>
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            <span className="font-bold text-[#0F172A]">Our Transparency Guarantee:</span> We respond with feedback to every applicant. No automated ghosting.
          </p>
        </div>

      </div>
    </section>
  );
}
