import Container from "@/components/ui/Container";
import IconWrapper from "@/components/common/IconWrapper";

export default function SkillsSection({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
 <section className="py-10 bg-[#D4AF37] border-b border-border-divider">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
            Collective Expertise
          </h2>
          <p className="text-lg text-text-secondary">
            Our team maintains mastery across the entire digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center p-4 bg-surface/5 border border-white/10 rounded-xl hover:bg-surface/10 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconWrapper name="check" size="w-4 h-4" />
              </div>
              <span className="font-semibold text-text-primary text-sm md:text-base">{skill}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
