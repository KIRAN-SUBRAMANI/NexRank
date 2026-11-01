"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import MobileMenu from "./MobileMenu";
import GlobalSearch from "@/components/search/GlobalSearch";
import IconWrapper from "@/components/common/IconWrapper";

export default function Navbar({ settings, navigation, services }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isWebDev = pathname === "/services/web-development";
  const isTransparent = isWebDev && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and reduce padding slightly when scrolled
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    const handleOpenSearchEvent = () => {
      setIsSearchOpen(true);
    };

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-global-search", handleOpenSearchEvent);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-global-search", handleOpenSearchEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav
        className={`relative z-40 w-full transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-b border-transparent py-4"
            : isScrolled
              ? "bg-[#F6F4EF]/95 backdrop-blur-xl border-b border-[#111827]/10 shadow-[0_6px_24px_rgba(17,24,39,0.06)] py-3"
              : "bg-[#F6F4EF] border-b border-[#111827]/5 py-4"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center">
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo settings={settings} />
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavLinks
                navigation={navigation}
                services={services}
                isTransparent={isTransparent}
              />
            </div>

            {/* Right: Search, CTA & Mobile Toggle */}
            <div className="flex items-center gap-5">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                suppressHydrationWarning
                className={`p-2 transition-colors rounded-full ${
                  isTransparent
                    ? "text-white hover:text-[#D8FA65] hover:bg-white/10"
                    : "text-[#111827] hover:text-[#87B52C] hover:bg-[#D8FA65]/25"
                }`}
                aria-label="Open Global Search"
              >
                <IconWrapper name="search" size="w-5 h-5" />
              </button>

              <div className="hidden lg:block">
                <CTAButton navigation={navigation} />
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className={`lg:hidden p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87B52C] rounded-md transition-colors ${
                  isTransparent
                    ? "text-white hover:text-[#D8FA65]"
                    : "text-[#111827] hover:text-[#87B52C]"
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
                aria-expanded={isMobileMenuOpen}
                suppressHydrationWarning
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        services={services}
        settings={settings}
      />

      {/* Global Search Modal */}
      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
