"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function DropdownMenu({ label, href, services, isTransparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const isActive = pathname.startsWith(href);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative group"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <div 
        className={`relative flex items-center py-2 text-[15px] font-bold transition-colors duration-200 rounded-sm cursor-pointer ${
          isActive || isOpen 
            ? "text-[#D4AF37]" 
            : isTransparent 
              ? "text-white/95 group-hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" 
              : "text-[#2D3436] group-hover:text-[#D4AF37]"
        }`}
      >
        <Link
          href={href}
          className="pr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-l-sm"
        >
          {label}
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          suppressHydrationWarning
          className="pl-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-r-sm"
          aria-expanded={isOpen}
          aria-label={`Toggle ${label} menu`}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Animated Underline */}
        <span 
          className={`absolute left-0 bottom-1 w-full h-[1px] bg-[#D4AF37] transition-transform duration-300 origin-left ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} 
        />
      </div>

      {/* Dropdown Panel */}
      <div
        className={`absolute left-0 top-full pt-4 w-[280px] transition-all duration-300 ease-out origin-top-left ${
          isOpen ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2"
        }`}
      >
        <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,16,40,0.1)] border border-gray-100 p-3 overflow-hidden">
          {services?.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={`group flex items-start gap-3 p-3 transition-colors duration-200 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                pathname === `/services/${service.slug}` ? "bg-gray-50" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {/* Subtle accent icon/indicator */}
              <div className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              <div>
                <div className={`text-[15px] font-bold transition-colors duration-200 ${
                  pathname === `/services/${service.slug}` ? "text-[#D4AF37]" : "text-[#2D3436] group-hover:text-[#D4AF37]"
                }`}>
                  {service.title}
                </div>
                <div className="text-sm text-gray-500 line-clamp-1 mt-0.5 font-medium">
                  {service.shortDescription}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
