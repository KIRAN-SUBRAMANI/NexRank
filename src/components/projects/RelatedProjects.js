import Container from "@/components/ui/Container";
import ProjectCard from "@/components/portfolio/ProjectCard"; // Reusing from portfolio

export default function RelatedProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
 <section className="py-10 bg-surface border-t border-border-divider">
      <Container>
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
            Similar Case Studies
          </h2>
          <p className="text-lg text-text-secondary">
            Explore more of our enterprise successes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
