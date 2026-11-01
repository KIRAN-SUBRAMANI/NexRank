import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <div className="py-20 lg:py-28 relative overflow-hidden bg-bg-secondary border-t border-border-divider">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary text-bg-primary rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <Container className="relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3A] mb-6 tracking-tight leading-tight">
          Ready to Turn Your Digital Presence Into Real Growth?
        </h2>
        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's build a digital strategy designed around your business goals. 
          Stop guessing and start growing with proven frameworks.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-bg-primary text-text-primary font-bold rounded-xl shadow-[0_4px_20px_rgba(26,158,154,0.3)] hover:bg-[#148380] hover:shadow-[0_6px_25px_rgba(26,158,154,0.4)] transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
          <Link 
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-surface text-[#0B1F3A] font-bold rounded-xl border border-border-divider shadow-sm hover:border-[#0B1F3A] transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </Container>
    </div>
  );
}
