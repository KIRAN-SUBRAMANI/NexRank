import { homeFaqs } from "@/data/digital/faqs/homeFaqs";

export async function getFAQData() {
  return homeFaqs || null;
}

export async function getFAQs() {
  return homeFaqs?.items || [];
}

export async function getFAQCategories() {
  if (!homeFaqs || !homeFaqs.items) return ["All"];
  const allCategories = homeFaqs.items.map((f) => f.category);
  const uniqueCategories = Array.from(new Set(allCategories));
  return ["All", ...uniqueCategories.sort()];
}
