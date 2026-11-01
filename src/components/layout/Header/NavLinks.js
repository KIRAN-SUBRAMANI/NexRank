"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

export default function NavLinks({ navigation, services, isTransparent }) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
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

        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`relative py-2 text-[15px] font-semibold
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[#87B52C] rounded-sm group ${
                isActive
                  ? isTransparent
                    ? "text-[#D8FA65]"
                    : "text-[#87B52C]"
                  : isTransparent
                    ? "text-white/95 hover:text-[#D8FA65]"
                    : "text-[#111827] hover:text-[#87B52C]"
              }`}
          >
            {link.label}

            <span
              className={`absolute left-0 bottom-1 w-full h-[2px]
                transition-transform duration-300 origin-left ${
                  isTransparent ? "bg-[#D8FA65]" : "bg-[#87B52C]"
                } ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
