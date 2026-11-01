"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandsharkCaseStudyView({ caseStudy }) {
  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // State for Lead Consultation Form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ loading: false, submitted: false });

  if (!caseStudy) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
    }, 800);
  };

  // Helper to split title into primary and accent phrase
  const splitTitle = (title) => {
    if (!title) return { main: "", accent: "" };
    const words = title.split(" ");
    if (words.length <= 4) {
      return { main: words.slice(0, 2).join(" "), accent: words.slice(2).join(" ") };
    }
    // Highlight approximately the last 3-4 words
    const splitPoint = Math.max(3, words.length - 3);
    return {
      main: words.slice(0, splitPoint).join(" "),
      accent: words.slice(splitPoint).join(" ")
    };
  };

  const titleParts = splitTitle(caseStudy.hero?.title);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B1028] font-sans antialiased overflow-x-hidden selection:bg-[#D4AF37] selection:text-white">
      
      {/* ========================================================================= */}
      {/* HERO SECTION: Top Badges, Editorial Title, Metric Row, Featured Showcase  */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-8 lg:pt-32 lg:pb-10 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Badges, Title, Subtitle, Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              
              {/* Badges Bar (Brandshark Pill Badges) */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#06143D] text-white shadow-xs">
                  NexRank × {caseStudy.clientName}
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF9ED] text-[#D4AF37] border border-[#D4AF37]/35">
                  {caseStudy.hero?.servicesUsed?.join(" · ") || "Full-Funnel Digital Growth"}
                </span>
              </div>

              {/* Main Headline with Signature Gold Highlight */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#0B1028] leading-[1.12] tracking-tight mb-6">
                <span>{titleParts.main} </span>
                <span className="text-[#D4AF37]">{titleParts.accent}.</span>
              </h1>

              {/* Executive Subtitle Narrative */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {caseStudy.hero?.subtitle}
              </p>

              {/* Stats List (Horizontal 4-Stat Bar with Dividing Hairlines) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-slate-200 mt-2">
                {caseStudy.topHeroStats?.map((stat, idx) => (
                  <div key={idx} className="flex flex-col relative sm:pr-4">
                    <span className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1028] tracking-tight leading-tight">
                      {stat.number}
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-500 mt-1 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Right Column: Hero Banner Showcase Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[500px] aspect-[4/4.8] sm:aspect-[4/4.5] rounded-3xl overflow-hidden border-[6px] border-white shadow-[0_20px_60px_rgba(11,16,40,0.12)] bg-slate-100">
                <Image
                  src={caseStudy.clientOverview?.image || caseStudy.gallery?.images?.[0]?.src || "/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp"}
                  alt={caseStudy.hero?.title || "Case Study Preview"}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 01: ABOUT THE CLIENT (#the-brand)                                  */}
      {/* ========================================================================= */}
      <section id="the-brand" className="py-6 lg:py-10 bg-[#FFFDF8] border-b border-[#F4E9D7]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Story Narrative */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                  01 - ABOUT THE CLIENT
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1028] leading-tight mb-6">
                A market leader in {caseStudy.hero?.industry || "the industry"},<br />
                <span className="text-[#D4AF37]">built for exceptional real-world impact.</span>
              </h2>

              {/* Narrative Copy */}
              <div className="space-y-5 text-slate-600 text-base sm:text-[17px] leading-relaxed font-normal">
                {caseStudy.clientOverview?.content?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Metadata Facet Table (Brandshark facet-wrapper) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#EDE4D5] rounded-3xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(212,175,55,0.06)]">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4 pb-2.5 border-b border-slate-100">
                  PROJECT SPECIFICATIONS
                </h3>

                <dl className="divide-y divide-slate-100">
                  {caseStudy.facetDetails?.map((facet, idx) => (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <dt className="text-xs font-extrabold uppercase tracking-wider text-slate-400 shrink-0">
                        {facet.label}
                      </dt>
                      <dd className="text-sm sm:text-base font-bold text-[#0B1028] text-right truncate">
                        {facet.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 02: THE CHALLENGE                                                 */}
      {/* ========================================================================= */}
      <section className="py-6 lg:py-10 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Title */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                02 - THE CHALLENGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1028] leading-tight">
              Three bottlenecks that kept<br />
              <span className="text-[#D4AF37]">a high-standard brand invisible.</span>
            </h2>
          </div>

          {/* 3-Column Challenge Cards Grid (Brandshark logo-grid blurb style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudy.threeBottlenecks?.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#E8ECEF] rounded-2xl p-7 sm:p-8 hover:border-[#D4AF37]/50 hover:shadow-[0_12px_32px_rgba(11,16,40,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-black text-[#D4AF37] tracking-widest uppercase mb-4 px-2.5 py-1 rounded bg-[#FFF9ED]">
                    CHALLENGE 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1028] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="w-8 h-1 bg-[#D4AF37]/20 rounded-full mt-6" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 03: THE STRATEGY (brand-process-section)                           */}
      {/* ========================================================================= */}
      <section className="py-6 lg:py-10 bg-[#FFFDF8] border-b border-[#F4E9D7]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 sm:mb-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                  03 - THE STRATEGY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1028] leading-tight">
                One coherent roadmap.<br />
                <span className="text-[#D4AF37]">Three synchronized layers.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed">
                {caseStudy.strategySubtitle}
              </p>
            </div>
          </div>

          {/* Process Stack: 01, 02, 03 (Brandshark brand-process-row) */}
          <div className="border-t border-[#E8ECEF] divide-y divide-[#E8ECEF]">
            {caseStudy.strategyPhases?.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-5 lg:py-6 items-start"
              >
                {/* Left: Step Number & Title */}
                <div className="lg:col-span-5 flex items-start gap-5">
                  <span className="text-3xl sm:text-4xl font-black text-[#D4AF37] leading-none shrink-0">
                    {phase.step}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1028] leading-tight">
                    {phase.title}
                  </h3>
                </div>

                {/* Right: Phase Tag & Bulleted Tactics */}
                <div className="lg:col-span-7 pl-0 lg:pl-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                    {phase.phaseTag}
                  </h4>
                  <div className="space-y-3">
                    {phase.bullets?.map((b, bIdx) => (
                      <p key={bIdx} className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                        {b}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 04: TACTICAL EXECUTION & CHANNELS                                  */}
      {/* ========================================================================= */}
      <section className="py-6 lg:py-10 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Columns: Narrative + 4 Vertical Stat Cards */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                  04 - TACTICAL EXECUTION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1028] leading-tight mb-5">
                Targeted architecture that<br />
                <span className="text-[#D4AF37]">spoke to real market intent.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-6">
                {caseStudy.tacticalNarrative}
              </p>

              {/* Vertical Stat Cards Stack (Brandshark stat-cards-wrap) */}
              <div className="flex flex-col gap-3.5 w-full">
                {caseStudy.verticalStats?.map((st, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#EEEEEE] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#D4AF37]/40 transition-all duration-300"
                  >
                    <span className="text-2xl sm:text-3xl font-black text-[#0B1028] shrink-0 min-w-[90px] tracking-tight">
                      {st.number}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                      {st.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Columns: Interactive Growth Engine Mockup (Brandshark igblk-wrap) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[580px] bg-white border border-[#E8ECEF] rounded-3xl p-5 sm:p-6 shadow-[0_16px_45px_rgba(11,16,40,0.08)]">
                
                {/* Mockup Profile Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#06143D] text-[#D4AF37] flex items-center justify-center font-black text-lg border border-[#D4AF37]/40 shrink-0">
                      {caseStudy.clientName?.[0] || "N"}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-extrabold text-sm sm:text-base text-[#0B1028]">
                          {caseStudy.clientHandle}
                        </p>
                        <svg className="w-4 h-4 text-[#D4AF37] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {caseStudy.followerCount}
                      </p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#06143D] text-white">
                    Verified Partner
                  </span>
                </div>

                {/* 6-Item Visual Showcase Grid */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {(caseStudy.tacticalImages || [
                    { image: "/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp", label: "Patient Acquisition" },
                    { image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp", label: "GBP Optimization" },
                    { image: "/images/blog/website-performance.webp", label: "High Performance" },
                    { image: "/images/services/e-commerce.webp", label: "Catalog Engine" },
                    { image: "/images/case-studies/Enterprise SEO Strategies Scaling Your Organic Growth.webp", label: "Enterprise SEO" },
                    { image: "/images/about/our-vision.webp", label: "Vision Strategy" }
                  ]).map((asset, i) => {
                    const src = typeof asset === "string" ? asset : asset.image;
                    const label = typeof asset === "string" ? `Asset #${i + 1}` : (asset.label || `Asset #${i + 1}`);
                    return (
                      <div
                        key={i}
                        className="group relative aspect-[3.7/5] rounded-xl overflow-hidden bg-slate-900 border border-slate-200"
                      >
                        <Image
                          src={src}
                          alt={label}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 33vw, 180px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-2.5">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight drop-shadow-sm">
                            {label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 05: CAMPAIGN DELIVERABLES & MEDIA ASSETS                           */}
      {/* ========================================================================= */}
      <section className="py-6 lg:py-10 bg-[#FFFDF8] border-b border-[#F4E9D7]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                05 - CAMPAIGN DELIVERABLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1028] leading-tight">
              Assets built to reassure.<br />
              <span className="text-[#D4AF37]">Engineered to convert.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
              Every deliverable was tested and aligned to the customer journey, from first impression to closed deal.
            </p>
          </div>

          {/* Deliverables 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {caseStudy.deliverables?.map((del, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#EDE4D5] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Thumbnail */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={del.image}
                    alt={del.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#06143D] text-[#D4AF37] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {del.category}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1028] mb-3 leading-snug">
                      {del.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                      {del.quote}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#D4AF37] block">
                      {del.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 06: SEO · PROOF IN THE SERPS (rank-table)                          */}
      {/* ========================================================================= */}
      <section className="py-6 lg:py-10 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 sm:mb-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                  06 - SEO · PROOF IN THE SERPS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1028] leading-tight">
                Real rankings. Real impressions.<br />
                <span className="text-[#D4AF37]">Real market demand.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                Customers don't browse casually—they search with immediate intent. We captured demand at the exact moment of decision.
              </p>
            </div>
          </div>

          {/* 4 Big Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {caseStudy.serpData?.stats?.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8ECEF] rounded-2xl p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col justify-center"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0B1028] tracking-tight leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Live SERP Verification Table (Brandshark rank-table) */}
          <div className="bg-white border border-[#E8ECEF] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.04)]">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 px-6 sm:px-8 py-5 bg-[#F8FAFC] border-b border-slate-100 text-xs font-black uppercase tracking-[0.15em] text-slate-400">
              <div className="col-span-6 sm:col-span-7">Target Keyword</div>
              <div className="col-span-3 sm:col-span-2 text-center">Google Rank</div>
              <div className="col-span-3 sm:col-span-3 text-right">Monthly Volume & Intent</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {caseStudy.serpData?.keywords?.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 px-6 sm:px-8 py-5 sm:py-6 items-center hover:bg-slate-50/60 transition-colors"
                >
                  <div className="col-span-6 sm:col-span-7 font-bold text-sm sm:text-base text-[#0B1028] pr-4">
                    {row.keyword}
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center">
                    <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full text-sm sm:text-base font-extrabold bg-[#FFF9ED] text-[#D4AF37] border border-[#D4AF37]/30">
                      {row.rank}
                    </span>
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-right">
                    <span className="font-bold text-xs sm:text-sm text-slate-700 block">
                      {row.volume}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                      {row.intent}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 07: THE OUTCOME (bs-card-row with Frosted Glass Cards)            */}
      {/* ========================================================================= */}
      <section className="py-6 lg:py-10 bg-[#FFFDF8] border-b border-[#F4E9D7]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                07 - THE OUTCOME
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1028] leading-tight">
              From an overlooked player to<br />
              <span className="text-[#D4AF37]">the recognized market leader.</span>
            </h2>
          </div>

          {/* 3 Frosted Navy & Gold Cards (Brandshark bs-glass-card style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudy.outcomes?.map((outcomeText, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative min-h-[190px] rounded-3xl overflow-hidden p-8 flex flex-col justify-center text-center shadow-[0_16px_40px_rgba(6,20,61,0.12)] border border-[#D4AF37]/30 bg-gradient-to-br from-[#0B1F3A] to-[#06143D]"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-black text-sm mx-auto mb-4">
                  0{idx + 1}
                </div>
                <p className="text-white text-base sm:text-lg font-semibold leading-relaxed drop-shadow-sm">
                  {outcomeText}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 08: CLIENT TESTIMONIAL QUOTE                                      */}
      {/* ========================================================================= */}
      {caseStudy.testimonial?.items?.[0] && (
        <section className="py-6 lg:py-10 bg-[#FFFFFF] border-b border-slate-100">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="relative bg-[#FFFDF8] border border-[#EDE4D5] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(212,175,55,0.06)] text-center">
              
              {/* Gold Star Rating */}
              <div className="flex justify-center items-center gap-1.5 mb-6 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Big Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B1028] leading-relaxed mb-6">
                “{caseStudy.testimonial.items[0].review}”
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] mb-3 relative bg-slate-200">
                  <Image
                    src={caseStudy.testimonial.items[0].photo || "https://i.pravatar.cc/150?img=11"}
                    alt={caseStudy.testimonial.items[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-extrabold text-lg text-[#0B1028]">
                  {caseStudy.testimonial.items[0].name}
                </div>
                <div className="text-sm font-semibold text-slate-500">
                  {caseStudy.testimonial.items[0].designation} · {caseStudy.testimonial.items[0].company}
                </div>
              </div>

            </div>

          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* SECTION 09: BEFORE & AFTER COMPARISON                                     */}
      {/* ========================================================================= */}
      {caseStudy.beforeAfter && (
        <section className="py-6 lg:py-10 bg-[#FFFDF8] border-b border-[#F4E9D7]/60">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                  TRANSFORMATION SUMMARY
                </span>
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1028]">
                Before vs After Implementation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Before Column */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-500 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  {caseStudy.beforeAfter.before?.title || "Before Our Intervention"}
                </h3>
                <ul className="space-y-4">
                  {caseStudy.beforeAfter.before?.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Column */}
              <div className="bg-white border-2 border-[#D4AF37] rounded-3xl p-8 shadow-[0_10px_35px_rgba(212,175,55,0.08)]">
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#D4AF37] mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  {caseStudy.beforeAfter.after?.title || "After NexRank Strategy"}
                </h3>
                <ul className="space-y-4">
                  {caseStudy.beforeAfter.after?.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#0B1028] font-medium text-sm sm:text-base leading-relaxed">
                      <span className="text-[#D4AF37] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* SECTION 10: FAQ & STRATEGY CONSULTATION FORM                              */}
      {/* (Brandshark: "You Got Questions? We Got Answers" Section)                */}
      {/* ========================================================================= */}
      <section id="contact" className="py-6 lg:py-10 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                08 - FAQ & CONSULTATION
              </span>
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1028] leading-tight">
              You Got Questions? <span className="text-[#D4AF37]">We Got Answers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 6 Columns: High-Converting Audit / Consultation Form */}
            <div className="lg:col-span-6 bg-[#FFFDF8] border border-[#EDE4D5] rounded-3xl p-8 sm:p-10 shadow-[0_12px_40px_rgba(212,175,55,0.06)]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1028] mb-2">
                Get a Strategy Audit for Your Business
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Learn how our full-funnel digital strategy can achieve similar high-ROAS results for your brand.
              </p>

              {formStatus.submitted ? (
                <div className="p-6 bg-white border border-[#D4AF37] rounded-2xl text-center">
                  <span className="text-4xl block mb-2">🎉</span>
                  <h4 className="text-lg font-bold text-[#0B1028] mb-1">Thank You!</h4>
                  <p className="text-sm text-slate-600">
                    Your request has been received. A senior digital strategist will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4" suppressHydrationWarning>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Company Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Select a Service *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                        suppressHydrationWarning
                      >
                        <option value="">Select Service...</option>
                        <option value="Local SEO & GBP">Local SEO & GBP</option>
                        <option value="Enterprise SEO">Enterprise SEO</option>
                        <option value="Google & Performance Max Ads">Google & Performance Max Ads</option>
                        <option value="Meta Ads & Social Growth">Meta Ads & Social Growth</option>
                        <option value="Next.js Web Development">Next.js Web Development</option>
                        <option value="Full-Funnel 360 Marketing">Full-Funnel 360 Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Project Details / Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target goals and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                      suppressHydrationWarning
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-[#06143D] hover:bg-[#D4AF37] hover:text-[#0B1028] text-white transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 mt-2"
                    suppressHydrationWarning
                  >
                    {formStatus.loading ? "Processing..." : "Get Free Strategy Consultation →"}
                  </button>
                </form>
              )}
            </div>

            {/* Right 6 Columns: Interactive Accordion FAQ */}
            <div className="lg:col-span-6 space-y-4">
              {caseStudy.faq?.items?.map((faqItem, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E8ECEF] rounded-2xl overflow-hidden bg-white shadow-xs transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-base sm:text-lg text-[#0B1028] hover:text-[#D4AF37] transition-colors cursor-pointer"
                      suppressHydrationWarning
                    >
                      <span className="pr-4">{faqItem.question}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#FFF9ED] text-[#D4AF37] flex items-center justify-center font-bold text-lg">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-50">
                        {faqItem.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 11: RELATED CASE STUDIES                                          */}
      {/* ========================================================================= */}
      {caseStudy.relatedCaseStudies?.items?.length > 0 && (
        <section className="py-6 lg:py-10 bg-[#FFFDF8]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[2px] bg-[#D4AF37]" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                    EXPLORE MORE WORK
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1028]">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#D4AF37] hover:text-[#0B1028] transition-colors"
              >
                <span>View Full Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.relatedCaseStudies.items.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/case-studies/${rel.slug}`}
                  className="group bg-white border border-[#EDE4D5] rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_16px_36px_rgba(212,175,55,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                    <Image
                      src={rel.image || "/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp"}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1028] group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {rel.description}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D4AF37]">
                      <span>Read Case Study</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
