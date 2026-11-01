"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const leaders = [
  {
    name: "Vikram Malhotra",
    designation: "CEO & STRATEGIST",
    image: "/images/about/team-1.jpg",
    bio: "With an experience spanning over 10 years, he has jumped through the right hoops of the advertising industry with surprising vigour and commitment. A work portfolio as impressive as his business stamina and appetite, Vikram Malhotra has spearheaded growth for major enterprise and national brands, serving in key roles as Head of Strategy, Marketing, Ideation, and Planning. Today, he has refined his years of experience and originality into establishing NexRank as one of the leading digital growth powerhouses in the country."
  },
  {
    name: "Rohan Verma",
    designation: "COO & DIGITAL HEAD (CO-FOUNDER)",
    image: "/images/about/team-2.webp",
    bio: "As Co-Founder and Chief Operating Officer, Rohan Verma leads digital growth architectures, media buying strategies, and technological integration across client accounts. He pairs analytical rigor with high-impact conversion roadmaps to drive scale across international markets."
  }
];

const teamMembers = [
  {
    name: "Malika Mangala",
    designation: "GM",
    image: "/images/about/team-3.webp",
    bio: "With strong leadership and industry insight, our GM drives organizational growth, streamlines operational workflows, and delivers excellence across all multidisciplinary departments."
  },
  {
    name: "Divyani Raghav",
    designation: "AGM- CS & COMMUNICATION",
    image: "/images/about/team-4.webp",
    bio: "Divyani is a seasoned client success strategist specializing in transparent communication, key account retention, and brand liaison for high-growth enterprise partners."
  },
  {
    name: "Neetu Kumari",
    designation: "DESIGN HEAD",
    image: "/images/about/team-5.webp",
    bio: "Guiding design thinking, aesthetic precision, and digital brand identities that capture consumer attention and elevate digital experiences."
  },
  {
    name: "Gaurav Bisht",
    designation: "HEAD | VISUALIZER",
    image: "/images/about/team-6.webp",
    bio: "Bringing concepts to life through compelling visual storytelling, creative advertising direction, and high-impact digital collateral."
  },
  {
    name: "Tusharika Mehra",
    designation: "SOCIAL MEDIA STRATEGIST",
    image: "/images/about/team-7.webp",
    bio: "Orchestrating community engagement, social buzz, and data-backed viral campaigns across Instagram, LinkedIn, and Meta ecosystems."
  },
  {
    name: "Rakesh Kumar",
    designation: "ORGANIC PERFORMANCE LEAD",
    image: "/images/about/team-8.png",
    bio: "Leading advanced search engine optimization, semantic web indexing, high-authority backlink architecture, and organic keyword domination."
  },
  {
    name: "Onkar",
    designation: "IT LEAD",
    image: "/images/about/team-9.png",
    bio: "Engineering fast, resilient web applications, cloud hosting infrastructure, API integrations, and scalable frontend codebases."
  },
  {
    name: "Rajat Sharma",
    designation: "UI/UX DESIGNER",
    image: "/images/about/team-10.png",
    bio: "Crafting frictionless user journeys, intuitive interfaces, and mobile-first prototypes optimized for conversion rate optimization."
  },
  {
    name: "Lalit",
    designation: "SR. VIDEO EDITOR",
    image: "/images/about/team-11.png",
    bio: "Mastering motion graphics, post-production video editing, and dynamic video ads tailored for paid performance funnels."
  },
  {
    name: "Harshit Chhabra",
    designation: "ASSISTANT MANAGER DIGITAL MARKETING",
    image: "/images/about/team-12.webp",
    bio: "Driving multi-channel digital marketing execution, performance audits, and campaign analytics to maximize return on ad spend."
  }
];

