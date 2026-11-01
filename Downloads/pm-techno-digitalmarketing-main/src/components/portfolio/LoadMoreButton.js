export default function LoadMoreButton({ hasMore, onClick, isLoading }) {
  if (!hasMore) return null;

  return (
    <div className="mt-12 sm:mt-14 text-center">
      <button 
        type="button"
        suppressHydrationWarning
        onClick={onClick}
        disabled={isLoading}
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-bold text-sm bg-[#2e2058] hover:bg-[#1c1a46] text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
      >
        {isLoading ? (
          <span className="flex items-center space-x-2">
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-[#ffc700]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </span>
        ) : (
          "Load More Case Studies"
        )}
      </button>
    </div>
  );
}

