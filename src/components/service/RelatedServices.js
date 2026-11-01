import { getServices } from "@/lib/content/services";
import ServiceCard from "../services/ServiceCard";

export default async function RelatedServices({ currentServiceSlug }) {
  const servicesData = await getServices();
  
  // Filter out the current service and take up to 4 services
  const related = servicesData
    .filter(s => s.slug !== currentServiceSlug && s.status === "active")
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
 <section className="py-10 w-full lg: bg-bg-secondary border-t border-border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-700 mb-6">
            Related Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-text-secondary">
            Comprehensive digital solutions to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {related.map((service) => (
            <ServiceCard key={service.id} service={{...service, featured: false}} />
          ))}
        </div>

      </div>
    </section>
  );
}
