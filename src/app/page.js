import MaditboxHero from "@/components/hero/MaditboxHero";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import WhyChooseNexRank from "@/components/home/WhyChooseNexRank";
import ServicesVideoShowcase from "@/components/home/ServicesVideoShowcase";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import IndustriesTransformed from "@/components/home/IndustriesTransformed";
import dynamic from "next/dynamic";
import { getProjects } from "@/lib/content/projects";
import { getFAQData } from "@/lib/content/faq";
import { getCTAData } from "@/lib/content/cta";
import { getSiteSettings } from "@/lib/content/settings";

// Lazy loaded below-the-fold components to improve initial JavaScript payload
const TestimonialsSection = dynamic(() => import("@/components/testimonials/TestimonialsSection"), {
 loading: () => <section className="py-10 bg-bg-secondary animate-pulse min-h-[400px]" aria-label="Loading Testimonials..."/>
});
const FAQSection = dynamic(() => import("@/components/faq/FAQSection"), {
 loading: () => <section className="py-10 bg-surface animate-pulse min-h-[400px]" aria-label="Loading FAQs..."/>
});
const CTASection = dynamic(() => import("@/components/cta/CTASection"), {
 loading: () => <section className="py-10 bg-[#D4AF37] animate-pulse min-h-[400px]" aria-label="Loading CTA..."/>
});

export default async function Home() {
  const projectsData = await getProjects();
  const faqData = await getFAQData();
  const ctaData = await getCTAData();
  const settingsData = await getSiteSettings();
  
  const featuredProjects = projectsData.slice(0, 5);

  return (
    <>
      <MaditboxHero />

      <ExpertiseSection />

      <WhyChooseNexRank />

      <ServicesVideoShowcase />

      <IndustriesTransformed />

      <FeaturedProjects projects={featuredProjects} />

      <WorkingProcessSection />
      
      <TestimonialsSection />
      <FAQSection data={faqData} />
    </>
  );
}
