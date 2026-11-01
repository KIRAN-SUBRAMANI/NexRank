"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe, 
  Target, 
  TrendingUp, 
  MapPin, 
  Code2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import LottiePlayer from "@/components/common/LottiePlayer";

export default function ServicesGrid({ services }) {
  // Map services by slug or id
  const getService = (slug) => {
    return services?.find((s) => s.slug === slug || s.id === slug) || {};
  };

  const seo = getService("seo");
  const googleAds = getService("google-ads");
  const metaAds = getService("meta-ads");
  const gbp = getService("google-business-profile");
  const webDev = getService("web-development");

  return (
    <div className="w-full relative z-10 font-poppins">
      
      {/* 3-Column Asymmetric Bento Grid (Matches user reference exactly) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* ========================================================= */}
        {/* COLUMN 1: [Card 1: Tall] + [Card 2: Short]               */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1: Google Ads (Tall) */}
          <Link
            href={googleAds.buttonLink || "/services/google-ads"}
            className="group relative bg-white rounded-[24px] p-6 sm:p-7 flex flex-col justify-between border border-slate-200/80 hover:border-[#ffdf00] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_30px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12),0_0_0_2px_#ffdf00] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-auto min-h-[360px] lg:h-[370px]"
          >
            {/* Dedicated Lottie Canvas (Prominent & Spacious) */}
            <div className="w-full h-[195px] flex items-center justify-center relative select-none pointer-events-none">
              <div className="w-full h-full max-h-[190px] max-w-[240px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-108">
                <LottiePlayer animationPath={googleAds.lottiePath || "/lottie/google-ads.json"} />
              </div>
            </div>

            {/* Bottom Content Info */}
            <div className="flex flex-col pt-2">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#ffdf00] group-hover:border-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-all duration-300 shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#ffdf00] transition-colors duration-200 leading-snug">
                  {googleAds.title || "Google Ads Management"}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                {googleAds.shortDescription || "Precision search and Performance Max campaigns that capture high-intent buyers with optimal spend efficiency."}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <span>Explore Google Ads</span>
                <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: Google Business Profile (Short) */}
          <Link
            href={gbp.buttonLink || "/services/google-business-profile"}
            className="group relative bg-white rounded-[24px] p-6 sm:p-7 flex items-center justify-between gap-3 sm:gap-4 border border-slate-200/80 hover:border-[#ffdf00] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_30px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12),0_0_0_2px_#ffdf00] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-auto min-h-[240px] lg:h-[270px]"
          >
            {/* Left Content Column */}
            <div className="flex flex-col justify-between h-full flex-1 min-w-0 pr-1 z-10">
              <div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#ffdf00] group-hover:border-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-all duration-300 mb-2.5 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#ffdf00] transition-colors duration-200 leading-snug mb-1">
                  {gbp.title || "Google Business Profile"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {gbp.shortDescription || "Dominate local 3-Pack map rankings and turn nearby searches into direct phone calls."}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-900">
                <span>Explore Local Pack</span>
                <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>

            {/* Right Lottie Showcase (Noticeably Larger & Contained) */}
            <div className="w-[110px] sm:w-[185px] lg:w-[200px] h-[110px] sm:h-[175px] lg:h-[185px] shrink-0 flex items-center justify-center select-none pointer-events-none">
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                <LottiePlayer animationPath={gbp.lottiePath || "/lottie/gbp.json"} className="w-full h-full scale-[1.25] origin-center" />
              </div>
            </div>
          </Link>

        </div>

        {/* ========================================================= */}
        {/* COLUMN 2: [Card 3: Centerpiece Full-Height Hero Card]    */}
        {/* ========================================================= */}
        <div className="flex flex-col h-full">
          
          {/* Card 3: SEO (Center Flagship) */}
          <Link
            href={seo.buttonLink || "/services/seo"}
            className="group relative bg-white rounded-[24px] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-[#ffdf00] shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_36px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_55px_-12px_rgba(0,0,0,0.14),0_0_0_2px_#ffdf00] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full min-h-[480px] lg:h-[664px]"
          >
            {/* Top Eyebrow Pill */}
            <div className="flex items-center justify-between w-full z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdf00] text-[#0b0b0d] font-black border border-[#ffdf00] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0b0b0d] fill-[#0b0b0d]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0b0b0d]">
                  Flagship Growth Practice
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">NexRank #1 Service</span>
            </div>

            {/* Giant Centerpiece Lottie Stage */}
            <div className="w-full flex-grow flex items-center justify-center my-3 relative select-none pointer-events-none min-h-[270px] sm:min-h-[300px]">
              <div className="w-full h-full max-h-[320px] max-w-[340px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-108">
                <LottiePlayer animationPath={seo.lottiePath || "/lottie/seo.json"} />
              </div>
            </div>

            {/* Bottom Content Info */}
            <div className="flex flex-col pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#ffdf00] group-hover:border-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-all duration-300 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#ffdf00] transition-colors duration-200 leading-snug">
                  {seo.title || "Search Engine Optimization"}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                {seo.shortDescription || "Technical audits, semantic keyword mapping, and white-hat link acquisition that secure dominant #1 organic rankings on Google."}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-400">
                  Technical Audit • Semantic Map • Authority
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#0b0b0d] group-hover:underline">
                  <span>Explore Practice</span>
                  <span className="w-5 h-5 rounded-full bg-[#ffdf00] text-[#0b0b0d] flex items-center justify-center transition-colors duration-200">
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </div>
            </div>
          </Link>

        </div>

        {/* ========================================================= */}
        {/* COLUMN 3: [Card 4: Short] + [Card 5: Tall]               */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-6">
          
          {/* Card 4: Meta Ads (Short) */}
          <Link
            href={metaAds.buttonLink || "/services/meta-ads"}
            className="group relative bg-white rounded-[24px] p-6 sm:p-7 flex items-center justify-between gap-3 sm:gap-4 border border-slate-200/80 hover:border-[#ffdf00] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_30px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12),0_0_0_2px_#ffdf00] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-auto min-h-[240px] lg:h-[270px]"
          >
            {/* Left Content Column */}
            <div className="flex flex-col justify-between h-full flex-1 min-w-0 pr-1 z-10">
              <div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#ffdf00] group-hover:border-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-all duration-300 mb-2.5 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#ffdf00] transition-colors duration-200 leading-snug mb-1">
                  {metaAds.title || "Meta Ads (Facebook & IG)"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {metaAds.shortDescription || "Full-funnel creative testing and algorithmic lookalike audiences that turn social clicks into revenue."}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-900">
                <span>Explore Paid Social</span>
                <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>

            {/* Right Lottie Showcase (Noticeably Larger & Contained) */}
            <div className="w-[120px] sm:w-[200px] lg:w-[215px] h-[115px] sm:h-[175px] lg:h-[185px] shrink-0 flex items-center justify-center select-none pointer-events-none">
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                <LottiePlayer 
                  animationPath={metaAds.lottiePath || "/lottie/meta-ads.json"} 
                  className="w-full h-full scale-[1.55] origin-center -translate-y-2" 
                />
              </div>
            </div>
          </Link>

          {/* Card 5: Web Development (Tall) */}
          <Link
            href={webDev.buttonLink || "/services/web-development"}
            className="group relative bg-white rounded-[24px] p-6 sm:p-7 flex flex-col justify-between border border-slate-200/80 hover:border-[#ffdf00] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_30px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12),0_0_0_2px_#ffdf00] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-auto min-h-[360px] lg:h-[370px]"
          >
            {/* Dedicated Lottie Canvas (Prominent & Spacious) */}
            <div className="w-full h-[195px] flex items-center justify-center relative select-none pointer-events-none">
              <div className="w-full h-full max-h-[190px] max-w-[240px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-108">
                <LottiePlayer animationPath={webDev.lottiePath || "/lottie/web-dev.json"} />
              </div>
            </div>

            {/* Bottom Content Info */}
            <div className="flex flex-col pt-2">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#ffdf00] group-hover:border-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-all duration-300 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#ffdf00] transition-colors duration-200 leading-snug">
                  {webDev.title || "Enterprise Web Development"}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                {webDev.shortDescription || "Custom Next.js platforms built for extreme speed, 99+ Lighthouse scores, and seamless conversion architectures."}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <span>Explore Web Engineering</span>
                <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#ffdf00] text-slate-700 group-hover:text-[#0b0b0d] flex items-center justify-center transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}
