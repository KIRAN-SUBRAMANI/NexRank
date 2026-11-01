"use client";
import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2011",
    title: "The beginning",
    desc: "NexRank started with a shared belief in combining strategy, creativity and technology."
  },
  {
    year: "2012",
    title: "Private Limited",
    desc: "Registered as a private limited company, creating a stronger foundation for the journey ahead."
  },
  {
    year: "2013",
    title: "A bigger space",
    desc: "Moved into a larger workspace as the work, responsibilities and ambitions grew."
  },
  {
    year: "2015",
    title: "The move to Noida",
    desc: "Shifted operations to Noida and opened the next chapter of the company’s growth."
  },
  {
    year: "2025",
    title: "A bigger family",
    desc: "Grew into a broader multidisciplinary team across strategy, creative, performance and technology."
  },
  {
    year: "2026",
    title: "Global operations",
    desc: "Began operating globally, supporting brands across markets with one integrated team."
  }
];

export default function JourneyTimeline() {
  return (
    <section className="nr-journey w-full bg-[#0b0b0d] text-white py-[clamp(72px,8vw,120px)] px-6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto">
        
        {/* Header */}
        <div className="max-w-[900px] mb-12 sm:mb-[48px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-[10px] text-[13px] font-[800] uppercase tracking-[0.16em] text-[#ffdf00] mb-0 font-poppins"
          >
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffdf00] shadow-[0_0_0_7px_rgba(255,223,0,0.12)] flex-shrink-0" />
            Our journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.75, 0.2, 1] }}
            className="font-poppins text-[clamp(42px,5vw,76px)] font-[500] leading-[0.98] tracking-[-0.045em] text-white my-[22px]"
          >
            From a shared idea to global operations.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(17px,1.5vw,21px)] leading-[1.65] text-[#bbbcc2] max-w-[820px] font-normal m-0"
          >
            Built by founders, NexRank has grown through deliberate moves, bigger teams and the same belief in work that makes brands matter.
          </motion.p>
        </div>

        {/* Desktop View: Grid with horizontal rail */}
        <div className="hidden lg:block relative pt-4 pb-8">
          {/* Static gray rail behind nodes */}
          <div className="absolute top-[52px] left-[7%] right-[7%] h-[3px] bg-[#343438] rounded-full z-0 pointer-events-none" />

          {/* Animated golden flow pulse along the rail */}
          <div className="timeline-power-beam absolute top-[52px] h-[3px] w-[18%] bg-gradient-to-r from-transparent via-[#ffdf00] to-transparent shadow-[0_0_12px_#ffdf00] rounded-full z-0 pointer-events-none" />

          {/* Milestones grid */}
          <div className="grid grid-cols-6 gap-2 relative z-10">
            {milestones.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default transition-transform duration-300 hover:-translate-y-2 px-1"
              >
                {/* Year Label */}
                <span className="font-poppins font-[900] text-[16px] text-[#ffdf00] tracking-[0.08em] mb-5">
                  {item.year}
                </span>

                {/* Circular Glowing Node on the rail line */}
                <div className={`timeline-node w-[18px] h-[18px] rounded-full bg-[#0b0b0d] border-[3px] border-[#666666] shadow-[0_0_0_8px_#0b0b0d] transition-all duration-300 group-hover:border-[#ffdf00] group-hover:bg-[#ffdf00] group-hover:shadow-[0_0_24px_6px_rgba(255,223,0,0.7)] mb-7 node-delay-${idx}`} />

                {/* Title */}
                <h3 className="font-poppins text-[clamp(18px,1.7vw,25px)] font-semibold text-white leading-[1.15] mb-[14px] group-hover:text-[#ffdf00] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#aaabb1] text-[14px] leading-[1.55] m-0 max-w-[205px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View: Vertical rail */}
        <div className="lg:hidden relative pl-9 sm:pl-10">
          {/* Static gray vertical line */}
          <div className="absolute top-2 bottom-6 left-[14px] w-[3px] bg-[#343438] rounded-full z-0" />
          
          {/* Animated vertical yellow flow */}
          <div className="timeline-power-beam-mobile absolute left-[14px] w-[3px] h-[22%] bg-gradient-to-b from-transparent via-[#ffdf00] to-transparent shadow-[0_0_10px_#ffdf00] rounded-full z-0" />

          <div className="space-y-10 sm:space-y-12 relative z-10">
            {milestones.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 text-left group"
              >
                {/* Node */}
                <div className="absolute -left-[30px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0b0b0d] border-[3px] border-[#666666] shadow-[0_0_0_6px_#0b0b0d] group-hover:border-[#ffdf00] group-hover:bg-[#ffdf00]" />

                {/* Year */}
                <span className="inline-block font-poppins font-[900] text-sm text-[#ffdf00] tracking-[0.08em] mb-1">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="font-poppins text-xl font-semibold text-white leading-tight mb-2 group-hover:text-[#ffdf00] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#aaabb1] text-sm leading-relaxed m-0 max-w-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes nr-power-flow {
          0% { left: 4%; opacity: 0; }
          8% { opacity: 1; }
          84% { opacity: 1; }
          100% { left: 78%; opacity: 0; }
        }
        @keyframes nr-power-flow-mobile {
          0% { top: 0%; opacity: 0; }
          8% { opacity: 1; }
          84% { opacity: 1; }
          100% { top: 78%; opacity: 0; }
        }
        @keyframes nr-node-power {
          0%, 12%, 100% {
            border-color: #666;
            background: #0b0b0d;
            box-shadow: 0 0 0 8px #0b0b0d;
          }
          16%, 28% {
            border-color: #ffdf00;
            background: #ffdf00;
            box-shadow: 0 0 0 8px #0b0b0d, 0 0 24px 6px rgba(255, 223, 0, 0.7);
          }
        }
        .timeline-power-beam {
          animation: nr-power-flow 6s ease-in-out infinite;
        }
        .timeline-power-beam-mobile {
          animation: nr-power-flow-mobile 6s ease-in-out infinite;
        }
        .timeline-node {
          animation: nr-node-power 6s ease-in-out infinite;
        }
        .node-delay-0 { animation-delay: 0s; }
        .node-delay-1 { animation-delay: 1s; }
        .node-delay-2 { animation-delay: 2s; }
        .node-delay-3 { animation-delay: 3s; }
        .node-delay-4 { animation-delay: 4s; }
        .node-delay-5 { animation-delay: 5s; }
      `}} />
    </section>
  );
}
