"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CounterItem({ end, suffix = "+", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="min-h-[180px] sm:min-h-[210px] p-[24px] sm:p-[28px] border-r border-b border-[#cfcfca] flex flex-col justify-between transition-colors duration-300 hover:bg-[#ffdf00] group cursor-default select-none bg-transparent"
    >
      <div className="text-[12px] sm:text-[13px] font-[700] tracking-[0.08em] uppercase text-[#66686d] leading-[1.4] group-hover:text-[#111111] transition-colors font-poppins text-left">
        {label}
      </div>
      <div className="font-poppins text-[clamp(38px,4.5vw,64px)] font-[600] text-[#111111] leading-none tracking-[-0.045em] text-left">
        <span>{count}</span>
        <span className="text-[#111111]">{suffix}</span>
      </div>
    </div>
  );
}

export default function WhyNeedUs() {
  return (
    <section className="w-full bg-[#ffffff] py-[clamp(72px,7vw,104px)] px-6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-[clamp(50px,6vw,88px)] items-center">
        
        {/* Left Column: Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.2, 0.75, 0.2, 1] }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <div className="flex items-center gap-[11px] mb-5">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffdf00] shadow-[0_0_0_7px_rgba(255,223,0,0.18)] flex-shrink-0" />
            <p className="text-[#716300] text-[13px] font-[800] tracking-[0.15em] uppercase font-poppins m-0">
              Digital Marketing Agency
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-[clamp(42px,4.5vw,64px)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#0b0b0d] mb-7">
            Why you need us!
          </h2>

          {/* Body */}
          <div className="space-y-[22px] text-[#5d5e63] font-poppins text-[15.5px] leading-[1.72] max-w-[610px]">
            <p className="m-0">
              If you have a seed and soil in a pot, will it grow? No, the reason being it needs nurturing in the form of water. The digital age of social media has revolutionised the way of doing business. To remain relevant in this volatile market, one needs the right care and help. Good marketing not just helps in building the name of the brand, but it paves the way for new customers to come in. After all, a plant always needs water, even after it has bloomed.
            </p>
            <p className="m-0">
              We at <strong className="text-[#0b0b0d] font-semibold">NexRank</strong> don’t call ourselves knight in shining armour of our clients, but we do take pride in our approach. It involves deep creative ideation and digital audits along with extensive background research in tailoring strategies. It would be no hyperbole to say that we are strong with our creativity and visualising skills which further helps us in delivering promised results for any campaign, website and projects that we handle. In this digital age, customers never sleep, and we do our best to lure them and keep them engaged with our brands and services. Staying relevant is the key we follow.
            </p>
          </div>
        </motion.div>

        {/* Right Column: 2x2 Metric Counters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.75, 0.2, 1] }}
          className="w-full grid grid-cols-2 border-t border-l border-[#cfcfca] bg-transparent"
        >
          <CounterItem end={14} suffix="+" label="Years of Experience" />
          <CounterItem end={15} suffix="+" label="Countries Served" />
          <CounterItem end={40} suffix="+" label="Employees" />
          <CounterItem end={350} suffix="+" label="Projects Delivered" />
        </motion.div>

      </div>
    </section>
  );
}
