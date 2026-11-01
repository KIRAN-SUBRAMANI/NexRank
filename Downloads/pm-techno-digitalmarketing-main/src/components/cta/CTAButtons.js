import Link from "next/link";

export default function CTAButtons({ primaryButton, secondaryButton }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
      {primaryButton && (
        <Link 
          href={primaryButton.link}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D3436] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] group"
        >
          {primaryButton.text}
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      )}

      {secondaryButton && (
        <Link 
          href={secondaryButton.link}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#06143D] bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
        >
          {secondaryButton.text}
        </Link>
      )}
    </div>
  );
}
