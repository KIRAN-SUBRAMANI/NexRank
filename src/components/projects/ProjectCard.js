import Link from "next/link";
import Image from "next/image";
import ProjectMetrics from "./ProjectMetrics";

export default function ProjectCard({ project }) {
  const { title, client, industry, services, shortDescription, metrics, cta } = project;

  return (
    <div 
      className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 h-full"
    >
      
      {/* Actual thumbnail image */}
      <div className="w-full h-[420px] relative overflow-hidden bg-gray-50">
        <Image 
          src={project.thumbnail || "/images/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mb-4">
          {services.map((service, index) => (
            <span key={index} className="text-[13px] font-semibold text-gray-700 bg-gray-100 px-4 py-1.5 rounded-full">
              {service}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
        
        <div className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
          Client: {client}
        </div>

        <p className="text-gray-600 mb-8 flex-grow text-[15px] leading-relaxed">
          {shortDescription}
        </p>

        <ProjectMetrics metrics={metrics} />

        <Link 
          href={cta.link}
          className="inline-flex items-center text-[#D4AF37] font-bold group/link mt-auto"
        >
          {cta.text}
          <svg
            className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
