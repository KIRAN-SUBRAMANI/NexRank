import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PortfolioHero({ hero }) {
  if (!hero) return null;

  const heading = hero.heading || "Our Work Speaks Louder";
  const accentWord = hero.accentWord || "Louder";
  
  // Split heading to highlight accentWord
  let beforeAccent = heading;
  let hasAccent = false;
  if (accentWord && heading.includes(accentWord)) {
    const parts = heading.split(accentWord);
    beforeAccent = parts[0];
    hasAccent = true;
  }

  const defaultMetrics = [
    { value: "500+", label: "Projects Delivered" },
    { value: "10+", label: "Years Experience" },
    { value: "75+", label: "Active Clients" }
  ];
  const metrics = hero.metrics && hero.metrics.length > 0 ? hero.metrics : defaultMetrics;

  return (
    <section className="bg-[#1c1a46] text-white pt-24 sm:pt-28 pb-14 sm:pb-16 relative overflow-hidden">
      {/* Background Dot Grid Pattern matching Brandshark aesthetic */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.25) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          backgroundPosition: "0 0"
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation (Exact Brandshark style) */}
          <nav className="flex items-center text-sm mb-4 font-medium flex-wrap gap-2">
            <Link href="/" className="text-white/60 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Case Studies</span>
          </nav>

          {/* Hero Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            {hasAccent ? (
              <>
                {beforeAccent}
                <span className="text-[#ffc700]">{accentWord}</span>
              </>
            ) : (
              heading
            )}
          </h1>

          {/* Hero Subtitle / Description */}
          <p className="text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed mb-8 font-normal">
            {hero.description}
          </p>

          {/* Metrics / Statistics Row (Exact Brandshark custom-stats style) */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-8 pt-2">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-6 sm:gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#e6c35c] leading-none mb-1 tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-[11px] sm:text-sm text-white/60 font-medium leading-tight">
                      {metric.label}
                    </span>
                  </div>
                  {index !== metrics.length - 1 && (
                    <div className="hidden sm:block w-[1px] h-10 bg-white/15" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

