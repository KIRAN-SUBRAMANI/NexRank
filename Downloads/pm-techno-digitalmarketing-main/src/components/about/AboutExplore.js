"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const exploreLinks = [
  {
    title: "Case studies",
    desc: "Results with named sources and date ranges",
    href: "/case-studies"
  },
  {
    title: "Digital marketing agency in India",
    desc: "What we do, who it is for and what it costs",
    href: "/about"
  },
  {
    title: "Performance marketing",
    desc: "Paid media measured on qualified leads",
    href: "/services/google-ads"
  },
  {
    title: "SEO, AEO and GEO",
    desc: "Search and AI-answer visibility",
    href: "/services/seo"
  },
  {
    title: "Web development",
    desc: "High-performance websites and digital platforms",
    href: "/services/web-development"
  },
  {
    title: "Blog",
    desc: "Guides from our team",
    href: "/blog"
  }
];

export default function AboutExplore() {
  return (
    <section id="about-explore" className="nr-explore w-full bg-[#f8f8f5] py-12 sm:py-16 px-5 border-t border-[#e6e3d8]">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Kicker */}
        <p className="text-[13px] tracking-[0.08em] uppercase text-[#6b675d] mb-2 font-semibold font-poppins">
          Explore
        </p>

        {/* Heading */}
        <h2 className="font-poppins text-[24px] sm:text-[28px] font-semibold leading-[1.2] text-[#12120f] mb-6">
          More about how we work
        </h2>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {exploreLinks.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                href={item.href}
                className="flex flex-col gap-1.5 p-[18px] border border-[#e6e3d8] rounded-[10px] bg-white text-[#12120f] transition-all duration-200 hover:border-[#12120f] hover:shadow-sm group h-full"
              >
                <div className="flex items-center justify-between">
                  <b className="font-poppins text-[16px] font-semibold leading-[1.35] text-[#12120f] group-hover:text-[#806f00] transition-colors">
                    {item.title}
                  </b>
                  <span className="text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 transition-all text-sm">
                    →
                  </span>
                </div>
                <span className="text-[14px] text-[#52514e] leading-[1.5] font-poppins">
                  {item.desc}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
