"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Star,
  BadgeCheck,
  Quote,
  ArrowUpRight,
  X,
  Sparkles,
} from "lucide-react";

const reviews = [
  {
    name: "Priya Desai",
    service: "Google Ads",
    rating: 5,
    text: "Their Google Ads strategy helped us acquire high net worth clients at a fraction of our previous CPA. Highly recommended digital partner in India.",
  },
  {
    name: "Amit Patel",
    service: "Meta Ads",
    rating: 5,
    text: "Scaling our local e-commerce brand via Meta Ads was seamless with NexRank. Incredible ROAS and great communication throughout the process.",
  },
  {
    name: "Chandu durga prasad Katta",
    service: "Web Development",
    rating: 5,
    text: "Our sincere thanks go to the NexRank team for their excellent understanding and development of our application. They were highly professional.",
  },
  {
    name: "Ryan Cooper",
    service: "Digital Marketing",
    rating: 5,
    text: "They act like an extension of our team, helping us improve our online presence and connect with the right audience.",
  },
  {
    name: "Ramya Gowda",
    service: "Meta Ads",
    rating: 5,
    text: "Meta Ads brought us so many qualified leads. The team was responsive and focused on making our campaigns better.",
  },
  {
    name: "Joshua King",
    service: "SEO & Web Development",
    rating: 5,
    text: "Web development and technical SEO were handled with care, and the team communicated clearly throughout the project.",
  },
];

const entrance = [
  { x: -180, y: -65, rotate: -12 },
  { x: 0, y: -160, rotate: 9 },
  { x: 180, y: -80, rotate: 12 },
  { x: -180, y: 90, rotate: 8 },
  { x: 0, y: 170, rotate: -9 },
  { x: 180, y: 100, rotate: -12 },
];

const accents = [
  { bg: "#EAF5D8", color: "#648F32" },
  { bg: "#FFE7DC", color: "#D97958" },
  { bg: "#ECE5FF", color: "#8968CA" },
  { bg: "#E3F2FF", color: "#4F8CBF" },
  { bg: "#F1E8FF", color: "#8B64C6" },
  { bg: "#EAF5D8", color: "#648F32" },
];

function GoogleMark() {
  return (
    <span
      aria-label="Google"
      className="inline-block text-[20px] font-black leading-none"
      style={{
        background:
          "conic-gradient(#4285F4 0deg 95deg, #34A853 95deg 165deg, #FBBC05 165deg 230deg, #EA4335 230deg 295deg, #4285F4 295deg)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      G
    </span>
  );
}

function ReviewCard({ review, index, onOpen, reducedMotion }) {
  const accent = accents[index % accents.length];
  const direction = entrance[index % entrance.length];

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              x: direction.x,
              y: direction.y,
              rotate: direction.rotate,
              scale: 0.72,
              filter: "blur(8px)",
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 95,
        damping: 17,
        mass: 0.9,
        delay: index * 0.1,
      }}
      className="group relative min-w-0"
    >
      <motion.div
        whileHover={reducedMotion ? {} : { y: -7, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex h-[205px] flex-col overflow-hidden rounded-[20px] border border-[#E5E8DF] bg-white p-5 shadow-[0_8px_28px_rgba(29,41,34,0.055)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(29,41,34,0.13)] sm:h-[215px]"
      >
        <div
          className="absolute left-0 top-0 h-[3px] w-full opacity-75"
          style={{ background: accent.color }}
        />

        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] text-[14px] font-black"
              style={{
                background: accent.bg,
                color: accent.color,
              }}
            >
              {review.name
                .split(" ")
                .slice(0, 2)
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-[14px] font-extrabold tracking-[-0.025em] text-[#1D2822]">
                {review.name}
              </h3>
              <span className="block truncate text-[10px] font-semibold text-[#8B958C]">
                {review.service}
              </span>
            </div>
          </div>

          <GoogleMark />
        </div>

        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: review.rating }, (_, i) => (
            <Star key={i} size={13} fill="#E6B32D" color="#E6B32D" />
          ))}
          <span className="ml-2 text-[10px] font-semibold text-[#9AA29A]">
            Google Review
          </span>
        </div>

        <p className="mt-3 line-clamp-3 flex-1 text-[12px] leading-[1.65] text-[#59665D] sm:text-[13px]">
          “{review.text}”
        </p>

        <button
          type="button"
          onClick={() => onOpen(review)}
          className="mt-3 flex w-fit items-center gap-1.5 text-[11px] font-extrabold text-[#648F32] transition-colors hover:text-[#3F6824]"
        >
          Read full review
          <ArrowUpRight size={13} />
        </button>
      </motion.div>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  const reducedMotion = useReducedMotion();
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#F6F4EF] py-12 sm:py-14"
    >
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#D8FA65]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#C8B7FF]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-8 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[#719D32]" />
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#719D32]">
              Client Success Stories
            </span>
            <Sparkles size={14} className="text-[#719D32]" />
          </div>

          <h2 className="text-[clamp(2rem,3.7vw,3.65rem)] font-black leading-[1.1] tracking-[-0.055em] text-[#1D2822]">
            Don't just take our <span className="text-[#84AE39]">word.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-[13px] leading-[1.7] text-[#718075] sm:text-[14px]">
            Real experiences from businesses we've helped through digital
            marketing, advertising, SEO, and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${index}`}
              review={review}
              index={index}
              onOpen={setSelectedReview}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={15} fill="#E6B32D" color="#E6B32D" />
            ))}
          </div>

          <span className="text-[12px] font-bold text-[#3D4B40]">
            Stories that speak for themselves
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#A6B1A6] sm:block" />

          <span className="text-[11px] text-[#7D897E]">
            Built on trust, creativity, and results.
          </span>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101B16]/65 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Review by ${selectedReview.name}`}
              initial={{ opacity: 0, scale: 0.88, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[540px] rounded-[26px] bg-[#FDFDFB] p-7 shadow-2xl sm:p-9"
            >
              <button
                type="button"
                aria-label="Close review"
                onClick={() => setSelectedReview(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F2EC] text-[#47564A] transition-colors hover:bg-[#E4EAD9]"
              >
                <X size={18} />
              </button>

              <div className="mb-5 flex items-center gap-3">
                <GoogleMark />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#849185]">
                  Google Review
                </span>
              </div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: selectedReview.rating }, (_, i) => (
                  <Star key={i} size={18} fill="#E6B32D" color="#E6B32D" />
                ))}
              </div>

              <Quote size={30} className="mb-3 text-[#A6CB70]" />

              <p className="text-[16px] leading-[1.85] text-[#344238]">
                {selectedReview.text}
              </p>

              <div className="mt-7 border-t border-[#E7EBE3] pt-5">
                <h3 className="text-[16px] font-black text-[#1D2822]">
                  {selectedReview.name}
                </h3>
                <p className="mt-1 text-[12px] text-[#819084]">
                  {selectedReview.service}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
