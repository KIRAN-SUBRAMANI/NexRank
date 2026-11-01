export default function SectionHeader({ headerData }) {
  if (!headerData) return null;

  const { sectionLabel, heading, highlightWord, description } = headerData;
  const parts = heading.split(new RegExp(`(${highlightWord})`, "gi"));

  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-12 sm:mb-16">

      {/* Small Badge / Eyebrow in Brand Yellow */}
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="w-6 h-[2px] bg-[#ffdf00]"></span>
        <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#ffdf00] uppercase">
          {sectionLabel}
        </span>
        <span className="w-6 h-[2px] bg-[#ffdf00]"></span>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
        {parts.map((part, index) =>
          part.toLowerCase() === highlightWord?.toLowerCase() ? (
            <span key={index} className="text-[#ffdf00]">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {description}
        </p>
      )}

    </div>
  );
}
