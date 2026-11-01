import { ctaData } from "@/data/digital/cta";

export async function getCTAData() {
  return ctaData || null;
}
