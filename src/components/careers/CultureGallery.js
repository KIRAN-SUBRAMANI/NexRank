"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CultureGallery({ data }) {
  const photos = [
    {
      id: "photo-1",
      src: "/images/about/plan.jpg",
      title: "Strategy & Creative Sprints",
      category: "Collaboration",
      aspect: "col-span-1 md:col-span-2 lg:col-span-8 h-[340px] sm:h-[420px]",
    },
    {
      id: "photo-2",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      title: "Light-Filled Architectural Studio",
      category: "Workspace",
      aspect: "col-span-1 md:col-span-1 lg:col-span-4 h-[340px] sm:h-[420px]",
    },
    {
      id: "photo-3",
      src: "/images/about/company-overview-1.webp",
      title: "Client Performance War Room",
      category: "Strategy",
      aspect: "col-span-1 md:col-span-1 lg:col-span-4 h-[300px] sm:h-[360px]",
    },
    {
      id: "photo-4",
      src: "/images/blog/Parul Online University Placement and Fees.jpg",
      title: "Quarterly Growth Masterclasses",
      category: "Learning",
      aspect: "col-span-1 md:col-span-1 lg:col-span-4 h-[300px] sm:h-[360px]",
    },
    {
      id: "photo-5",
      src: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&q=80",
      title: "Engineering & Architecture Reviews",
      category: "Technology",
      aspect: "col-span-1 md:col-span-2 lg:col-span-4 h-[300px] sm:h-[360px]",
    },
  ];

  return (
    <section
      id="life-at-nexrank-gallery"
      className="w-full py-10 md:py-14 bg-white relative overflow-hidden border-b border-slate-100"
      aria-labelledby="culture-gallery-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>LIFE AT NEXRANK</span>
          </div>

          <h2
            id="culture-gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 font-sans"
          >
            Where ambition meets genuine camaraderie.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Take a look inside our collaborative workspaces, cross-functional sprints, and team masterclasses.
          </p>
        </div>

        {/* Mosaic Photo Grid - 100% Crystal Clear Without Darkening Overlays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {photos.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 ${item.aspect}`}
            >
              {/* Pure, Natural Photo with Zero Fog/Dim Overlays */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />

              {/* Clean Text Overlay With Zero Background Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">
                    {item.category}
                  </span>
                  <span className="text-white/60 text-xs [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">•</span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
