"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyJoinUs({ data }) {
  if (!data) return null;

  const { badge, heading, description, features } = data;

  const pillars = [
    {
      num: "01",
      title: "Autonomy with Ownership",
      desc: "We hire high-trust experts and give you the freedom, authority, and resources to build and lead. No micromanagement, no red tape.",
      tag: "Self-Direction",
    },
    {
      num: "02",
      title: "Real Mastery & Learning",
      desc: "Generous learning stipend, company-sponsored certifications (Google, Meta, HubSpot), and dedicated research time to keep you ahead.",
      tag: "Continuous Growth",
    },
    {
      num: "03",
      title: "Transparency over Politics",
      desc: "Bi-annual objective performance reviews tied to measurable outcomes and client impact, with clear compensation bands.",
      tag: "Merit-Based",
    },
    {
      num: "04",
      title: "Output over Office Hours",
      desc: "Hybrid and flexible working schedules. We evaluate you on the quality and impact of what you deliver, not seat time.",
      tag: "Modern Work",
    },
    {
      num: "05",
      title: "Cross-Disciplinary Squads",
      desc: "Work side-by-side with senior developers, growth hackers, and designers in an ego-free, collaborative culture.",
      tag: "High Collaboration",
    },
    {
      num: "06",
      title: "Direct Performance Bonuses",
      desc: "When our clients win and the agency grows, you share directly in that success with transparent profit bonuses.",
      tag: "Shared Success",
    },
  ];

  return (
    <section
      id="life-at-nexranktechno"
      className="w-full py-10 md:py-14 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100"
      aria-labelledby="why-join-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
            <span>{badge || "CULTURE & VALUES"}</span>
          </div>

          <h2
            id="why-join-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 font-sans"
          >
            A place built for high performers to thrive.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {description || "We don't offer generic jobs. We provide the mentorship, tooling, and runway for you to build career-defining work."}
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-[#D4AF37]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#D4AF37] tracking-tight font-sans">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:text-[#0F172A] transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Bar Indicator */}
              <div className="w-8 h-1 bg-slate-100 group-hover:bg-[#D4AF37] rounded-full mt-6 transition-all duration-300 group-hover:w-16" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
