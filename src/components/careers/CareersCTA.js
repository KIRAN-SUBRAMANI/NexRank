"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersCTA({ data }) {
  const handleScrollToApply = (e) => {
    e.preventDefault();
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="careers-cta"
      className="w-full bg-[#FFFFFF] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Careers Final CTA"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-[#0F172A] overflow-hidden px-8 py-16 sm:py-20 md:px-16 text-center text-white shadow-2xl border border-slate-800"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D4AF37]/15 to-blue-500/10 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill Tag */}
            <span className="inline-block bg-white/10 text-[#D4AF37] border border-white/15 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
              JOIN OUR JOURNEY
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-5 font-sans">
              Ready to build the most impactful work of your career?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-xl">
              Join 50+ engineers, creative directors, and performance marketers driving compound growth for world-class clients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#apply"
                onClick={handleScrollToApply}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0F172A] font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base cursor-pointer"
              >
                Apply for Open Roles
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 backdrop-blur-md transition-all duration-200 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>

            {/* Direct Contact reassurance */}
            <p className="text-xs text-slate-400 mt-8">
              Prefer an informal introduction? Drop us a line at{" "}
              <a href="mailto:careers@nexranktechnogroup.com" className="text-[#D4AF37] hover:underline font-medium">
                careers@nexranktechnogroup.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
