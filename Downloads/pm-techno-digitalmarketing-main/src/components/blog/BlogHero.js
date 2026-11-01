"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

export default function BlogHero() {
  const titleText = "The NexRank Blog";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let pauseTicks = 0;

    const intervalId = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }

      if (!isDeleting) {
        if (currentIndex <= titleText.length) {
          setDisplayedText(titleText.slice(0, currentIndex));
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
          setDisplayedText(titleText.slice(0, currentIndex));
          setIsTypingComplete(false);
        } else {
          isDeleting = false;
          pauseTicks = 10;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-10 relative md: md: overflow-hidden bg-bg-secondary border-b border-border-divider">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D4AF37] opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D4AF37] opacity-5 blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-4">
            Insights & Strategies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-text-primary mb-6 leading-tight min-h-[48px] md:min-h-[60px] lg:min-h-[72px]">
            {displayedText}
            <span className={`inline-block w-[3px] sm:w-[4px] h-[32px] sm:h-[40px] lg:h-[48px] bg-secondary ml-1 sm:ml-2 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Actionable insights, deep dives, and the latest trends in enterprise SEO, high-performance web development, and digital marketing.
          </p>
        </div>
      </Container>
    </section>
  );
}
