import Link from "next/link";
import Image from "next/image";
import NewsletterCTA from "./NewsletterCTA";
import SearchPlaceholder from "./SearchPlaceholder";

export default function BlogSidebar({ popularPosts = [] }) {
  return (
    <aside className="w-full">
      <SearchPlaceholder />
      
      {popularPosts.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-border-divider shadow-sm mb-8">
          <h3 className="text-lg font-bold font-serif text-[#2D3436] mb-6 pb-4 border-b border-[rgba(2,10,43,0.1)]">
            Popular Articles
          </h3>
          <div className="space-y-6">
            {popularPosts.slice(0, 4).map((post) => (
              <div key={post.id} className="group flex items-start gap-4">
                <Link href={`/blog/${post.slug}`} className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#2D3436] flex-shrink-0">
                  {post.featuredImage && (
                    <Image 
                      src={post.featuredImage} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </Link>
                <div>
                  <div className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-1">
                    {post.category}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#D4AF37] transition-colors">
                    <h4 className="text-sm font-bold text-[#2D3436] leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <NewsletterCTA />
    </aside>
  );
}
