"use client";

import { useEffect, useRef } from "react";

export default function HeroAmbientWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !section || !ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let time = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pointer = {
      x: 0.5,
      y: 0.75,
      targetX: 0.5,
      targetY: 0.75,
      strength: 0,
      targetStrength: 0,
    };

    function resize() {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function curve(x, layer = 0) {
      const nx = x / Math.max(width, 1);

      // Starts higher on left, gradually settles to right.
      const startY = height * 0.56;
      const endY = height * 0.97;

      const smooth = nx * nx * (3 - 2 * nx);
      const slope = startY + (endY - startY) * smooth;

      // Very gentle motion, not repeated hills.
      const drift = Math.sin(nx * Math.PI * 1.5 - time * 0.45) * height * 0.018;

      // Cursor-responsive displacement.
      const distance = (nx - pointer.x) / 0.22;
      const influence = Math.exp(-distance * distance);

      const interaction = influence * pointer.strength * height * 0.12;

      return slope + drift + layer * height * 0.045 - interaction;
    }

    function draw() {
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.targetX - pointer.x) * 0.07;
      pointer.y += (pointer.targetY - pointer.y) * 0.07;
      pointer.strength += (pointer.targetStrength - pointer.strength) * 0.055;

      const layers = [
        {
          alpha: 0.85,
          colors: ["#D8FA65", "#B9E978", "#8CCBB7"],
        },
        {
          alpha: 0.52,
          colors: ["#A8E6A0", "#81C9AE", "#5EA9A8"],
        },
        {
          alpha: 0.28,
          colors: ["#D8FA65", "#A9E6C3", "#6AB5B1"],
        },
      ];

      layers.forEach((layer, index) => {
        ctx.beginPath();

        for (let x = 0; x <= width + 6; x += 6) {
          const y = curve(x, index);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height + 5);
        ctx.lineTo(0, height + 5);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(
          0,
          height * 0.5,
          width,
          height,
        );

        gradient.addColorStop(0, layer.colors[0]);
        gradient.addColorStop(0.5, layer.colors[1]);
        gradient.addColorStop(1, layer.colors[2]);

        ctx.globalAlpha = layer.alpha;
        ctx.fillStyle = gradient;
        ctx.fill();

        if (index === 0) {
          ctx.beginPath();

          for (let x = 0; x <= width + 6; x += 6) {
            const y = curve(x, index);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          ctx.globalAlpha = 0.6;
          ctx.strokeStyle = "#D8FA65";
          ctx.lineWidth = 3;
          ctx.shadowColor = "#D8FA65";
          ctx.shadowBlur = 30;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      ctx.globalAlpha = 1;
    }

    function onMove(event) {
      const rect = section.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      pointer.targetX = Math.max(0, Math.min(1, x));
      pointer.targetY = Math.max(0, Math.min(1, y));

      pointer.targetStrength = y > 0.45 ? 1 : 0;

      if (reducedMotion.matches) draw();
    }

    function onLeave() {
      pointer.targetStrength = 0;
      pointer.targetX = 0.5;
    }

    function animate() {
      time += 0.012;
      draw();
      raf = requestAnimationFrame(animate);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(section);

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    resize();

    if (!reducedMotion.matches) {
      raf = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();

      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
