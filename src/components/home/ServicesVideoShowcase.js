"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Target, 
  MapPin, 
  Code2, 
  BarChart3 
} from "lucide-react";

const showcaseServices = [
  {
    id: "seo",
    number: "01",
    tag: "SEARCH ENGINE OPTIMIZATION",
    title: "Dominate Google Search Rankings & Drive Qualified Organic Revenue",
    description:
      "Transform high-intent searches into an unstoppable customer acquisition channel. We deploy deep technical SEO audits, Core Web Vitals optimization, authoritative link acquisition, and keyword architecture that reliably captures top rankings.",
    videoSrc: "/videos/SEO copy.mp4",
    link: "/services/seo",
    ctaText: "Explore SEO Solutions",
    accentColor: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.25)",
    badgeIcon: Globe,
    stats: [
      { label: "Organic Growth", value: "+240%" },
      { label: "SERP Rankings", value: "Top 3" },
      { label: "Methodology", value: "100% White-Hat" }
    ],
    features: [
      "Deep Technical Audits & Core Web Vitals Optimization",
      "High-Intent Keyword Intelligence & Search Intent Mapping",
      "White-Hat Authority Link Building & Digital PR",
      "Live Keyword & Organic Conversion Analytics"
    ],
    videoAlignment: "left"
  },
  {
    id: "ads",
    number: "02",
    tag: "GOOGLE & META ADS",
    title: "High-Converting Paid Campaigns That Maximize ROAS & Scale Profit",
    description:
      "Stop burning marketing budgets on passive clicks. Our certified ad specialists engineer synchronized Google Ads (Search, Performance Max) and Meta Ads (Instagram, Facebook) funnels designed to capture ready-to-buy prospects and scale revenue profitably.",
    videoSrc: "/videos/Ads.mp4",
    link: "/services/google-ads",
    ctaText: "Explore Paid Ads",
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
    badgeIcon: Target,
    stats: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "Lower CPA", value: "-38%" },
      { label: "Ad Spend Managed", value: "$2.5M+" }
    ],
    features: [
      "High-Intent Google Search & Performance Max Campaigns",
      "Hyper-Targeted Meta (Instagram & Facebook) Retargeting",
      "High-Converting Creative Copy & Dynamic Video Ad Assets",
      "Advanced Conversion Tracking & Server-Side Pixel Setup"
    ],
    videoAlignment: "right"
  },
  {
    id: "web-dev",
    number: "03",
    tag: "WEB DEVELOPMENT",
    title: "Modern, High-Speed Next.js Web Experiences Engineered to Convert",
    description:
      "Your website is your 24/7 top-performing salesperson. We engineer blazing-fast, mobile-first web platforms using Next.js, modern micro-animations, and conversion-optimized architectures that turn visitors into loyal paying clients.",
    videoSrc: "/videos/web-dev.mp4",
    link: "/services/web-development",
    ctaText: "Explore Web Engineering",
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.25)",
    badgeIcon: Code2,
    stats: [
      { label: "PageSpeed Score", value: "98+" },
      { label: "Core Web Vitals", value: "< 1.2s" },
      { label: "Conversion Lift", value: "+65%" }
    ],
    features: [
      "Modern Next.js, React & Tailwind CSS Architecture",
      "Mobile-First Responsive Layouts with Micro-Animations",
      "Conversion-Engineered Sales Funnels & Lead Capture",
      "Enterprise Security, SEO Optimization & Zero Bloat"
    ],
    videoAlignment: "left"
  },
  {
    id: "gbp",
    number: "04",
    tag: "GOOGLE BUSINESS PROFILE",
    title: "Dominate Local Map 3-Pack Searches & Drive Qualified Inbound Calls",
    description:
      "Capture high-intent local buyers at the precise moment they search for your services nearby. We verify, optimize, and actively manage your Google Business Profile to rank in the coveted Google Map 3-Pack and drive massive phone call inquiries.",
    videoSrc: "/videos/google-business-profile.mp4",
    link: "/services/google-business-profile",
    ctaText: "Explore Local SEO & GBP",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)",
    badgeIcon: MapPin,
    stats: [
      { label: "Local Call Inquiries", value: "+180%" },
      { label: "Google 3-Pack", value: "Guaranteed" },
      { label: "Review Engine", value: "5★ Rating" }
    ],
    features: [
      "Google Business Profile Verification & Full Optimization",
      "Local 3-Pack Geo-Ranking & Proximity Signal Tuning",
      "Automated 5-Star Review Generation & Response Management",
      "Weekly Geo-Tagged Media, Service Catalog & Post Updates"
    ],
    videoAlignment: "right"
  }
];

