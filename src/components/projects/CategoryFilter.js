"use client";

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            suppressHydrationWarning
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              isActive 
                ? "bg-[#D4AF37] text-text-primary shadow-md" 
                : "bg-surface text-text-secondary border border-border-divider hover:border-border-divider hover:text-text-primary hover:shadow-sm"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
