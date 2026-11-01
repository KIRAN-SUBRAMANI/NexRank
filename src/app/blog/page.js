import { getBlogPosts, getFeaturedPost } from "@/lib/content/blog";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata = {
  title: "Blog | NexRank",
  description: "Read the latest articles, product design strategies, enterprise SEO tactics, and growth playbooks from NexRank.",
  alternates: {
    canonical: "/blog"
  }
};

export default async function BlogListingPage() {
  const posts = await getBlogPosts();
  const featuredPost = await getFeaturedPost();
  
  // Filter out the featured post from the general list so it doesn't duplicate
  const gridPosts = posts.filter(post => post.id !== featuredPost?.id);

  return (
    <main className="blog-page-wrapper flex-1 w-full bg-white text-[#101828] min-h-screen font-sans selection:bg-[#101828] selection:text-white">
      {/* Expansive width container to eliminate unwanted side gaps */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-12">
        
        {/* 1. Large Rounded Hero Featured Article */}
        {featuredPost && (
          <div className="mb-14 sm:mb-18 md:mb-24">
            <FeaturedArticle post={featuredPost} />
          </div>
        )}

        {/* 2. "Recent blog posts" 3-Column Grid */}
        <BlogGrid posts={gridPosts} />

        {/* 3. Black Pre-Footer Callout Banner */}
        <BlogCTA />

      </div>
    </main>
  );
}
