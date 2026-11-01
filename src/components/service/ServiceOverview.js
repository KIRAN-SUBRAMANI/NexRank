import Image from "next/image";

export default function ServiceOverview({ overview, serviceImage }) {
  if (!overview) return null;
  
  const displayImage = serviceImage || overview.image;

  return (
    <section id="overview" className="py-10 lg:py-16 bg-surface relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute left-8 lg:left-16 top-10 pointer-events-none hidden lg:block z-0">
        <Image
          src="/images/common/background-design.svg"
          alt="Decorative Background"
          width={700}
          height={400}
          className="w-[600px] xl:w-[700px] h-auto object-contain opacity-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Column */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-700 mb-8">
              {overview.heading || "About this Service"}
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              {Array.isArray(overview.content) ? (
                overview.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{typeof overview === 'string' ? overview : (overview.content || overview.description || "")}</p>
              )}
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 w-full order-1 lg:order-2 relative mt-8 lg:mt-0">
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-lg mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl z-10">
              {/* Fallback gradient if image fails or isn't provided */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-secondary opacity-10"></div>
              {displayImage && (
                <Image
                  src={displayImage}
                  alt={overview.heading || "Service image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
