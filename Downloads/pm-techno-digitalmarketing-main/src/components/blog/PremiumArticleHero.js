"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";
import { CalendarIcon, ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function PremiumArticleHero({ post }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!post?.title) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let pauseTicks = 0;
    
    const intervalId = setInterval(() => {
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }

      if (!isDeleting) {
        if (currentIndex <= post.title.length) {
          setDisplayedText(post.title.slice(0, currentIndex));
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
          setDisplayedText(post.title.slice(0, currentIndex));
          setIsTypingComplete(false);
        } else {
          isDeleting = false;
          pauseTicks = 10;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [post?.title]);

  if (!post) return null;

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-surface relative overflow-hidden border-b border-border-divider">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-primary text-bg-primary/5 opacity-50 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left: Article Information */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs title={post.title} category={post.category} />
              
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-[#F6F8FA] border border-border-divider text-[#0B1F3A] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0B1F3A] mb-6 leading-[1.15] tracking-tight">
                {displayedText}<span className={`inline-block w-[3px] sm:w-[4px] h-[32px] sm:h-[40px] lg:h-[48px] bg-secondary ml-1 sm:ml-2 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
              </h1>
              
              {post.excerpt && (
                <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              )}
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm font-medium text-text-secondary border-t border-border-divider pt-6 mt-2">
                
                {post.author && (
                  <div className="flex items-center gap-2.5">
                    {post.authorImage ? (
                      <div className="w-9 h-9 rounded-full overflow-hidden relative shadow-sm border border-border-divider">
                        <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                      </div>
                    ) : (
                      <UserCircleIcon className="w-9 h-9 text-text-secondary" />
                    )}
                    <span className="text-[#0B1F3A] font-bold">{post.author}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-text-secondary" />
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>

                {post.readingTime && (
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-text-secondary" />
                    <span>{post.readingTime}</span>
                  </div>
                )}
                
              </div>
            </motion.div>
          </div>

          {/* Right: Featured Image */}
          {post.featuredImage && (
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-border-divider group"
              >
                <Image 
                  src={post.featuredImage} 
                  alt={post.title} 
                  fill 
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/20 to-transparent pointer-events-none mix-blend-multiply"></div>
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
