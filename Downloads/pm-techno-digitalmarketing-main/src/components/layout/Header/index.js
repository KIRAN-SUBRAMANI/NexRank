import { getSiteSettings } from "@/lib/content/settings";
import { getNavigationData } from "@/lib/content/navigation";
import { getServices } from "@/lib/content/services";

import Navbar from "./Navbar";

export default async function Header() {
  const settings = await getSiteSettings();
  const navigation = await getNavigationData();
  const services = await getServices();

  return (
    <header className="w-full sticky top-0 z-50">
      <Navbar settings={settings} navigation={navigation} services={services} />
    </header>
  );
}
