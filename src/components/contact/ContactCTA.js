"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA({ cta }) {
  const title = cta?.title || "Not sure which growth package suits your business?";
  const description =
    cta?.description ||
    "Schedule a 30-minute discovery session with our senior digital directors to map out a clear roadmap tailored to your KPIs.";

  const scrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("inquiry-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-[#0F172A] overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-2xl border border-slate-800"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E40AF]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
              <span>ZERO COMMITMENT REQUIRED</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-sans text-white">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B3891D] text-[#0F172A] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Start Your Inquiry Now →
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all text-center"
              >
                Explore Full Service Suite
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
