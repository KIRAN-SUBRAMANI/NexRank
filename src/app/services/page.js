import ServicesHero from "@/components/services/ServicesHero";
import ServicesSection from "@/components/services/ServicesSection";

export const metadata = {
  title: "Our Services | NexRank",
  description: "Explore our enterprise digital marketing services. SEO, Google Ads, Meta Ads, Google Business Profile management, and custom Web Development.",
};

export default async function ServicesPage() {

  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesSection />
    </main>
  );
}
