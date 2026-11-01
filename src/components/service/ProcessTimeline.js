"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function ProcessTimeline({ process }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const domRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const currentDom = domRef.current;
    if (currentDom) {
      observer.observe(currentDom);
    }

    return () => {
      if (currentDom) observer.unobserve(currentDom);
    };
  }, []);

  // Track active step on scroll to highlight current phase
  useEffect(() => {
    if (!process?.steps || process.steps.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;

        if (scrollPosition >= top && scrollPosition <= bottom + 50) {
          setActiveStepIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [process?.steps]);

  if (!process || !process.steps || process.steps.length === 0) return null;

  const hasImage = Boolean(process.image);
  const currentStep = process.steps[activeStepIndex] || process.steps[0];

  // =========================================================================
  // CASE 1: 2-COLUMN LAYOUT WITH FROZEN / STICKY RIGHT-SIDE SHOWCASE
  // =========================================================================
  if (hasImage) {
    return (
      <section 
        ref={domRef}
        className={`py-14 lg:py-24 bg-surface process-animate-wrapper relative ${isVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 process-animate-heading opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9ED] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Strategic Execution
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-brand-primary-700 tracking-tight leading-tight mb-4">
              {process.heading}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            {process.subtitle && (
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
                {process.subtitle}
              </p>
            )}
          </div>

          {/* 2-Column Split: Steps on Left, Frozen Sticky Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative">
            
            {/* Left 7 Columns: Step-by-Step Vertical Timeline */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative pb-4">
              {/* Continuous Vertical Timeline Line */}
              <div className="absolute left-5 sm:left-6 top-6 bottom-12 w-0.5 bg-gradient-to-b from-secondary via-secondary/40 to-secondary/15 rounded-full" />

              <div className="space-y-6 sm:space-y-8">
                {process.steps.map((step, index) => {
                  const stepNumber = String(index + 1).padStart(2, "0");
                  const isActive = activeStepIndex === index;

                  return (
                    <div 
                      key={index}
                      ref={(el) => (stepRefs.current[index] = el)}
                      className="relative flex items-start gap-4 sm:gap-6 group process-animate-step opacity-0 transition-all duration-700"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      {/* Step Indicator Dot / Number Circle */}
                      <div 
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm shadow-md shrink-0 transition-all duration-300 z-10 ${
                          isActive
                            ? "bg-secondary text-white border-2 border-secondary scale-110 ring-4 ring-secondary/25"
                            : "bg-white text-secondary border-2 border-secondary group-hover:bg-secondary group-hover:text-white"
                        }`}
                      >
                        {stepNumber}
                      </div>

                      {/* Step Card Content */}
                      <div 
                        className={`flex-1 p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                          isActive
                            ? "bg-white border-secondary/60 shadow-[0_12px_32px_rgba(212,175,55,0.14)] -translate-y-0.5"
                            : "bg-bg-secondary border-border-divider shadow-xs hover:shadow-lg hover:border-secondary/40 hover:-translate-y-0.5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-secondary font-black" : "text-secondary"}`}>
                            Phase {stepNumber}
                          </span>
                          {isActive && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FFF9ED] text-secondary border border-secondary/30">
                              Active Phase
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-brand-primary-700 mb-2 group-hover:text-secondary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Columns Wrapper (Stretches full height of left 7 steps) */}
            <div className="lg:col-span-5 order-1 lg:order-2 h-full relative">
              {/* Frozen / Sticky Container - Stays pinned at top-24 until end of steps */}
              <div className="lg:sticky lg:top-24 xl:top-28 flex flex-col items-center">
                
                {/* Ambient Soft Glow Behind Graphic */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-[#D4AF37]/20 via-red-500/10 to-blue-500/10 rounded-full blur-3xl opacity-75 pointer-events-none -z-10" />

                {/* Main 3D SEO Illustration Container */}
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square flex items-center justify-center p-2 group">
                  <Image
                    src={process.image}
                    alt={process.heading || "SEO Process Illustration"}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />

                  {/* Floating Trust Badge 1 - Top Left */}
                  <div 
                    className="absolute top-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-slate-200/80 flex items-center gap-2.5 z-20"
                    style={{ animation: 'subtle-float 4s ease-in-out infinite' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#0B1028]">7-Phase Framework</div>
                      <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Systematic Execution</div>
                    </div>
                  </div>

                  {/* Floating Trust Badge 2 - Bottom Right */}
                  <div 
                    className="absolute bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-slate-200/80 flex items-center gap-2.5 z-20"
                    style={{ animation: 'subtle-float 5s ease-in-out infinite 1s' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FFF9ED] text-[#D4AF37] flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#0B1028]">Compounding ROI</div>
                      <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Sustainable Rankings</div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Status / Step Tracker Card */}
                <div className="w-full max-w-[420px] sm:max-w-[460px] mt-4 bg-white p-5 sm:p-6 rounded-2xl border border-border-divider shadow-sm text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-secondary">
                      Current Milestone
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Step {String(activeStepIndex + 1).padStart(2, "0")} / {String(process.steps.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-primary-700 leading-snug mb-1">
                    {currentStep.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {currentStep.description}
                  </p>

                  {/* Mini Progress Track */}
                  <div className="mt-4 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B38728] rounded-full transition-all duration-300"
                      style={{ width: `${((activeStepIndex + 1) / process.steps.length) * 100}%` }}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes subtle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @media (prefers-reduced-motion: no-preference) {
            .process-animate-wrapper.is-visible .process-animate-heading {
              opacity: 1;
              transform: translateY(0);
            }
            .process-animate-wrapper.is-visible .process-animate-step {
              opacity: 1;
              transform: translateY(0);
            }
            .process-animate-wrapper:not(.is-visible) .process-animate-step {
              transform: translateY(40px);
            }
          }
        `}} />
      </section>
    );
  }

  // =========================================================================
  // CASE 2: ORIGINAL CENTERED TIMELINE (Fallback when process.image is not provided)
  // =========================================================================
  return (
    <section 
      ref={domRef}
      className={`py-8 lg:py-12 bg-surface overflow-hidden process-animate-wrapper ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 lg:mb-16 process-animate-heading opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-700 mb-4">
            {process.heading}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-bg-secondary -translate-x-1/2 rounded-full hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-0 md:-space-y-8 lg:-space-y-12">
            {process.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full group process-animate-step opacity-0 transition-all duration-700 ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-surface border-4 border-secondary z-10 -translate-x-1/2 mt-1 md:mt-0 shadow-lg group-hover:scale-125 group-hover:bg-secondary transition-all duration-300 hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className="bg-bg-secondary p-6 md:p-8 rounded-2xl border border-border-divider shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                      {/* Mobile Step Number Indicator */}
                      <div className="md:hidden absolute -top-4 -right-4 w-16 h-16 bg-secondary/10 rounded-full flex items-end justify-start p-4 text-secondary font-bold opacity-50 pointer-events-none">
                        {index + 1}
                      </div>

                      <div className="text-sm font-bold text-secondary mb-2">Step 0{index + 1}</div>
                      <h3 className="text-xl font-bold text-brand-primary-700 mb-3">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (prefers-reduced-motion: no-preference) {
          .process-animate-wrapper.is-visible .process-animate-heading {
            opacity: 1;
            transform: translateY(0);
          }
          .process-animate-wrapper.is-visible .process-animate-step {
            opacity: 1;
            transform: translateY(0);
          }
          .process-animate-wrapper:not(.is-visible) .process-animate-step {
            transform: translateY(40px);
          }
        }
      `}} />
    </section>
  );
}
