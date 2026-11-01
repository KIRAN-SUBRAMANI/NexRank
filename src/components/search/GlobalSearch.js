"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { performSearch } from "@/lib/search/search";
import { extractCategories } from "@/lib/search/filters";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";
import SearchResults from "./SearchResults";
import SearchEmptyState from "./SearchEmptyState";
import IconWrapper from "@/components/common/IconWrapper";

export default function GlobalSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Execute Search
  const executeSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const searchResults = await performSearch(query, activeCategory);
      setResults(searchResults);
      
      // Update filter categories based on raw unscored results (meaning we just extract from the whole set if possible)
      // Actually, standard behavior is usually to extract categories from the *unfiltered* results of the query.
      // But for simplicity and performance, we'll extract from a blank query if nothing is searched, 
      // or from the current results.
      if (!hasSearched) {
         const allData = await performSearch("", "All");
         setCategories(extractCategories(allData));
      }
      
      setHasSearched(true);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [query, activeCategory, hasSearched]);

  // Trigger search on query or category change
  useEffect(() => {
    if (isOpen) {
      executeSearch();
    }
  }, [query, activeCategory, isOpen, executeSearch]);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setQuery("");
        setActiveCategory("All");
        setHasSearched(false);
        setResults([]);
      }, 300); // Wait for transition
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#D4AF37]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl mx-auto mt-0 md:mt-16 bg-surface md:rounded-2xl shadow-2xl flex flex-col h-full md:h-[80vh] overflow-hidden animate-in slide-in-from-bottom-4 md:slide-in-from-top-4 duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Global Search"
      >
        {/* Header / Search Bar */}
        <div className="p-4 md:p-6 border-b border-border-divider flex items-center gap-4 bg-surface z-10 shadow-sm">
          <div className="flex-grow">
            <SearchBar value={query} onChange={setQuery} autoFocus={true} />
          </div>
          <button 
            onClick={onClose}
            className="p-3 text-text-secondary hover:text-text-secondary bg-bg-secondary hover:bg-bg-secondary rounded-xl transition-colors flex-shrink-0"
            aria-label="Close search"
          >
            <IconWrapper name="close" size="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-bg-secondary/50">
          
          {/* Filters */}
          <SearchFilters 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />

          {/* Loading State */}
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center">
              <div className="w-8 h-8 border-4 border-border-divider border-t-[#D4AF37] rounded-full animate-spin mb-4"></div>
              <p className="text-text-secondary font-medium">Searching...</p>
            </div>
          ) : (
            <>
              {/* Results */}
              {results.length > 0 ? (
                <div>
                  <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">
                    {query ? `Results for "${query}"` : "Suggested"} ({results.length})
                  </h3>
                  <SearchResults results={results} onResultClick={onClose} />
                </div>
              ) : (
                <SearchEmptyState 
                  query={query} 
                  onClear={() => { setQuery(""); setActiveCategory("All"); }} 
                />
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
