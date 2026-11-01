"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal ScrollToTop Component
 * Ensures every page loads at the absolute top (0, 0) upon any button,
 * link, or client-side route navigation across the entire website.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration so it does not retain old scroll offsets
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Temporarily bypass smooth scrolling to guarantee immediate jump to (0, 0)
    const prevScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Re-verify on subsequent animation frames and ticks to override dynamic hydration height changes
    const rAfId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    const t1 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // Restore standard scroll behavior for in-page anchors
      document.documentElement.style.scrollBehavior = prevScrollBehavior || "";
    }, 50);

    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 150);

    return () => {
      cancelAnimationFrame(rAfId);
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.scrollBehavior = prevScrollBehavior || "";
    };
  }, [pathname]);

  useEffect(() => {
    // Proactively reset scroll to top on any navigation link/button click
    const handleGlobalClick = (e) => {
      const link = e.target.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("javascript:") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Check if target is not opening in a new tab/window
      const target = link.getAttribute("target");
      if (target && target !== "_self") {
        return;
      }

      // Preemptively snap to top for instant feedback before navigation transition finishes
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    document.addEventListener("click", handleGlobalClick, { capture: true, passive: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
