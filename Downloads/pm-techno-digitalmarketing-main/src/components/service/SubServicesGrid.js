"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { 
  MagnifyingGlassIcon, 
  CodeBracketIcon, 
  DocumentTextIcon, 
  LinkIcon, 
  MapPinIcon, 
  PencilSquareIcon, 
  ClipboardDocumentCheckIcon, 
  ChartBarIcon, 
  PresentationChartLineIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  PlayIcon,
  PauseIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const iconMap = {
  MagnifyingGlassIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  LinkIcon,
  MapPinIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  PresentationChartLineIcon
};

export default function SubServicesGrid({ services }) {
  const items = services?.items || [];
  const hasVideo = Boolean(services?.video);

  // Video State
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Cards Scroll State
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  // Update scroll indicators
  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const current = el.scrollLeft;

    setCanScrollLeft(current > 10);
    setCanScrollRight(current < maxScroll - 10);

    // Calculate progress percentage
    const progress = maxScroll > 0 ? (current / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Estimate active card index
    const cardWidth = el.firstElementChild ? el.firstElementChild.offsetWidth + 24 : 360;
    const index = Math.min(
      Math.max(0, items.length - 1),
      Math.max(0, Math.round(current / cardWidth))
    );
    setActiveIndex(index);
  }, [items.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    // Convert vertical mouse wheel into horizontal scroll on cards container
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [hasVideo, items.length, updateScrollState]);

  // Scroll to direction
  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = el.firstElementChild ? el.firstElementChild.offsetWidth + 24 : 360;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Scroll directly to a specific card index
  const scrollToIndex = (index) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = el.firstElementChild ? el.firstElementChild.offsetWidth + 24 : 360;
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  // Video play/pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Video mute/unmute toggle
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setInitialScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  if (!items.length) return null;

  // =========================================================================
  // CASE 1: STANDARD GRID (if no video provided)
  // =========================================================================
  if (!hasVideo) {
    return (
      <section className="py-12 lg:py-20 bg-bg-secondary border-t border-border-divider relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-700 mb-6">
              {services.heading}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.items.map((item, index) => {
              const Icon = iconMap[item.icon] || ChartBarIcon;
              return (
                <div 
                  key={index}
                  className="group bg-brand-primary text-bg-primary-700/10 p-8 rounded-2xl border border-primary-700/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="w-14 h-14 bg-surface text-brand-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary text-bg-primary-700 group-hover:text-text-primary transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // CASE 2: VIDEO SHOWCASE WITH SINGLE-LINE SCROLLING CARDS
  // =========================================================================
  return (
    <section className="py-14 lg:py-24 bg-[#FAF8F5] border-t border-[#EBE3D5]/80 relative overflow-hidden">
      {/* Subtle Luxury Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Title & Top Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFF9ED] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              SEO In Action & Capabilities
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1028] tracking-tight leading-tight mb-4">
              {services.heading}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {services.subtitle || "Full-funnel organic search capabilities engineered to capture high-intent demand and scale rankings predictably."}
            </p>
          </div>

          {/* Navigation Controls (Top Right Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Counter Badge */}
            <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-600 shadow-2xs">
              <span className="text-[#D4AF37] font-extrabold text-sm">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" "}/ {String(services.items.length).padStart(2, "0")}
            </div>

            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-xs ${
                canScrollLeft
                  ? "bg-white border-slate-200 text-[#0B1028] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] cursor-pointer"
                  : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next service"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-xs ${
                canScrollRight
                  ? "bg-white border-slate-200 text-[#0B1028] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] cursor-pointer"
                  : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN 2-COLUMN LAYOUT: Video on Left, Single-Line Cards on Right            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Smartphone / Device Frame Video Player */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/16] rounded-[36px] p-3 bg-gradient-to-b from-[#0B1028] via-[#161F45] to-[#0B1028] shadow-[0_25px_60px_rgba(11,16,40,0.25)] border-[4px] border-slate-800/90 overflow-hidden flex flex-col group">
              
              {/* Device Notch & Status Pill */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="tracking-wide">SEO Live Preview</span>
              </div>

              {/* Video Container Screen */}
              <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  src={services.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                >
                  <source src="/videos/seo-services-video.mp4" type="video/mp4" />
                </video>

                {/* Center Play Overlay Icon when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-110 z-20 cursor-pointer shadow-lg"
                    aria-label="Play video"
                  >
                    <PlayIcon className="w-8 h-8 ml-1" />
                  </button>
                )}

                {/* Bottom Video Floating Action Controls */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <PauseIcon className="w-3.5 h-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <PlayIcon className="w-3.5 h-3.5" />
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  {/* Audio Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <SpeakerXMarkIcon className="w-4 h-4 text-white/80" />
                    ) : (
                      <SpeakerWaveIcon className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Ambient Glow behind Device */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-blue-500/20 to-[#D4AF37]/20 blur-2xl rounded-full opacity-60 pointer-events-none -z-10" />
            </div>
          </div>

          {/* RIGHT COLUMN: Single-Line Horizontal Scrolling Cards */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-center min-w-0">
            
            {/* Scroll Container (Cards aligned strictly in a Single Line / nowrap) */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`flex flex-row overflow-x-auto gap-5 lg:gap-6 py-4 px-1 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none ${
                isDragging ? "scroll-auto" : "scroll-smooth"
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              }}
            >
              {services.items.map((item, index) => {
                const Icon = iconMap[item.icon] || ChartBarIcon;
                const itemNumber = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={index}
                    className="w-[290px] sm:w-[330px] md:w-[350px] h-[520px] flex-shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DEC8]/90 shadow-[0_10px_30px_rgba(28,26,70,0.06)] hover:shadow-[0_24px_50px_rgba(212,175,55,0.16)] hover:border-[#D4AF37]/70 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Subtle Gold Gradient Glow on hover */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top Row: Icon + Number Pill */}
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        {/* Icon Box */}
                        <div className="w-13 h-13 rounded-2xl bg-[#FFF9ED] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105">
                          <Icon className="w-6 h-6 stroke-[1.8]" />
                        </div>

                        {/* Number Badge */}
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-[#FAF8F5] text-slate-600 border border-slate-200/80 group-hover:bg-[#0B1028] group-hover:text-white group-hover:border-[#0B1028] transition-colors">
                          #{itemNumber}
                        </span>
                      </div>

                      {/* Tag Pill if available */}
                      {item.tag && (
                        <div className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#D4AF37] bg-[#FFF9ED] px-2.5 py-0.5 rounded-md mb-2.5 border border-[#D4AF37]/20">
                          {item.tag}
                        </div>
                      )}

                      {/* Card Title */}
                      <h3 className="text-xl font-bold text-[#0B1028] mb-2.5 leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Highlight Checklist Bullets */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2 pt-2 border-t border-slate-100">
                          {item.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-tight">
                              <CheckCircleIcon className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span className="font-medium">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B1028] group-hover:text-[#D4AF37] transition-colors">
                      <span className="uppercase tracking-wider">Explore Strategy</span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#D4AF37] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Progress Bar & Dots Indicator */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
              
              {/* Progress Line */}
              <div className="flex-1 max-w-md flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-500">01</span>
                <div className="flex-1 h-1.5 bg-slate-200/80 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B38728] rounded-full transition-all duration-200"
                    style={{ width: `${Math.max(12, scrollProgress)}%` }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-slate-500">
                  {String(services.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {services.items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Scroll to service ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === idx
                        ? "w-6 h-2 bg-[#D4AF37]"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Arrows */}
              <div className="flex sm:hidden items-center gap-2 self-end">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className="p-2 rounded-full border border-slate-200 bg-white text-[#0B1028] disabled:opacity-30"
                  aria-label="Previous"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className="p-2 rounded-full border border-slate-200 bg-white text-[#0B1028] disabled:opacity-30"
                  aria-label="Next"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
