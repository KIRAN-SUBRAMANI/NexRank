"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "@/lib/content/blogs";

export default function BlogDetailRelated({ relatedSlugs }) {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRelated() {
      if (!relatedSlugs || relatedSlugs.length === 0) {
        setLoading(false);
        return;
      }
      
      try {
        const blogs = await Promise.all(
          relatedSlugs.map(slug => getBlogBySlug(slug))
        );
        setRelatedBlogs(blogs.filter(Boolean));
      } catch (error) {
        console.error("Failed to load related blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadRelated();
  }, [relatedSlugs]);

  if (loading) return null; // or a skeleton loader
  if (!relatedBlogs.length) return null;

  return (
 <section className="py-10 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-12 text-center">
          Related Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBlogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="group flex flex-col bg-bg-secondary rounded-2xl overflow-hidden border border-border-divider hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-surface">
                <Image 
                  src={blog.heroImage || blog.featuredImage || "/images/placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/95 backdrop-blur text-text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-serif text-text-primary mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-text-secondary line-clamp-3 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-text-secondary pt-4 border-t border-border-divider mt-auto">
                  <span>{blog.readingTime}</span>
                  <span className="text-[#D4AF37] font-semibold group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
