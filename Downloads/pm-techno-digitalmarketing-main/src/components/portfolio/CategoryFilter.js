export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            suppressHydrationWarning
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive 
                ? "bg-[#2e2058] text-white border border-[#2e2058] shadow-sm" 
                : "bg-white text-[#52525b] border border-[#e4e1d8] hover:border-[#2e2058] hover:text-[#2e2058] shadow-xs"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

