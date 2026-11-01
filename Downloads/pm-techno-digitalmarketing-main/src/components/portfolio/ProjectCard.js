import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const targetLink = project.cta?.link || `/case-studies/${project.slug}`;

  // Collect display tags (services or fallback to industry)
  const tags = project.services && project.services.length > 0 
    ? project.services 
    : (project.industry ? [project.industry] : []);

  return (
    <Link 
      href={targetLink}
      className="group bg-white rounded-[10px] overflow-hidden border border-black/5 shadow-[0_1px_3px_0_rgba(0,0,0,0.08),0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(28,26,70,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      {/* Thumbnail Image - Exact Brandshark height & top-center alignment */}
      <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[360px] overflow-hidden bg-slate-100 flex-shrink-0">
        <Image
          src={project.thumbnail || project.coverImage || "/images/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Content (wpgb-card-body) */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        {/* Service / Category Tag Pills (Exact Brandshark project-tags) */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3.5">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#f1eee7] text-[#52525b] group-hover:bg-[#e4e4e7] group-hover:text-[#18181b] transition-colors capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Case Study Title (Exact Brandshark card title style) */}
        <h3 className="font-['Montserrat',sans-serif] font-bold text-lg sm:text-[19px] text-[#262626] leading-snug group-hover:text-[#2e2058] transition-colors line-clamp-2">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

