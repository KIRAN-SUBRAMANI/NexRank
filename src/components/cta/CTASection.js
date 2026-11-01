import CTAContent from "./CTAContent";
import ContactHighlights from "./ContactHighlights";

export default function CTASection({ data, settings }) {
  if (!data) return null;
  const { contactHighlights } = data;

  return (
 <section className="pt-4 pb-20 mb-12 w-full md:px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Container with Premium Soft Background */}
      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] border border-border-divider">
        
        {/* Abstract Background Decor */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-100" 
          style={{ 
            backgroundImage: "url('/images/common/background-design.svg')", 
            backgroundSize: 'contain', 
            backgroundPosition: 'left center', 
            backgroundRepeat: 'no-repeat'
          }} 
        />
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-100" 
          style={{ 
            backgroundImage: "url('/images/common/background-design.svg')", 
            backgroundSize: 'contain', 
            backgroundPosition: 'right center', 
            backgroundRepeat: 'no-repeat'
          }} 
        />

        <CTAContent data={data} />
        

      </div>
    </section>
  );
}
