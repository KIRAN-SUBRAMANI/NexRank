import HighlightCard from "./HighlightCard";

export default function ContactHighlights({ highlights, settings }) {
  if (!highlights || highlights.length === 0 || !settings) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-5xl mx-auto">
      {highlights.map((highlight, index) => (
        <HighlightCard key={index} highlight={highlight} settings={settings} />
      ))}
    </div>
  );
}
