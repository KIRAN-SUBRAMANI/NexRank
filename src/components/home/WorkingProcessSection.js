"use client";

import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "01. Analysis",
    bgClass: "bg-[#32CC73]", // Green
    icon: "/images/home/process/process1.png",
    alt: "Analysis",
    offset: false,
    delay: 0.2
  },
  {
    step: "02",
    title: "02. Design",
    bgClass: "bg-[#fec658]", // Warm Yellow / Orange
    icon: "/images/home/process/process2.png",
    alt: "Design",
    offset: true,
    delay: 0.4
  },
  {
    step: "03",
    title: "03. Development",
    bgClass: "bg-[#478FFF]", // Sky Blue
    icon: "/images/home/process/process3.png",
    alt: "Development",
    offset: false,
    delay: 0.6
  },
  {
    step: "04",
    title: "04. Live",
    bgClass: "bg-[#000000]", // Black
    icon: "/images/home/process/process4.png",
    alt: "Live",
    offset: true,
    delay: 0.8
  }
];

export default function WorkingProcessSection() {
  return (
    <section 
      id="work-process" 
      className="work-process bg-white overflow-hidden"
      style={{ position: "relative", padding: "40px 0 65px 0", zIndex: 2 }}
    >
      
      {/* Background Wavy Dotted Arrow Pattern - 100% Exact Reference Alignment */}
      <motion.div
        initial={{ opacity: 0, x: -160 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
        className="pointer-events-none hidden lg:block select-none"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          marginTop: "-50px",
          width: "100%",
          textAlign: "center",
          zIndex: 1
        }}
      >
        <img
          src="/images/home/process/work_process.png"
          alt="Working Process Line"
          style={{
            width: "1396px",
            maxWidth: "1396px",
            height: "106px",
            display: "inline-block",
            margin: "0 auto"
          }}
        />
      </motion.div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title with exact fadeInDown 1s animation */}
        <div className="text-center mb-[30px]">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <h2 className="text-[36px] sm:text-[40px] font-bold text-[#2f2c2c] tracking-tight leading-tight mb-3">
              Our Working Process
            </h2>
            <span className="animate-border mx-auto"></span>
          </motion.div>
        </div>

        {/* 4 Process Step Circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[60px] relative z-10">
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.0, delay: step.delay, ease: "easeOut" }}
              className={`flex flex-col items-center text-center group cursor-pointer ${
                step.offset ? "lg:mt-[65px]" : "lg:mt-0"
              }`}
            >
              {/* Circle Container with Rotating Ring on Hover */}
              <div className="relative w-[195px] h-[195px] sm:w-[225px] sm:h-[225px]">
                {/* Rotating Orange-Yellow Dashed Ring (appears and rotates on hover) */}
                <div 
                  className="absolute -inset-[9.5px] sm:-inset-[11px] pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: 'url(/images/home/process/circle.png)',
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 15,
                    animation: 'spin 5s linear infinite'
                  }}
                />

                {/* Circle Wrapper (Exact 225px x 225px on desktop with official colors) */}
                <div 
                  className={`w-full h-full rounded-full ${step.bgClass} flex items-center justify-center transition-all duration-300 ease-linear shadow-none group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.14)] relative z-10`}
                >
                  <div className="relative w-auto h-auto flex items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.alt}
                      className="max-w-[80px] max-h-[80px] sm:max-w-[95px] sm:max-h-[95px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Step Title (Exact 20px font-bold, mt: 23px) */}
              <p className="font-bold text-[#2f2c2c] text-[20px] mt-[23px] mb-0 transition-colors duration-300 group-hover:text-[#fec658]">
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .animate-border {
          position: relative;
          display: block;
          width: 115px;
          height: 3px;
          background: #fec658;
          border-radius: 2px;
        }

        .animate-border::after,
        .animate-border:after {
          position: absolute;
          content: "";
          width: 35px;
          height: 3px;
          left: 0;
          bottom: 0;
          border-left: 10px solid #ffffff;
          border-right: 10px solid #ffffff;
          -webkit-animation: animborder 2s linear infinite;
          animation: animborder 2s linear infinite;
        }

        @keyframes animborder {
          0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
          100% {
            -webkit-transform: translateX(113px);
            transform: translateX(113px);
          }
        }
      `}</style>
    </section>
  );
}
