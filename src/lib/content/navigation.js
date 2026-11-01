import { navigationData } from "@/data/digital/navigation";

export async function getNavigationData() {
  return navigationData || null;
}
