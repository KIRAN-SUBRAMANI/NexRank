import { portfolioData } from "@/data/digital/portfolio";

export async function getPortfolioData() {
  // Simulate network delay for API-ready architecture
  await new Promise((resolve) => setTimeout(resolve, 0));
  return portfolioData;
}
