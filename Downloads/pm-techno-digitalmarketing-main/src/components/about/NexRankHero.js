"use client";
import React from "react";
import { motion } from "framer-motion";
import BouncingLogoTitle from "./BouncingLogoTitle";

export default function NexRankHero() {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[480px] bg-[#111111] flex flex-col justify-center overflow-hidden">
      {/* Background with texture & overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 scale-100 brightness-110 contrast-105"
        style={{ backgroundImage: `url('/images/about/hero-bg.webp')` }}
      />
      {/* Soft directional gradient: protects text legibility on the left while keeping the background image clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

      <div className="relative z-10 max-w-[1380px] mx-auto w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-24 flex flex-col justify-center items-start">
        
        {/* Main Title */}
        <h1 className="about-hero-title drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          <BouncingLogoTitle />
        </h1>

        {/* Subtitle kicker positioned below the main title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="about-hero-kicker drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          <span>A Digital Marketing Agency with a Creative Strong-arm</span>
        </motion.div>

      </div>
    </section>
  );
}
