"use client";
import HeroAmbientWave from "./HeroAmbientWave";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Megaphone,
  TrendingUp,
  Sparkles,
  MousePointer2,
} from "lucide-react";

const scenes = [
  {
    id: "01",
    label: "VISIBILITY",
    kicker: "BE FOUND",
    headline: ["OWN THE", "SPOTLIGHT."],
    description: "SEO / Search / Discovery",
    background: "#D8FA65",
    accent: "#111827",
    Icon: Search,
  },
  {
    id: "02",
    label: "CREATIVITY",
    kicker: "BE REMEMBERED",
    headline: ["BREAK THE", "ORDINARY."],
    description: "Brand / Content / Social",
    background: "#C9D9FF",
    accent: "#111827",
    Icon: Megaphone,
  },
  {
    id: "03",
    label: "PERFORMANCE",
    kicker: "MAKE IT COUNT",
    headline: ["TURN CLICKS", "INTO GROWTH."],
    description: "Campaigns / Leads / Conversion",
    background: "#111827",
    accent: "#D8FA65",
    Icon: TrendingUp,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function MaditboxHero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % scenes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  const scene = scenes[active];

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 55,
          filter: "blur(6px)",
        },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: reduceMotion ? 0 : 0.9,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#F6F4EF] text-[#111827]">
      <HeroAmbientWave />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-8 pt-8 sm:px-10 lg:px-16 lg:pb-10 lg:pt-10">
        {" "}
        {/* Small introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <h1 className="text-[clamp(3rem,4.7vw,5.5rem)] font-bold leading-[1.07] tracking-[-0.065em]">
              <span className="block overflow-hidden pb-2">
                <motion.span {...reveal(0.1)} className="block">
                  Get Found.
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span {...reveal(0.3)} className="block text-[#97c933]">
                  Get Leads.
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span {...reveal(0.5)} className="block">
                  Grow Faster.
                </motion.span>
              </span>
            </h1>

            <motion.div
              {...reveal(0.68)}
              className="mt-5 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center gap-4 rounded-full bg-[#111827] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Get Free Consultation
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D8FA65] text-[#111827]">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:rotate-45"
                  />
                </span>
              </Link>

              <Link
                href="/case-studies"
                className="group inline-flex min-h-14 items-center gap-2 rounded-full border border-[#D5D8D2] bg-white px-6 text-sm font-bold transition-colors hover:border-[#111827]"
              >
                Explore Our Work
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              {...reveal(0.85)}
              className="mt-10 flex flex-wrap gap-6 border-t border-[#D8D8D2] pt-6 text-xs font-bold uppercase tracking-[0.1em] text-[#526071]"
            >
              <span>01 / Strategy</span>
              <span>02 / Creative</span>
              <span>03 / Growth</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE: ANIMATED CAMPAIGN STUDIO */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 90, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              delay: reduceMotion ? 0 : 0.3,
              ease,
            }}
            className="relative mx-auto w-full max-w-[670px]"
          >
            <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_35px_90px_rgba(17,24,39,0.14)] sm:rounded-[36px] sm:p-3">
              <div className="relative aspect-[1.16] overflow-hidden rounded-[22px] bg-[#D8FA65] sm:rounded-[28px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scene.id}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.96 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0,
                      ease,
                    }}
                    style={{
                      backgroundColor: scene.background,
                      color: scene.accent,
                    }}
                    className="absolute inset-0 flex flex-col justify-between overflow-hidden p-6 sm:p-10"
                  >
                    {/* Background oversized type */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-[13%] -right-[5%] select-none text-[clamp(12rem,24vw,27rem)] font-black leading-none opacity-[0.07]"
                    >
                      {scene.id}
                    </div>

                    {/* Top */}
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Sparkles size={19} />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] sm:text-xs">
                          NEXRANK / CREATIVE LAB
                        </span>
                      </div>
                      <span className="rounded-full border border-current px-3 py-1.5 text-[10px] font-bold">
                        {scene.id} / 03
                      </span>
                    </div>

                    {/* Center artwork */}
                    <div className="relative z-10">
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.65,
                          delay: reduceMotion ? 0 : 0.12,
                          ease,
                        }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-current px-3 py-2 text-[10px] font-bold tracking-[0.12em] sm:text-xs"
                      >
                        <scene.Icon size={15} />
                        {scene.kicker}
                      </motion.div>

                      <div className="text-[clamp(2.7rem,5vw,5.8rem)] font-black leading-[0.91] tracking-[-0.085em]">
                        {scene.headline.map((line, index) => (
                          <div key={line} className="overflow-hidden pb-2">
                            <motion.div
                              initial={reduceMotion ? false : { y: "110%" }}
                              animate={{ y: 0 }}
                              transition={{
                                duration: reduceMotion ? 0 : 0.4,
                                delay: reduceMotion ? 0 : 0.1 + index * 0.13,
                                ease,
                              }}
                            >
                              {line}
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="relative z-10 flex items-end justify-between gap-3 border-t border-current/25 pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.13em] sm:text-xs">
                        {scene.description}
                      </span>
                      <motion.div
                        animate={reduceMotion ? {} : { rotate: [0, 12, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowUpRight size={29} />
                      </motion.div>
                    </div>

                    {/* Decorative moving cursor */}
                    <motion.div
                      className="pointer-events-none absolute right-[12%] top-[24%]"
                      animate={
                        reduceMotion
                          ? {}
                          : {
                              x: [0, -18, 8, 0],
                              y: [0, 16, -10, 0],
                            }
                      }
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MousePointer2
                        size={34}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Interactive scene selector */}
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {scenes.map((item, index) => {
                const selected = active === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`relative overflow-hidden rounded-xl border px-3 py-3 text-left transition-colors sm:px-4 ${
                      selected
                        ? "border-[#111827] bg-[#111827] text-white"
                        : "border-[#DDDCD5] bg-white text-[#526071] hover:border-[#111827]"
                    }`}
                  >
                    <span className="block text-[10px] font-semibold opacity-60">
                      / {item.id}
                    </span>
                    <span className="mt-1 block text-[10px] font-extrabold tracking-wide sm:text-xs">
                      {item.label}
                    </span>

                    {selected && !reduceMotion && (
                      <motion.div
                        key={`${active}-progress`}
                        className="absolute bottom-0 left-0 h-1 bg-[#D8FA65]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 3,
                          ease: "linear",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
