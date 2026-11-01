"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

export default function NavLinks({ navigation, services, isTransparent }) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-10">
      {navigation.links.map((link) => {
        if (link.hasDropdown) {
          return (
            <DropdownMenu 
              key={link.label} 
              label={link.label} 
              href={link.href} 
              services={services} 
              isTransparent={isTransparent}
            />
          );
        }

        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`relative py-2 text-[15px] font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm group ${
              isActive 
                ? "text-[#D4AF37]" 
                : isTransparent 
                  ? "text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" 
                  : "text-[#2D3436] hover:text-[#D4AF37]"
            }`}
          >
            {link.label}
            {/* Animated Underline */}
            <span 
              className={`absolute left-0 bottom-1 w-full h-[1px] bg-[#D4AF37] transition-transform duration-300 origin-left ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} 
            />
          </Link>
        );
      })}
    </nav>
  );
}
