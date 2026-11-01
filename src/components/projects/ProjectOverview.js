import Container from "@/components/ui/Container";

export default function ProjectOverview({ challenge }) {
  if (!challenge) return null;

  return (
 <section className="py-10 bg-surface">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-4 sticky top-32">
              The Challenge
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <div className="prose prose-lg prose-slate">
              <p className="text-text-secondary leading-relaxed text-lg">
                {challenge}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
