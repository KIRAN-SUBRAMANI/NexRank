"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PROJECTS = [
  {
    id: "healthcare",
    number: "01",
    title: "Beyond Visibility",
    category: "HEALTHCARE / SEO",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=85",
    color: "#D8FA65",
    slug: "healthcare",
  },
  {
    id: "ecommerce",
    number: "02",
    title: "Commerce Effect",
    category: "E-COMMERCE / ADS",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=85",
    color: "#FF9476",
    slug: "ecommerce",
  },
  {
    id: "realestate",
    number: "03",
    title: "Spaces That Sell",
    category: "REAL ESTATE / GROWTH",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85",
    color: "#C8B7FF",
    slug: "real-estate",
  },
  {
    id: "technology",
    number: "04",
    title: "Digital by Design",
    category: "TECHNOLOGY / WEB",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=85",
    color: "#8FD3FF",
    slug: "technology",
  },
];

function ProjectCard({ project, index, active, setActive }) {
  const reduced = useReducedMotion();
  const selected = active === index;

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  const tiltX = useTransform(smoothY, [0, 100], [4, -4]);
  const tiltY = useTransform(smoothX, [0, 100], [-4, 4]);

  function handleMove(e) {
    if (reduced) return;

    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleLeave() {
    setActive(null);
    mouseX.set(50);
    mouseY.set(50);
  }

  return (
    <motion.div
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: index % 2 === 0 ? 65 : -65,
              rotate: index % 2 === 0 ? -3 : 3,
            }
      }
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
        delay: index * 0.1,
      }}
      className={`relative min-w-0 ${
        index % 2 === 0 ? "lg:translate-y-3" : "lg:-translate-y-3"
      }`}
      style={{ perspective: 900, zIndex: selected ? 10 : 1 }}
      onMouseEnter={() => setActive(index)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      {/* Hover glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[8px] rounded-[26px] blur-[22px]"
        style={{ backgroundColor: project.color }}
        animate={{ opacity: selected ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        style={{
          rotateX: reduced ? 0 : tiltX,
          rotateY: reduced ? 0 : tiltY,
        }}
        animate={{
          y: selected ? -8 : 0,
          scale: selected ? 1.025 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 22,
        }}
      >
        <Link
          href={`/case-studies/${project.slug}`}
          className="group relative block h-[300px] overflow-hidden rounded-[20px] border border-white/20 bg-[#161616] shadow-[0_18px_45px_rgba(0,0,0,0.4)] sm:h-[325px] lg:h-[315px]"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
            animate={{
              scale: selected ? 1.1 : 1,
              filter: selected
                ? "saturate(1.12) contrast(1.04)"
                : "saturate(0.9) contrast(1.03)",
            }}
            transition={{ duration: 0.55 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />

          {/* Animated image sheen */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-1/2 -left-1/2 w-[30%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-lg"
            animate={{ x: selected ? "650%" : "-100%" }}
            transition={{ duration: 0.75 }}
          />

          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-black text-black"
            style={{ backgroundColor: project.color }}
          >
            {project.number}
          </span>

          <motion.span
            animate={{
              rotate: selected ? 45 : 0,
              backgroundColor: selected ? project.color : "#FFFFFF",
            }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-black"
          >
            <ArrowUpRight size={20} />
          </motion.span>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p
              className="mb-2 text-[10px] font-black uppercase tracking-[0.14em]"
              style={{ color: project.color }}
            >
              {project.category}
            </p>

            <h3 className="text-[clamp(1.4rem,2vw,2rem)] font-black leading-[1.08] tracking-[-0.055em] text-white">
              {project.title}
            </h3>

            <motion.div
              className="mt-3 h-[3px] rounded-full"
              style={{ backgroundColor: project.color }}
              animate={{ width: selected ? "100%" : "24%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const [active, setActive] = useState(null);
  const [inside, setInside] = useState(false);
  const reduced = useReducedMotion();

  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);

  const smoothX = useSpring(pointerX, {
    stiffness: 180,
    damping: 25,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 180,
    damping: 25,
  });

  const activeColor = active === null ? "#D8FA65" : PROJECTS[active].color;

  function movePointer(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  }

  return (
    <section
      onMouseMove={movePointer}
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => {
        setInside(false);
        setActive(null);
      }}
      className="relative isolate overflow-hidden bg-[#050505] py-10 text-white sm:py-12"
      style={{
        cursor: inside && !reduced ? "none" : "auto",
      }}
    >
      {/* Black background with subtle dot matrix */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Mouse-following spotlight */}
        {!reduced && (
          <motion.div
            className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full blur-[75px]"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              backgroundColor: activeColor,
              opacity: 0.13,
            }}
          />
        )}

        {/* Animated light trails */}
        {!reduced && (
          <>
            <motion.div
              className="absolute -left-[35%] top-[25%] h-px w-[65%] rotate-[-12deg] bg-gradient-to-r from-transparent via-[#D8FA65]/35 to-transparent"
              animate={{ x: ["0%", "240%"] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -right-[35%] bottom-[25%] h-px w-[65%] rotate-[12deg] bg-gradient-to-r from-transparent via-[#8FD3FF]/30 to-transparent"
              animate={{ x: ["0%", "-240%"] }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </>
        )}
      </div>

      {/* Custom mouse cursor */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-50 hidden h-14 w-14 items-center justify-center rounded-full border-2 mix-blend-screen lg:flex"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            borderColor: activeColor,
            boxShadow: `0 0 20px ${activeColor}55`,
          }}
          animate={{
            opacity: inside ? 1 : 0,
            scale: active === null ? 0.75 : 1.2,
          }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: activeColor }}
          />
        </motion.div>
      )}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D8FA65]">
              <Sparkles size={14} />
              NEXRANK / SELECTED WORK
            </p>

            <h2 className="text-[clamp(2.2rem,4vw,3.9rem)] font-black leading-[1.04] tracking-[-0.065em]">
              Built to <span className="text-[#D8FA65]">stand apart.</span>
            </h2>
          </motion.div>

          <p className="max-w-[280px] text-xs leading-relaxed text-white/65">
            Creative ideas, strategic thinking, and digital experiences designed
            to make an impression.
          </p>
        </div>

        {/* Four staggered projects */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>

        {/* Compact footer — no filmstrip */}
        <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5">
          <p className="text-[10px] text-white/45">
            Illustrative concepts — replace with verified client work.
          </p>

          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-xs font-black text-[#D8FA65]"
          >
            Explore All Work
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
