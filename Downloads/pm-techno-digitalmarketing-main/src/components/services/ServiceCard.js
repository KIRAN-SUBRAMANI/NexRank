"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import LottiePlayer from "@/components/common/LottiePlayer";

export default function ServiceCard({ service }) {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(255,223,0,0.3)] border border-slate-100 hover:border-[#ffdf00] transition-all duration-500 hover:-translate-y-2 h-full justify-between overflow-hidden">
      
      {/* Top Animated Lottie Illustration (or Fallback Isometric Image) */}
      <div className="w-full flex items-center justify-center mb-6 h-48 sm:h-52 relative select-none">
        {service.lottiePath ? (
          <div className="w-full h-full max-h-[220px] max-w-[260px] flex items-center justify-center transition-transform duration-500 ease-out scale-115 sm:scale-120 group-hover:scale-125 sm:group-hover:scale-[1.28] group-hover:-translate-y-1">
            <LottiePlayer 
              animationPath={service.lottiePath} 
              className="w-full h-full"
            />
          </div>
        ) : service.thumbnailImage ? (
          <Image 
            src={service.thumbnailImage} 
            alt={service.title}
            width={240}
            height={200}
            className="w-auto h-full max-h-[190px] object-contain transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 float-image"
          />
        ) : (
          <div className="w-24 h-24 rounded-2xl bg-[#ffdf00] flex items-center justify-center text-[#0b0b0d]">
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col items-center flex-grow w-full">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 transition-colors leading-snug">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal px-1">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer Link: > Read more */}
      <div className="pt-2">
        <Link 
          href={service.buttonLink || `/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0b0b0d] group-hover:gap-2.5 transition-all"
        >
          <span>Read more</span>
          <span className="w-5 h-5 rounded-full bg-[#ffdf00] text-[#0b0b0d] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            ›
          </span>
        </Link>
      </div>

      <style jsx>{`
        .float-image {
          animation: floatAnimation 4s ease-in-out infinite;
        }
        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .group:hover .float-image {
          animation: none;
        }
      `}</style>
    </div>
  );
}
