import TrustIndicatorCard from "./TrustIndicatorCard";

export default function TrustIndicatorList({ indicators }) {
  if (!indicators || indicators.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6 max-w-4xl mx-auto">
      {indicators.map((indicator, index) => (
        <TrustIndicatorCard key={index} indicator={indicator} />
      ))}
    </div>
  );
}
