export default function TrustIndicatorCard({ indicator }) {
  return (
    <div className="flex items-center px-4 py-2 bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mr-2.5">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
        {indicator}
      </span>
    </div>
  );
}
