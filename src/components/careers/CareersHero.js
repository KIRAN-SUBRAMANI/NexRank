"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CareersHero({ hero, breadcrumb }) {
  if (!hero) return null;

  const teamAvatars = [
    { name: "Elena Rodriguez", src: "/images/team/Elena Rodriguez.webp" },
    { name: "David Chen", src: "/images/team/David Chen.avif" },
    { name: "Sarah Jenkins", src: "/images/team/Sarah Jenkins.avif" },
    { name: "Marcus Thorne", src: "/images/team/Marcus Thorne.webp" },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white pt-6 pb-10 md:pt-8 md:pb-14 border-b border-slate-100"
      aria-label="Careers Hero"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#D4AF37]/5 via-[#D4AF37]/2 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              {breadcrumb.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <svg
                      className="w-3.5 h-3.5 text-slate-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {index === breadcrumb.length - 1 ? (
                    <span className="text-[#0F172A] font-semibold" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#D4AF37] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Hiring Badge */}
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 mb-6 shadow-xs max-w-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
              </span>
              <span className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F172A]">
                WE&apos;RE EXPANDING OUR GLOBAL TEAM
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-medium text-[#D4AF37]">7 Open Roles</span>
            </div>

            {/* Confident, Human Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#0F172A] tracking-tight leading-[1.12] mb-6 font-sans">
              Do work that shapes the future of digital growth.
            </h1>

            {/* Punchy Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              We&apos;re a team of ambitious performance marketers, technical SEOs, creative strategists, and engineers delivering measurable compound scale for world-class brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#open-positions"
                onClick={(e) => handleScrollTo(e, "open-positions")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0F172A] font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base group text-center"
              >
                <span>View Open Roles</span>
                <svg
                  className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#life-at-nexranktechno"
                onClick={(e) => handleScrollTo(e, "life-at-nexranktechno")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 text-sm sm:text-base text-center"
              >
                <span>Our Culture &amp; Values</span>
              </a>
            </div>

            {/* Real Social Proof / Team Avatars */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 w-full max-w-xl">
              <div className="flex -space-x-2.5 overflow-hidden">
                {teamAvatars.map((person, idx) => (
                  <div
                    key={idx}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white overflow-hidden bg-slate-100 flex-shrink-0"
                  >
                    <Image
                      src={person.src}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-[#0F172A]">50+ specialists</span> across Mumbai, London, and Remote offices worldwide.
              </div>
            </div>

          </motion.div>

          {/* Right Column: Authentic Editorial Photo Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[4/3] sm:aspect-[5/4] bg-slate-100 group">
                <Image
                  src="/images/careers/Best PR Consultants in Mohali.jpg"
                  alt="NexRank Careers Hero"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

            </div>
          </motion.div>

        </div>

        {/* High-Impact Numerical Proof Ribbon */}
        {hero.stats && hero.stats.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
