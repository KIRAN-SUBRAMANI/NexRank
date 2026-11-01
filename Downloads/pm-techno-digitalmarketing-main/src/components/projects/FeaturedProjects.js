"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    industry: "HEALTHCARE",
    title: "Scaling Patient Acquisition for a Regional Healthcare Clinic",
    result: "+180% Organic Patient Leads",
    description: "Dominated the local map pack and increased organic patient bookings within 6 months through aggressive Local SEO.",
    image: "/images/case-studies/Healthcare SEO Services for Clinics and Hospitals.jpg",
    link: "/case-studies/scaling-patient-acquisition-regional-healthcare-clinic"
  },
  {
    id: 2,
    industry: "E-COMMERCE",
    title: "Achieving 420% ROAS for a National D2C Brand",
    result: "420% ROAS",
    description: "Restructured Google Shopping and Meta Ad campaigns to eliminate wasted spend and maximize profitability.",
    image: "/images/case-studies/DIRECT TO CONSUMER.jpg",
    link: "/case-studies/achieving-420-percent-roas-for-national-d2c-brand"
  },
  {
    id: 3,
    industry: "WEB DEVELOPMENT",
    title: "High-Performance Next.js Architecture & Modern Web Development",
    result: "<1s Page Load",
    description: "Engineered a lightning-fast headless Next.js web application that dramatically increased lead conversion rates.",
    image: "/images/services/web dev.jpg",
    link: "/case-studies/high-performance-nextjs-architecture-real-estate-firm"
  },
  {
    id: 4,
    industry: "B2B / SAAS",
    title: "Scaling B2B SaaS Demand Generation with Paid Ads",
    result: "-55% Cost Per Demo",
    description: "Leveraged advanced Lookalike audiences on Meta to slash the Cost Per Demo and build a scalable acquisition channel.",
    image: "/images/case-studies/ads-campaign.png",
    link: "/case-studies/scaling-b2b-saas-demos-with-meta-ads"
  },
  {
    id: 5,
    industry: "LOCAL BUSINESS",
    title: "Building Local Search Visibility and Qualified Leads",
    result: "+140% Qualified Enquiries",
    description: "Combined local search optimization with hyper-targeted social ads to increase foot traffic and direct phone calls.",
    image: "/images/case-studies/Local SEO_.jpg",
    link: "/case-studies/omnichannel-growth-regional-restaurant-chain"
  },
  {
    id: 6,
    industry: "MULTI-LOCATION BRAND",
    title: "Cutting Cost Per Lead by 46% for a Multi-Location Brand",
    result: "-46% CPL",
    description: "A comprehensive campaign restructuring resulting in 134% more qualified leads and a 2.9x ROAS across locations.",
    image: "/images/case-studies/multi brand.jpg",
    link: "/case-studies/google-ads-multi-location-education-brand"
  }
];

export default function FeaturedProjects({ hideHeader = false }) {

  return (
    <section 
      className="py-16 sm:py-24 lg:py-28 w-full bg-[#0A0A0A] relative overflow-hidden text-[#D4AF37]"
    >

      {/* LUXURY DARK AMBIENT LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top subtle radial wash */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-white/[0.03] rounded-full blur-[130px]" />
        {/* Soft luxury gold accent light on right */}
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-[#D4AF37]/[0.07] rounded-full blur-[150px]" />
        {/* Warm luxury gold ambient glow on bottom left */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#D4AF37]/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: -48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-4">
                <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
                FEATURED CASE STUDIES
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
                <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-tight mb-6 tracking-tight">
              Real Results. <span className="text-[#D4AF37]">Proven</span> Digital Growth.
            </h2>

            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Explore how NexRank helps businesses grow through strategic SEO,
              paid advertising, local search, and high-performing digital experiences.
            </p>
          </motion.div>
        )}

        {/* GRID LAYOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {caseStudies.map((study) => (
            <Link 
              key={study.id} 
              href={study.link}
              className="relative block w-full h-[280px] rounded-[24px] overflow-hidden group/card shadow-[0_12px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
                
                {/* FULL BACKGROUND IMAGE */}
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] brightness-[1.08] contrast-[1.04] saturate-[1.1] group-hover/card:scale-110 group-hover/card:brightness-[1.12]"
                />

                {/* Animated 'X' Overlay Background */}
                <div 
                  className="absolute inset-0 pointer-events-none z-[2] transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] -translate-x-[40%] group-hover/card:translate-x-[40%]"
                >
                  <div className="absolute top-[-50%] bottom-[-50%] left-1/2 w-[45%] -translate-x-1/2 rotate-[35deg] bg-[rgba(255,255,255,0.15)]" />
                  <div className="absolute top-[-50%] bottom-[-50%] left-1/2 w-[45%] -translate-x-1/2 -rotate-[35deg] bg-[rgba(255,255,255,0.15)]" />
                </div>

                {/* DEFAULT OVERLAY (Subtle soft tint to preserve bright image colors) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover/card:opacity-0 z-[3]" />

                {/* MOBILE VISIBLE TITLE (Hidden on Desktop 'lg:hidden') */}
                <div className="lg:hidden absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-[5]">
                  <span className="text-[#D4AF37] text-[10px] font-bold tracking-wider uppercase block mb-1">
                    {study.industry}
                  </span>
                  <h3 className="text-white text-[15px] font-bold leading-snug line-clamp-2">
                    {study.title}
                  </h3>
                </div>

                {/* DESKTOP HOVER OVERLAY (Displays content on hover with clean neutral backdrop) */}
                <div className="hidden lg:flex absolute inset-0 bg-black/60 backdrop-blur-md flex-col justify-center items-center p-6 md:p-8 transition-all duration-500 opacity-0 group-hover/card:opacity-100 text-center z-10">
                  
                  <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.2em] mb-3 flex items-center justify-center gap-2 transform translate-y-6 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {study.industry}
                  </span>
                  
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white leading-[1.3] mb-8 transform translate-y-6 group-hover/card:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                    {study.title}
                  </h3>
                  
                  <span className="inline-flex items-center justify-center gap-2 text-white font-bold text-[14px] px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-white hover:text-black transition-all duration-300 transform translate-y-6 group-hover/card:translate-y-0 transition-transform duration-500 delay-150 ease-out shadow-lg shadow-black/20">
                    View Case Study 
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </span>
                </div>

                {/* RESULT BADGE (Always visible, clean neutral styling) */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-[10px] px-3.5 py-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.25)] z-20 transition-all duration-500 group-hover/card:bg-white group-hover/card:border-white">
                  <span className="block font-extrabold text-[12px] tracking-wide uppercase text-white group-hover/card:text-black">
                    {study.result}
                  </span>
                </div>

            </Link>
          ))}
        </motion.div>



      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
