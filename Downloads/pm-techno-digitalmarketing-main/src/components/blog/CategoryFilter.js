"use client";

import { useState } from "react";
import IconWrapper from "@/components/common/IconWrapper";

export default function CategoryFilter({ categories, onSelectCategory }) {
  const [active, setActive] = useState("All");

  const handleSelect = (category) => {
    setActive(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <div className="mb-10">
      <div className="flex items-center mb-4">
        <IconWrapper name="filter" size="w-5 h-5 text-text-secondary mr-2" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Filter by Category</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleSelect(category)}
            suppressHydrationWarning
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === category
                ? "bg-[#D4AF37] text-text-primary shadow-sm"
                : "bg-surface text-text-secondary border border-border-divider hover:border-border-divider hover:bg-bg-secondary"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
