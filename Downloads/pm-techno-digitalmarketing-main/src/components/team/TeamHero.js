"use client";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function TeamHero({ hero }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!hero?.title) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let pauseTicks = 0;
    
    const intervalId = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }

      if (!isDeleting) {
        if (currentIndex <= hero.title.length) {
          setDisplayedText(hero.title.slice(0, currentIndex));
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
          setDisplayedText(hero.title.slice(0, currentIndex));
          setIsTypingComplete(false);
        } else {
          isDeleting = false;
          pauseTicks = 10;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [hero?.title]);

  if (!hero) return null;

  return (
 <section className="py-10 relative md: md: overflow-hidden bg-[#D4AF37] border-b border-border-divider">
      {/* Background overlay / subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-surface z-0"></div>
      
      {/* Abstract decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />

      <Container className="relative z-10 text-text-primary">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-text-secondary mb-8">
            <Link href="/" className="hover:text-text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D4AF37] font-medium">Team</span>
          </nav>

          <span className="inline-block text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-4">
            Our People
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-text-primary mb-6 leading-tight">
            {displayedText}<span className={`inline-block w-[3px] sm:w-[4px] h-[32px] sm:h-[40px] lg:h-[48px] bg-secondary ml-1 sm:ml-2 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          
          {hero.cta && (
            <div className="flex justify-center">
              <Button href={hero.cta.link} variant="primary" className="font-extrabold px-8 py-4 text-base">
                {hero.cta.text}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
