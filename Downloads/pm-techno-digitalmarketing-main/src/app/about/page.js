import { getAboutData } from "@/lib/content/about";
import NexRankHero from "@/components/about/NexRankHero";
import AboutDNA from "@/components/about/AboutDNA";
import WhyNeedUs from "@/components/about/WhyNeedUs";
import CapabilitiesSystem from "@/components/about/CapabilitiesSystem";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import ApproachSection from "@/components/about/ApproachSection";
import TeamDrivers from "@/components/about/TeamDrivers";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import NexRankCTA from "@/components/about/NexRankCTA";
import AboutExplore from "@/components/about/AboutExplore";

export async function generateMetadata() {
  const aboutData = await getAboutData();
  if (!aboutData || !aboutData.seo) {
    return {
      title: "About Us | Award-Winning Digital Marketing Agency",
      description: "Learn more about NexRank – a leading digital marketing agency offering cutting-edge SEO, branding, performance marketing, and creative web solutions that drive business growth.",
    };
  }

  return {
    title: aboutData.seo.metaTitle || "About Us | Award-Winning Digital Marketing Agency",
    description: aboutData.seo.metaDescription,
    keywords: aboutData.seo.keywords?.join(", "),
    alternates: {
      canonical: aboutData.seo.canonicalUrl || "https://www.nexranktechnogroup.com/about",
    },
    openGraph: {
      title: aboutData.seo.ogTitle,
      description: aboutData.seo.ogDescription,
      url: aboutData.seo.canonicalUrl,
      type: "website",
    },
    twitter: {
      card: aboutData.seo.twitterCard,
      title: aboutData.seo.metaTitle,
      description: aboutData.seo.metaDescription,
    },
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NexRank",
            "url": "https://www.nexranktechnogroup.com",
            "logo": "https://www.nexranktechnogroup.com/logo.png",
            "description": aboutData?.seo?.metaDescription || "Full-service digital marketing and web engineering agency.",
            "sameAs": [
              "https://linkedin.com/company/nexranktechnogroup"
            ]
          })
        }}
      />
      <main className="about-page-wrapper w-full bg-[#f3f3ef] font-poppins selection:bg-[#ffdf00] selection:text-black">
        {/* 1. Hero Section */}
        <NexRankHero />

        {/* 2. Our DNA / What's in the name? */}
        <AboutDNA />

        {/* 3. Digital Marketing Agency / Why you need us! + 2x2 Metrics Grid */}
        <WhyNeedUs />

        {/* 4. What we bring together / Four capabilities. One growth system. */}
        <CapabilitiesSystem />

        {/* 5. Our journey / From a shared idea to global operations */}
        <JourneyTimeline />

        {/* 6. How we work / Strategy in motion, together */}
        <ApproachSection />

        {/* 7. Our Core Team / Our drivers (Founders on top + 5-column grid below) */}
        <TeamDrivers />

        {/* 8. Client Success Stories (Kept exactly as requested) */}
        <TestimonialsSection />

        {/* 9. Let's make something great together CTA */}
        <NexRankCTA />

        {/* 10. Explore / More about how we work */}
        <AboutExplore />
      </main>
    </>
  );
}
