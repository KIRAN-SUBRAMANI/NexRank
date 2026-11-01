"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchCard({ result, onClick }) {
  const [imgError, setImgError] = useState(false);

  if (!result) return null;

  const hasImage = Boolean(result.image) && !imgError;

  return (
    <div className="group relative flex flex-col sm:flex-row bg-white rounded-2xl border border-slate-200/90 hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      {/* Full-card Clickable Link */}
      <Link 
        href={result.url || "#"} 
        onClick={onClick}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${result.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>

      {/* Image or Category Fallback */}
      <div className="relative w-full sm:w-44 h-40 sm:h-auto bg-slate-100 flex-shrink-0 overflow-hidden flex items-center justify-center">
        {hasImage ? (
          <Image
            src={result.image}
            alt={result.title || "Search result"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 180px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full min-h-[140px] bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 text-center">
            <span className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold text-base mb-1.5">
              {result.title ? result.title.charAt(0).toUpperCase() : "N"}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {result.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow relative z-0">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider rounded-full border border-slate-200/80">
            {result.category}
          </span>
        </div>
        
        <h3 className="text-base sm:text-lg font-bold font-sans text-[#0F172A] mb-1.5 group-hover:text-[#D4AF37] transition-colors line-clamp-1">
          {result.title}
        </h3>
        
        <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed font-normal">
          {result.description}
        </p>

        <div className="mt-auto pt-2 flex items-center justify-between border-t border-slate-100">
          <span className="inline-flex items-center text-[#D4AF37] font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
            View Details
            <span className="ml-1 text-base">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
