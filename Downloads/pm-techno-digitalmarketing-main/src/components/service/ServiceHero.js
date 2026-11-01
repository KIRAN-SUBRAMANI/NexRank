"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function ServiceHero({ hero }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!hero?.title) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let pauseTicks = 0;
    
    const intervalId = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }

      if (!isDeleting) {
        if (currentIndex <= hero.title.length) {
          setDisplayedText(hero.title.slice(0, currentIndex));
          currentIndex++;
          setIsTypingComplete(false);
        } else {
          setIsTypingComplete(true);
          isDeleting = true;
          pauseTicks = 40; // ~2 seconds pause before deleting
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(hero.title.slice(0, currentIndex));
          setIsTypingComplete(false);
        } else {
          isDeleting = false;
          pauseTicks = 10; // ~0.5 seconds pause before typing again
        }
      }
    }, 50); // 50ms typing speed

    return () => clearInterval(intervalId);
  }, [hero?.title]);

  if (!hero) return null;

  return (
    <div className="relative bg-brand-primary text-bg-primary-700 text-text-primary overflow-hidden pt-10 lg:pt-12 pb-8 lg:pb-12">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-secondary to-transparent mix-blend-overlay"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Navigation */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium mb-6 group"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        {/* Breadcrumb */}
        {hero.breadcrumb && (
          <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-4" aria-label="Breadcrumb">
            {hero.breadcrumb.map((item, index) => (
              <div key={item.label} className="flex items-center">
                {index > 0 && <span className="mx-2 text-text-secondary">/</span>}
                <Link 
                  href={item.href} 
                  className={`hover:text-text-primary transition-colors ${index === hero.breadcrumb.length - 1 ? 'text-secondary font-semibold pointer-events-none' : ''}`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight min-h-[40px] sm:min-h-[60px] lg:min-h-[72px]">
            {displayedText}
            <span className={`inline-block w-[3px] sm:w-[4px] h-[28px] sm:h-[40px] lg:h-[48px] bg-secondary ml-1 sm:ml-2 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed max-w-2xl">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {hero.primaryCta && (
              <Link 
                href={hero.primaryCta.href}
                className="inline-flex justify-center items-center px-8 py-4 bg-secondary text-text-primary font-extrabold rounded-lg hover:bg-[#d6891a] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary-700"
              >
                {hero.primaryCta.label}
              </Link>
            )}
            
            {hero.secondaryCta && (
              <Link 
                href={hero.secondaryCta.href}
                className="inline-flex justify-center items-center px-8 py-4 bg-surface/10 text-text-primary font-extrabold rounded-lg hover:bg-surface/20 transition-colors backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
