"use client";

import React from "react";
import { motion } from "framer-motion";

export default function JobCard({ job, onSelectRole, onOpenDetails }) {
  if (!job) return null;

  const handleApplyClick = (e) => {
    e.preventDefault();
    if (onSelectRole) {
      onSelectRole(job.title);
    }
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(2,18,106,0.05)] hover:shadow-[0_16px_36px_rgba(2,18,106,0.12)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
      aria-label={`Job posting: ${job.title}`}
    >
      {/* Top Brand Accent Line: NexRank Navy -> Royal Blue -> Gold */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#02126a] via-[#1E40AF] to-[#D4AF37]" />

      <div>
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-3 mb-4 pt-1">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-[#0F172A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs tracking-wide">
              {job.department}
            </span>
            <span className="inline-block bg-blue-50 text-[#1E40AF] border border-blue-200/80 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              {job.employmentType}
            </span>
          </div>

          {job.featured && (
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-[#D4AF37] text-[#0F172A] font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] animate-pulse" />
              Featured
            </span>
          )}
        </div>

        {/* Job Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#1E40AF] transition-colors mb-3 leading-snug">
          {job.title}
        </h3>

        {/* Key Metadata Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
          <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-lg border border-slate-200/80">
            <svg className="w-3.5 h-3.5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-lg border border-slate-200/80">
            <svg className="w-3.5 h-3.5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{job.experienceRange}</span>
          </div>

          {job.salaryRange && (
            <div className="flex items-center gap-1.5 bg-amber-100/70 text-[#0F172A] font-bold px-2.5 py-1 rounded-lg border border-amber-300/80 shadow-2xs">
              <span className="text-[#D4AF37] font-extrabold">₹</span>
              <span>{job.salaryRange}</span>
            </div>
          )}
        </div>

        {/* Short Summary */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2 font-normal">
          {job.shortDescription}
        </p>

        {/* Skills Tag Cloud */}
        {job.skills && job.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {job.skills.slice(0, 4).map((skill, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold bg-slate-100 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 4 && (
              <span className="text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-1 rounded-md">
                +{job.skills.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons Row */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
        <button
          type="button"
          onClick={handleApplyClick}
          className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B3891D] text-[#0F172A] font-extrabold text-xs sm:text-sm rounded-xl shadow-[0_4px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all duration-200 text-center cursor-pointer"
        >
          Apply Now
        </button>

        <button
          type="button"
          onClick={() => onOpenDetails && onOpenDetails(job)}
          className="flex-1 py-2.5 px-4 bg-white hover:bg-[#0F172A] text-[#0F172A] hover:text-white font-bold text-xs sm:text-sm rounded-xl border-2 border-[#0F172A] hover:border-[#0F172A] transition-all duration-200 text-center shadow-xs cursor-pointer"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}
