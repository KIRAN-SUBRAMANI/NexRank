"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 sm:mt-24 mb-10"
    >
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0C111D] text-white px-6 py-14 sm:py-20 text-center overflow-hidden shadow-xl">
        
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 font-sans">
            Let&apos;s get started on something great
          </h2>

          {/* Subtitle */}
          <p className="text-[#98A2B3] text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto font-normal">
            Join over 4,000+ growing brands scaling their traffic and revenue with NexRank.
          </p>

          {/* Action Buttons (Matching Untitled UI reference) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white text-sm font-semibold transition-all duration-200 active:scale-95"
            >
              Chat to us
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-[#0C111D] hover:bg-white/90 text-sm font-semibold transition-all duration-200 active:scale-95 shadow-sm"
            >
              Get started
            </Link>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
