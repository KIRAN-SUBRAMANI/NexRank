export default function SearchFilters({ categories, activeCategory, onCategoryChange }) {
  if (!categories || categories.length <= 1) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive 
                ? "bg-[#D4AF37] text-text-primary shadow-md" 
                : "bg-bg-secondary text-text-secondary border border-border-divider hover:border-[#D4AF37] hover:text-[#D4AF37]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
