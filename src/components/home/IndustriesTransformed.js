"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  MapPin,
  Megaphone,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const SWITCH_INTERVAL = 1500;

const services = {
  seo: { name: "SEO", Icon: Search },
  local: { name: "Local SEO", Icon: MapPin },
  google: { name: "Google Ads", Icon: Target },
  meta: { name: "Meta Ads", Icon: Megaphone },
  web: { name: "Web Development", Icon: Code2 },
};

const industries = [
  {
    name: "Healthcare",
    tag: "PATIENT ACQUISITION",
    headline: "Be Found. Build Trust.",
    description: "Help patients discover and connect with your practice.",
    outcome: "More appointment enquiries",
    accent: "#D8FA65",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=85",
    recommendations: [
      ["local", "Appear in nearby patient searches"],
      ["seo", "Build visibility for treatments and services"],
      ["web", "Make appointment enquiries easier"],
    ],
  },
  {
    name: "Real Estate",
    tag: "PROPERTY LEAD GENERATION",
    headline: "Turn Interest Into Enquiries.",
    description: "Reach buyers and sellers at the right moment.",
    outcome: "More qualified property leads",
    accent: "#FF9476",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
    recommendations: [
      ["google", "Reach active property searchers"],
      ["seo", "Grow organic property discovery"],
      ["web", "Convert listing visits into enquiries"],
    ],
  },
  {
    name: "E-commerce",
    tag: "ONLINE SALES GROWTH",
    headline: "More Discovery. More Sales.",
    description: "Bring shoppers closer to products they want.",
    outcome: "More online purchases",
    accent: "#8FD3FF",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
    recommendations: [
      ["google", "Capture high-intent product searches"],
      ["meta", "Reach and re-engage shoppers"],
      ["seo", "Build long-term product visibility"],
    ],
  },
  {
    name: "Travel",
    tag: "TRAVEL BOOKINGS",
    headline: "Inspire The Next Journey.",
    description: "Connect memorable experiences with new travelers.",
    outcome: "More booking enquiries",
    accent: "#C8B7FF",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
    recommendations: [
      ["seo", "Get discovered for destinations"],
      ["google", "Reach people planning trips"],
      ["meta", "Inspire audiences with travel campaigns"],
    ],
  },
  {
    name: "Restaurants",
    tag: "LOCAL CUSTOMER GROWTH",
    headline: "Fill More Tables.",
    description: "Help nearby diners discover your restaurant.",
    outcome: "More visits and reservations",
    accent: "#FFD76A",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85",
    recommendations: [
      ["local", "Improve nearby restaurant discovery"],
      ["meta", "Promote menus and special offers"],
      ["google", "Reach diners searching nearby"],
    ],
  },
  {
    name: "Logistics",
    tag: "B2B LEAD GENERATION",
    headline: "Move Business Forward.",
    description: "Reach companies looking for reliable logistics partners.",
    outcome: "More qualified B2B enquiries",
    accent: "#8FD3FF",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
    recommendations: [
      ["seo", "Build visibility for logistics solutions"],
      ["google", "Reach companies searching for providers"],
      ["web", "Showcase capabilities and capture leads"],
    ],
  },
  {
    name: "IT Companies",
    tag: "TECHNOLOGY DEMAND GENERATION",
    headline: "Make Expertise Visible.",
    description: "Connect your technology solutions with decision-makers.",
    outcome: "More qualified enterprise leads",
    accent: "#D8FA65",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=85",
    recommendations: [
      ["seo", "Rank for software and technical solutions"],
      ["google", "Reach high-intent B2B prospects"],
      ["web", "Convert visitors into demo requests"],
    ],
  },
  {
    name: "Startups",
    tag: "EARLY-STAGE MOMENTUM",
    headline: "Big Ideas. Bold Moves.",
    description: "Build awareness and reach your first customers.",
    outcome: "Stronger early market traction",
    accent: "#F3B5E8",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85",
    recommendations: [
      ["meta", "Test audiences and build awareness"],
      ["web", "Create a clear, conversion-focused website"],
      ["seo", "Establish organic discoverability"],
    ],
  },
  {
    name: "Professional Services",
    tag: "TRUST AND LEAD GENERATION",
    headline: "Turn Expertise Into Demand.",
    description: "Build authority and attract clients seeking your services.",
    outcome: "More high-intent enquiries",
    accent: "#C8B7FF",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    recommendations: [
      ["local", "Reach clients in your service area"],
      ["google", "Capture high-intent service searches"],
      ["seo", "Build authority around your expertise"],
    ],
  },
];

