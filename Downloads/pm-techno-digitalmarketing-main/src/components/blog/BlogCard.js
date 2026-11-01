"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({ post, index = 0 }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.4),
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group flex flex-col h-full rounded-2xl p-2 transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(16,24,40,0.12)] cursor-default"
    >
      <div className="flex flex-col h-full select-none">
        {/* Enlarged Eye-Catching Image Container */}
        <div className="relative w-full h-52 sm:h-72 lg:h-[300px] xl:h-[330px] rounded-2xl overflow-hidden bg-[#F2F4F7] mb-5 shadow-sm">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#EAECF0] text-[#667085] text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </div>
          )}

          {/* Soft Specular Sheen on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow px-1">
          {/* Post Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#101828] leading-snug group-hover:text-[#D4AF37] transition-colors duration-200 mb-2.5 line-clamp-2 font-sans">
            {post.title}
          </h3>

          {/* Excerpt (Muted Gray) */}
          <p className="text-sm sm:text-base text-[#475467] line-clamp-2 leading-relaxed mb-6 font-normal">
            {post.excerpt}
          </p>

          {/* Author & Date Row (Matching Untitled UI reference) */}
          <div className="mt-auto flex items-center gap-3 pt-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#E4E7EC] flex-shrink-0 border border-black/5 group-hover:scale-110 transition-transform duration-300">
              {post.authorImage ? (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#D0D5DD] text-[#475467] text-xs font-bold">
                  {post.author ? post.author.charAt(0) : "A"}
                </div>
              )}
            </div>

            <span className="text-xs sm:text-sm font-semibold text-[#344054]">
              {post.author} • {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
