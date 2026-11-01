import Container from "@/components/ui/Container";

export default function CertificationGrid({ certifications }) {
  if (!certifications || certifications.length === 0) return null;

  return (
 <section className="py-10 bg-surface border-b border-border-divider">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mb-4">
            Certified Excellence
          </h2>
          <p className="text-text-secondary">
            Our team holds industry-recognized credentials from global tech leaders.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-bg-secondary rounded-full flex items-center justify-center mb-4 border border-border-divider shadow-sm group-hover:shadow-md transition-shadow">
                {/* Fallback to text if image fails/isn't there, or use next/image in a real app if logos are robust */}
                <span className="text-[#D4AF37] font-bold text-center text-sm px-2">
                  {cert.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
