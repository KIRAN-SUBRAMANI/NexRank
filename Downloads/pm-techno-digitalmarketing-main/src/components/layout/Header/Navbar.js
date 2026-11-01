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
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
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
        className={`relative w-full transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-b border-transparent py-4"
            : isScrolled 
              ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] py-3" 
              : "bg-white border-b border-transparent py-4"
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
              <NavLinks navigation={navigation} services={services} isTransparent={isTransparent} />
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
                    ? "text-white/95 hover:text-[#FCD34D] hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" 
                    : "text-[#2D3436] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
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
                className={`lg:hidden p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md transition-colors ${
                  isTransparent 
                    ? "text-white hover:text-[#D4AF37] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" 
                    : "text-[#2D3436] hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
                aria-expanded={isMobileMenuOpen}
                suppressHydrationWarning
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navigation={navigation} services={services} settings={settings} />
      
      {/* Global Search Modal */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
