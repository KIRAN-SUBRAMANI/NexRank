import { aboutData } from "@/data/digital/about";

export async function getAboutData() {
  return aboutData || null;
}