function InteractivePhoneVideo({ videoSrc, accentColor, glowColor }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative group w-full max-w-[280px] sm:max-w-[360px] md:max-w-[380px] mx-auto">
      {/* Ambient Pulsing Glow behind phone */}
      <div 
        className="absolute -inset-4 rounded-[50px] opacity-40 blur-2xl transition-all duration-700 group-hover:opacity-75 group-hover:scale-105 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />

      {/* Smartphone Chassis Frame */}
      <div 
        className="relative z-20 rounded-[44px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(2,18,106,0.35),0_10px_20px_-5px_rgba(0,0,0,0.15)] ring-1 ring-white/10 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_35px_70px_-15px_rgba(2,18,106,0.45)] cursor-pointer"
        onClick={togglePlay}
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2.5 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-slate-800 ring-1 ring-slate-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Video Screen Container */}
        <div className="relative rounded-[34px] overflow-hidden bg-black aspect-[9/16] w-full shadow-inner">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover select-none"
          />

          {/* Interactive Play/Pause Overlay Indicator on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-[#02126a] transform transition-transform duration-300 scale-90 group-hover:scale-100">
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              )}
            </div>
          </div>

          {/* Audio Toggle Button */}
          <div className="absolute bottom-3 right-3 z-30 pointer-events-auto">
            <button
              type="button"
              suppressHydrationWarning
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 shadow-lg"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label="Toggle Audio"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-300" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#D4AF37]" />
              )}
            </button>
          </div>
        </div>

        {/* Smartphone Home Bar */}
        <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-2.5" />
      </div>
    </div>
  );
}

export default function ServicesVideoShowcase() {
  return (
    <section className="relative pt-12 sm:pt-14 lg:pt-16 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#fc7318]/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 -right-48 w-96 h-96 bg-[#02126a]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#02126a] tracking-tight leading-[1.2] mb-5">
            Next-Gen Digital Marketing &amp; Engineering in Action
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Watch our specialized growth frameworks deliver measurable results. We engineer end-to-end digital solutions that scale brand authority, traffic, and bottom-line revenue.
          </p>

          {/* 3-Pill Accent Divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-3.5 h-[5px] rounded-full bg-[#02126a]" />
            <span className="w-8 h-[5px] rounded-full bg-gradient-to-r from-[#fc7318] to-[#feb423]" />
            <span className="w-3.5 h-[5px] rounded-full bg-[#02126a]" />
          </div>
        </div>

        {/* Alternating Showcase Rows */}
        <div className="space-y-24 lg:space-y-32">
          {showcaseServices.map((service, index) => {
            const isVideoLeft = service.videoAlignment === "left";
            const BadgeIcon = service.badgeIcon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${
                  isVideoLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16 xl:gap-20`}
              >
                {/* Video Column */}
                <div className="w-full lg:w-5/12 flex justify-center">
                  <InteractivePhoneVideo
                    videoSrc={service.videoSrc}
                    accentColor={service.accentColor}
                    glowColor={service.glowColor}
                  />
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-7/12">
                  <div className="max-w-2xl">
                    {/* Index & Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-black text-slate-200 tracking-tighter">
                        {service.number}
                      </span>
                      <div className="h-4 w-px bg-slate-300" />
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                        <BadgeIcon className="w-3.5 h-3.5 text-[#02126a]" />
                        <span className="text-xs font-bold tracking-wider text-[#02126a] uppercase">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#02126a] leading-[1.25] tracking-tight mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.75] mb-6">
                      {service.description}
                    </p>

                    {/* Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-7 p-3 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_25px_rgba(2,18,106,0.04)]">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="text-center sm:text-left">
                          <div 
                            className="text-base sm:text-2xl font-black tracking-tight"
                            style={{ color: service.accentColor }}
                          >
                            {stat.value}
                          </div>
                          <div className="text-[10px] sm:text-[13px] font-medium text-slate-500 mt-0.5 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Feature Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 
                            className="w-5 h-5 shrink-0 mt-0.5" 
                            style={{ color: service.accentColor }}
                          />
                          <span className="text-slate-700 text-sm font-medium leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={service.link}
                        className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#02126a] text-white font-bold text-sm tracking-wide shadow-md hover:bg-[#fc7318] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#fc7318] transition-colors duration-200"
                      >
                        <span>Request Custom Proposal</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
