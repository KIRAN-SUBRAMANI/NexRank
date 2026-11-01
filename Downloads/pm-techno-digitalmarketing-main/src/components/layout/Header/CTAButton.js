import Link from "next/link";

export default function CTAButton({ navigation }) {
  if (!navigation || !navigation.cta) return null;

  return (
    <Link
      href={navigation.cta.href}
      className="inline-flex items-center justify-center px-7 py-3 text-base font-bold text-white bg-[#D4AF37] hover:bg-[#D4AF37] rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] whitespace-nowrap"
    >
      {navigation.cta.label}
    </Link>
  );
}
