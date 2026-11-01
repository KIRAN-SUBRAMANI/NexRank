"use client";

import { useState } from "react";
import ProjectsGrid from "./ProjectsGrid";
import LoadMoreButton from "./LoadMoreButton";

export default function PortfolioClient({ initialProjects }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const allProjects = initialProjects || [];
  const displayedProjects = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoading(false);
    }, 400);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#fbf8f1] relative min-h-[600px]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Section (3-Column Layout just like Brandshark) */}
        <ProjectsGrid projects={displayedProjects} />

        {/* Load More Button */}
        <LoadMoreButton 
          hasMore={hasMore} 
          onClick={handleLoadMore} 
          isLoading={isLoading} 
        />
      </div>
    </section>
  );
}

