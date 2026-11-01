"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function renderSocialIcon(label, iconName) {
  const key = (iconName || label || "").toLowerCase();

  if (key.includes("linkedin")) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (key.includes("twitter") || key.includes("x")) {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (key.includes("instagram")) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (key.includes("facebook")) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (key.includes("youtube")) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  return null;
}

export default function MobileMenu({ isOpen, onClose, navigation, services, settings }) {
  const pathname = usePathname();
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  // Close menu on route change
  useEffect(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = (label) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#2D3436]/20 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-serif font-bold text-xl text-[#2D3436]">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-gray-500 hover:text-[#2D3436] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
              aria-label="Close Menu"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-1 mb-8">
            {navigation.links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div key={link.label}>
                    <div
                      className={`flex items-center justify-between w-full font-bold rounded-md transition-colors focus-within:ring-2 focus-within:ring-[#D4AF37] ${
                        isActive ? "text-[#D4AF37] bg-[#D4AF37]/5" : "text-[#2D3436] hover:text-[#D4AF37] hover:bg-gray-50"
                      }`}
                    >
                      <Link
                        href={link.href}
                        className="flex-1 px-4 py-3 text-left focus:outline-none"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="px-4 py-3 focus:outline-none"
                        aria-expanded={expandedDropdown === link.label}
                        aria-label={`Toggle ${link.label} menu`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedDropdown === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedDropdown === link.label ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 pr-2 pb-2 space-y-1 border-l border-gray-100 ml-4">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className={`block px-4 py-2.5 text-[15px] font-semibold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                              pathname === `/services/${service.slug}`
                                ? "text-[#D4AF37] bg-[#D4AF37]/5"
                                : "text-gray-600 hover:text-[#D4AF37] hover:bg-gray-50"
                            }`}
                            onClick={onClose}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-4 py-3 font-bold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive ? "text-[#D4AF37] bg-[#D4AF37]/5" : "text-[#2D3436] hover:text-[#D4AF37] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={navigation?.cta?.href || "/digital/contact"}
            className="block w-full py-3 px-4 text-center text-white font-bold rounded-md bg-[#D4AF37] hover:bg-[#D4AF37] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37]"
          >
            {navigation?.cta?.label || "Contact Us"}
          </Link>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-600 font-medium">
              <a href={`mailto:${settings?.contactInfo?.email}`} className="flex items-center hover:text-[#D4AF37]">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {settings?.contactInfo?.email}
              </a>
              <a href={`tel:${settings?.contactInfo?.phone?.replace(/[^0-9+]/g, '')}`} className="flex items-center hover:text-[#D4AF37]">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {settings?.contactInfo?.phone}
              </a>
            </div>
            
            <div className="flex items-center space-x-3 mt-8">
              {(settings?.socialLinks || [
                { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
                { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
                { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
              ]).map((social) => {
                const iconSvg = renderSocialIcon(social.label, social.icon);
                if (!iconSvg) return null;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#D4AF37] text-[#2D3436] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    aria-label={`Visit our ${social.label}`}
                    title={social.label}
                  >
                    {iconSvg}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
