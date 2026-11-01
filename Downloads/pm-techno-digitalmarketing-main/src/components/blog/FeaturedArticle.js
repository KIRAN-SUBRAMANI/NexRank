"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedArticle({ post }) {
  if (!post) return null;

  const imageSrc = post.featuredImage || "/images/blog/Parul Online University Placement and Fees.jpg";

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="group relative w-full h-[390px] sm:h-[520px] md:h-[580px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#101828] shadow-sm hover:shadow-xl transition-shadow duration-500"
      >
        {/* Background Image with enhanced brightness and saturation */}
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center brightness-[1.14] contrast-[1.06] saturate-[1.16] group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Clean bottom-only gradient overlay keeping top 70% bright & crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-30% to-transparent pointer-events-none" />

        {/* Content Positioned at Bottom */}
        <div className="relative h-full w-full p-5 sm:p-10 md:p-14 flex flex-col justify-end z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            {/* Left Column: Category, Title, Excerpt */}
            <div className="max-w-3xl">
              {/* Category Label */}
              <span className="text-white/90 text-sm font-semibold tracking-wide mb-3 block">
                Featured
              </span>

              {/* Big Bold Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-3.5 font-sans">
                {post.title}
              </h1>

              {/* 2-3 Line Clean Excerpt */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal max-w-2xl">
                {post.excerpt}
              </p>
            </div>

            {/* Right Side: Big White Thin Arrow (Visual Accent, No Broken Detail Link) */}
            <div className="flex-shrink-0 self-end md:self-center mb-2 md:mb-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-white group-hover:translate-x-2 transition-transform duration-300">
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 stroke-[1.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
