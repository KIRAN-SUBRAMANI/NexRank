export default function MetricCard({ metric }) {
  return (
    <div className="bg-bg-secondary border border-border-divider rounded-2xl p-4 flex flex-col justify-center">
      <div className="text-2xl font-bold text-[#D4AF37] mb-1">
        {metric.value}
      </div>
      <div className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
        {metric.label}
      </div>
    </div>
  );
}
