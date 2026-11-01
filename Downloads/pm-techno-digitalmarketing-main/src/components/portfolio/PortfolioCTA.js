"use client";

import { useState } from "react";

export default function PortfolioCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState({ submitted: false, loading: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true });
    setTimeout(() => {
      setStatus({ submitted: true, loading: false });
    }, 700);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fbf8f1] border-t border-[#e8e4da] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Value Props & Response SLA (Brandshark style) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#e6c35c] mb-3">
              GET STARTED
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#2e2058] leading-[1.18] tracking-tight mb-4">
              Let&apos;s Discuss <br className="hidden sm:inline" />
              <span className="text-[#ffc700]">Your Project</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8 font-normal">
              Ready to transform your brand&apos;s digital presence? Fill out the form and our senior growth strategists will analyze your business and get back to you within 24 hours.
            </p>

            {/* Custom Features Stack (Brandshark custom-features) */}
            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  title: "Free strategy consultation",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Custom tailored solutions",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )
                },
                {
                  title: "24-hour response time",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#f1eee7] text-[#2e2058] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-base sm:text-lg font-medium text-[#2e2058]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Converting Project Enquiry Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#ede9e0] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(46,32,88,0.06)]">
              {status.submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#f1eee7] text-[#2e2058] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#2e2058] mb-2">Thank You!</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Your request has been received. Our team will review your requirements and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#262626] focus:border-[#2e2058] focus:ring-1 focus:ring-[#2e2058] outline-none transition-all"
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#262626] focus:border-[#2e2058] focus:ring-1 focus:ring-[#2e2058] outline-none transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#262626] focus:border-[#2e2058] focus:ring-1 focus:ring-[#2e2058] outline-none transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Company Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#262626] focus:border-[#2e2058] focus:ring-1 focus:ring-[#2e2058] outline-none transition-all"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Select a Service *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#262626] focus:border-[#2e2058] focus:ring-1 focus:ring-[#2e2058] outline-none transition-all"
                        suppressHydrationWarning
                      >
                        <option value="">Select Service...</option>
                        <option value="Social Media">Social Media</option>
                        <option value="SEO">SEO & Organic Growth</option>
                        <option value="Performance Marketing">Performance Marketing</option>
                        <option value="Branding">Branding & Creative</option>
                        <option value="Website Development">Website Development</option>
                        <option value="360 Digital Marketing">360 Digital Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Project Details / Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your brand goals and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#262626] focus:border-[#2e2058] focus:ring-1 focus:ring-[#2e2058] outline-none transition-all"
                      suppressHydrationWarning
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-[#2b2058] hover:bg-[#1c1a46] text-white transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 mt-2"
                    suppressHydrationWarning
                  >
                    {status.loading ? "Processing..." : "Submit Project Enquiry →"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
