import { siteSettings } from "@/data/settings";

export async function getSiteSettings() {
  return siteSettings || null;
}
