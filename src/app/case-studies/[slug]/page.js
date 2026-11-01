import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/content/caseStudies';
import { getEnrichedCaseStudy } from '@/lib/content/caseStudyEnrichment';
import BrandsharkCaseStudyView from '@/components/case-study/BrandsharkCaseStudyView';

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawCaseStudy = await getCaseStudyBySlug(resolvedParams.slug);
  
  if (!rawCaseStudy) {
    return {
      title: 'Case Study Not Found | NexRank',
    };
  }

  const caseStudy = getEnrichedCaseStudy(rawCaseStudy);

  return {
    title: caseStudy.seoMeta?.title || `${caseStudy.hero?.title} | NexRank`,
    description: caseStudy.seoMeta?.description || caseStudy.hero?.subtitle,
    openGraph: {
      title: caseStudy.seoMeta?.ogTitle || caseStudy.hero?.title,
      description: caseStudy.seoMeta?.ogDescription || caseStudy.hero?.subtitle,
      url: caseStudy.seoMeta?.canonicalUrl || `https://www.nexranktechnogroup.com/case-studies/${caseStudy.slug}`,
      type: 'article',
      images: [
        {
          url: caseStudy.clientOverview?.image || '/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp',
          width: 1200,
          height: 630,
          alt: caseStudy.hero?.title,
        }
      ]
    },
    twitter: {
      card: caseStudy.seoMeta?.twitterCard || 'summary_large_image',
      title: caseStudy.seoMeta?.title || caseStudy.hero?.title,
      description: caseStudy.seoMeta?.description || caseStudy.hero?.subtitle,
    },
    alternates: {
      canonical: caseStudy.seoMeta?.canonicalUrl || `https://www.nexranktechnogroup.com/case-studies/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const rawCaseStudy = await getCaseStudyBySlug(resolvedParams.slug);

  if (!rawCaseStudy) {
    notFound();
  }

  // Enrich with Brandshark-style deep specifications, SERP proof, process phases
  const caseStudy = getEnrichedCaseStudy(rawCaseStudy);

  // Schema.org Article / Case Study JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.seoMeta?.title || caseStudy.hero?.title,
    "description": caseStudy.seoMeta?.description || caseStudy.hero?.subtitle,
    "image": caseStudy.clientOverview?.image || '/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp',
    "publisher": {
      "@type": "Organization",
      "name": "NexRank",
      "url": "https://www.nexranktechnogroup.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nexranktechnogroup.com/logo.png"
      }
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      {/* Brandshark-styled Master Case Study Experience */}
      <BrandsharkCaseStudyView caseStudy={caseStudy} />
    </main>
  );
}
