import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts = [] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="py-20 lg:py-24 bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
              Continue Reading
            </h2>
            <p className="text-text-secondary mt-4 text-lg">Explore more insights to grow your business.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
