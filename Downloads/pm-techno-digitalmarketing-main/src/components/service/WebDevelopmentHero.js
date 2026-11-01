"use client";

import { useEffect, useRef } from "react";

export default function WebDevelopmentHero({ hero }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay muted video prevented:", err);
      });
    }
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Hidden SEO H1 for semantic heading hierarchy */}
      <h1 className="sr-only">
        {hero?.title || "Professional Website Development & UI/UX Design Services | NexRank"}
      </h1>

      {/* HERO 3D ISOMETRIC VIDEO SECTION (MoshiMoshi 100% Exact Replica, Mobile Responsive & Strictly Locked Desktop) */}
      <section 
        className="relative w-full overflow-hidden bg-[#881C1B] flex items-center justify-center -mt-[72px] sm:-mt-[80px] h-[360px] sm:h-[480px] md:h-[600px] lg:h-screen lg:min-h-[700px]"
        aria-label="Website UI/UX Hero Showcase"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            src="/videos/moshi_webdev_hero.mp4"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            style={{
              transform: "translate3d(0, 0, 0)",
              WebkitBackfaceVisibility: "hidden",
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/videos/moshi_webdev_poster.jpg"
            aria-label="Website UI/UX 3D Isometric Animation"
          >
            <source src="/videos/moshi_webdev_hero.mp4" type="video/mp4" />
            <source src="https://video.wixstatic.com/video/74e377_c08d07c523714c709766c3bd2b306cc2/1080p/mp4/file.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
