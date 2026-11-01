"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutDNA() {
  return (
    <section className="w-full bg-[#f3f3ef] py-[clamp(72px,7vw,104px)] px-6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-[clamp(42px,5vw,72px)] items-center">
        
        {/* Left Column: Team Showcase Visual */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.2, 0.75, 0.2, 1] }}
          className="w-full min-h-[clamp(420px,46vw,670px)] rounded-[28px] overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-600 ease-[cubic-bezier(0.2,0.75,0.2,1)] hover:scale-[1.012] hover:saturate-[1.04] shadow-none"
          style={{ backgroundImage: `url('/images/about/team-dna.gif')` }}
        />

        {/* Right Column: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.75, 0.2, 1] }}
          className="flex flex-col items-start justify-start"
        >
          {/* Tag kicker */}
          <div className="flex items-center gap-[11px] mb-5">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffdf00] shadow-[0_0_0_7px_rgba(255,223,0,0.18)] flex-shrink-0" />
            <p className="text-[#716300] text-[13px] font-[800] tracking-[0.15em] uppercase font-poppins m-0">
              Our DNA
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-[clamp(42px,4.5vw,64px)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#0b0b0d] mb-7">
            What's in the name?
          </h2>

          {/* Paragraphs */}
          <div className="text-[#5d5e63] font-poppins text-[15.5px] leading-[1.68] space-y-[18px] max-w-[590px]">
            <p className="m-0">
              At <strong className="text-[#0b0b0d] font-semibold">NexRank</strong>, our name defines our purpose: propelling ambitious brands to their <strong className="text-[#0b0b0d] font-semibold">Next Rank</strong> of market leadership and search authority. We believe modern growth requires the convergence of data science, creative precision, and high-performance technology. Guided by our foundational mantra—<strong className="text-[#0b0b0d] font-semibold">ENGINEERED FOR GROWTH, DRIVEN BY DATA</strong>—our team architects full-funnel digital ecosystems that turn visibility into predictable revenue. With deep cross-industry expertise spanning fast-scaling startups to established enterprise brands, we blend agile technical SEO, conversion-focused paid advertising, and bespoke web architecture to elevate brand identities and capture sustainable market share.
            </p>
            <p className="m-0">
              <strong className="text-[#0b0b0d] font-semibold">NexRank</strong> has been recognized as a premier digital marketing and engineering partner, celebrated for driving verifiable commercial impact, measurable return on ad spend (ROAS), and top-tier organic search rankings across competitive sectors.
            </p>
            <p className="m-0">
              Ours is an ecosystem of relentless innovation, analytical depth, and creative craft. Explore our solutions and see how our tailored digital roadmaps can unlock new growth horizons for your enterprise.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
