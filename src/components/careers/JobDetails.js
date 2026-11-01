"use client";

import React from "react";
import Link from "next/link";

export default function JobDetails({ job }) {
  if (!job) return null;

  return (
    <article
      className="max-w-4xl mx-auto"
      aria-label={`Job details for ${job.title}`}
    >
      {/* Back link */}
      <Link
        href="/careers"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#0F172A] font-medium transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to All Open Positions
      </Link>

      {/* Job Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                {job.department}
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {job.employmentType}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-1 font-sans">
              {job.title}
            </h1>
          </div>
          {job.featured && (
            <span className="self-start inline-block bg-amber-50 text-[#D4AF37] border border-amber-200/80 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              ★ Featured Role
            </span>
          )}
        </div>

        {/* Meta info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-slate-100 my-6">
          <MetaItem label="Location" value={job.locationDetail || job.location} />
          <MetaItem label="Experience" value={job.experienceRange} />
          <MetaItem label="Employment Type" value={job.employmentType} />
          <MetaItem label="Compensation" value={job.salaryRange || "Competitive"} />
        </div>

        {/* Skills Tag Cloud */}
        {job.skills && job.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium bg-slate-50 text-slate-600 px-3 py-1 rounded-md border border-slate-200/60"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main content */}
        <div className="lg:col-span-8 space-y-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          {/* About the Role */}
          <ContentSection title="About the Role">
            <p className="text-slate-700 leading-relaxed text-base font-normal">
              {job.description || job.shortDescription}
            </p>
          </ContentSection>

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <ContentSection title="Key Responsibilities">
              <ul className="space-y-3" role="list">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ContentSection>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <ContentSection title="What We Look For">
              <ul className="space-y-3" role="list">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ContentSection>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Apply CTA Card */}
          <div className="bg-[#0F172A] rounded-2xl p-6 text-white text-center shadow-lg border border-slate-800">
            <h3 className="font-bold text-lg mb-2">Ready to apply?</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-6">
              Submit your resume today. Our talent lead personally responds within 72 hours.
            </p>
            <Link
              href="/careers#apply"
              className="block w-full py-3 px-4 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0F172A] font-bold rounded-xl transition-colors text-sm text-center shadow-sm"
            >
              Apply for This Position
            </Link>
          </div>

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6">
              <h3 className="font-bold text-[#0F172A] mb-4 text-sm uppercase tracking-wider">
                Role Perks &amp; Benefits
              </h3>
              <ul className="space-y-2.5" role="list">
                {job.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <span className="text-slate-400 text-xs block mb-1">{label}</span>
      <span className="font-bold text-[#0F172A] text-sm">{value}</span>
    </div>
  );
}

function ContentSection({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100 font-sans">
        {title}
      </h2>
      {children}
    </div>
  );
}
