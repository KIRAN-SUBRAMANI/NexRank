"use client";
import React from 'react';
import { homeTestimonials } from "@/data/digital/testimonials/homeTestimonials";
import ContinuousTestimonialMarquee from "./ContinuousTestimonialMarquee";
import AnimatedCounter from "./AnimatedCounter";
import IconWrapper from "@/components/common/IconWrapper";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  // Filter for approved testimonials
  const approvedTestimonials = homeTestimonials.filter(t => t.status === "approved");

  return (
    <section id="testimonials" className="pt-16 pb-0 w-full bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Teal Blob */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#12B8B0] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03] animate-blob" />
        {/* Soft Orange/Cream Blob */}
        <div className="absolute top-[20%] -left-[10%] w-[700px] h-[700px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03] animate-blob animation-delay-2000" />
        {/* Subtle Floating Particles */}
        <div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-30 animate-pulse" />
        <div className="absolute bottom-[30%] right-[20%] w-2 h-2 rounded-full bg-[#12B8B0] opacity-30 animate-pulse animation-delay-2000" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Header & Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 space-y-5 relative z-10"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></span>
            <span className="text-sm font-extrabold tracking-widest text-[#D4AF37] uppercase">
              CLIENT SUCCESS STORIES
            </span>
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-extrabold text-[#2D3436] leading-tight tracking-tight">
            Don’t Just Take Our <span className="text-[#D4AF37]">Word</span> for It
          </h2>
          <p className="text-lg md:text-xl text-[#06143D] leading-relaxed font-medium">
            Discover how businesses across industries have achieved measurable growth with NexRank through SEO, Google Ads, Meta Ads, Google Business Profile optimization, and Web Development.
          </p>
          

        </motion.div>

        {/* Middle Section: Continuous CSS Marquee */}
        <div className="w-[100vw] relative z-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <ContinuousTestimonialMarquee testimonials={approvedTestimonials} />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 25s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}} />
    </section>
  );
}
