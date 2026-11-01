"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Research & direction",
    desc: "We study the audience, search landscape, competitors and commercial goal before choosing the route."
  },
  {
    num: "02",
    title: "Co-create & shape",
    desc: "Strategists, creators and specialists turn the direction into a practical campaign and content system."
  },
  {
    num: "03",
    title: "Launch & communicate",
    desc: "Every message is made for the channel and the people using it—clear, relevant and unmistakably on-brand."
  },
  {
    num: "04",
    title: "Measure & optimise",
    desc: "We monitor behaviour and outcomes, then keep refining the work against the agreed business result."
  }
];

export default function ApproachSection() {
  return (
    <section className="nr-approach w-full bg-[#f1f1ee] text-[#111] py-[clamp(72px,8vw,120px)] px-6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-6 sm:gap-10 lg:gap-[50px] items-end mb-[46px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-[10px] text-[13px] font-[800] uppercase tracking-[0.16em] text-[#806f00] mb-[14px] font-poppins">
              <span className="w-[10px] h-[10px] rounded-full bg-[#ffdf00] shadow-[0_0_0_7px_rgba(255,223,0,0.18)] flex-shrink-0" />
              How we work
            </div>
            <h2 className="font-poppins text-[clamp(44px,5.4vw,78px)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#0b0b0d] m-0">
              Strategy in motion, together.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[19px] leading-[1.6] text-[#5c5d62] max-w-[630px] m-0 font-normal"
          >
            Not a hand-off between departments. One connected team moving from insight to execution, learning and improving at every step.
          </motion.p>
        </div>

        {/* 2-column layout: Visual on left, Process on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] gap-[42px] items-stretch">
          
          {/* Visual Team Card */}
          <motion.figure
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.2, 0.75, 0.2, 1] }}
            className="nr-approach__visual m-0 relative min-h-[440px] sm:min-h-[540px] lg:min-h-[600px] rounded-[28px] overflow-hidden bg-[#181818] group"
          >
            <Image
              src="/images/about/team-working.jpg"
              alt="NexRank team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover block transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]"
            />
            <figcaption className="absolute left-0 right-0 bottom-0 pt-[90px] px-[30px] pb-[28px] bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white flex flex-col pointer-events-none">
              <strong className="text-[23px] font-semibold text-white font-poppins">
                Real people. One accountable team.
              </strong>
              <span className="text-[15px] sm:text-[16px] text-[#d2d2d2] mt-1.5 font-normal">
                Strategy, creative, performance and technology working in the same room.
              </span>
            </figcaption>
          </motion.figure>

          {/* Process Timeline Flow */}
          <div className="flex flex-col justify-center">
            <ol className="nr-process list-none m-0 p-0 relative">
              {steps.map((st, idx) => (
                <motion.li
                  key={st.num}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.2, 0.75, 0.2, 1] }}
                  className="relative grid grid-cols-[46px_1fr] gap-[22px] py-[12px] pb-[28px] transition-transform duration-300 hover:translate-x-2 group cursor-default"
                >
                  <span className="relative z-10 w-[46px] h-[46px] rounded-full bg-[#0d0d0f] text-[#ffdf00] font-[900] text-[13px] grid place-items-center shadow-[0_0_0_7px_#f1f1ee] font-poppins">
                    {st.num}
                  </span>
                  <div>
                    <h3 className="font-poppins text-[27px] font-semibold text-[#111] my-[5px] mb-[8px] group-hover:text-[#806f00] transition-colors leading-tight">
                      {st.title}
                    </h3>
                    <p className="text-[16px] leading-[1.55] text-[#606168] m-0">
                      {st.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .nr-process:before {
          content: "";
          position: absolute;
          left: 22px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: #d1d1ca;
        }
        .nr-process:after {
          content: "";
          position: absolute;
          left: 22px;
          top: 24px;
          width: 2px;
          height: 24%;
          background: #ffdf00;
          box-shadow: 0 0 13px #ffdf00;
          animation: nr-process-flow 5s ease-in-out infinite;
        }
        @keyframes nr-process-flow {
          0% { top: 24px; opacity: 0; }
          10% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 74%; opacity: 0; }
        }
      `}} />
    </section>
  );
}
