import { notFound } from "next/navigation";
import { getPositionBySlug, getOpenPositions } from "@/lib/content/careers";
import JobDetails from "@/components/careers/JobDetails";
import CareersCTA from "@/components/careers/CareersCTA";
import { careersCTA } from "@/data/digital/careers";

// ─── Static Params for ISR / SSG ─────────────────────────────────────────────
export async function generateStaticParams() {
  const positions = await getOpenPositions();
  return positions.map((position) => ({ slug: position.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const job = await getPositionBySlug(resolvedParams.slug);

  if (!job) {
    return { title: "Position Not Found | NexRank Careers" };
  }

  return {
    title: `${job.title} — Careers | NexRank`,
    description: job.shortDescription,
    alternates: {
      canonical: `https://www.nexranktechnogroup.com/digital/careers/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} at NexRank`,
      description: job.shortDescription,
      url: `https://www.nexranktechnogroup.com/digital/careers/${job.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} at NexRank`,
      description: job.shortDescription,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function JobDetailPage({ params }) {
  const resolvedParams = await params;
  const job = await getPositionBySlug(resolvedParams.slug);

  if (!job) notFound();

  // Individual JobPosting schema
  const jobPostingSchema = {
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
    skills: job.skills?.join(", "),
    responsibilities: job.responsibilities?.join(" "),
    qualifications: job.requirements?.join(" "),
    url: `https://www.nexranktechnogroup.com/digital/careers/${job.slug}`,
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nexranktechnogroup.com/digital" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://www.nexranktechnogroup.com/digital/careers" },
      { "@type": "ListItem", position: 3, name: job.title, item: `https://www.nexranktechnogroup.com/digital/careers/${job.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <section className="py-12 md:py-20 w-full bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JobDetails job={job} />
          </div>
        </section>

        <CareersCTA data={careersCTA} />
      </main>
    </>
  );
}
