import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function MidArticleCTA() {
  return (
    <div className="my-16 p-8 md:p-10 bg-[#0B1F3A] text-text-primary rounded-3xl shadow-xl relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-brand-primary text-bg-primary rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Want to Improve Your Online Visibility?</h3>
          <p className="text-text-secondary text-[17px] leading-relaxed max-w-lg">
            Our digital marketing team can help you build a strategy focused on traffic, leads and sustainable growth.
          </p>
        </div>
        
        <div className="flex-shrink-0 w-full md:w-auto">
          <Link 
            href="/services"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-[#0B1F3A] bg-surface font-bold rounded-xl shadow-lg hover:bg-bg-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Explore SEO Services
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
