import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug, getProjectsByIndustry } from "@/lib/content/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ChallengeSolution from "@/components/projects/ChallengeSolution";
import ResultsSection from "@/components/projects/ResultsSection";
import TechnologyStack from "@/components/projects/TechnologyStack";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectTestimonial from "@/components/projects/ProjectTestimonial";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ProjectCTA from "@/components/projects/ProjectCTA";

export async function generateStaticParams() {
  const projectsData = await getProjects();
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.seo?.metaTitle || `${project.title} | NexRank`,
    description: project.seo?.metaDescription || project.shortDescription,
    alternates: {
      canonical: project.seo?.canonicalUrl,
    },
    openGraph: {
      title: project.seo?.ogTitle || project.title,
      description: project.seo?.ogDescription || project.shortDescription,
      url: project.seo?.canonicalUrl,
      type: "article",
    },
    twitter: {
      card: project.seo?.twitterCard || "summary_large_image",
      title: project.seo?.metaTitle || project.title,
      description: project.seo?.metaDescription || project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Fetch related projects (same industry, excluding current)
  const relatedProjects = await getProjectsByIndustry(project.industry, resolvedParams.slug);
  const displayRelated = relatedProjects.slice(0, 3);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": project.title,
            "description": project.seo?.metaDescription || project.shortDescription,
            "image": project.coverImage,
            "author": {
              "@type": "Organization",
              "name": "NexRank"
            }
          })
        }}
      />
      
      <main className="w-full">
        <ProjectHero project={project} />
        
        <ProjectOverview challenge={project.challenge} />
        
        <ChallengeSolution solution={project.solution} services={project.services} />
        
        <ResultsSection results={project.results} metrics={project.metrics} />
        
        <TechnologyStack technologies={project.technologies} />
        
        <ProjectGallery coverImage={project.coverImage} gallery={project.gallery} title={project.title} />
        
        <ProjectTestimonial testimonial={project.testimonial} client={project.client} />
        
        {displayRelated && displayRelated.length > 0 && (
          <RelatedProjects projects={displayRelated} />
        )}

        <ProjectCTA />
      </main>
    </>
  );
}
