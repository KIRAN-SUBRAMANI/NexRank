"use client";

import React, { useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [] }) {
  // Show first 9 posts initially (matching 3 rows of 3 columns)
  const initialCount = 9;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 400);
  };

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section className="w-full">
      {/* Section Header: "Recent blog posts" */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101828] tracking-tight mb-8 sm:mb-12 font-sans">
        Recent blog posts
      </h2>

      {/* 3-Column Grid with Increased Spacing & Reduced Side Gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 sm:gap-x-12 lg:gap-x-14 xl:gap-x-16 gap-y-14 sm:gap-y-18">
        {visiblePosts.map((post, index) => (
          <BlogCard key={post.id || post.slug} post={post} index={index} />
        ))}
      </div>

      {/* "Loading more..." Button */}
      {hasMore && (
        <div className="mt-16 sm:mt-20 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoading}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] active:scale-95 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading more...
              </span>
            ) : (
              "Loading more..."
            )}
          </button>
        </div>
      )}
    </section>
  );
}
