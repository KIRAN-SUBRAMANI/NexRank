"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import IconWrapper from "@/components/common/IconWrapper";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProjectHero({ project }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!project?.title) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let pauseTicks = 0;
    
    const intervalId = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }

      if (!isDeleting) {
        if (currentIndex <= project.title.length) {
          setDisplayedText(project.title.slice(0, currentIndex));
          currentIndex++;
          setIsTypingComplete(false);
        } else {
          setIsTypingComplete(true);
          isDeleting = true;
          pauseTicks = 40;
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(project.title.slice(0, currentIndex));
          setIsTypingComplete(false);
        } else {
          isDeleting = false;
          pauseTicks = 10;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [project?.title]);

  if (!project) return null;

  return (
 <section className="py-10 relative md: md: overflow-hidden bg-[#D4AF37] border-b border-border-divider">
      {/* Background overlay / subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-surface z-0"></div>
      
      {/* Abstract decorations */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-[#D4AF37] opacity-[0.15] blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] rounded-full bg-[#D4AF37] opacity-[0.1] blur-3xl z-0" />

      <Container className="relative z-10 text-text-primary">
        <div className="max-w-4xl mx-auto">
          
          <Link href="/portfolio" className="inline-flex items-center text-sm font-semibold text-text-secondary hover:text-text-primary mb-8 transition-colors group">
            <span className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center mr-3 group-hover:bg-[#D4AF37] transition-colors">
              <IconWrapper name="arrowRight" size="w-4 h-4 rotate-180" />
            </span>
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs font-extrabold bg-surface/10 text-text-primary px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm border border-white/10">
              {project.industry}
            </span>
            {project.projectStatus && (
              <span className="text-xs font-extrabold bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm border border-[#D4AF37]/30">
                {project.projectStatus}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-text-primary leading-tight mb-8">
            {displayedText}<span className={`inline-block w-[3px] sm:w-[4px] h-[32px] sm:h-[40px] lg:h-[48px] bg-secondary ml-1 sm:ml-2 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-10 border-b border-white/10">
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto font-extrabold px-8 py-4">
              Discuss a Similar Project
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm text-text-secondary mt-10">
            <div>
              <span className="block text-text-secondary uppercase tracking-wider text-xs font-semibold mb-1">Client</span> 
              <span className="text-text-primary font-medium text-base">{project.client}</span>
            </div>
            {project.location && (
              <div>
                <span className="block text-text-secondary uppercase tracking-wider text-xs font-semibold mb-1">Location</span> 
                <span className="text-text-primary font-medium text-base">{project.location}</span>
              </div>
            )}
            {project.projectDuration && (
              <div>
                <span className="block text-text-secondary uppercase tracking-wider text-xs font-semibold mb-1">Duration</span> 
                <span className="text-text-primary font-medium text-base">{project.projectDuration}</span>
              </div>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
