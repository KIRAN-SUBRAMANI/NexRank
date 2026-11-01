import Container from "@/components/ui/Container";
import IconWrapper from "@/components/common/IconWrapper";

export default function WhyOurTeam() {
  const features = [
    {
      title: "Cross-Functional Collaboration",
      description: "Our SEOs, media buyers, and developers work in synergy, ensuring holistic strategies rather than siloed tactics.",
      icon: "check"
    },
    {
      title: "Senior-Led Execution",
      description: "Your account isn't handed off to junior staff. Our senior leadership is actively involved in strategy and execution.",
      icon: "arrowRight"
    },
    {
      title: "Continuous Learning",
      description: "We dedicate 10% of our week to internal training, mastering new algorithms before they become public knowledge.",
      icon: "search"
    },
    {
      title: "Client-Obsessed",
      description: "We don't just report metrics; we translate data into actionable business intelligence that drives your revenue.",
      icon: "arrowRight"
    }
  ];

  return (
 <section className="py-10 bg-bg-secondary border-b border-border-divider">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
            Why Our Team Delivers Results
          </h2>
          <p className="text-lg text-text-secondary">
            It&apos;s not just about hiring smart people. It&apos;s about how we structure our workflows to maximize ROI for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-surface p-8 rounded-2xl border border-border-divider shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6">
                <IconWrapper name={feature.icon} size="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
