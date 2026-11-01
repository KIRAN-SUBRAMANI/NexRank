"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function FooterCTAWrapper({ children }) {
  const pathname = usePathname();
  
  // Hide on About, Blog, Careers, and Contact pages
  if (
    pathname === "/about" || pathname?.startsWith("/about/") ||
    pathname === "/blog" || pathname?.startsWith("/blog/") ||
    pathname === "/careers" || pathname?.startsWith("/careers/") ||
    pathname === "/contact" || pathname?.startsWith("/contact/")
  ) {
    return null;
  }

  return <>{children}</>;
}
