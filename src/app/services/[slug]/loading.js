import Container from "@/components/ui/Container";

export default function ServiceLoading() {
  return (
    <main className="w-full bg-bg-secondary min-h-screen">
      
      {/* Service Hero Skeleton */}
 <section className="py-10 relative md: md: bg-[#D4AF37] border-b border-border-divider" aria-busy="true">
        <Container className="relative z-10 animate-pulse">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 w-full max-w-2xl">
              <div className="w-16 h-16 rounded-2xl bg-bg-primary/50 mb-8"></div>
              <div className="h-12 md:h-16 bg-bg-primary/50 rounded-lg w-3/4 mb-6"></div>
              <div className="space-y-3 mb-10">
                <div className="h-4 bg-bg-primary/50 rounded w-full"></div>
                <div className="h-4 bg-bg-primary/50 rounded w-5/6"></div>
              </div>
              <div className="h-14 bg-bg-primary/50 rounded-lg w-40"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Skeleton */}
 <section className="py-10 bg-surface">
        <Container className="animate-pulse">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="h-10 bg-surface rounded w-1/2 mx-auto mb-6"></div>
            <div className="h-4 bg-surface rounded w-3/4 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-bg-secondary rounded-2xl p-8 border border-border-divider">
                <div className="w-12 h-12 rounded-xl bg-surface mb-6"></div>
                <div className="h-6 bg-surface rounded w-2/3 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-surface rounded w-full"></div>
                  <div className="h-3 bg-surface rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
    </main>
  );
}
