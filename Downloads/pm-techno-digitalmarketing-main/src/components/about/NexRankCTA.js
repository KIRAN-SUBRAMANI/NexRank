"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NexRankCTA() {
  return (
    <section className="w-full bg-[#0b0b0d] text-white py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-12">
        
        {/* Left Side: Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.75, 0.2, 1] }}
          className="max-w-2xl text-left"
        >
          <h2 className="font-poppins text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-3">
            Let's make something great together<span className="text-[#ffdf00]">.</span>
          </h2>
          <p className="text-[17px] sm:text-[20px] text-[#bbbcc2] font-medium leading-relaxed m-0 font-poppins">
            Walk the digital talk with NexRank.
          </p>
        </motion.div>

        {/* Right Side: Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.75, 0.2, 1] }}
          className="flex-shrink-0"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#ffdf00] hover:bg-[#ffe733] text-[#0b0b0d] font-poppins font-bold text-base sm:text-lg rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(255,223,0,0.25)] hover:shadow-[0_6px_32px_rgba(255,223,0,0.4)] hover:-translate-y-0.5 group"
          >
            <span>Start a Project</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
