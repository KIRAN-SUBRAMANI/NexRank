"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  BarChart3,
  Target,
  Sparkles,
  MousePointer2,
  Palette,
  Code2,
  Globe2,
  Check,
  Rocket,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Analysis",
    description:
      "We explore your business, understand your audience, and discover new opportunities.",
    background: "from-[#D8F8A9] via-[#C9F0D3] to-[#A8E7D4]",
    accent: "#448C43",
    label: "DISCOVER",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn smart insights into beautiful designs and campaigns that stand out.",
    background: "from-[#FFD1B8] via-[#FFC5C5] to-[#E3C7FF]",
    accent: "#DA6856",
    label: "CREATE",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build websites and connect digital experiences that bring your vision to life.",
    background: "from-[#B7E4FF] via-[#A9D0FF] to-[#D0C4FF]",
    accent: "#4D77D4",
    label: "BUILD",
  },
  {
    number: "04",
    title: "Live & Grow",
    description:
      "We launch, track performance, optimize campaigns, and keep your brand growing.",
    background: "from-[#D7C6FF] via-[#F2C8F4] to-[#FFCDB6]",
    accent: "#8B5BD1",
    label: "EVOLVE",
  },
];

const float = (delay = 0, distance = 8) => ({
  y: [0, -distance, 0],
  transition: {
    duration: 3.8,
    delay,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

function AnalysisVisual({ animate }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-[17%] top-[19%] flex h-[112px] w-[130px] flex-col rounded-[18px] border border-white/80 bg-white/90 p-3 shadow-[0_15px_30px_#3B87422A]"
        animate={animate ? float(0, 7) : {}}
      >
        <div className="mb-3 flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#91D36E]" />
          <span className="h-2 w-2 rounded-full bg-[#FFBF77]" />
          <span className="h-2 w-2 rounded-full bg-[#C8B7FF]" />
        </div>
        <div className="mb-2 h-1.5 w-16 rounded-full bg-[#D8E7D2]" />
        <div className="flex flex-1 items-end gap-2">
          {[24, 39, 30, 52, 64].map((height, i) => (
            <motion.div
              key={i}
              className="w-3 rounded-t-md bg-[#80C76A]"
              initial={{ height: 8 }}
              animate={{ height: animate ? height : height * 0.7 }}
              transition={{ duration: 1, delay: i * 0.15 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[14%] top-[28%] flex h-[105px] w-[105px] items-center justify-center rounded-full border-[9px] border-[#E6FFDB] bg-[#B6EA95] shadow-[0_15px_35px_#50994B40]"
        animate={animate ? { rotate: [-8, 7, -8], y: [0, -9, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Search size={53} strokeWidth={2.5} color="#316E3E" />
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[19%] flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg"
        animate={animate ? float(0.7, 5) : {}}
      >
        <Target size={15} color="#5EAC52" />
        <span className="text-[9px] font-black text-[#3E7841]">
          INSIGHT FOUND
        </span>
      </motion.div>

      <motion.div
        className="absolute right-[16%] top-[13%] flex h-9 w-9 items-center justify-center rounded-xl bg-[#E5FFAE] shadow-md"
        animate={animate ? float(0.4, 8) : {}}
      >
        <Sparkles size={19} color="#659A31" />
      </motion.div>
    </div>
  );
}

function DesignVisual({ animate }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-[16%] top-[17%] h-[142px] w-[145px] overflow-hidden rounded-[20px] border-[5px] border-white bg-[#FFF2EA] shadow-[0_18px_35px_#CE6E7040]"
        animate={animate ? { rotate: [-4, 2, -4], y: [0, -6, 0] } : {}}
        transition={{ duration: 4.5, repeat: Infinity }}
      >
        <div className="flex h-7 items-center gap-1.5 bg-white/90 px-3">
          {["#FF9476", "#D8FA65", "#C8B7FF"].map((color) => (
            <span
              key={color}
              className="h-2 w-2 rounded-full"
              style={{ background: color }}
            />
          ))}
        </div>

        <div className="relative flex h-[110px] items-center justify-center">
          <motion.div
            className="absolute h-20 w-20 rounded-[24px] bg-[#FF9A7E]"
            animate={animate ? { rotate: [0, 90, 180, 270, 360] } : {}}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute h-14 w-14 rounded-full bg-[#D8FA65]/80" />
          <span className="relative text-[13px] font-black tracking-tight text-[#603E43]">
            BE BOLD.
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[26%] flex flex-col gap-2 rounded-[15px] border border-white bg-white p-2 shadow-xl"
        animate={animate ? float(0.5, 9) : {}}
      >
        {["#FF9476", "#D8FA65", "#C8B7FF", "#8FD3FF"].map((color) => (
          <span
            key={color}
            className="h-6 w-6 rounded-lg"
            style={{ background: color }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-[21%] flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF8E79] shadow-lg"
        animate={animate ? { x: [0, 12, 0], y: [0, -9, 0] } : {}}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <MousePointer2 size={25} className="fill-white text-[#FF8E79]" />
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[14%] flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5D8FF] shadow-md"
        animate={animate ? float(0.8, 6) : {}}
      >
        <Palette size={21} color="#AA69C8" />
      </motion.div>
    </div>
  );
}

function DevelopmentVisual({ animate }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-[14%] top-[17%] h-[148px] w-[176px] overflow-hidden rounded-[19px] border-[5px] border-white bg-[#1D2C46] shadow-[0_18px_35px_#4A70C84D]"
        animate={animate ? float(0, 7) : {}}
      >
        <div className="flex h-7 items-center gap-1.5 bg-[#31415C] px-3">
          {["#FF9476", "#FFD07E", "#A5D779"].map((color) => (
            <span
              key={color}
              className="h-2 w-2 rounded-full"
              style={{ background: color }}
            />
          ))}
          <span className="ml-auto text-[8px] text-white/50">nexrank.dev</span>
        </div>

        <div className="flex gap-3 p-3">
          <div className="flex w-1/2 flex-col gap-2">
            {[75, 48, 92, 58, 68, 43].map((width, i) => (
              <motion.div
                key={i}
                className="h-[5px] rounded-full"
                style={{
                  background: ["#8FD3FF", "#C8B7FF", "#D8FA65"][i % 3],
                }}
                initial={{ width: 0 }}
                animate={{ width: animate ? `${width}%` : "25%" }}
                transition={{ duration: 0.7, delay: i * 0.13 }}
              />
            ))}
          </div>
          <div className="flex-1 rounded-lg bg-white p-2">
            <div className="mb-2 h-2 w-12 rounded bg-[#31415C]" />
            <div className="mb-1 h-1 w-full rounded bg-[#DDE5EF]" />
            <div className="mb-2 h-1 w-3/4 rounded bg-[#DDE5EF]" />
            <div className="h-9 rounded-md bg-gradient-to-br from-[#B8EAA0] to-[#9BD5FF]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[11%] top-[29%] flex h-[80px] w-[66px] items-center justify-center rounded-[16px] border-[4px] border-white bg-[#D9EAFF] shadow-lg"
        animate={animate ? float(0.6, 10) : {}}
      >
        <Globe2 size={34} color="#568AE0" />
      </motion.div>

      <motion.div
        className="absolute bottom-[17%] left-[18%] flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-xl"
        animate={animate ? float(0.3, 6) : {}}
      >
        <Check size={15} color="#55A76A" />
        <span className="text-[9px] font-black text-[#467A5A]">
          BUILD COMPLETE
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] right-[18%] flex h-11 w-11 items-center justify-center rounded-xl bg-[#B7C9FF] shadow-md"
        animate={animate ? { rotate: [-8, 8, -8] } : {}}
        transition={{ duration: 3.6, repeat: Infinity }}
      >
        <Code2 size={23} color="#4D68B9" />
      </motion.div>
    </div>
  );
}

function GrowthVisual({ animate }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-[13%] top-[20%] h-[139px] w-[174px] rounded-[20px] border-[5px] border-white bg-white p-3 shadow-[0_18px_35px_#9465C83B]"
        animate={animate ? float(0, 7) : {}}
      >
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-[#8490A0]">GROWTH</span>
          <TrendingUp size={15} color="#8C66D5" />
        </div>

        <div className="mt-1 text-[23px] font-black text-[#273344]">+248%</div>

        <svg
          viewBox="0 0 145 55"
          className="mt-1 h-[55px] w-full overflow-visible"
        >
          <motion.path
            d="M2 48 C19 43 29 50 43 35 S68 39 83 22 S111 27 141 5"
            fill="none"
            stroke="#9468DB"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animate ? 1 : 0.4 }}
            transition={{ duration: 2.3 }}
          />
          <circle cx="141" cy="5" r="5" fill="#D8FA65" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-[13%] top-[24%] flex h-[90px] w-[90px] items-center justify-center rounded-[25px] bg-[#D8FA65] shadow-[0_16px_30px_#9AB96855]"
        animate={animate ? { y: [0, -15, 0], rotate: [-10, 10, -10] } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Rocket size={45} color="#405F35" />
      </motion.div>

      <motion.div
        className="absolute bottom-[17%] left-[19%] flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-xl"
        animate={animate ? float(0.5, 6) : {}}
      >
        <span className="h-2 w-2 rounded-full bg-[#72C568]" />
        <span className="text-[9px] font-black text-[#6D4C9E]">
          CAMPAIGN IS LIVE
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-[13%] right-[17%] flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5D3FF] shadow-md"
        animate={animate ? float(0.8, 8) : {}}
      >
        <ArrowUpRight size={24} color="#A464D0" />
      </motion.div>
    </div>
  );
}

const visuals = [AnalysisVisual, DesignVisual, DevelopmentVisual, GrowthVisual];

export default function WorkingProcessSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="our-process"
      className="relative overflow-hidden bg-[#FBFBF8] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D8FA65]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C8B7FF]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Sparkles size={15} color="#78A53B" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#78A53B]">
              Simple Process. Extraordinary Results.
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.2vw,4.2rem)] font-black leading-[1.1] tracking-[-0.06em] text-[#1B2821]">
            Our Working <span className="text-[#7EAE3C]">Process.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#738074]">
            Four thoughtful steps. One powerful journey from idea to impact.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Visual = visuals[index];

            return (
              <motion.div
                key={step.number}
                initial={reducedMotion ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div
                  className={`relative h-[235px] overflow-hidden rounded-[28px] bg-gradient-to-br ${step.background} shadow-[0_16px_40px_#1D292212] transition-transform duration-500 group-hover:-translate-y-2`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[28px] border-white/20" />
                  <div className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full border-[25px] border-white/20" />

                  <Visual animate={!reducedMotion} />

                  <div className="absolute bottom-3 right-3 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[9px] font-black tracking-[0.12em] text-[#39443D] backdrop-blur-md">
                    {step.label}
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[12px] font-black text-white"
                    style={{ background: step.accent }}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-[23px] font-black tracking-[-0.045em] text-[#202B24]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.75] text-[#728075]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < 3 && (
                  <motion.div
                    className="absolute -right-[17px] top-[110px] z-20 hidden h-9 w-9 items-center justify-center rounded-full border-[4px] border-[#FBFBF8] bg-white shadow-lg lg:flex"
                    animate={reducedMotion ? {} : { x: [0, 4, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowUpRight size={16} color={step.accent} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#D6E1CF]" />
          <span className="text-center text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#79936C]">
            Discover · Design · Develop · Grow
          </span>
          <div className="h-px w-12 bg-[#D6E1CF]" />
        </div>
      </div>
    </section>
  );
}
