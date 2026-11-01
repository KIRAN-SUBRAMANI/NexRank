"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Globe,
  Target,
  TrendingUp,
  MapPin,
  Code2,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const servicesList = [
  {
    id: "seo",
    number: "01",
    slug: "seo",
    title: "Search Engine Optimization",
    shortName: "SEO",
    eyebrow: "Organic Visibility & Authority",
    headline: "Dominate high-intent search rankings organically.",
    description: "Deep technical audits, semantic keyword mapping, and white-hat authority building that position your brand at the very top of Google for long-term customer acquisition.",
    image: "/images/services/seo-psd.webp",
    metricValue: "+340%",
    metricLabel: "Avg. Organic Traffic Lift",
    tag: "Enterprise SEO",
    highlights: ["Technical Site Audits", "High-Authority Backlinks", "Content Architecture"]
  },
  {
    id: "google-ads",
    number: "02",
    slug: "google-ads",
    title: "Google Ads Management",
    shortName: "Google Ads",
    eyebrow: "High-Intent Paid Acquisition",
    headline: "Turn search intent into predictable revenue.",
    description: "Laser-focused Search, Display, and Performance Max campaigns engineered with rigorous conversion tracking and negative keyword pruning to capture high-value buyers.",
    image: "/images/services/google-ads-psd.webp",
    metricValue: "550%",
    metricLabel: "Average Campaign ROAS",
    tag: "Certified Partner",
    highlights: ["Search & PMax Campaigns", "Negative Keyword Sculpting", "Conversion Tracking"]
  },
  {
    id: "meta-ads",
    number: "03",
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    shortName: "Meta Ads",
    eyebrow: "Performance Paid Social",
    headline: "Scroll-stopping creative backed by data.",
    description: "Full-funnel creative testing, dynamic product catalogs, and algorithmic lookalike audiences that convert casual social browsers into loyal enterprise clients.",
    image: "/images/services/meta-ads-square.webp",
    metricValue: "4.8x",
    metricLabel: "Return On Ad Spend",
    tag: "Paid Social Scale",
    highlights: ["Creative Variation Testing", "Custom & Lookalike Audiences", "Retargeting Funnels"]
  },
  {
    id: "google-business-profile",
    number: "04",
    slug: "google-business-profile",
    title: "Google Business Profile",
    shortName: "Local SEO / GBP",
    eyebrow: "Hyper-Local Market Dominance",
    headline: "Capture high-intent searches in your territory.",
    description: "Map-pack optimization, citation harmonization, and automated review velocity systems that place your locations directly in front of local buyers.",
    image: "/images/services/gbp-square.webp",
    metricValue: "#1 Map Rank",
    metricLabel: "Local 3-Pack Presence",
    tag: "Local Growth",
    highlights: ["Local Pack Optimization", "Citation Consistency", "Review Velocity Systems"]
  },
  {
    id: "web-development",
    number: "05",
    slug: "web-development",
    title: "Enterprise Web Development",
    shortName: "Web Engineering",
    eyebrow: "High-Performance Modern Web",
    headline: "Custom Next.js platforms built to convert.",
    description: "Bespoke digital experiences built on Next.js, React, and Tailwind CSS. Zero template bloat, sub-second load times, and flawless mobile responsiveness.",
    image: "/images/services/web-dev-psd.webp",
    metricValue: "99/100",
    metricLabel: "Lighthouse Performance",
    tag: "Next.js Architecture",
    highlights: ["Zero-Bloat Next.js Code", "Sub-Second Load Times", "SEO-First Engineering"]
  }
];

