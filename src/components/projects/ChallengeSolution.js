import Container from "@/components/ui/Container";
import IconWrapper from "@/components/common/IconWrapper";

export default function ChallengeSolution({ solution, services }) {
  if (!solution) return null;

  return (
 <section className="py-10 bg-bg-secondary border-t border-border-divider">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-4 sticky top-32">
              Our Solution
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <div className="prose prose-lg prose-slate mb-10">
              <p className="text-text-secondary leading-relaxed text-lg">
                {solution}
              </p>
            </div>

            {services && services.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-6">
                  Services Delivered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-4 bg-surface rounded-xl border border-border-divider shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0">
                        <IconWrapper name="check" size="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-text-primary">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
