export default function SectionHeading({ badge, heading, description }) {
  return (
    <div className="w-full text-center max-w-3xl mx-auto mb-4">
      {badge && (
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
          <span className="text-sm font-extrabold tracking-widest text-[#D4AF37] uppercase">
            {badge}
          </span>
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
        </div>
      )}
      
      <h2 
        className="text-3xl md:text-4xl lg:text-4xl font-serif font-extrabold text-[#06143D] leading-tight mb-6"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      
      {description && (
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
