import { getServices } from "@/lib/content/services";
import { getProjects } from "@/lib/content/projects";
import { getTeamMembers } from "@/lib/content/team";
import { getFAQs } from "@/lib/content/faq";
import { getBlogPosts } from "@/lib/content/blog";

/**
 * Normalizes all available data sources into a standard SearchResult format:
 * { id, title, category, description, image, url }
 */
export async function fetchAndNormalizeAllData() {
  const [services, projects, team, faqs, blog] = await Promise.all([
    getServices(),
    getProjects(),
    getTeamMembers(),
    getFAQs(),
    getBlogPosts()
  ]);

  const normalizedResults = [];

  // 1. Normalize Core Website Pages
  const pages = [
    {
      id: "page-home",
      title: "Home - NexRank Digital Marketing",
      category: "Pages",
      description: "Premier digital marketing agency specializing in enterprise SEO, Google Ads, Meta Ads, and Next.js Web Development.",
      image: "/images/common/heroimage.png",
      url: "/",
    },
    {
      id: "page-about",
      title: "About Us - NexRank",
      category: "Pages",
      description: "Discover our story, mission, and how we empower ambitious brands to dominate their digital landscape.",
      image: "/images/about/company-overview-1.webp",
      url: "/about",
    },
    {
      id: "page-services",
      title: "Our Full Service Suite",
      category: "Pages",
      description: "Explore our comprehensive suite of SEO, Google Ads, Meta Ads, Google Business Profile, and Web Development services.",
      image: "/images/home/why-choose/why-choose-us.jpg",
      url: "/services",
    },
    {
      id: "page-portfolio",
      title: "Case Studies & Portfolio",
      category: "Pages",
      description: "Explore real enterprise case studies showcasing measurable ROI, revenue scaling, and organic growth.",
      image: "/images/case-studies/omnichannel-growth.webp",
      url: "/portfolio",
    },
    {
      id: "page-careers",
      title: "Careers at NexRank",
      category: "Pages",
      description: "Join high performers at NexRank. Explore our open full-time and hybrid roles across disciplines.",
      image: "/images/careers/career-hero.png",
      url: "/careers",
    },
    {
      id: "page-contact",
      title: "Contact Us",
      category: "Pages",
      description: "Get in touch with our leadership and senior digital marketing team. Guaranteed enterprise response time.",
      image: "/images/about/company-overview-2.webp",
      url: "/contact",
    },
  ];
  normalizedResults.push(...pages);

  // 2. Normalize Services (Direct /services/[slug] routes with existing images)
  if (services && services.length > 0) {
    services.forEach((service) => {
      normalizedResults.push({
        id: `service-${service.slug || service.id}`,
        title: service.title,
        category: "Services",
        description: service.shortDescription || service.description,
        image: service.featureImage || service.heroImage || service.thumbnailImage || null,
        url: `/services/${service.slug}`,
      });
    });
  }

  // 3. Normalize Projects / Case Studies (Direct /case-studies/[slug] routes with valid images)
  if (projects && projects.length > 0) {
    projects.forEach((project) => {
      normalizedResults.push({
        id: `project-${project.slug || project.id}`,
        title: project.title || project.client,
        category: "Projects",
        description: project.shortDescription || project.challenge,
        image: project.thumbnail || project.coverImage || null,
        url: `/case-studies/${project.slug}`,
      });
    });
  }

  // 4. Normalize Team Members (Real photos in /digitalimages/ and linking to /team)
  if (team && team.length > 0) {
    team.forEach((member) => {
      normalizedResults.push({
        id: `team-${member.slug || member.id}`,
        title: member.name,
        category: "Team",
        description: `${member.designation} • ${member.department}`,
        image: member.profileImage || null,
        url: `/team`,
      });
    });
  }

  // 5. Normalize Blog (Linking to /blog with verified images)
  if (blog && blog.length > 0) {
    blog.forEach((post) => {
      normalizedResults.push({
        id: `blog-${post.slug || post.id}`,
        title: post.title,
        category: "Blog",
        description: post.excerpt,
        image: post.featuredImage || null,
        url: `/blog`,
      });
    });
  }

  // 6. Normalize FAQs (Directing to Contact / FAQ section)
  if (faqs && faqs.length > 0) {
    faqs.forEach((faq, index) => {
      normalizedResults.push({
        id: `faq-${index}`,
        title: faq.question,
        category: "FAQs",
        description: faq.answer,
        image: null,
        url: `/contact`,
      });
    });
  }

  return normalizedResults;
}
