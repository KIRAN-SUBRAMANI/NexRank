"use client";

import React from "react";

export default function FooterWaves() {
  const waves = [
    {
      id: "wave-1",
      width: 1440,
      height: 320,
      path: "M 0,80 C 480,200 960,-40 1440,80 L 1440,320 L 0,320 Z",
      duration: "25s",
      colorClass: "fill-[#D4AF37] opacity-20",
      zIndex: "z-10",
    },
    {
      id: "wave-2",
      width: 1440,
      height: 320,
      path: "M 0,140 C 480,20 960,260 1440,140 L 1440,320 L 0,320 Z",
      duration: "32s",
      colorClass: "fill-[#D4AF37] opacity-40", 
      zIndex: "z-20",
    },
    {
      id: "wave-3",
      width: 1440,
      height: 320,
      path: "M 0,200 C 480,300 960,100 1440,200 L 1440,320 L 0,320 Z",
      duration: "18s",
      colorClass: "fill-[#D4AF37] opacity-70",
      zIndex: "z-30",
    },
    {
      id: "wave-4",
      width: 1440,
      height: 320,
      path: "M 0,260 C 480,200 960,320 1440,260 L 1440,320 L 0,320 Z",
      duration: "22s",
      colorClass: "fill-[#2D3436]", 
      zIndex: "z-40",
    }
  ];

  return (
    <div className="relative w-full h-[60px] md:h-[90px] lg:h-[120px] overflow-hidden leading-0 bg-transparent -mb-[1px]">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(var(--wave-scroll)); }
        }

        .animate-organic-wave {
          animation: scroll-wave linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-organic-wave {
            animation: none !important;
          }
        }
      ` }} />

      {waves.map((wave) => (
        <div key={wave.id} className={`absolute bottom-0 left-0 w-full ${wave.zIndex} h-full`}>
          <div 
            className="flex w-max h-full animate-organic-wave"
            style={{ 
              animationDuration: wave.duration,
              '--wave-scroll': `-${wave.width}px` 
            }}
          >
            {/* Render 4 copies to ensure it spans across even ultra-wide 4K screens */}
            {[...Array(4)].map((_, i) => (
              <svg 
                key={i} 
                width={wave.width} 
                height="100%" 
                viewBox={`0 40 ${wave.width} 280`} 
                preserveAspectRatio="none" 
                className={wave.colorClass}
                style={{ minWidth: `${wave.width}px` }}
              >
                <path d={wave.path} />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
