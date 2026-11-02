"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
}) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              ...(offsets[direction] || offsets.up),
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -30px 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
