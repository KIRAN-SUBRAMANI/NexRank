import { footerData } from "@/data/digital/footer";

export async function getFooterData() {
  return footerData || null;
}
