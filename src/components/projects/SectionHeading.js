export default function SectionHeading({ badge, heading, description }) {
  return (
    <div className="w-full mb-12">
      {badge && (
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
          <span className="text-sm font-extrabold tracking-widest text-text-secondary uppercase">
            {badge}
          </span>
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif font-extrabold text-text-primary leading-tight mb-6">
        {heading}
      </h2>
      
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
