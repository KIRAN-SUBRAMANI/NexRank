import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-2xl border border-[#e8e4da] mt-8 p-8 shadow-xs">
        <h3 className="text-xl font-bold text-[#262626] mb-2">No case studies found</h3>
        <p className="text-slate-500 text-sm">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

