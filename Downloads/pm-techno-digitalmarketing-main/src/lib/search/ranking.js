/**
 * Calculates a relevance score for a search result based on the query.
 * Exact title matches rank highest, followed by partial title matches, then description matches.
 */
export function rankResults(results, query) {
  if (!query) return results; // No ranking needed if no query

  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/);

  const scoredResults = results.map((result) => {
    let score = 0;
    const lowerTitle = (result.title || "").toLowerCase();
    const lowerDesc = (result.description || "").toLowerCase();

    // 1. Exact Match in Title (Highest weight)
    if (lowerTitle === lowerQuery) {
      score += 100;
    }

    // 2. Exact Substring in Title
    if (lowerTitle.includes(lowerQuery)) {
      score += 50;
    }

    // 3. Exact Substring in Description
    if (lowerDesc.includes(lowerQuery)) {
      score += 20;
    }

    // 4. Word-by-word matching
    queryWords.forEach((word) => {
      if (lowerTitle.includes(word)) score += 10;
      if (lowerDesc.includes(word)) score += 5;
    });

    return { ...result, _score: score };
  });

  // Filter out zero-score results (no match at all) and sort descending
  return scoredResults
    .filter((res) => res._score > 0)
    .sort((a, b) => b._score - a._score);
}
