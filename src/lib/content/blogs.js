// src/lib/content/blogs.js

// Map slugs to their respective data files in src/data/blogs
const blogDataMap = {
  "enterprise-seo-strategies": () => import("@/data/digital/blogs/enterpriseSeo"),
  "maximizing-google-ads-roas-with-ai-bidding": () => import("@/data/digital/blogs/googleAdsAI"),
  "why-nextjs-is-the-ultimate-framework-for-marketing-websites": () => import("@/data/digital/blogs/nextjsMarketing"),
  "mastering-meta-ads-for-b2b-lead-generation": () => import("@/data/digital/blogs/metaAdsB2B"),
  "the-ultimate-guide-to-google-business-profile-optimization": () => import("@/data/digital/blogs/googleBusinessProfile"),
  "how-ai-is-reshaping-digital-marketing-in-2026": () => import("@/data/digital/blogs/aiDigitalMarketing"),
  "the-hub-and-spoke-content-marketing-strategy": () => import("@/data/digital/blogs/hubAndSpokeContent"),
  "how-to-conduct-a-comprehensive-website-performance-audit": () => import("@/data/digital/blogs/websitePerformanceAudit"),
  "10-conversion-rate-optimization-cro-best-practices": () => import("@/data/digital/blogs/croBestPractices"),
  "building-a-seamless-omnichannel-digital-strategy": () => import("@/data/digital/blogs/omnichannelStrategy"),
};

export async function getBlogBySlug(slug) {
  try {
    const importFn = blogDataMap[slug];
    
    if (!importFn) {
      return null;
    }
    
    const blogModule = await importFn();
    return blogModule.default;
  } catch (error) {
    console.error(`Error loading blog data for slug: ${slug}`, error);
    return null;
  }
}

// Optional helper to get all blogs for listings or sitemaps
export async function getAllBlogs() {
  const blogs = [];
  for (const slug of Object.keys(blogDataMap)) {
    const blog = await getBlogBySlug(slug);
    if (blog) {
      blogs.push(blog);
    }
  }
  
  // Sort by publishDate descending (newest first)
  return blogs.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
}
