import React from "react";
import { getRealisticBenefitIcon } from "./RealisticIcons";

export default function BenefitsGrid({ benefits }) {
  if (!benefits || !benefits.items || benefits.items.length === 0) return null;

  return (
    <section className="py-12 lg:py-20 bg-brand-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {benefits.heading}
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.items.map((item, index) => {
            const Icon = getRealisticBenefitIcon(item.icon, item.title);
            
            return (
              <div 
                key={index}
                className="group bg-surface/5 hover:bg-surface/10 p-7 sm:p-8 rounded-2xl border border-white/15 hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  {/* Free-standing animated Lottie-style icon with NO white background */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-start mb-6 select-none relative group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-14 h-14 sm:w-16 sm:h-16" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
