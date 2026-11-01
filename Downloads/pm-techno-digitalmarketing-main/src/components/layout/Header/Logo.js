import Link from "next/link";
import Image from "next/image";

export default function Logo({ settings }) {
  if (!settings || !settings.logo) return null;

  const { logo } = settings;

  return (
    <Link
      href="/"
      aria-label={`${settings.companyName || "NexRank"} Home`}
      className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] rounded-xl transition-transform duration-200 hover:scale-[1.02]"
    >
      {logo.useImage && logo.src ? (
        <div className="relative h-10 w-[160px] sm:h-11 sm:w-[180px] md:h-12 md:w-[200px] rounded-xl overflow-hidden shadow-sm">
          <Image
            src={logo.src}
            alt={`${settings.companyName || "NexRank"} Logo`}
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <span className="flex items-center gap-2.5">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl md:text-2xl">N</span>
          </div>
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#2D3436]">
            {logo.text}
          </span>
        </span>
      )}
    </Link>
  );
}
