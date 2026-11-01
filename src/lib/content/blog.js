import { blogData } from "@/data/digital/blog";

/**
 * Retrieves all published blog posts, sorted by newest first
 */
export async function getBlogPosts() {
  // In a real app, this would be an API call
  return blogData
    .filter(post => post.status === "published")
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

/**
 * Retrieves a single blog post by its slug
 */
export async function getBlogPostBySlug(slug) {
  const post = blogData.find(post => post.slug === slug && post.status === "published");
  return post || null;
}

/**
 * Retrieves the featured blog post
 */
export async function getFeaturedPost() {
  const posts = await getBlogPosts();
  return posts.find(post => post.featured) || posts[0];
}

/**
 * Retrieves related posts based on category and tags
 */
export async function getRelatedPosts(currentSlug, category, tags = [], limit = 3) {
  const allPosts = await getBlogPosts();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // Calculate a basic relevance score
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    if (post.category === category) score += 2;
    
    const commonTags = post.tags.filter(tag => tags.includes(tag));
    score += commonTags.length;
    
    return { ...post, score };
  });
  
  // Sort by score (highest first), then by date
  return scoredPosts
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    })
    .slice(0, limit);
}

/**
 * Extracts all unique categories from the blog posts
 */
export async function getBlogCategories() {
  const posts = await getBlogPosts();
  const categories = new Set(posts.map(post => post.category));
  return ["All", ...Array.from(categories)];
}
