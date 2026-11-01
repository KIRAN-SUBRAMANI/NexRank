import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
 <section className="py-10 bg-[#D4AF37] border-b border-border-divider relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <Container className="relative z-10">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-text-secondary">
              A curated selection of our most impactful enterprise transformations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
