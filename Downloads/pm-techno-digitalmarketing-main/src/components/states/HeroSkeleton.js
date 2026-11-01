import Container from "@/components/ui/Container";

export default function HeroSkeleton({ hasImage = false }) {
  return (
 <section className="py-10 relative md: md: overflow-hidden bg-[#D4AF37] border-b border-border-divider" aria-busy="true" aria-label="Loading content">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 w-full max-w-3xl animate-pulse">
            {/* Breadcrumb skeleton */}
            <div className="h-4 bg-bg-primary/50 rounded w-24 mb-8"></div>
            
            {/* Title skeleton */}
            <div className="h-12 md:h-16 bg-bg-primary/50 rounded-lg w-3/4 mb-4"></div>
            <div className="h-12 md:h-16 bg-bg-primary/50 rounded-lg w-1/2 mb-8"></div>
            
            {/* Description skeleton */}
            <div className="h-4 bg-bg-primary/50 rounded w-full mb-3"></div>
            <div className="h-4 bg-bg-primary/50 rounded w-5/6 mb-3"></div>
            <div className="h-4 bg-bg-primary/50 rounded w-4/6 mb-10"></div>
            
            {/* CTA skeleton */}
            <div className="flex flex-wrap gap-4">
              <div className="h-14 bg-bg-primary/50 rounded-lg w-40"></div>
              <div className="h-14 bg-bg-primary/50 rounded-lg w-40"></div>
            </div>
          </div>

          {hasImage && (
            <div className="flex-1 w-full max-w-lg hidden md:block animate-pulse">
              <div className="aspect-[4/3] bg-bg-primary/50 rounded-2xl w-full"></div>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}
