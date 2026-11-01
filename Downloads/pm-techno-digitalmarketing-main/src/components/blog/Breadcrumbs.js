"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({ title, category }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 hidden sm:block">
      <ol className="flex items-center space-x-2 text-sm font-medium text-text-secondary">
        <li>
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4 text-text-secondary" />
        </li>
        <li>
          <Link href="/blog" className="hover:text-brand-primary transition-colors">
            Blog
          </Link>
        </li>
        {category && (
          <>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-text-secondary" />
            </li>
            <li>
              <span className="text-text-secondary cursor-default">
                {category}
              </span>
            </li>
          </>
        )}
        <li>
          <ChevronRightIcon className="w-4 h-4 text-text-secondary" />
        </li>
        <li>
          <span className="text-[#0B1F3A] truncate max-w-[200px] lg:max-w-[300px] block" aria-current="page">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