function ProfileCard({ member, onSelect, isLeader = false }) {
  return (
    <div
      onClick={() => onSelect(member)}
      className="profile-card group cursor-pointer text-left transition-all duration-300"
    >
      {/* 4:5 Aspect Header Image */}
      <div className="relative aspect-[4/5] bg-[#242426] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top block transition-all duration-600 ease-[cubic-bezier(0.2,0.75,0.2,1)] group-hover:scale-[1.025] group-hover:saturate-[1.04]"
        />
        {/* Yellow bar reveal from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#ffdf00] opacity-0 scale-x-0 origin-left transition-all duration-400 ease-[cubic-bezier(0.2,0.75,0.2,1)] group-hover:opacity-100 group-hover:scale-x-100 z-10" />
      </div>

      {/* Body info */}
      <div className="pt-3.5 sm:pt-5 pb-1 text-left">
        <h3 className={`font-poppins font-semibold leading-[1.15] tracking-[-0.03em] text-[#111] mb-1.5 sm:mb-2 group-hover:text-[#806f00] transition-colors ${isLeader ? 'text-[clamp(21px,1.8vw,29px)]' : 'text-[15px] sm:text-[20px] lg:text-[22px]'}`}>
          {member.name}
        </h3>
        <p className="font-poppins text-[#707177] text-[10px] sm:text-[12px] font-semibold tracking-[0.05em] sm:tracking-[0.075em] uppercase m-0 leading-[1.35] sm:leading-[1.45]">
          {member.designation}
        </p>
      </div>
    </div>
  );
}

export default function TeamDrivers() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="w-full bg-[#f3f3ef] text-[#0b0b0d] pt-[clamp(78px,8vw,118px)] pb-[clamp(60px,7vw,90px)] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto">
        
        {/* Container 9: Sticky Title on Left + 2 Founders/Leaders on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.68fr)_minmax(0,1.32fr)] gap-[clamp(42px,5vw,78px)] items-start mb-12 sm:mb-16">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-[150px] pt-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-[11px] mb-5"
            >
              <span className="w-[10px] h-[10px] rounded-full bg-[#ffdf00] shadow-[0_0_0_7px_rgba(255,223,0,0.18)] flex-shrink-0" />
              <p className="text-[#716300] text-[13px] font-[800] tracking-[0.15em] uppercase font-poppins m-0">
                Our Core Team
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.75, 0.2, 1] }}
              className="font-poppins text-[clamp(46px,5vw,76px)] font-[500] leading-[0.94] tracking-[-0.055em] text-[#0b0b0d] my-[24px_26px]"
            >
              Our drivers
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] leading-[1.72] text-[#5d5e62] max-w-[510px] space-y-4 font-poppins"
            >
              <p className="m-0">
                We walk the talk. What makes us different from others is our team of professionals whom we call ‘NexRank Knights’.
              </p>
              <p className="m-0">
                With the shield of experience and commitment in their respective field, they guard our brand’s marketing warfare and do troubleshooting when needed the most. On the forefront, whether it is our Founder, Co-founder or leaders in their specific fields of marketing, servicing, designing, writing and visualising everything is monitored under a fine magnifying glass of perfection.
              </p>
              <p className="m-0">
                Whether it’s their direct involvement, precise feedbacks and suggestions in sync with trends or sharing a monthly report with clients its a teamwork. Clarity, reliability, and transparency are upheld at NexRank between employees, employers, and clients on all grounds and its in consonance with our approach.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 2 Main Leaders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(18px,2.2vw,34px)]">
            {leaders.map(member => (
              <ProfileCard
                key={member.name}
                member={member}
                onSelect={setSelectedMember}
                isLeader={true}
              />
            ))}
          </div>

        </div>

        {/* Container 10: Full-width 5-Column Grid for the 10 Core Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.2, 0.75, 0.2, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-7 border-t border-[#cfcfca]/60 pt-10 sm:pt-12"
        >
          {teamMembers.map(member => (
            <ProfileCard
              key={member.name}
              member={member}
              onSelect={setSelectedMember}
              isLeader={false}
            />
          ))}
        </motion.div>

      </div>

      {/* Interactive Modal Popup for Team Member Bio */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.2, 0.75, 0.2, 1] }}
              className="relative w-full max-w-2xl bg-[#171719] text-white rounded-2xl sm:rounded-3xl border border-[#303034] shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#242428] text-white flex items-center justify-center hover:bg-[#ffdf00] hover:text-[#111] transition-colors z-20 text-lg"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-[230px_1fr]">
                {/* Photo */}
                <div className="relative aspect-[4/5] sm:aspect-auto bg-[#242426]">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 230px"
                    className="object-cover object-top block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent sm:hidden" />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-center text-left">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffdf00]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffdf00]">
                      NexRank Team
                    </span>
                  </div>

                  <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white mb-1.5">
                    {selectedMember.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400 mb-5">
                    {selectedMember.designation}
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
