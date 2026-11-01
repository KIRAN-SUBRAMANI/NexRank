import { useState, useEffect, useRef } from "react";
import IconWrapper from "@/components/common/IconWrapper";

export default function SearchBar({ value, onChange, autoFocus = false }) {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef(null);

  // Debounce logic to prevent excessive re-renders/searches
  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== localValue) {
        onChange(localValue);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(handler);
  }, [localValue, onChange, value]);

  // Sync external changes (e.g. clearing search)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const clearSearch = () => {
    setLocalValue("");
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
        <IconWrapper name="search" size="w-5 h-5" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Search services, projects, team, FAQs..."
        className="block w-full pl-11 pr-12 py-4 bg-surface border border-border-divider rounded-2xl text-text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-shadow shadow-sm text-lg"
        aria-label="Global Search"
      />
      {localValue && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-text-secondary transition-colors"
          aria-label="Clear search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
