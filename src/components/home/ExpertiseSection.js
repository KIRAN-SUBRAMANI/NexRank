"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    id: "seo",
    number: "01",
    title: "SEO",
    subtitle: "GET DISCOVERED",
    description: "Climb search rankings and get found by the right customers.",
    href: "/services",
    bg: "#182536",
    color: "#FFFFFF",
    accent: "#D8FA65",
    rotation: -7,
    initial: { x: -220, y: -130, rotate: -30 },
  },
  {
    id: "ads",
    number: "02",
    title: "PAID ADS",
    subtitle: "GENERATE LEADS",
    description:
      "Turn clicks into customers with smarter Google & Meta campaigns.",
    href: "/services",
    bg: "#FF785E",
    color: "#172033",
    accent: "#FFFFFF",
    rotation: 7,
    initial: { x: 220, y: -130, rotate: 30 },
  },
  {
    id: "web",
    number: "03",
    title: "WEB DESIGN",
    subtitle: "BUILD EXPERIENCES",
    description:
      "Fast, beautiful websites designed to turn visits into action.",
    href: "/services",
    bg: "#82C7F8",
    color: "#172033",
    accent: "#FFFFFF",
    rotation: 6,
    initial: { x: -220, y: 170, rotate: -25 },
  },
  {
    id: "local",
    number: "04",
    title: "LOCAL SEO",
    subtitle: "OWN YOUR AREA",
    description: "Stand out on Google Maps and attract customers nearby.",
    href: "/services",
    bg: "#C9B6FF",
    color: "#172033",
    accent: "#FFFFFF",
    rotation: -7,
    initial: { x: 220, y: 170, rotate: 25 },
  },
];

const positions = [
  { left: "8%", top: "8%" },
  { left: "53%", top: "11%" },
  { left: "10%", top: "56%" },
  { left: "54%", top: "58%" },
];

function ArrowIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="h-12 w-12 sm:h-16 sm:w-16"
    >
      <path
        d="M50 3 61 35 96 18 76 49 98 61 64 64 72 98 49 76 25 98 34 64 2 61 24 49 4 18 39 35Z"
        fill="#D8FA65"
      />
      <circle cx="50" cy="50" r="10" fill="#172033" />
    </svg>
  );
}

export default function ExpertiseSection() {
  const [hovered, setHovered] = useState(null);
  const [centerHovered, setCenterHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#F6F4EF] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1250px] px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-[#6F982C]"
          >
            WHAT WE DO / OUR EXPERTISE
          </motion.p>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="text-[clamp(2rem,4.4vw,3.7rem)] font-extrabold leading-[1.1] tracking-[-0.055em] text-[#172033]"
          >
            We Don't Just Grow Brands.
            <br />
            <span className="text-[#83B52C]">We Make Them Stand Out.</span>
          </motion.h2>
        </div>

        {/* Desktop creative poster */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative hidden h-[410px] overflow-hidden rounded-[32px] border border-[#DCE5CE] bg-[#E9EFDF] md:block"
          style={{
            backgroundImage:
              "radial-gradient(#B9CBA8 0.9px, transparent 0.9px)",
            backgroundSize: "18px 18px",
          }}
        >
          {/* Decorative oversized background text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[43%] select-none text-center text-[clamp(4rem,11vw,9rem)] font-black tracking-[-0.08em] text-[#D1DEC3]/70"
          >
            GROWTH
          </div>

          {/* Service posters */}
          {services.map((service, index) => {
            const isActive = hovered === service.id;
            const isDimmed = hovered && !isActive;

            return (
              <motion.div
                key={service.id}
                className="absolute h-[148px] w-[38%] max-w-[425px]"
                style={{
                  left: positions[index].left,
                  top: positions[index].top,
                  zIndex: isActive ? 30 : 10,
                }}
                variants={{
                  hidden: reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 0.75,
                        ...service.initial,
                      },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: service.rotation,
                    transition: {
                      type: "spring",
                      stiffness: 105,
                      damping: 13,
                      delay: index * 0.12,
                    },
                  },
                }}
                animate={
                  isActive
                    ? {
                        rotate: 0,
                        scale: 1.08,
                        y: -10,
                        opacity: 1,
                        x: 0,
                      }
                    : centerHovered
                      ? {
                          x: index % 2 === 0 ? -18 : 18,
                          y: index < 2 ? -12 : 12,
                          rotate: service.rotation,
                          scale: 1,
                          opacity: 1,
                        }
                      : isDimmed
                        ? {
                            rotate: service.rotation,
                            scale: 0.96,
                            opacity: 0.6,
                            x: 0,
                            y: 0,
                          }
                        : undefined
                }
                onHoverStart={() => setHovered(service.id)}
                onHoverEnd={() => setHovered(null)}
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] p-5 shadow-[0_12px_30px_rgba(24,37,54,0.12)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(24,37,54,0.24)] lg:p-6"
                  style={{
                    backgroundColor: service.bg,
                    color: service.color,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold tracking-[0.17em]">
                      {service.number} / {service.subtitle}
                    </span>

                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
                      style={{
                        backgroundColor: service.accent,
                        color: "#172033",
                      }}
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[clamp(1.7rem,3vw,2.8rem)] font-black leading-none tracking-[-0.06em]">
                      {service.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="max-w-[330px] pt-2 text-xs font-medium leading-relaxed lg:text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Oversized background shape */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-14 -right-10 h-36 w-36 rounded-full border-[22px] opacity-20 transition-transform duration-500 group-hover:scale-125"
                    style={{ borderColor: service.accent }}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* Central Growth Hub */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.2, rotate: -90 }
            }
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 13,
              delay: 0.55,
            }}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            onHoverStart={() => setCenterHovered(true)}
            onHoverEnd={() => setCenterHovered(false)}
          >
            <motion.div
              animate={reduceMotion ? {} : { rotate: centerHovered ? 180 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full border-[7px] border-[#D8FA65] bg-[#172033] shadow-[0_15px_45px_rgba(23,32,51,0.3)] lg:h-[150px] lg:w-[150px]"
            >
              <SparkIcon />

              <span className="mt-1 text-[9px] font-extrabold tracking-[0.15em] text-white">
                NEXRANK
              </span>

              <span className="text-[8px] font-semibold tracking-[0.15em] text-[#D8FA65]">
                GROWTH HUB
              </span>

              {/* Expanding pulse */}
              {centerHovered && !reduceMotion && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="pointer-events-none absolute inset-0 rounded-full border-4 border-[#9FCB45]"
                />
              )}
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6F8066]">
            Hover / Explore / Grow
          </div>

          <div className="pointer-events-none absolute bottom-4 right-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6F8066]">
            Built for impact ↗
          </div>
        </motion.div>

        {/* Mobile layout */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: index % 2 === 0 ? -55 : 55,
                      y: 30,
                    }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 17,
                delay: index * 0.09,
              }}
            >
              <Link
                href={service.href}
                className="flex min-h-[175px] flex-col justify-between rounded-[20px] p-4 shadow-sm"
                style={{
                  backgroundColor: service.bg,
                  color: service.color,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold">
                    / {service.number}
                  </span>
                  <ArrowIcon />
                </div>

                <div>
                  <h3 className="text-xl font-black tracking-[-0.05em]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed opacity-85">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-[#657284]">
          Four creative disciplines. One mission: your growth.
        </p>
      </div>
    </section>
  );
}
