import Image from "next/image";

export default function WhyChooseNexRank() {
  const highlights = [
    {
      icon: "/images/home/why-choose/high-retention.gif",
      alt: "High Customer Retention Rate",
      title: "High Customer Retention Rate",
      desc: "We have a 100% retention rate. Customer loyalty is priceless. We are earning our customers loyalty day by day."
    },
    {
      icon: "/images/home/why-choose/deadline.gif",
      alt: "Ability To Meet Deadlines",
      title: "Ability To Meet Deadlines",
      desc: "We are 100% clear on when work needs to be completed. Those deadlines help us to collaborate toward achieving a shared goal."
    },
    {
      icon: "/images/home/why-choose/team.gif",
      alt: "Professional Team Member",
      title: "Professional Team Member",
      desc: "We have well focused and creative team members. They're passionate about growing professionally for your business."
    }
  ];

  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-20 overflow-hidden bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes whyChooseFloatBounce {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-16px);
          }
        }
        .why-choose-floating {
          animation: whyChooseFloatBounce 1.2s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}} />

      {/* Background organic shape from BrightAds */}
      <div className="absolute top-0 left-0 -z-0 pointer-events-none select-none max-w-[65%] sm:max-w-[55%] lg:max-w-[48%]">
        <Image
          src="/images/home/why-choose/why-choose-bg.png"
          alt=""
          width={1017}
          height={902}
          priority={false}
          className="w-full h-auto object-contain opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 3D Isometric Illustration with continuous bouncing animation */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="why-choose-floating relative w-full max-w-[660px] lg:max-w-[720px] mx-auto scale-100 sm:scale-105 lg:scale-110 transition-transform duration-300">
              <Image
                src="/images/home/why-choose/why-choose-illustration.png"
                alt="NexRank Web Development & Digital Marketing"
                width={788}
                height={611}
                priority
                className="w-full h-auto object-contain select-none drop-shadow-[0_20px_35px_rgba(2,18,106,0.06)]"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 lg:pl-6 xl:pl-10">
            {/* Eyebrow */}
            <h5 className="text-[16px] sm:text-[18px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#fc7318] to-[#feb423] bg-clip-text text-transparent mb-3 inline-block">
              {"// WHY CHOOSE US?"}
            </h5>

            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#02126a] leading-[1.25] mb-5 tracking-tight">
              We Are Trusted Web Development &amp; Digital Marketing Company
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-[#555555] text-[15px] sm:text-[16px] leading-[1.75]">
              <p>
                NexRank Techno Group is one of the premier digital marketing agencies, with the aspiration to create value for your business. Our web design and development with digital marketing services will transform your marketing approach.
              </p>
              <p>
                So, get through one of the best Web development and Digital marketing companies. NexRank named as one of the best digital marketing agencies and a great web development service provider.
              </p>
            </div>

            {/* 3-Pill Decorative Bar */}
            <div className="flex items-center gap-2.5 my-8">
              <span className="w-3.5 h-[5px] rounded-full bg-[#02126a]" />
              <span className="w-7 h-[5px] rounded-full bg-gradient-to-r from-[#fc7318] to-[#feb423]" />
              <span className="w-3.5 h-[5px] rounded-full bg-[#02126a]" />
            </div>

            {/* Feature Rows */}
            <div className="space-y-6 sm:space-y-7">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-row items-start sm:items-center gap-4 sm:gap-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Icon Circle */}
                  <div className="w-[62px] h-[62px] sm:w-[85px] sm:h-[85px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_10px_25px_0_rgba(2,18,106,0.08)] sm:shadow-[0_15px_30px_0_rgba(2,18,106,0.08)] group-hover:shadow-[0_20px_35px_0_rgba(252,115,24,0.15)] transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={51}
                      height={51}
                      unoptimized
                      className="max-w-[40px] sm:max-w-[51px] max-h-[40px] sm:max-h-[51px] object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[17px] sm:text-[21px] font-bold text-[#02126a] mb-1 leading-snug group-hover:text-[#fc7318] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-[#555555] text-[13.5px] sm:text-[15px] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
