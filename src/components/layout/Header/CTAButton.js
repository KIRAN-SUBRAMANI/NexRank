import Link from "next/link";

export default function CTAButton({ navigation }) {
  if (!navigation?.cta) return null;

  return (
    <Link
      href={navigation.cta.href}
      className="
        group inline-flex items-center justify-center gap-3
        px-6 py-3
        bg-[#111827] text-white
        text-[14px] font-semibold
        rounded-full whitespace-nowrap
        transition-all duration-300
        hover:bg-[#202B3D]
        hover:-translate-y-0.5
        hover:shadow-[0_8px_24px_rgba(17,24,39,0.18)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#87B52C]
        focus-visible:ring-offset-2
      "
    >
      <span>{navigation.cta.label}</span>

      <span
        className="
          flex h-7 w-7 items-center justify-center
          rounded-full bg-[#D8FA65]
          text-[#111827]
          transition-transform duration-300
          group-hover:rotate-45
        "
        aria-hidden="true"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </span>
    </Link>
  );
}
