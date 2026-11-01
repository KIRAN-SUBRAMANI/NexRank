"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Expanded array with highly tailored descriptions
const carouselIndustries = [
  { 
    name: "Healthcare", 
    description: "Data-driven marketing to attract patients, build trust, and sustainably grow your medical practice.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>, 
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80" 
  },
  { 
    name: "Real Estate", 
    description: "Drive more visibility, attract qualified buyers, and scale your property business with digital strategies.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>, 
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" 
  },
  { 
    name: "E-commerce", 
    description: "Increase online sales, optimize conversion funnels, and build long-term customer brand loyalty.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>, 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" 
  },
  { 
    name: "Travel", 
    description: "Capture high-intent travelers, boost global bookings, and scale your reach across key markets.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5" /></svg>, 
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" 
  },
  { 
    name: "Restaurants", 
    description: "Drive immediate local foot traffic, increase table reservations, and dominate local search rankings.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.999 2.999 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.999 2.999 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>, 
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" 
  },
  { 
    name: "Logistics", 
    description: "Generate high-quality B2B leads, improve brand authority, and accelerate supply chain growth.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9H3.375A1.125 1.125 0 002.25 3.375v10.875M16.5 18.75h-1.5m-3-12h.008v.008H12V6.75zm3 0h.008v.008H15V6.75zm3 0h.008v.008H18V6.75z" /></svg>, 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" 
  },
  { 
    name: "IT Companies", 
    description: "Showcase technical expertise, capture enterprise leads, and drive software product adoption.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>, 
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" 
  },
  { 
    name: "Startups", 
    description: "Achieve rapid scaling, optimize targeted user acquisition, and build disruptive market presence.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>, 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
  },
  { 
    name: "Professional Services", 
    description: "Establish strong industry authority, build corporate trust, and secure high-value partnerships.",
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.118v0H5.622c-1.085-.082-1.872-1.024-1.872-2.118v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>, 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" 
  },
];

// ==========================================
// CAROUSEL COMPONENT
// ==========================================

const InfoBox = ({ icon, children }) => (
  <div className="flex items-start gap-4 bg-[#2D3436]/5 rounded-2xl p-5 w-full border border-[#2D3436]/10">
    <div className="w-6 h-6 shrink-0 text-[#D4AF37] mt-0.5">
      {icon}
    </div>
    <div className="text-[13px] sm:text-[14px] font-medium text-[#06143D] leading-relaxed">
      {children}
    </div>
  </div>
);

const BenefitCard = ({ icon, title }) => (
  <div className="flex items-center justify-center gap-3 w-full py-2 px-4">
    <div className="w-5 h-5 flex items-center justify-center text-[#D4AF37]">
      {icon}
    </div>
    <span className="text-[12px] sm:text-[13px] font-bold text-[#2D3436] whitespace-nowrap">{title}</span>
  </div>
);

