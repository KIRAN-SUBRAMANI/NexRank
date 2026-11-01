import Link from "next/link";

export default function CTASection({ cta }) {
  if (!cta) return null;

  return (
 <section className="py-10 lg: bg-brand-primary text-bg-primary-700 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-surface rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
          {cta.heading}
        </h2>
        
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          {cta.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {cta.primaryButton && (
            <Link 
              href={cta.primaryButton.href}
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-secondary text-text-primary font-bold rounded-lg hover:bg-[#d6891a] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              {cta.primaryButton.label}
            </Link>
          )}
          
          {cta.secondaryButton && (
            <Link 
              href={cta.secondaryButton.href}
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-surface/10 text-text-primary font-bold rounded-lg hover:bg-surface/20 transition-colors backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              {cta.secondaryButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
