import MetricCard from "./MetricCard";

export default function ProjectMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
}
