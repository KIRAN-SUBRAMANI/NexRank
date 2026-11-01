"use client";

import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BackToTop() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-slate-400 hover:text-[#070D1E] text-xs font-semibold transition-all duration-300 group cursor-pointer shrink-0"
    >
      <span>Back to Top</span>
      <ArrowUpIcon className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
