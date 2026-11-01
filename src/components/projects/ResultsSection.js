import Container from "@/components/ui/Container";

export default function ResultsSection({ results, metrics }) {
  if (!results && (!metrics || metrics.length === 0)) return null;

  return (
 <section className="py-10 bg-surface border-t border-border-divider">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
              The Results
            </h2>
            {results && (
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                {results}
              </p>
            )}
          </div>

          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-bg-secondary rounded-2xl p-8 text-center border border-border-divider shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
