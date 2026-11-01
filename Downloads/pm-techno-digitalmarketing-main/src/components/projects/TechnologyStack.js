import Container from "@/components/ui/Container";

export default function TechnologyStack({ technologies }) {
  if (!technologies || technologies.length === 0) return null;

  return (
 <section className="py-10 bg-[#D4AF37] text-text-primary border-t border-border-divider">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif mb-8">
            Technologies & Platforms Used
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-surface/10 hover:bg-surface/20 transition-colors border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
