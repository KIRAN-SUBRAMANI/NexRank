import { fetchAndNormalizeAllData } from "./helpers";
import { rankResults } from "./ranking";

/**
 * Main Orchestrator for Global Search
 * Can be replaced by an API call in the future without breaking the UI.
 * 
 * @param {string} query - The search query
 * @param {string} filterCategory - The active category filter (e.g., "All", "Services")
 */
export async function performSearch(query = "", filterCategory = "All") {
  // 1. Fetch raw normalized data
  const allData = await fetchAndNormalizeAllData();

  // 2. Initial Filter by Category if needed
  let filteredData = allData;
  if (filterCategory !== "All") {
    filteredData = allData.filter((item) => item.category === filterCategory);
  }

  // 3. If query is empty, just return the filtered data (unscored)
  if (!query || query.trim() === "") {
    return filteredData;
  }

  // 4. Rank and score the results against the query
  const rankedResults = rankResults(filteredData, query);

  return rankedResults;
}
