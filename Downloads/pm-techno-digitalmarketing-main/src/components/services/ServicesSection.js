"use client";

import { servicesHeader, servicesData } from "@/data/digital/services";
import SectionHeader from "./SectionHeader";
import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
  return (
    <section 
      id="services"
      className="relative py-16 sm:py-24 bg-[#0b0b0d] border-t border-white/10 overflow-hidden font-poppins selection:bg-[#ffdf00] selection:text-black"
    >
      {/* Subtle Dot Grid Canvas for Dark Theme */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft Ambient Radial Lights for Contrast & Depth */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffdf00 0%, transparent 70%)" }}
      />

      <div className="max-w-[1440px] xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <SectionHeader headerData={servicesHeader} />
        <ServicesGrid services={servicesData} />
      </div>
    </section>
  );
}
