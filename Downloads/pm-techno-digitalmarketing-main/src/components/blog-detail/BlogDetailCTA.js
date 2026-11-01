import Link from "next/link";
import Container from "@/components/ui/Container";

export default function BlogDetailCTA({ cta }) {
  // Use provided CTA data or fallback to defaults
  const title = cta?.title || "Need Expert Digital Marketing Services?";
  const description = cta?.description || "Let's discuss how NexRank can help grow your business.";
  const primaryBtn = cta?.primaryButton || { label: "Get Free Consultation", href: "/contact" };
  const secondaryBtn = cta?.secondaryButton || { label: "Contact Us", href: "/contact" };

  return (
 <section className="py-10 bg-[#D4AF37] text-text-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href={primaryBtn.href} 
              className="w-full sm:w-auto font-bold px-8 py-4 text-base bg-[#D4AF37] hover:bg-[#D4AF37] text-text-primary rounded-full transition-colors shadow-lg hover:shadow-xl text-center"
            >
              {primaryBtn.label}
            </Link>
            <Link 
              href={secondaryBtn.href} 
              className="w-full sm:w-auto font-bold px-8 py-4 text-base bg-surface/10 hover:bg-surface/20 text-text-primary rounded-full border border-white/20 transition-colors text-center"
            >
              {secondaryBtn.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
