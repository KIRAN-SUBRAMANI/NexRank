"use client";

import Image from "next/image";
import Link from "next/link";

const EXPERTISE_CARDS = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies to improve search rankings, capture organic traffic & drive revenue",
    image: "/images/home/expertise/integrated-marketing.png",
    link: "/services",
  },
  {
    id: "ads",
    title: "Google & Meta Ads",
    description: "High-ROI paid ad campaigns with targeted creative to reach ready buyers & scale revenue",
    image: "/images/home/expertise/branding-strategy.png",
    link: "/services",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Modern, mobile-first websites engineered for speed, clean UI/UX, and maximum conversion rates",
    image: "/images/home/expertise/ui-ux-development.png",
    link: "/services",
  },
  {
    id: "gbp",
    title: "Google Business Profile",
    description: "Dominate Google Map 3-Pack searches, build 5-star reviews, and drive local customer calls",
    image: "/images/home/expertise/video-production.svg",
    link: "/services",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center w-full mx-auto mb-10 sm:mb-14">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E1B4B] tracking-[-0.02em] leading-tight mb-3 whitespace-normal md:whitespace-nowrap">
            Empowering results through our expertise
          </h2>
          <p className="text-[#555E6D] text-[14px] sm:text-[15.5px] leading-[1.65] max-w-[700px] mx-auto font-normal">
            We operate across diverse, interconnected areas of product and marketing, both independently and as a collaborative partner.
          </p>
        </div>

        {/* 4 Cards Grid - Enlarged & Proportional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {EXPERTISE_CARDS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative flex flex-col justify-between bg-white hover:bg-[#201D47] rounded-[24px] p-7 sm:p-8 lg:p-9 border border-[#ECE7DC] hover:border-[#201D47] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_45px_rgba(32,29,71,0.22)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 cursor-pointer min-h-[295px] sm:min-h-[310px]"
            >
              <div>
                {/* Top: Image Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 min-h-[68px]">
                  <div className="w-[74px] h-[64px] shrink-0 relative flex items-center justify-start">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={74}
                      height={64}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-[18px] sm:text-[19px] lg:text-[20px] font-bold text-[#1E1B4B] leading-[1.26] transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-[#555E6D] leading-[1.65] font-normal mt-5 mb-7 transition-colors duration-300 group-hover:text-[#D5D7E2]">
                  {item.description}
                </p>
              </div>

              {/* Bottom: Read More with Yellow Circular Arrow Button */}
              <div className="mt-auto pt-1 flex items-center gap-3">
                <span className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#1E1B4B] transition-colors duration-300 group-hover:text-white">
                  Read More
                </span>
                <span className="w-8 h-8 rounded-full bg-[#FFC700] flex items-center justify-center text-[#1E1B4B] transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 shadow-xs">
                  <svg
                    className="w-4 h-4 stroke-[2.8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H9M17 7V15"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
