"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MapSection({ config }) {
  const heading = config?.heading || "Our Location";
  const description =
    config?.description ||
    "Collaborative strategy studios and meeting spaces designed for high-impact briefing sessions.";

  return (
    <section id="location-map" className="w-full py-10 md:py-14 bg-[#F8FAFC] border-b border-slate-100 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>OFFICE LOCATIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(2,18,106,0.08)] bg-slate-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2575647000133!2d-73.98773168459424!3d40.75626297932696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1689253459146!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NexRank Office Location Map"
            className="w-full h-[380px] sm:h-[420px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
