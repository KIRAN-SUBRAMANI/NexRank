"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We turn fresh ideas into distinctive digital experiences that help your brand stand out.",
    color: "#C8B7FF",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "Performance Mindset",
    description:
      "We connect creative strategy with measurable marketing performance and continuous improvement.",
    color: "#8FD3FF",
    Icon: TrendingUp,
  },
  {
    number: "03",
    title: "Technology That Delivers",
    description:
      "We build reliable digital experiences and practical technology that support your business goals.",
    color: "#FFD76A",
    Icon: Code2,
  },
];

function CountUp({ value, active, reduced }) {
  const [count, setCount] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setCount(value);
      return;
    }

    if (!active) return;

    let frame;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / 1600, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, active, reduced]);

  return <>{reduced ? value : count}</>;
}

function FeatureRow({ feature, index, reduced }) {
  const [expanded, setExpanded] = useState(false);
  const { Icon } = feature;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: 55, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
    >
      <motion.button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((previous) => !previous)}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        className="group relative w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#202B3E] text-left transition-colors duration-300 hover:border-white/25"
      >
        {/* Accent strip */}
        <span
          className="absolute inset-y-0 left-0 w-[4px]"
          style={{ backgroundColor: feature.color }}
        />

        {/* Hover glow */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          animate={{
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          style={{
            background: `linear-gradient(110deg, ${feature.color}16, transparent 70%)`,
          }}
        />

        <div className="relative flex min-h-[78px] items-center gap-3 px-5 py-4 sm:gap-4 sm:px-6">
          <span
            className="text-xs font-bold sm:text-sm"
            style={{ color: feature.color }}
          >
            {feature.number}
          </span>

          <motion.div
            animate={
              reduced
                ? undefined
                : { rotate: expanded ? 12 : 0, scale: expanded ? 1.12 : 1 }
            }
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Icon size={25} strokeWidth={2} style={{ color: feature.color }} />
          </motion.div>

          <span className="flex-1 text-[16px] font-bold tracking-[-0.025em] text-white sm:text-[19px]">
            {feature.title}
          </span>

          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight
              size={22}
              style={{ color: expanded ? feature.color : "#FFFFFF" }}
            />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="description"
              initial={
                reduced
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
              className="overflow-hidden"
            >
              <p className="relative px-5 pb-5 pl-[62px] text-[13px] leading-[1.7] text-[#C6D0DD] sm:pl-[78px] sm:pr-8">
                {feature.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

export default function WhyChooseNexRank() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const reduced = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#111827] py-12 sm:py-14 lg:py-16"
    >
      {/* Background animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute -left-[10%] top-[5%] h-[420px] w-[520px] rounded-full bg-[#D8FA65]/10 blur-[110px]"
          animate={
            reduced
              ? undefined
              : {
                  x: [0, 80, 0],
                  scale: [0.9, 1.15, 0.9],
                  opacity: [0.5, 0.9, 0.5],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-[8%] top-[15%] h-[430px] w-[430px] rounded-full bg-[#C8B7FF]/10 blur-[110px]"
          animate={
            reduced
              ? undefined
              : {
                  x: [0, -65, 0],
                  y: [0, 35, 0],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-55%] left-[30%] h-[380px] w-[450px] rounded-full bg-[#FF9476]/10 blur-[110px]"
          animate={reduced ? undefined : { x: [0, 70, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {!reduced && (
          <motion.div
            className="absolute -left-[25%] top-[55%] h-px w-[150%] -rotate-[10deg] bg-gradient-to-r from-transparent via-[#D8FA65]/20 to-transparent"
            animate={{ y: [-80, 100, -80] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8">
        {/* Top label */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between gap-4"
        >
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#D8FA65]">
            WHY NEXRANK / THE DIFFERENCE
          </span>

          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#D8FA65] shadow-[0_0_12px_#D8FA65]" />
            Growing Globally
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT: Numbers */}
          <div className="relative">
            <motion.h2
              initial={
                reduced
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.65,
                      y: 65,
                      filter: "blur(15px)",
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              whileHover={
                reduced
                  ? undefined
                  : {
                      scale: 1.04,
                      textShadow: "0 0 55px rgba(216,250,101,0.25)",
                    }
              }
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 16,
              }}
              className="origin-left cursor-default whitespace-nowrap text-[clamp(6.5rem,13vw,12rem)] font-black leading-[0.95] tracking-[-0.105em] text-white"
            >
              <CountUp value={100} active={visible} reduced={reduced} />
              <span className="text-[#D8FA65]">+</span>
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="mt-3 h-[3px] w-32 origin-left rounded-full bg-gradient-to-r from-[#D8FA65] via-[#FF9476] to-transparent"
            />

            <motion.h3
              initial={reduced ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl font-bold leading-[1.25] text-white sm:text-2xl lg:text-[27px]"
            >
              Clients. Different Ambitions.
              <br />
              <span className="text-[#D8FA65]">One Growth Partner.</span>
            </motion.h3>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-[440px] text-sm leading-[1.8] text-[#BFCBD9]"
            >
              We combine strategy, creativity, and technology to help businesses
              connect with new audiences and grow with confidence.
            </motion.p>

            {/* Global reach */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-4"
            >
              <motion.div
                animate={
                  reduced
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0px rgba(255,148,118,0)",
                          "0 0 25px rgba(255,148,118,0.3)",
                          "0 0 0px rgba(255,148,118,0)",
                        ],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF9476] text-[#111827]"
              >
                <Globe2 size={23} />
              </motion.div>

              <div>
                <p className="text-3xl font-black leading-none text-white">
                  <CountUp value={4} active={visible} reduced={reduced} />
                  <span className="text-[#FF9476]">+</span>
                </p>
                <p className="mt-1 text-xs font-semibold text-white/60">
                  Countries Reached
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Feature rows */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureRow
                key={feature.number}
                feature={feature}
                index={index}
                reduced={reduced}
              />
            ))}

            {/* Final CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="group relative flex min-h-[70px] items-center justify-between gap-4 overflow-hidden rounded-[20px] border border-[#D8FA65]/30 px-6 py-4 transition-colors duration-300 hover:border-[#D8FA65]"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#D8FA65] transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative z-10 text-[15px] font-bold text-white transition-colors duration-300 group-hover:text-[#111827] sm:text-[17px]">
                  Let's Create Your Next Big Move
                </span>

                <ArrowRight
                  size={24}
                  className="relative z-10 shrink-0 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#111827]"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