export default function IndustriesTransformed() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);

  const reduced = useReducedMotion();
  const industry = industries[active];

  // Auto-switch every 2.5 seconds.
  // Restart the timer after manual selection.
  useEffect(() => {
    if (paused || reduced) return;

    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % industries.length);
      setCycle((current) => current + 1);
    }, SWITCH_INTERVAL);

    return () => clearTimeout(timer);
  }, [active, paused, reduced, cycle]);

  function selectIndustry(index) {
    setActive(index);
    setCycle((current) => current + 1);
  }

  const transitionEase = [0.22, 1, 0.36, 1];

  return (
    <section className="overflow-hidden bg-[#F6F4EF] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8">
        {/* Compact heading */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.23em] text-[#79A92A]">
              ● INDUSTRIES × SERVICES
            </p>

            <h2 className="text-[clamp(2rem,4vw,3.7rem)] font-black leading-[1.05] tracking-[-0.065em] text-[#111827]">
              Different Industries.{" "}
              <span className="text-[#83B52C]">One Growth Engine.</span>
            </h2>
          </div>

          <p className="max-w-[310px] text-sm leading-relaxed text-[#667085]">
            Select your industry. Explore a tailored digital growth strategy.
          </p>
        </motion.div>

        {/* Growth Engine */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
          className="grid overflow-hidden rounded-[28px] bg-[#111827] lg:h-[540px] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[285px_minmax(0,1fr)]"
        >
          {/* Industry selector */}
          <div className="relative z-20 border-b border-white/10 bg-[#111827] p-4 lg:border-b-0 lg:border-r lg:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D8FA65]">
                Select Industry
              </span>

              <span className="text-xs font-bold text-white/40">09</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
              {industries.map((item, index) => {
                const selected = index === active;

                return (
                  <button
                    key={item.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => selectIndustry(index)}
                    onMouseEnter={() => {
                      if (index !== active) selectIndustry(index);
                    }}
                    className={`group relative flex min-h-[42px] items-center gap-2 overflow-hidden rounded-xl border px-3 text-left transition-colors duration-200 lg:min-h-[46px] ${
                      selected
                        ? "border-transparent text-[#111827]"
                        : "border-white/10 bg-[#202B3E] text-white hover:border-[#D8FA65]/50"
                    }`}
                  >
                    {/* Sliding active highlight */}
                    {selected && (
                      <motion.span
                        layoutId="active-industry-highlight"
                        className="absolute inset-0 rounded-xl bg-[#D8FA65]"
                        transition={{
                          type: "spring",
                          stiffness: 330,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 text-[10px] font-bold ${
                        selected ? "text-[#45610E]" : "text-white/40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="relative z-10 min-w-0 flex-1 text-[11px] font-bold sm:text-xs">
                      {item.name}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className={`relative z-10 hidden shrink-0 lg:block ${
                        selected ? "text-[#111827]" : "text-white/50"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-3 hidden items-center gap-2 border-t border-white/10 pt-3 text-[10px] text-white/45 lg:flex">
              <span
                className={`h-1.5 w-1.5 rounded-full bg-[#D8FA65] ${
                  paused ? "" : "animate-pulse"
                }`}
              />

              {paused
                ? "Paused · Explore an industry"
                : "Auto-playing · Hover to pause"}
            </div>
          </div>

          {/* Image stage */}
          <div className="relative isolate min-h-[580px] overflow-hidden sm:min-h-[520px] lg:min-h-0">
            {/* Animated progress bar */}
            <div className="absolute inset-x-0 top-0 z-30 h-[3px] bg-white/10">
              {!paused && !reduced && (
                <motion.div
                  key={`progress-${cycle}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: SWITCH_INTERVAL / 1000,
                    ease: "linear",
                  }}
                  className="h-full w-full origin-left"
                  style={{
                    backgroundColor: industry.accent,
                  }}
                />
              )}
            </div>

            {/* Cinematic image transition */}
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={industry.name}
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        scale: 1.12,
                        filter: "blur(12px)",
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={
                  reduced
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 1.04,
                        filter: "blur(8px)",
                      }
                }
                transition={{
                  duration: reduced ? 0 : 0.75,
                  ease: transitionEase,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={industry.image}
                  alt={`${industry.name} industry`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Image overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/65 to-[#0B1220]/50" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-[#0B1220]/35" />

            {/* Moving light sweep on every transition */}
            {!reduced && (
              <motion.div
                key={`sweep-${cycle}`}
                initial={{ x: "-130%", opacity: 0 }}
                animate={{
                  x: "220%",
                  opacity: [0, 0.55, 0],
                }}
                transition={{
                  duration: 0.95,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 z-[5] w-[35%] -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
              />
            )}

            {/* Top indicators */}
            <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between gap-3 sm:left-7 sm:right-7">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#0B1220]/75 px-3 py-2 backdrop-blur-md">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: industry.accent }}
                />

                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white">
                  Growth Engine Active
                </span>
              </div>

              <span className="text-xs font-black tracking-widest text-white/80">
                {String(active + 1).padStart(2, "0")} / 09
              </span>
            </div>

            {/* Industry copy and recommendations */}
            <div className="relative z-10 grid min-h-[580px] items-end gap-6 px-5 pb-6 pt-20 sm:min-h-[520px] sm:px-7 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-center lg:gap-5 lg:pb-5 lg:pt-14 xl:grid-cols-[minmax(0,1fr)_360px]">
              {/* Headline */}
              <div className="min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${industry.name}-copy`}
                    initial={
                      reduced
                        ? false
                        : {
                            opacity: 0,
                            y: 35,
                            filter: "blur(10px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={
                      reduced
                        ? { opacity: 0 }
                        : {
                            opacity: 0,
                            y: -25,
                            filter: "blur(8px)",
                          }
                    }
                    transition={{
                      duration: reduced ? 0 : 0.45,
                      ease: "easeOut",
                    }}
                  >
                    <p
                      className="mb-3 text-[10px] font-black uppercase tracking-[0.19em]"
                      style={{ color: industry.accent }}
                    >
                      {industry.tag}
                    </p>

                    <h3 className="max-w-[460px] text-[clamp(2rem,3.3vw,3.6rem)] font-black leading-[1.04] tracking-[-0.06em] text-white">
                      {industry.headline}
                    </h3>

                    <p className="mt-4 max-w-[370px] text-sm leading-relaxed text-white/70">
                      {industry.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span
                        className="h-[3px] w-9 rounded-full"
                        style={{ backgroundColor: industry.accent }}
                      />

                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                        Tailored for {industry.name}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic strategy panel */}
              <div className="rounded-[22px] border border-white/20 bg-[#151D2B]/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={17} style={{ color: industry.accent }} />

                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white/80">
                      Your Growth Blueprint
                    </span>
                  </div>

                  <Sparkles size={18} style={{ color: industry.accent }} />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${industry.name}-services`}
                    initial={
                      reduced
                        ? false
                        : {
                            opacity: 0,
                            y: 12,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      reduced
                        ? { opacity: 0 }
                        : {
                            opacity: 0,
                            y: -8,
                          }
                    }
                    transition={{
                      duration: reduced ? 0 : 0.25,
                    }}
                    className="space-y-2"
                  >
                    {industry.recommendations.map(([key, reason], index) => {
                      const service = services[key];
                      const Icon = service.Icon;

                      return (
                        <motion.div
                          key={key}
                          initial={
                            reduced
                              ? false
                              : {
                                  opacity: 0,
                                  x: 35,
                                  scale: 0.9,
                                  filter: "blur(5px)",
                                }
                          }
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 230,
                            damping: 20,
                            delay: reduced ? 0 : index * 0.12,
                          }}
                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5"
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#111827]"
                            style={{
                              backgroundColor: industry.accent,
                            }}
                          >
                            <Icon size={17} />
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-bold text-white">
                              {service.name}
                            </p>

                            <p className="mt-0.5 text-[10px] leading-snug text-white/55">
                              {reason}
                            </p>
                          </div>

                          <Check size={14} className="shrink-0 text-white/45" />
                        </motion.div>
                      );
                    })}

                    <div className="mt-3 rounded-xl border border-white/10 bg-[#0B1220]/80 px-3 py-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                        Target Outcome
                      </p>

                      <p
                        className="mt-1.5 flex items-center gap-2 text-xs font-bold"
                        style={{ color: industry.accent }}
                      >
                        <TrendingUp size={15} />
                        {industry.outcome}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <Link
                  href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                  className="group mt-3 flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-[13px] font-black text-[#111827] transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: industry.accent,
                  }}
                >
                  Build My Strategy
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Compact footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="flex items-center gap-2 text-[#697386]">
            <Globe2 size={15} />
            Nine industries. Tailored strategies. One growth partner.
          </span>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-[#111827] hover:text-[#83B52C]"
          >
            Don't See Your Industry?
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
