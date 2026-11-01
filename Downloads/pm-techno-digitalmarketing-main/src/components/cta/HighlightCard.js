import IconWrapper from "@/components/common/IconWrapper";

export default function HighlightCard({ highlight, settings }) {
  if (!highlight || !settings) return null;

  // Determine the display value based on the highlight type and settings
  let displayValue = highlight.overrideValue;
  
  if (!displayValue) {
    switch(highlight.type) {
      case "email":
        displayValue = settings.contactInfo?.email;
        break;
      case "phone":
        displayValue = settings.contactInfo?.phone;
        break;
      case "hours":
        displayValue = settings.officeHours;
        break;
      case "address":
        displayValue = settings.contactInfo?.address;
        break;
      default:
        displayValue = "";
    }
  }

  if (!displayValue) return null;

  return (
    <div className="flex flex-col items-center p-6 bg-surface rounded-3xl border border-border-divider shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4">
        <IconWrapper name={highlight.icon} size="w-6 h-6" />
      </div>
      <span className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">
        {highlight.label}
      </span>
      <span className="text-base font-semibold text-text-primary text-center">
        {displayValue}
      </span>
    </div>
  );
}