export default function ServicesHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const INTERVAL_MS = 4500; // 4.5 seconds per category

  // Auto-advance category animation continuously without pausing
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % servicesList.length);
      setProgressKey((prev) => prev + 1);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [activeIdx]);

  const handleSelect = (index) => {
    setActiveIdx(index);
    setProgressKey((prev) => prev + 1);
  };

  const activeService = servicesList[activeIdx];

  const scrollToSection = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FAF9F5] text-[#111827] pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 lg:pb-14 overflow-hidden font-poppins selection:bg-[#ffdf00] selection:text-[#0b0b0d] border-b border-[#E8DEC8]/50">

      {/* Subtle Warm Background Ambience (Non-AI, Organic Editorial Feel) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Warm Radial Corner Glow */}
        <div
          className="absolute -top-32 right-0 w-[550px] h-[550px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #F5E8D3 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full opacity-35 blur-3xl"
          style={{ background: "radial-gradient(circle, #FFF275 0%, transparent 70%)" }}
        />

        {/* Crisp Editorial Subtle Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Top Eyebrow Badge */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <span className="w-8 h-[2px] bg-[#ffdf00]" />
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#ffdf00] uppercase">
            FULL-SPECTRUM DIGITAL PRACTICES
          </span>
          <span className="w-8 h-[2px] bg-[#ffdf00]" />
        </div>

        {/* Hero Top Grid: Headline + Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-14 lg:mb-16">

          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#111827] leading-[1.12] tracking-tight">
              Strategic digital capabilities engineered to{" "}
              <span className="text-[#ffdf00] relative inline-block">
                scale your revenue.
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#ffdf00]/40 rounded-full" />
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
              We reject fragmented, siloed tactics. NexRank aligns deep technical SEO, hyper-targeted paid acquisition, and custom web development into one coordinated engine designed for sustainable, compounding growth.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToSection}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm text-[#0b0b0d] bg-[#ffdf00] hover:bg-[#ffe733] transition-all duration-200 shadow-[0_4px_20px_rgba(255,223,0,0.3)] hover:shadow-[0_6px_28px_rgba(255,223,0,0.45)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View All 5 Services</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm"
              >
                <span>Request Custom Proposal</span>
                <span className="w-5 h-5 rounded-full bg-[#ffdf00] text-[#0b0b0d] flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

        </div>

        {/* Interactive Capability Showcase (Editorial Light Theme) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[#E8DEC8]/80 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)]">

          {/* Service Selector Tabs with Gliding Animation and Timer Progress */}
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-100 no-scrollbar">
            {servicesList.map((service, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelect(index)}
                  className={`relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer overflow-hidden ${isActive
                      ? "text-white"
                      : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-100"
                    }`}
                >
                  {/* Gliding dark pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPillBg"
                      className="absolute inset-0 bg-[#111827] rounded-xl shadow-sm z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  {/* Active progress indicator line */}
                  {isActive && (
                    <motion.div
                      key={progressKey}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffdf00] origin-left z-10"
                    />
                  )}

                  <span className={`relative z-10 text-[11px] font-black ${isActive ? "text-[#ffdf00]" : "text-slate-400"}`}>
                    {service.number}
                  </span>
                  <span className="relative z-10">{service.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Detail Panel with Animated Transition */}
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-[#0b0b0d] bg-[#ffdf00] px-2.5 py-1 rounded-md shadow-xs">
                      {activeService.eyebrow}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      • {activeService.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] leading-snug tracking-tight mb-4">
                    {activeService.headline}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {activeService.description}
                  </p>

                  {/* Core Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {activeService.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0b0b0d] fill-[#ffdf00] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link & Metric Proof */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                        {activeService.metricValue}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {activeService.metricLabel}
                      </span>
                    </div>

                    <Link
                      href={`/services/${activeService.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm text-[#0b0b0d] bg-[#ffdf00] hover:bg-[#ffe733] border border-[#ffdf00] shadow-[0_4px_16px_rgba(255,223,0,0.3)] transition-all duration-200 group"
                    >
                      <span>Explore {activeService.shortName} In Detail</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Graphic Panel (Clean Framed 3D Artwork Edge-to-Edge Fill) */}
            <div className="lg:col-span-6 flex justify-center items-center w-full">
              <div className="relative w-full max-w-[500px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.08)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover object-center w-full h-full"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Trust Indicators (Human, Minimalist Agency Style) */}
        <div className="mt-8 pt-6 border-t border-[#E8DEC8]/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:border-r sm:border-slate-200/80 sm:pr-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111827]">500+</span>
            <span className="text-xs font-medium text-slate-500 mt-0.5">Campaigns & Sites Delivered</span>
          </div>
          <div className="flex flex-col sm:border-r sm:border-slate-200/80 sm:pr-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111827]">98%</span>
            <span className="text-xs font-medium text-slate-500 mt-0.5">Client Retainer Rate</span>
          </div>
          <div className="flex flex-col sm:border-r sm:border-slate-200/80 sm:pr-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111827]">550%</span>
            <span className="text-xs font-medium text-slate-500 mt-0.5">Average Client ROAS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111827]">10+ Yrs</span>
            <span className="text-xs font-medium text-slate-500 mt-0.5">Engineering & Search Experience</span>
          </div>
        </div>

      </div>

    </section>
  );
}
