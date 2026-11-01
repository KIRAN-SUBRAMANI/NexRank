import IconWrapper from "@/components/common/IconWrapper";

export default function SearchEmptyState({ query, onClear }) {
  return (
    <div className="py-16 text-center">
      <div className="w-20 h-20 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-text-secondary">
        <IconWrapper name="search" size="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-text-primary mb-3">No results found</h3>
      <p className="text-text-secondary max-w-md mx-auto mb-8">
        We couldn&apos;t find anything matching &quot;<span className="font-semibold text-text-secondary">{query}</span>&quot;. Try checking your spelling or using more general terms.
      </p>
      <button 
        onClick={onClear}
        className="px-6 py-3 bg-bg-secondary hover:bg-surface text-text-secondary font-semibold rounded-lg transition-colors"
      >
        Clear Search
      </button>
    </div>
  );
}
