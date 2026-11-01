"use client";
import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Creative",
    desc: "Distinctive ideas and brand systems that give people a reason to notice, remember and respond.",
    tags: ["Brand", "Content", "Campaigns"]
  },
  {
    num: "02",
    title: "Conversions",
    desc: "Audience-led journeys that turn attention into enquiries, customers and measurable commercial growth.",
    tags: ["Search", "Media", "CRO"]
  },
  {
    num: "03",
    title: "Development",
    desc: "Fast, thoughtful digital products engineered around real user needs and long-term business goals.",
    tags: ["Web", "Apps", "Platforms"]
  },
  {
    num: "04",
    title: "Engagement",
    desc: "Relevant, always-on communication that builds community, loyalty and meaningful brand relationships.",
    tags: ["Social", "CRM", "Community"]
  }
];

export default function CapabilitiesSystem() {
  return (
    <section className="nr-capabilities w-full bg-[#ffdf00] text-[#0b0b0d] py-[clamp(72px,8vw,118px)] px-6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] gap-8 sm:gap-12 lg:gap-[70px] items-end mb-[50px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.2, 0.75, 0.2, 1] }}
          >
            <span className="block uppercase tracking-[0.16em] text-[13px] font-[900] text-[#0b0b0d] mb-[22px] font-poppins">
              What we bring together
            </span>
            <h2 className="font-poppins text-[clamp(48px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.06em] text-[#0b0b0d] m-0">
              Four capabilities.<br />
              <em className="font-normal not-italic">One growth system.</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.75, 0.2, 1] }}
            className="text-[19px] leading-[1.6] text-[#403800] max-w-[560px] m-0 font-medium pb-1.5"
          >
            Ideas only matter when they convert, work and keep people engaged. Our teams connect the full journey—from the first thought to the final outcome.
          </motion.p>
        </div>

        {/* 4-column capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-t-2 border-b-2 border-black/70">
          {capabilities.map((item, idx) => (
            <motion.article
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.2, 0.75, 0.2, 1] }}
              className="nr-capability relative isolate overflow-hidden min-h-[390px] p-[28px_26px] flex flex-col border-b sm:border-b-0 border-black/25 xl:border-l xl:first:border-l-0 transition-all duration-400 group cursor-pointer"
            >
              {/* Top row */}
              <div className="nr-capability__top flex justify-between items-center font-[900] text-[14px] font-poppins">
                <span className="tracking-wider">{item.num}</span>
                <b className="w-[42px] h-[42px] rounded-full border border-current grid place-items-center text-[20px] font-normal transition-all duration-400 group-hover:rotate-45 group-hover:bg-[#ffdf00] group-hover:text-[#111] group-hover:border-[#ffdf00]">
                  ↗
                </b>
              </div>

              {/* Title */}
              <h3 className="font-poppins text-[clamp(27px,2.6vw,39px)] font-semibold tracking-[-0.035em] mt-auto mb-4 text-inherit transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-[1.55] opacity-75 mb-6 text-inherit transition-colors duration-300">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="nr-capability__tags flex gap-[7px] flex-wrap">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="border border-current rounded-full px-[10px] py-[6px] text-[11px] font-[800] uppercase tracking-[0.06em] opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .nr-capability {
          color: #0b0b0d;
          transition: color .4s ease, transform .4s cubic-bezier(.2,.75,.2,1);
        }
        .nr-capability:before {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 0;
          background: #0b0b0d;
          z-index: -1;
          transition: height .45s cubic-bezier(.2,.75,.2,1);
        }
        .nr-capability:hover:before {
          height: 100%;
        }
        .nr-capability:hover {
          color: #ffffff;
          transform: translateY(-9px);
        }
      `}} />
    </section>
  );
}
