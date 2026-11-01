import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/lib/content/services";
import ServiceHero from "@/components/service/ServiceHero";
import WebDevelopmentHero from "@/components/service/WebDevelopmentHero";
import ServiceOverview from "@/components/service/ServiceOverview";
import SubServicesGrid from "@/components/service/SubServicesGrid";
import ProcessTimeline from "@/components/service/ProcessTimeline";
import BenefitsGrid from "@/components/service/BenefitsGrid";

import ServiceTestimonials from "@/components/service/ServiceTestimonials";
import FAQAccordion from "@/components/service/FAQAccordion";
import CTASection from "@/components/service/CTASection";
import RelatedServices from "@/components/service/RelatedServices";

// 1. Generate Static Params for build time
export async function generateStaticParams() {
  const servicesData = await getServices();
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 2. Generate Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | NexRank",
    };
  }

  // Use seoMeta if it exists from the detailed file, otherwise fallback
  return {
    title: service.seoMeta?.title || service.metaTitle || service.title,
    description: service.seoMeta?.description || service.metaDescription || service.shortDescription,
    alternates: {
      canonical: service.seoMeta?.canonicalUrl || `https://www.nexranktechnogroup.com/digital/services/${slug}`,
    },
    openGraph: {
      title: service.seoMeta?.ogTitle || service.metaTitle,
      description: service.seoMeta?.ogDescription || service.metaDescription,
      url: service.seoMeta?.canonicalUrl || `https://www.nexranktechnogroup.com/digital/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: service.seoMeta?.twitterCard || "summary_large_image",
      title: service.seoMeta?.title || service.metaTitle,
      description: service.seoMeta?.description || service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title || service.hero?.title,
            "description": service.seoMeta?.description || service.hero?.subtitle,
            "provider": {
              "@type": "LocalBusiness",
              "name": "NexRank"
            }
          })
        }}
      />
      <main className="bg-[#FFFFFF] min-h-screen">
        {slug === "web-development" ? (
          <WebDevelopmentHero hero={service.hero} />
        ) : (
          <ServiceHero hero={service.hero} />
        )}
        
        {service.overview && <ServiceOverview overview={service.overview} serviceImage={service.featureImage || service.heroImage} />}
        
        {service.whyNeeds && <BenefitsGrid benefits={service.whyNeeds} />}
        
        {service.services && <SubServicesGrid services={service.services} />}
        
        {service.process && <ProcessTimeline process={service.process} />}
        
        {service.campaignTypes && <SubServicesGrid services={service.campaignTypes} />}
        
        {service.whatsIncluded && <SubServicesGrid services={service.whatsIncluded} />}
        
        {service.technologies && <SubServicesGrid services={service.technologies} />}
        
        {service.benefits && <BenefitsGrid benefits={service.benefits} />}
        

        {service.testimonials && <ServiceTestimonials testimonials={service.testimonials} />}
        
        {service.faq && <FAQAccordion faq={service.faq} />}
        
        {service.cta && <CTASection cta={service.cta} />}
        
        <RelatedServices currentServiceSlug={slug} />
      </main>
    </>
  );
}
