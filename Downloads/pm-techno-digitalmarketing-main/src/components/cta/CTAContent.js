import SectionHeading from "./SectionHeading";
import CTAButtons from "./CTAButtons";
import TrustIndicatorList from "./TrustIndicatorList";

export default function CTAContent({ data }) {
  if (!data) return null;
  const { badge, heading, description, primaryButton, secondaryButton, trustIndicators } = data;

  return (
    <div className="relative z-10 flex flex-col items-center">
      <SectionHeading 
        badge={badge}
        heading={heading}
        description={description}
      />
      
      <CTAButtons 
        primaryButton={primaryButton} 
        secondaryButton={secondaryButton} 
      />

      <TrustIndicatorList indicators={trustIndicators} />
    </div>
  );
}
