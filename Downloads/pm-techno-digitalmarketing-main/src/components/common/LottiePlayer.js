"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottiePlayer({ 
  animationPath, 
  className = "w-full h-full", 
  loop = true, 
  autoplay = true 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !animationPath) return;

    // Automatically resolve .lottie extension to the JSON animation equivalent
    const resolvedPath = animationPath.endsWith(".lottie")
      ? animationPath.replace(/\.lottie$/i, ".json")
      : animationPath;

    containerRef.current.innerHTML = "";

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      path: resolvedPath,
    });

    return () => {
      anim.destroy();
    };
  }, [animationPath, loop, autoplay]);

  return <div ref={containerRef} className={className} />;
}
