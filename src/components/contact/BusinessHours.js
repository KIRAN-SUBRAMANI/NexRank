"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BusinessHours({ hours }) {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check if within standard business hours (Mon-Sat 9AM - 8PM)
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();
    if (day === 0) {
      setIsOpenNow(false);
    } else if (day === 6) {
      setIsOpenNow(hour >= 10 && hour < 16);
    } else {
      setIsOpenNow(hour >= 9 && hour < 20);
    }
  }, []);

  const schedule = hours?.schedule || [
    { days: "Monday – Friday", hours: "9:00 AM – 8:00 PM IST" },
    { days: "Saturday", hours: "10:00 AM – 4:00 PM IST" },
    { days: "Sunday", hours: "On-Call Strategy Support" },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Live Operational Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(2,18,106,0.06)] relative overflow-hidden"
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-[#D4AF37] flex items-center justify-center font-bold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Operating Schedule</h3>
              <p className="text-xs text-slate-500">Global client coverage</p>
            </div>
          </div>

          {/* Real-time Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              isOpenNow
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-slate-100 text-slate-600 border-slate-200"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
              }`}
            />
            {isOpenNow ? "Open Now" : "Opens 9 AM"}
          </span>
        </div>

        {/* Schedule List */}
        <div className="space-y-3 mb-6">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs sm:text-sm"
            >
              <span className="font-bold text-[#0F172A]">{item.days}</span>
              <span className="font-semibold text-slate-600 text-xs bg-white px-2.5 py-1 rounded-md border border-slate-200/60">
                {item.hours}
              </span>
            </div>
          ))}
        </div>

        {/* Turnaround Guarantee Pill */}
        <div className="flex items-center gap-3 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0F172A] font-black text-sm flex items-center justify-center shrink-0">
            ⚡
          </div>
          <div className="text-xs">
            <div className="font-bold text-[#0F172A]">Rapid Response Commitment</div>
            <div className="text-slate-600">Average first reply under 47 minutes during business hours.</div>
          </div>
        </div>
      </motion.div>

      {/* 2. Direct Senior Engagement Assurance Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-[#0F172A] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-slate-800"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <span>THE NEXRANK ASSURANCE</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight mb-3">
            Direct Director Access.
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            You will communicate directly with senior growth practitioners and software architects who execute your vision — never junior intermediaries.
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
            {[
              "100% Mutual NDA signed prior to code/data access",
              "Transparent milestone billing with no hidden retainers",
              "Direct Slack/WhatsApp collaboration channels",
              "Weekly KPI sprint meetings & live progress dashboards",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-[#D4AF37] font-bold text-sm mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* 3. Urgent Inquiries Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-0.5">
            URGENT PROJECT OR RFP?
          </div>
          <div className="text-sm font-bold text-[#0F172A]">Call our priority desk directly</div>
        </div>

        <a
          href="tel:+18005550199"
          className="px-4 py-2.5 bg-[#0F172A] hover:bg-[#1E40AF] text-white font-bold text-xs rounded-xl transition-colors whitespace-nowrap"
        >
          Call Now ↗
        </a>
      </motion.div>
    </div>
  );
}
