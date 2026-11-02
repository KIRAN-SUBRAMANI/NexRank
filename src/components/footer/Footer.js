"use client";

import Link from "next/link";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const letters = "NEXRANK".split("");
const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduced ? 0 : 0.7,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

/* Continuous animated wave wordmark */
function WaveWordmark() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <div
        className={`${spaceGrotesk.className} flex select-none items-center justify-center whitespace-nowrap text-[clamp(5rem,16vw,16rem)] font-bold not-italic tracking-[-0.085em] text-[#26383B]`}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className="inline-block"
            animate={
              reduced
                ? {}
                : {
                    y: [0, -30, 0, 30, 0],
                    rotate: [0, -3, 0, 3, 0],
                  }
            }
            transition={{
              duration: 5.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.22,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const reduced = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-[#101D26] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#A9E7CE]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#D8FA65]/[0.05] blur-[90px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-14 sm:px-10 lg:px-14 lg:pt-16">
        {/* COMPACT CTA */}
        <div className="grid items-center gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.27em] text-[#A9E7CE]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8FA65]" />
                THE NEXT MOVE STARTS HERE
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="max-w-[900px] text-[clamp(2.6rem,5.5vw,5.5rem)] font-black leading-[1.02] tracking-[-0.07em]">
                Good ideas.
                <span
                  className={`${playfair.className} ml-3 inline-block font-medium italic tracking-[-0.045em] text-[#A9E7CE]`}
                >
                  Great impact.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-[550px] text-[14px] leading-7 text-[#78858C]">
                Strategy, creativity, and technology—working together to make
                your brand impossible to ignore.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="group relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D8FA65]/40 bg-[#D8FA65] text-[#101D26] transition-all duration-500 hover:scale-110 hover:bg-[#A9E7CE] sm:h-28 sm:w-28"
              aria-label="Start a project"
            >
              <motion.span
                className="absolute inset-2 rounded-full border border-[#101D26]/25"
                animate={reduced ? {} : { rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-[#101D26]" />
              </motion.span>

              <div className="relative flex flex-col items-center gap-1">
                <ArrowUpRight
                  size={29}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="text-[9px] font-black uppercase tracking-[0.1em]">
                  LET&apos;S TALK
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* NAVIGATION WITH WAVE BACKGROUND */}
        <div className="relative isolate overflow-hidden border-b border-white/15">
          <WaveWordmark />

          <div className="relative z-10 grid gap-9 py-11 md:grid-cols-[1.1fr_1fr_1fr] lg:gap-14">
            {/* Brand */}
            <Reveal>
              <div>
                <h3 className="text-[25px] font-black tracking-[-0.06em]">
                  NEXRANK<span className="text-[#D8FA65]">.</span>
                </h3>

                <p className="mt-3 max-w-[300px] text-[13px] leading-6 text-[#78858C]">
                  Creative thinking. Measurable growth. Digital experiences that
                  stand out.
                </p>

                <a
                  href="mailto:info@nexrank.com"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-[#A9E7CE] transition-colors hover:text-[#D8FA65]"
                >
                  info@nexrank.com
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            {/* Explore */}
            <Reveal delay={0.08}>
              <div>
                <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#A9E7CE]">
                  EXPLORE
                </h4>

                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                  {links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex w-fit items-center gap-2 text-[16px] font-extrabold tracking-[-0.025em] text-white transition-all duration-300 hover:translate-x-1 hover:text-[#D8FA65]"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.5}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Contact */}
            <Reveal delay={0.16}>
              <div>
                <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#A9E7CE]">
                  FIND US
                </h4>

                <div className="space-y-4 text-[14px] font-bold leading-6 text-white/85">
                  {" "}
                  <p className="flex items-start gap-2">
                    <MapPin
                      size={15}
                      className="mt-1 shrink-0 text-[#D8FA65]"
                    />
                    <span>Banaswadi, Bangalore, Karnataka 560043, India</span>
                  </p>
                  <a
                    href="tel:+917760245945"
                    className="flex items-center gap-2 transition-colors hover:text-[#D8FA65]"
                  >
                    <Phone size={15} className="text-[#D8FA65]" />
                    +91 77602 45945
                  </a>
                  <a
                    href="mailto:info@nexrank.com"
                    className="flex items-center gap-2 transition-colors hover:text-[#D8FA65]"
                  >
                    <Mail size={15} className="text-[#D8FA65]" />
                    Email our team
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-3 py-6 text-[11px] text-[#91A9A8] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NexRank Private Limited.</span>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-[#D8FA65]">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#D8FA65]">
              Terms
            </Link>
            <Link href="/refund-policy" className="hover:text-[#D8FA65]">
              Refunds
            </Link>
          </div>

          <span className={`${playfair.className} italic text-[#A9E7CE]`}>
            Made for momentum.
          </span>
        </div>
      </div>
    </footer>
  );
}
