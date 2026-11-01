"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactHero({ hero }) {
  const subtitle = hero?.subtitle || "CONTACT US";
  const description =
    hero?.description ||
    "Whether you need an enterprise SEO transformation, high-velocity Next.js engineering, or full-funnel digital growth, our senior directors are ready to collaborate.";

  const trustMetrics = [
    { icon: "⚡", label: "2-Hour Response SLA", sub: "Fast enterprise turnaround" },
    { icon: "🔒", label: "Strict Mutual NDA", sub: "100% confidentiality" },
    { icon: "🎯", label: "Direct Director Access", sub: "No junior sales reps" },
    { icon: "★", label: "98% Client Satisfaction", sub: "Proven track record" },
  ];

  // Motion variants for kinetic staggered word reveal
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(8px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier spring
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 pb-12 md:pt-12 md:pb-16 border-b border-slate-100">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmerFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-text {
          background: linear-gradient(135deg, #02126a 0%, #1E40AF 30%, #D4AF37 60%, #feb423 80%, #02126a 100%);
          background-size: 250% 250%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerFlow 5s ease-in-out infinite;
        }
      `}} />

      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-[#D4AF37]/8 via-[#D4AF37]/2 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <li>
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-[#D4AF37] font-semibold">Contact</li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-bold text-[#0F172A] shadow-xs mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="uppercase tracking-wider">{subtitle}</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#D4AF37] font-extrabold">2026 INITIATIVES ACTIVE</span>
          </motion.div>

          {/* Main Headline with Advanced Staggered Kinetic Blur Reveal */}
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight mb-5 leading-[1.18] font-sans flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5"
          >
            <motion.span variants={wordVariants} className="inline-block hover:text-[#02126a] transition-colors">
              Let&apos;s
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block hover:text-[#02126a] transition-colors">
              Build
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block hover:text-[#02126a] transition-colors">
              Something
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block relative">
              <span className="animated-gradient-text font-black">
                Exceptional
              </span>
              <span
                className="absolute -top-1.5 -right-3.5 text-[#D4AF37] text-sm animate-pulse select-none"
                aria-hidden="true"
              >
                ✦
              </span>
            </motion.span>
            <motion.span variants={wordVariants} className="inline-block hover:text-[#02126a] transition-colors">
              Together.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal mb-8"
          >
            {description}
          </motion.p>

          {/* Trust Metrics Pill Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-2"
          >
            {trustMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70 text-left flex items-center gap-3 shadow-2xs hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-sm font-bold shadow-2xs shrink-0">
                  {metric.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0F172A] truncate">{metric.label}</div>
                  <div className="text-[10px] text-slate-500 truncate">{metric.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
