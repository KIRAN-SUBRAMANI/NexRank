import SearchCard from "./SearchCard";

export default function SearchResults({ results, onResultClick }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {results.map((result) => (
        <SearchCard 
          key={result.id} 
          result={result} 
          onClick={onResultClick} 
        />
      ))}
    </div>
  );
}
