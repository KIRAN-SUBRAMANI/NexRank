"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";


export default function BlogDetailContent({ blog }) {
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef(null);

  // Intersection Observer for Table of Contents highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll(".blog-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (!blog) return null;

  return (
 <section className="py-10 md: bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl relative aspect-[16/9] lg:aspect-[21/9]">
          <div className="absolute inset-0 bg-surface animate-pulse" />
          <Image 
            src={blog.featuredImage || "/images/placeholder.jpg"} 
            alt={blog.title}
            fill
            className="object-cover relative z-10"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4" ref={contentRef}>
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12 text-text-secondary leading-relaxed">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-text-primary">
                {blog.introduction}
              </p>
            </div>

              {/* Dynamic Sections */}
            {blog.sections && blog.sections.map((section, index) => (
              <div 
                key={section.id} 
                id={section.id} 
                className="blog-section mb-12 scroll-mt-32"
              >
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-primary-700 mb-6 border-b border-secondary/30 pb-4">
                  {section.title}
                </h2>
                <div 
                  className="prose prose-lg max-w-none text-text-secondary
                             prose-headings:font-serif prose-headings:text-brand-primary-700
                             prose-a:text-secondary hover:prose-a:text-[#d6891a]
                             prose-strong:text-text-primary prose-strong:font-bold
                             prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-secondary"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}

          </div>

          {/* Sidebar / Table of Contents */}
          <aside className="w-full lg:w-1/3 xl:w-1/4">
            <div className="sticky top-32 bg-bg-secondary p-6 md:p-8 rounded-2xl border border-border-divider shadow-sm">
              <h3 className="text-lg font-bold font-serif text-brand-primary-700 mb-6 uppercase tracking-wider text-sm">
                Table of Contents
              </h3>
              
              {blog.tableOfContents && blog.tableOfContents.length > 0 && (
                <ul className="space-y-4 border-l-2 border-primary-700/20 pl-4">
                  {blog.tableOfContents.map((item) => (
                    <li 
                      key={item.id}
                      className={`${item.level > 2 ? 'ml-4' : ''}`}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(item.id);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }
                        }}
                        className={`block text-sm cursor-pointer transition-colors duration-200 ${
                          activeSection === item.id 
                            ? "text-secondary font-bold" 
                            : "text-text-secondary hover:text-brand-primary-700"
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Share Box (Optional UI extra) */}
              <div className="mt-10 pt-8 border-t border-border-divider">
                <p className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Share this article</p>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-surface border border-border-divider flex items-center justify-center text-text-secondary hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors" aria-label="Share on LinkedIn">
                    in
                  </button>
                  <button className="w-10 h-10 rounded-full bg-surface border border-border-divider flex items-center justify-center text-text-secondary hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors" aria-label="Share on Twitter">
                    𝕏
                  </button>
                  <button className="w-10 h-10 rounded-full bg-surface border border-border-divider flex items-center justify-center text-text-secondary hover:text-[#1877F2] hover:border-[#1877F2] transition-colors" aria-label="Share on Facebook">
                    f
                  </button>
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
    </section>
  );
}
