import Container from "@/components/ui/Container";

export default function ProjectLoading() {
  return (
    <main className="w-full bg-bg-secondary min-h-screen">
      
      {/* Project Hero Skeleton */}
 <section className="py-10 relative md: md: bg-[#D4AF37] overflow-hidden" aria-busy="true">
        <Container className="relative z-10 text-center animate-pulse">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="h-8 w-24 bg-bg-primary/50 rounded-full"></div>
            <div className="h-8 w-24 bg-bg-primary/50 rounded-full"></div>
          </div>
          <div className="h-14 md:h-20 bg-bg-primary/50 rounded-lg max-w-4xl mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-text-secondary">
            <div className="h-6 w-32 bg-bg-primary/50 rounded"></div>
            <div className="h-6 w-32 bg-bg-primary/50 rounded"></div>
          </div>
        </Container>
      </section>

      {/* Overview Skeleton */}
 <section className="py-10 bg-surface">
        <Container className="animate-pulse">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-10 bg-surface rounded w-1/3 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-surface rounded w-full"></div>
              <div className="h-4 bg-surface rounded w-full"></div>
              <div className="h-4 bg-surface rounded w-5/6"></div>
            </div>
          </div>
        </Container>
      </section>
      
    </main>
  );
}
