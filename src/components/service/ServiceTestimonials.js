import ImageTestimonialCard from "@/components/testimonials/ImageTestimonialCard";

export default function ServiceTestimonials({ testimonials }) {
  if (!testimonials || !testimonials.items || testimonials.items.length === 0) return null;

  // Map service testimonial data format to match what ImageTestimonialCard expects
  const mappedTestimonials = testimonials.items.map((t, idx) => ({
    ...t,
    id: idx,
    clientName: t.name,
    services: []
  }));

  return (
    <section className="py-10 lg:py-16 w-full bg-bg-secondary relative overflow-hidden border-t border-border-divider">
      {/* Background Decor (Matching Home Page) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50" style={{ backgroundImage: "url('/images/common/background-design.svg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none z-0 opacity-40" style={{ backgroundImage: "url('/images/common/background-design.svg')", backgroundSize: 'contain', backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none z-0 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none z-0 translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-5 relative z-10">
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-primary text-bg-primary-700 rounded-full"></span>
            <span className="text-sm font-extrabold tracking-widest text-text-secondary uppercase">
              CLIENT SUCCESS STORIES
            </span>
            <span className="w-2 h-2 bg-brand-primary text-bg-primary-700 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif font-extrabold text-text-primary leading-tight">
            {testimonials.heading}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Static Testimonials Grid */}
        <div className="relative z-10 flex flex-wrap justify-center gap-6 mb-4">
          {mappedTestimonials.map((testimonial, idx) => (
            <ImageTestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              isPriority={true} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
