"use client";

import { useEffect, useState } from "react";
import IconWrapper from "@/components/common/IconWrapper";

export default function TableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -80% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [items]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-surface rounded-3xl p-6 lg:p-8 border border-border-divider/60 shadow-[0_4px_20px_rgba(11,31,58,0.03)] lg:sticky lg:top-32 mb-10 lg:mb-0">
      
      {/* Mobile Toggle Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between lg:mb-6 group"
      >
        <div className="flex items-center text-[#0B1F3A]">
          <IconWrapper name="list" size="w-5 h-5 mr-3 text-brand-primary" />
          <h3 className="font-extrabold tracking-tight text-lg uppercase text-text-secondary">On This Page</h3>
        </div>
        <svg 
          className={`w-5 h-5 text-text-secondary transition-transform duration-300 lg:hidden ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Nav List */}
      <nav className={`mt-6 lg:mt-0 lg:block transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'}`}>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }} className="relative">
              
              {/* Active Indicator Line */}
              {activeId === item.id && (
                <div className="absolute left-[-1.5rem] lg:left-[-2rem] top-1/2 -translate-y-1/2 w-1 h-1/2 bg-brand-primary text-bg-primary rounded-r-full hidden lg:block"></div>
              )}

              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block text-sm transition-all duration-200 leading-snug ${
                  activeId === item.id 
                    ? "text-brand-primary font-bold translate-x-1" 
                    : "text-text-secondary hover:text-[#0B1F3A] hover:translate-x-1"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
