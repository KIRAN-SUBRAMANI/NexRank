"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * BouncingLogoTitle:
 * Recreates the signature MATEEFFECTS "Evergreen.media" bouncing dot logo animation.
 * Features:
 *  - Staggered kinetic typography reveal with mask-clipping
 *  - Physics-based bouncing dot with authentic squash & stretch (origin at baseline)
 *  - Impact shockwave ripple ring on initial floor contact
 *  - Secondary elastic reaction bump on the adjacent text ("NexRank")
 *  - Idle breathing glow once settled
 *  - Fully responsive using 'em' units (scales proportionally at all screen sizes)
 *  - Interactive: Hover or click to replay the bounce
 */
export default function BouncingLogoTitle() {
  const [hasSettled, setHasSettled] = useState(false);
  const isAnimatingRef = useRef(false);

  const dotControls = useAnimationControls();
  const shockwaveControls = useAnimationControls();
  const textReactControls = useAnimationControls();

  const triggerBounce = useCallback(async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setHasSettled(false);

    // Reset controls
    shockwaveControls.set({ scale: 0.2, opacity: 0 });

    // 1. Signature Bouncing Dot trajectory with squash & stretch
    // Timings: Drop (0-0.28), Apex 1 (0.48), Floor 2 (0.65), Apex 2 (0.78), Floor 3 (0.88), Apex 3 (0.94), Rest (1.0)
    const bouncePromise = dotControls.start({
      y: ["-1.5em", "0em", "-0.65em", "0em", "-0.24em", "0em", "-0.08em", "0em"],
      scaleX: [0.8, 1.48, 0.84, 1.28, 0.92, 1.12, 0.97, 1],
      scaleY: [1.35, 0.52, 1.24, 0.74, 1.1, 0.88, 1.04, 1],
      opacity: [0, 1, 1, 1, 1, 1, 1, 1],
      transition: {
        duration: 1.35,
        times: [0, 0.28, 0.48, 0.65, 0.78, 0.88, 0.94, 1],
        ease: [
          "easeIn",  // Freefall acceleration under gravity
          "easeOut", // Launch up towards apex 1
          "easeIn",  // Fall down towards floor 2
          "easeOut", // Launch up towards apex 2
          "easeIn",  // Fall down towards floor 3
          "easeOut", // Micro-hop to apex 3
          "easeIn",  // Final settle to baseline
        ],
      },
    });

    // 2. Trigger shockwave and secondary text bump exactly when the dot hits the floor for the first time (~380ms)
    setTimeout(() => {
      // Expanding halo ring on impact
      shockwaveControls.start({
        scale: [0.3, 2.4],
        opacity: [0.9, 0],
        transition: { duration: 0.5, ease: "easeOut" },
      });

      // Secondary elastic jolt on "NexRank" as the dot strikes the ground
      textReactControls.start({
        y: ["0em", "0.045em", "-0.02em", "0em"],
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      });
    }, 380);

    await bouncePromise;
    isAnimatingRef.current = false;
    setHasSettled(true);
  }, [dotControls, shockwaveControls, textReactControls]);

  useEffect(() => {
    // Initial entrance: allow text letters to reveal first, then drop the dot
    const timer = setTimeout(() => {
      triggerBounce();
    }, 550);

    return () => clearTimeout(timer);
  }, [triggerBounce]);

  const aboutChars = "About".split("");
  const NexRankChars = "NexRank".split("");

  return (
    <span
      className="relative inline-flex flex-wrap items-baseline cursor-pointer select-none group font-poppins"
      onClick={triggerBounce}
      onMouseEnter={triggerBounce}
      title="Click or hover to replay the animation"
    >
      {/* Word 1: "About" (Masked Letter Reveal) */}
      <span className="inline-flex overflow-hidden mr-[0.26em] align-baseline">
        {aboutChars.map((char, i) => (
          <motion.span
            key={`about-${i}`}
            initial={{ y: "115%", opacity: 0, rotate: 2 }}
            animate={{ y: "0%", opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08 + i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block transform-gpu"
          >
            {char}
          </motion.span>
        ))}
      </span>

      {/* Word 2 & Dot: Kept together so the dot never breaks to a line alone */}
      <span className="inline-flex items-baseline whitespace-nowrap align-baseline">
        {/* Word 2: "NexRank" (Masked Letter Reveal + Secondary Impact Jolt) */}
        <motion.span
          animate={textReactControls}
          className="inline-flex overflow-hidden align-baseline transform-gpu"
        >
          {NexRankChars.map((char, i) => (
            <motion.span
              key={`nexrank-${i}`}
              initial={{ y: "115%", opacity: 0, rotate: -2 }}
              animate={{ y: "0%", opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28 + i * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block transform-gpu"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>

        {/* Signature Bouncing Dot Container (Proportional em sizing, baseline aligned) */}
        <span
          className="relative inline-flex items-baseline justify-center ml-[0.14em] align-baseline"
          style={{
            width: "0.22em",
            height: "0.22em",
            verticalAlign: "baseline",
            marginBottom: "0.02em", // Sits cleanly on the Poppins typography baseline
          }}
        >
        {/* Shockwave ring on floor impact */}
        <motion.span
          animate={shockwaveControls}
          initial={{ scale: 0.2, opacity: 0 }}
          className="absolute inset-0 m-auto rounded-full border border-[#FFDF01] pointer-events-none transform-gpu"
          style={{
            width: "0.22em",
            height: "0.22em",
            originX: 0.5,
            originY: 0.5,
            borderWidth: "0.025em",
          }}
        />

        {/* The Animated Physics Dot */}
        <motion.span
          animate={dotControls}
          initial={{ y: "-1.5em", opacity: 0, scaleX: 0.8, scaleY: 1.35 }}
          className="relative block rounded-full bg-[#FFDF01] shadow-[0_0_0.2em_rgba(255,223,1,0.65),0_0_0.45em_rgba(255,223,1,0.3)] transform-gpu"
          style={{
            width: "0.22em",
            height: "0.22em",
            originX: 0.5,
            originY: 1.0, // Critical: Squash occurs upwards from the bottom baseline
          }}
        />

        {/* Idle breathing pulse once resting */}
        {hasSettled && (
          <motion.span
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 m-auto rounded-full bg-[#FFDF01] blur-[0.06em] pointer-events-none"
            style={{
              width: "0.22em",
              height: "0.22em",
            }}
          />
        )}
      </span>
      </span>
    </span>
  );
}