const CarouselCard = ({ ind, position, isReducedMotion, index, total }) => {
  const [isHovered, setIsHovered] = useState(false);
  let scale = 1;
  let opacity = 1;
  let x = '0%';
  let zIndex = 10;
  let filter = 'blur(0px)';
  
  const isCenter = position === 'center';

  if (isCenter) {
    scale = 1.03;
    opacity = 1;
    x = '-50%';
    zIndex = 30;
    filter = 'blur(0px) brightness(1)';
  } else if (position === 'left') {
    scale = 0.85;
    opacity = 1;
    x = '-135%'; 
    zIndex = 20;
    filter = 'blur(0px) brightness(0.9)';
  } else if (position === 'right') {
    scale = 0.85;
    opacity = 1;
    x = '35%';  
    zIndex = 20;
    filter = 'blur(0px) brightness(0.9)';
  } else if (position === 'hiddenLeft') {
    scale = 0.75;
    opacity = 0;
    x = '-180%';
    zIndex = 10;
    filter = 'blur(6px) brightness(0.3)';
  } else if (position === 'hiddenRight') {
    scale = 0.75;
    opacity = 0;
    x = '80%';
    zIndex = 10;
    filter = 'blur(6px) brightness(0.3)';
  }

  const transition = isReducedMotion 
    ? { duration: 0 } 
    : { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }; 

  const formattedIndex = String(index + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <motion.div
      initial={false}
      animate={{ 
        scale, opacity, x, zIndex, filter,
        borderColor: isCenter ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0)'
      }}
      transition={transition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group absolute top-1/2 left-1/2 -translate-y-1/2 w-[240px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px] h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px] xl:h-[500px] bg-gray-100 rounded-[24px] overflow-hidden border-[2px] transition-shadow duration-500 ${isCenter ? 'shadow-[0_15px_40px_rgba(212,175,55,0.15)]' : 'shadow-none'}`}
      style={{
        willChange: "transform, opacity, filter, border-color"
      }}
    >
      {/* 1. Base Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={ind.image} 
          alt={ind.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-transform duration-[2000ms] ease-out ${isCenter && !isReducedMotion ? 'group-hover:scale-[1.04]' : 'scale-100'}`}
          priority={isCenter || position === 'left' || position === 'right'}
        />
      </div>

      {/* Animated 'X' Overlay Background */}
      <div 
        className={`absolute inset-0 pointer-events-none z-[25] transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isHovered ? 'translate-x-[40%]' : '-translate-x-[40%]'}`}
      >
        <div className="absolute top-[-50%] bottom-[-50%] left-1/2 w-[45%] -translate-x-1/2 rotate-[35deg] bg-[rgba(255,255,255,0.15)]" />
        <div className="absolute top-[-50%] bottom-[-50%] left-1/2 w-[45%] -translate-x-1/2 -rotate-[35deg] bg-[rgba(255,255,255,0.15)]" />
      </div>

      {/* Base Dark Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028]/95 via-[#0B1028]/40 to-transparent z-10" />


      {/* 3. Foreground Content Layer (z-30) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col">
        
        {/* Top left Pill */}
        <div className={`absolute top-6 left-6 bg-white rounded-full px-4 py-1.5 flex items-center gap-2 w-fit ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'} transition-all duration-700 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <span className="w-3 h-[2px] bg-[#D4AF37]"></span>
          <span className="text-[11px] font-bold text-[#0B1028] tracking-widest uppercase mt-[1px]">{ind.name}</span>
        </div>

        {/* Circular Gold/White Icon */}
        <div 
          className={`absolute w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-lg ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'} transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ left: '1.5rem', top: '38%', transform: 'translateY(-50%)' }}
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]">
            {ind.icon}
          </div>
        </div>

        {/* Text Content Block (below the icon) */}
        <div className={`absolute top-[48%] left-6 sm:left-8 right-6 sm:right-8 bottom-6 sm:bottom-8 flex flex-col ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          
          <h3 className={`text-[28px] sm:text-[34px] lg:text-[40px] font-serif font-bold text-white mb-2 leading-tight transition-all duration-700 delay-75 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {ind.name}
          </h3>
          
          <div className={`w-0 h-[2px] bg-[#D4AF37] mb-3 sm:mb-4 transition-all duration-700 delay-200 ease-out ${isCenter ? 'w-12 sm:w-14' : 'w-0'}`}></div>
          
          <p className={`text-[13px] sm:text-[14px] lg:text-[15px] text-white/80 leading-relaxed mb-auto line-clamp-3 pr-4 transition-all duration-700 delay-150 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {ind.description}
          </p>
          
          <div className="w-full flex items-end justify-between">
            <div className={`flex items-center gap-2 text-[#D4AF37] text-[12px] sm:text-[13px] font-bold cursor-pointer group w-fit transition-all duration-700 delay-200 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="relative">
                Explore Service
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
              </span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {/* Pagination Number */}
            <div className={`flex items-baseline gap-1 pointer-events-none transition-all duration-1000 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-[36px] sm:text-[44px] lg:text-[50px] font-bold text-white/20 leading-none">{formattedIndex}</span>
              <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white/10 leading-none">/ {formattedTotal}</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function IndustriesTransformed() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(false);
  const isReducedMotion = Boolean(useReducedMotion());
  const sectionRef = useRef(null);
  const benefitsRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  
  const length = carouselIndustries.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === sectionRef.current) setIsVisible(entry.isIntersecting);
          if (entry.target === benefitsRef.current) setIsBenefitsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (isHovered || isReducedMotion) return;
    const interval = setInterval(handleNext, 1800); 
    return () => clearInterval(interval);
  }, [isHovered, isReducedMotion, handleNext]);

  const getPosition = (index) => {
    const diff = (index - currentIndex + length) % length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === length - 1) return 'left';
    if (diff === 2) return 'hiddenRight';
    if (diff === length - 2) return 'hiddenLeft';
    return 'hiddenRight'; // Fallback
  };

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 40) handleNext();
    if (distance < -40) handlePrev();
    setTouchStart(null);
  };

  return (
    <section 
      ref={sectionRef} 
      className="pt-16 pb-8 lg:pt-24 lg:pb-12 w-full bg-[#FFFFFF] relative overflow-hidden"
    >
      {/* Subtle Premium Background Decoration (Behind Carousel) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Subtle curved lines */}
        <svg className="absolute w-[800px] h-[800px] opacity-[0.03] text-[#D4AF37] right-[-10%] top-[-10%]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="40" strokeWidth="0.2" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.1" />
          <path d="M 10 50 A 40 40 0 0 1 50 10" strokeWidth="0.3" />
        </svg>
        {/* Very soft radial blur */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Layout */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-12 xl:gap-8">
          
          {/* LEFT SIDE: Content (Strictly Untouched) */}
          <div className={`w-full xl:w-[45%] flex flex-col justify-center transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[50vw]'}`}>
            <div className="inline-flex items-center self-start mb-5">
              <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                INDUSTRIES WE SERVE
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#2D3436] leading-tight mb-3">
              Digital Marketing That <br className="hidden lg:block"/>
              <span className="text-[#D4AF37]">Fits Your Industry</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#D4AF37] mb-8"></div>

            <p className="text-[15px] sm:text-[16px] text-[#06143D] font-medium leading-[1.8] mb-8 max-w-[500px]">
              Every industry has different customers, challenges, and growth opportunities. We create <strong className="text-[#D4AF37] font-bold">tailored digital marketing strategies</strong> that help businesses build online visibility, reach the right audience, generate qualified leads, and achieve sustainable growth.
            </p>

            <div className="flex flex-col gap-4 max-w-[500px]">
              <InfoBox 
                icon={
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5M11.622 11.238a2.25 2.25 0 112.256-1.847" /></svg>
                } 
              >
                From <strong className="text-[#2D3436] font-bold">healthcare</strong> and <strong className="text-[#2D3436] font-bold">real estate</strong> to <strong className="text-[#2D3436] font-bold">e-commerce, travel, restaurants, logistics, IT companies, startups,</strong> and <strong className="text-[#2D3436] font-bold">professional services</strong>, our strategies are designed around the unique needs of your industry and business goals.
              </InfoBox>
              <InfoBox 
                icon={
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                } 
              >
                We combine <strong className="text-[#D4AF37] font-bold">SEO, Google Ads, Meta Ads, Google Business Profile optimization,</strong> and <strong className="text-[#D4AF37] font-bold">web development</strong> to deliver measurable results.
              </InfoBox>
            </div>
          </div>

          {/* RIGHT SIDE: Horizontal Focus Carousel */}
          <div className={`w-full xl:w-[55%] flex flex-col items-center justify-center transition-all duration-[1000ms] ease-out mt-8 xl:mt-0 ${isVisible && !isReducedMotion ? 'opacity-100 translate-y-0' : !isReducedMotion ? 'opacity-0 translate-y-[20px]' : 'opacity-100'}`}>
            
            {/* Carousel Viewport */}
            <div 
              className="relative w-full max-w-[1000px] h-[400px] sm:h-[440px] md:h-[500px] lg:h-[540px] xl:h-[560px] overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence>
                {carouselIndustries.map((ind, index) => {
                  const position = getPosition(index);
                  return (
                    <CarouselCard 
                      key={ind.name} 
                      ind={ind} 
                      position={position} 
                      isReducedMotion={isReducedMotion}
                      index={index}
                      total={length}
                    />
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
              {carouselIndustries.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${currentIndex === idx ? 'bg-[#D4AF37] w-8 sm:w-10' : 'bg-gray-300 hover:bg-gray-400 w-1.5'}`}
                  aria-label={`Go to industry ${idx + 1}`}
                  suppressHydrationWarning
                />
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM BENEFITS BAR */}
        <div ref={benefitsRef} className={`mt-10 lg:mt-16 max-w-[850px] mr-auto w-full bg-[#FFFFFF] rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-md border border-[#2D3436]/10 transition-all duration-[800ms] ease-out transform ${isBenefitsVisible && !isReducedMotion ? 'opacity-100 translate-y-0 scale-100' : !isReducedMotion ? 'opacity-0 translate-y-16 scale-95' : 'opacity-100'}`}>
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-[#2D3436]/10 gap-y-4">
            <BenefitCard 
              icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>} 
              title="Industry-Focused Strategies" 
            />
            <BenefitCard 
              icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5M11.622 11.238a2.25 2.25 0 112.256-1.847" /></svg>} 
              title="Higher Engagement" 
            />
            <BenefitCard 
              icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>} 
              title="Better Conversion" 
            />
            <BenefitCard 
              icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>} 
              title="Sustainable Growth" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
