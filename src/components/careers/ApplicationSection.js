import React from "react";
import ApplicationForm from "./ApplicationForm";

export default function ApplicationSection({ config }) {
  if (!config) return null;

  return (
    <section
      id="apply"
      className="w-full py-10 md:py-14 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100"
      aria-labelledby="application-form-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Info & Trust Signals */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
              <span>READY TO APPLY?</span>
            </div>

            <h2
              id="application-form-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-5 leading-tight font-sans"
            >
              Start your next chapter with NexRank.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
              Fill out the form below and attach your resume. If you don&apos;t see an exact match among open roles, choose General Application — we&apos;re always eager to meet top talent.
            </p>

            {/* Respectful Commitments */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "⚡", title: "72-Hour Response Time", desc: "Every submission is personally reviewed by our talent lead." },
                { icon: "🔒", title: "Complete Privacy", desc: "Your details remain strictly confidential and are never shared externally." },
                { icon: "💬", title: "Direct Human Dialogue", desc: "No generic AI rejection emails. We offer thoughtful feedback." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact info */}
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200/60 text-xs text-slate-600">
              Questions before applying? Email our talent team directly at{" "}
              <a href="mailto:careers@nexranktechnogroup.com" className="font-bold text-[#0F172A] hover:text-[#D4AF37] underline">
                careers@nexranktechnogroup.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
            <ApplicationForm config={config} />
          </div>

        </div>
      </div>
    </section>
  );
}
