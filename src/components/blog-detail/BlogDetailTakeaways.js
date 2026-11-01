import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function BlogDetailTakeaways({ takeaways }) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
 <section className="py-10 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-bg-secondary rounded-2xl p-8 md:p-12 border border-border-divider shadow-sm relative overflow-hidden">
          
          {/* Decor */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-bl-full pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mb-8 flex items-center">
            Key Takeaways
          </h2>
          
          <ul className="space-y-4">
            {takeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-text-secondary">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
