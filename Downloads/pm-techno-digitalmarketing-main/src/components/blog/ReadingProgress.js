"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((currentScrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
      <div 
        className="h-full bg-brand-primary text-bg-primary transition-all duration-150 ease-out shadow-[0_0_10px_rgba(26,158,154,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
