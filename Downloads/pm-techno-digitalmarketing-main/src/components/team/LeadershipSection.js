import Container from "@/components/ui/Container";
import TeamCard from "./TeamCard";

export default function LeadershipSection({ leaders }) {
  if (!leaders || leaders.length === 0) return null;

  return (
 <section className="py-10 md: bg-bg-secondary border-b border-border-divider">
      <Container>
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-text-secondary">
            Guided by industry veterans with decades of combined experience driving enterprise growth and digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <TeamCard key={leader.id} member={leader} />
          ))}
        </div>
      </Container>
    </section>
  );
}
