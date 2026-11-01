"use client";

import Link from "next/link";
import { ChevronRightIcon, ClockIcon, CalendarIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function BlogDetailHero({ blog }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!blog?.title) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let pauseTicks = 0;
    
    const intervalId = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }

      if (!isDeleting) {
        if (currentIndex <= blog.title.length) {
          setDisplayedText(blog.title.slice(0, currentIndex));
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
          setDisplayedText(blog.title.slice(0, currentIndex));
          setIsTypingComplete(false);
        } else {
          isDeleting = false;
          pauseTicks = 10;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [blog?.title]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timer);
  }, []);

  if (!blog) return null;

  // Format date
  const formattedDate = new Date(blog.publishDate).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
 <section className="py-10 relative bg-bg-secondary lg: lg: overflow-hidden border-b border-border-divider">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D4AF37] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D4AF37] opacity-5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-text-secondary">
            <li>
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            </li>
            <ChevronRightIcon className="w-4 h-4 text-text-secondary" />
            <li>
              <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            </li>
            <ChevronRightIcon className="w-4 h-4 text-text-secondary" />
            <li className="truncate max-w-[200px] text-text-primary font-medium" aria-current="page">
              {blog.title}
            </li>
          </ol>
        </nav>

        {/* Title & Category */}
        <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif text-brand-primary-700 leading-tight mb-6">
            {displayedText}<span className={`inline-block w-[3px] sm:w-[4px] h-[32px] sm:h-[40px] lg:h-[48px] bg-secondary ml-1 sm:ml-2 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-10 border-l-4 border-secondary pl-4">
            {blog.excerpt}
          </p>
        </div>

        {/* Meta Info */}
        <div className={`flex flex-wrap items-center gap-6 py-6 border-y border-border-divider transition-all duration-700 delay-200 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center text-text-secondary">
            <UserCircleIcon className="w-5 h-5 mr-2 text-[#D4AF37]" />
            <span className="font-medium">{blog.author.name}</span>
            <span className="mx-2 text-text-secondary">|</span>
            <span className="text-sm text-text-secondary">{blog.author.role}</span>
          </div>
          
          <div className="flex items-center text-text-secondary text-sm">
            <CalendarIcon className="w-4 h-4 mr-2 text-[#D4AF37]" />
            {formattedDate}
          </div>
          
          <div className="flex items-center text-text-secondary text-sm">
            <ClockIcon className="w-4 h-4 mr-2 text-[#D4AF37]" />
            {blog.readingTime}
          </div>
        </div>

      </div>
    </section>
  );
}
