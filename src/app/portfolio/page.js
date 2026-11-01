import { getPortfolioData } from "@/lib/content/portfolio";
import { getProjects } from "@/lib/content/projects";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export async function generateMetadata() {
  const portfolioData = await getPortfolioData();
  if (!portfolioData || !portfolioData.seo) return { title: "Case Studies | NexRank" };
  
  return {
    title: portfolioData.seo.metaTitle,
    description: portfolioData.seo.metaDescription,
    keywords: portfolioData.seo.keywords?.join(", "),
    alternates: {
      canonical: portfolioData.seo.canonicalUrl,
    },
    openGraph: {
      title: portfolioData.seo.ogTitle,
      description: portfolioData.seo.ogDescription,
      url: portfolioData.seo.canonicalUrl,
      type: "website",
    },
    twitter: {
      card: portfolioData.seo.twitterCard,
      title: portfolioData.seo.metaTitle,
      description: portfolioData.seo.metaDescription,
    },
  };
}

export default async function PortfolioPage() {
  const [portfolioData, allProjects] = await Promise.all([
    getPortfolioData(),
    getProjects()
  ]);

  if (!portfolioData) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "NexRank Case Studies",
            "description": portfolioData.seo.metaDescription,
            "url": "https://www.nexranktechnogroup.com/portfolio"
          })
        }}
      />
      <main>
        <PortfolioHero hero={portfolioData.hero} />
        <PortfolioClient initialProjects={allProjects} />
        <PortfolioCTA />
      </main>
    </>
  );
}

