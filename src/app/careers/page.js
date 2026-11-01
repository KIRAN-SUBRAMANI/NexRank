import { getCareersPageData, getCareersFormConfig } from "@/lib/content/careers";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import CultureGallery from "@/components/careers/CultureGallery";
import BenefitsGrid from "@/components/careers/BenefitsGrid";
import HiringTimeline from "@/components/careers/HiringTimeline";
import JobsSection from "@/components/careers/JobsSection";
import ApplicationSection from "@/components/careers/ApplicationSection";
import CareerFAQ from "@/components/careers/CareerFAQ";
import CareersCTA from "@/components/careers/CareersCTA";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata() {
  const data = await getCareersPageData();
  const seo = data?.seo;

  if (!seo) return { title: "Careers | NexRank" };

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords?.join(", "),
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.canonicalUrl,
      siteName: "NexRank",
      images: seo.ogImage
        ? [{ url: seo.ogImage, width: 1200, height: 630 }]
        : [],
      type: "website",
    },
    twitter: {
      card: seo.twitterCard || "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CareersPage() {
  const data = await getCareersPageData();
  const formConfig = await getCareersFormConfig();

  if (!data) return null;

  // ─── Structured Data (JSON-LD) ──────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.breadcrumb.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `https://www.nexranktechnogroup.com${crumb.href}`,
    })),
  };

  // JobPosting schema for each active position (future ATS-ready)
  const jobPostingSchemas = data.positions
    .filter((p) => p.status === "active")
    .map((job) => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: job.description,
      datePosted: job.postedDate,
      validThrough: job.applicationDeadline,
      employmentType: job.employmentType.toUpperCase().replace("-", "_"),
      hiringOrganization: {
        "@type": "Organization",
        name: "NexRank",
        sameAs: "https://www.nexranktechnogroup.com/digital",
        logo: "https://www.nexranktechnogroup.com/logo.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: job.location === "Remote" ? "Remote" : "Mumbai",
          addressRegion: "MH",
          addressCountry: "IN",
        },
      },
      baseSalary: job.salaryRange
        ? {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              unitText: "YEAR",
            },
          }
        : undefined,
      skills: job.skills?.join(", "),
      url: `https://www.nexranktechnogroup.com/digital/careers/${job.slug}`,
    }));

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {jobPostingSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main>
        {/* 1. Hero */}
        <CareersHero hero={data.hero} breadcrumb={data.breadcrumb} />

        {/* 2. Why Join Us */}
        <WhyJoinUs data={data.whyJoin} />

        {/* 3. Life at NexRank — Culture Gallery */}
        <CultureGallery data={data.culture} />

        {/* 4. Benefits */}
        <BenefitsGrid data={data.benefits} />

        {/* 5. Hiring Process */}
        <HiringTimeline data={data.hiringProcess} />

        {/* 6 & 7. Open Positions + Filters */}
        <JobsSection
          positions={data.positions}
          departments={data.departments}
          locations={data.locations}
          employmentTypes={data.employmentTypes}
          experienceLevels={data.experienceLevels}
        />

        {/* 10. Application Form */}
        <ApplicationSection config={formConfig} />

        {/* 11. Career FAQs */}
        <CareerFAQ data={data.faqs} />

        {/* 12. Final CTA */}
        <CareersCTA data={data.cta} />
      </main>
    </>
  );
}
