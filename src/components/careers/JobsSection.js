"use client";

import React, { useState, useMemo } from "react";
import JobCard from "./JobCard";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function JobsSection({
  positions = [],
  departments = [],
  locations = [],
  onSelectRole,
}) {
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalJob, setModalJob] = useState(null);

  // Filtered positions based on department, location, and search
  const filteredPositions = useMemo(() => {
    return positions.filter((job) => {
      const matchDept = selectedDept === "all" || job.department === selectedDept;
      const matchLoc = selectedLocation === "all" || job.location === selectedLocation;
      
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.shortDescription.toLowerCase().includes(query) ||
        (job.skills && job.skills.some((s) => s.toLowerCase().includes(query)));

      return matchDept && matchLoc && matchSearch;
    });
  }, [positions, selectedDept, selectedLocation, searchQuery]);

  const departmentList = useMemo(() => {
    const counts = {};
    positions.forEach((job) => {
      counts[job.department] = (counts[job.department] || 0) + 1;
    });

    return [
      { id: "all", label: "All Roles", count: positions.length },
      { id: "SEO", label: "SEO & Search", count: counts["SEO"] || 0 },
      { id: "Paid Media", label: "Paid Media", count: counts["Paid Media"] || 0 },
      { id: "Engineering", label: "Engineering", count: counts["Engineering"] || 0 },
      { id: "Content", label: "Content", count: counts["Content"] || 0 },
      { id: "Sales & BD", label: "Sales & BD", count: counts["Sales & BD"] || 0 },
      { id: "Design", label: "Design", count: counts["Design"] || 0 },
    ].filter((d) => d.id === "all" || d.count > 0);
  }, [positions]);

  const handleApplyFromModal = (jobTitle) => {
    setModalJob(null);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-career-position", { detail: { title: jobTitle } })
      );
      const el = document.getElementById("apply");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleRoleCardApply = (jobTitle) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-career-position", { detail: { title: jobTitle } })
      );
    }
  };

  return (
    <section
      id="open-positions"
      className="w-full py-10 md:py-14 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100"
      aria-labelledby="jobs-section-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>OPEN OPPORTUNITIES</span>
          </div>

          <h2
            id="jobs-section-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 font-sans"
          >
            Find your next career defining role.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Explore our open full-time and hybrid roles across disciplines.
          </p>
        </div>

        {/* Filter & Search Bar Hub */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, skill, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Location Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap hidden sm:inline mr-1">
                Location:
              </span>
              {[
                { id: "all", label: "All Locations" },
                { id: "Mumbai", label: "Mumbai (HQ)" },
                { id: "Remote", label: "Remote" },
                { id: "Hybrid", label: "Hybrid" },
              ].map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedLocation === loc.id
                      ? "bg-[#0F172A] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>

          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-slate-200/60 scrollbar-none">
            {departmentList.map((dept) => {
              const isActive = selectedDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#D4AF37] text-[#0F172A] shadow-xs font-bold"
                      : "bg-white text-slate-600 hover:text-[#0F172A] border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span>{dept.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-black/10 text-[#0F172A]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {dept.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-slate-500 font-medium">
          <div>
            Showing <span className="font-bold text-[#0F172A]">{filteredPositions.length}</span> positions
            {selectedDept !== "all" && <span> in <span className="font-semibold text-[#0F172A]">{selectedDept}</span></span>}
            {selectedLocation !== "all" && <span> ({selectedLocation})</span>}
          </div>
          {(selectedDept !== "all" || selectedLocation !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedDept("all");
                setSelectedLocation("all");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-[#D4AF37] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Positions Grid */}
        {filteredPositions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPositions.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onSelectRole={handleRoleCardApply}
                onOpenDetails={(j) => setModalJob(j)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
              🔍
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">No matching positions found</h3>
            <p className="text-sm text-slate-500 mb-6">
              We couldn&apos;t find any roles matching your current search criteria. Try clearing filters or submit a general application below.
            </p>
            <button
              onClick={() => {
                setSelectedDept("all");
                setSelectedLocation("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 bg-[#D4AF37] text-[#0F172A] font-bold text-xs sm:text-sm rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Quick View Role Details Modal */}
      <AnimatePresence>
        {modalJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalJob(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalJob(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {modalJob.department}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {modalJob.employmentType}
                  </span>
                  {modalJob.featured && (
                    <span className="bg-amber-50 text-[#D4AF37] border border-amber-200/80 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      ★ Featured Role
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] leading-snug">
                  {modalJob.title}
                </h2>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/60 mb-6 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Location</span>
                  <span className="font-bold text-[#0F172A]">{modalJob.locationDetail || modalJob.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Experience</span>
                  <span className="font-bold text-[#0F172A]">{modalJob.experienceRange}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Compensation</span>
                  <span className="font-bold text-[#0F172A]">{modalJob.salaryRange || "Competitive"}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Review Window</span>
                  <span className="font-bold text-[#0F172A]">Within 72 Hours</span>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Role Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {modalJob.description || modalJob.shortDescription}
                </p>
              </div>

              {/* Responsibilities */}
              {modalJob.responsibilities && modalJob.responsibilities.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {modalJob.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {modalJob.requirements && modalJob.requirements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">What We Look For</h4>
                  <ul className="space-y-2">
                    {modalJob.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {modalJob.skills && modalJob.skills.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Core Toolset &amp; Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {modalJob.skills.map((skill, i) => (
                      <span key={i} className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={`/careers/${modalJob.slug}`}
                  className="text-xs font-semibold text-slate-500 hover:text-[#0F172A] underline"
                >
                  Open dedicated page for this position →
                </Link>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setModalJob(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyFromModal(modalJob.title)}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0F172A] font-bold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    Apply for this Role
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
