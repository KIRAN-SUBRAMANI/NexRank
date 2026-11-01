/**
 * Extracts unique categories from a list of search results.
 */
export function extractCategories(results) {
  if (!results || results.length === 0) return ["All"];

  const categories = results.map((res) => res.category).filter(Boolean);
  const uniqueCategories = [...new Set(categories)];

  return ["All", ...uniqueCategories.sort()];
}
