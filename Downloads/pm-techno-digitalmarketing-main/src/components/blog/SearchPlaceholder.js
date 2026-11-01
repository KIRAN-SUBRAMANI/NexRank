"use client";

import IconWrapper from "@/components/common/IconWrapper";

export default function SearchPlaceholder() {
  const handleOpenSearch = () => {
    // Dispatch a custom event that the Navbar/GlobalSearch component listens for
    window.dispatchEvent(new CustomEvent("open-global-search"));
  };

  return (
    <div className="bg-surface rounded-2xl p-6 border border-border-divider shadow-sm mb-8">
      <h3 className="text-lg font-bold font-serif text-text-primary mb-4">Search Articles</h3>
      <button 
        onClick={handleOpenSearch}
        className="w-full flex items-center px-4 py-3 bg-bg-secondary border border-border-divider rounded-xl text-text-secondary hover:bg-bg-secondary transition-colors text-left"
      >
        <IconWrapper name="search" size="w-5 h-5 mr-3" />
        <span className="text-sm font-medium flex-grow">Search the blog...</span>
        <span className="text-xs font-semibold bg-surface border border-border-divider px-2 py-1 rounded shadow-sm">⌘K</span>
      </button>
    </div>
  );
}
