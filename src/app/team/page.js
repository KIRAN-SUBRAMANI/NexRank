import { getTeamPageData, getTeamMembers, getFeaturedMembers } from "@/lib/content/team";
import TeamHero from "@/components/team/TeamHero";
import LeadershipSection from "@/components/team/LeadershipSection";
import TeamGrid from "@/components/team/TeamGrid";
import SkillsSection from "@/components/team/SkillsSection";
import CertificationGrid from "@/components/team/CertificationGrid";
import WhyOurTeam from "@/components/team/WhyOurTeam";
import JoinTeamCTA from "@/components/team/JoinTeamCTA";

export async function generateMetadata() {
  const pageData = await getTeamPageData();
  if (!pageData || !pageData.seo) return { title: "Our Team | NexRank" };
  
  return {
    title: pageData.seo.metaTitle,
    description: pageData.seo.metaDescription,
    keywords: pageData.seo.keywords?.join(", "),
    alternates: {
      canonical: pageData.seo.canonicalUrl,
    },
    openGraph: {
      title: pageData.seo.ogTitle,
      description: pageData.seo.ogDescription,
      url: pageData.seo.canonicalUrl,
      type: "website",
    },
    twitter: {
      card: pageData.seo.twitterCard,
      title: pageData.seo.metaTitle,
      description: pageData.seo.metaDescription,
    },
  };
}

export default async function TeamPage() {
  const [pageData, allMembers, featuredMembers] = await Promise.all([
    getTeamPageData(),
    getTeamMembers(),
    getFeaturedMembers()
  ]);

  if (!pageData) return null;

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "NexRank Team",
            "description": pageData.seo.metaDescription,
            "url": "https://www.nexranktechnogroup.com/team"
          })
        }}
      />
      <main className="w-full">
        <TeamHero hero={pageData.pageHero} />
        
        {featuredMembers && featuredMembers.length > 0 && (
          <LeadershipSection leaders={featuredMembers} />
        )}

        <TeamGrid initialMembers={allMembers} />
        
        {pageData.globalSkills && pageData.globalSkills.length > 0 && (
          <SkillsSection skills={pageData.globalSkills} />
        )}
        
        {pageData.globalCertifications && pageData.globalCertifications.length > 0 && (
          <CertificationGrid certifications={pageData.globalCertifications} />
        )}

        <WhyOurTeam />
        
        <JoinTeamCTA />
      </main>
    </>
  );
}
