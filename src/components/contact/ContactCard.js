"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactCard({ info, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isEmail = info.type === "Email" || info.href?.startsWith("mailto:");

  const renderIcon = () => {
    switch (info.icon) {
      case "phone":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case "mail":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "mapPin":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "clock":
      default:
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(2,18,106,0.05)] hover:shadow-[0_16px_36px_rgba(2,18,106,0.12)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#02126a] via-[#1E40AF] to-[#D4AF37] opacity-80 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-300" />

      <div>
        {/* Icon & Category Pill */}
        <div className="flex items-center justify-between mb-5 pt-1">
          <div className="w-13 h-13 rounded-2xl bg-amber-50 group-hover:bg-[#0F172A] border border-amber-200/80 group-hover:border-[#0F172A] text-[#D4AF37] group-hover:text-amber-300 flex items-center justify-center shadow-xs group-hover:shadow-md transition-all duration-300">
            {renderIcon()}
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#0F172A] bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {info.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#1E40AF] transition-colors mb-1.5 leading-snug">
          {info.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5">
          {info.description}
        </p>
      </div>

      {/* Value / Link / Action Row */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        {info.href ? (
          <a
            href={info.href}
            target={info.href.startsWith("http") ? "_blank" : undefined}
            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors truncate flex-1 hover:underline flex items-center gap-1.5"
          >
            <span>{info.value}</span>
            <span className="text-xs text-[#D4AF37] font-bold">↗</span>
          </a>
        ) : (
          <span className="text-xs sm:text-sm font-bold text-[#0F172A] truncate flex-1">
            {info.value}
          </span>
        )}

        {isEmail && (
          <button
            type="button"
            onClick={(e) => handleCopy(e, info.value)}
            className="text-[11px] font-semibold px-2 py-1 bg-slate-100 hover:bg-[#0F172A] text-slate-600 hover:text-white rounded-lg transition-colors shrink-0 cursor-pointer"
            title="Copy email address"
          >
            {copied ? "✓ Copied" : "Copy"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
