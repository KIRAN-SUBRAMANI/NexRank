import React from 'react';
import ImageTestimonialCard from './ImageTestimonialCard';

export default function ContinuousTestimonialMarquee({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  const row2Testimonials = [...testimonials].reverse();

  return (
    <div className="relative w-full max-w-[100vw] mx-auto overflow-hidden py-8 group testimonial-container flex flex-col gap-8">
      
      {/* Left and Right Fade Masks for a premium look */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track 1 (Right to Left) */}
      <div className="testimonial-track flex w-max">
        {/* Track Group 1 */}
        <div className="flex gap-6 pr-6 shrink-0">
          {testimonials.map((testimonial, idx) => (
            <div key={`track1-g1-${testimonial.id}-${idx}`} className="shrink-0 rounded-[20px]">
              <ImageTestimonialCard testimonial={testimonial} isPriority={idx < 3} />
            </div>
          ))}
        </div>
        
        {/* Track Group 2 (Duplicate for Seamless Loop) */}
        <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
          {testimonials.map((testimonial, idx) => (
            <div key={`track1-g2-${testimonial.id}-${idx}`} className="shrink-0 rounded-[20px]">
              <ImageTestimonialCard testimonial={testimonial} isPriority={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Track 2 (Left to Right) */}
      <div className="testimonial-track-reverse flex w-max">
        {/* Track Group 1 */}
        <div className="flex gap-6 pr-6">
          {row2Testimonials.map((testimonial, idx) => (
            <div key={`track2-g1-${testimonial.id}-${idx}`} className="shrink-0 rounded-[20px]">
              <ImageTestimonialCard testimonial={testimonial} isPriority={false} />
            </div>
          ))}
        </div>
        
        {/* Track Group 2 (Duplicate for Seamless Loop) */}
        <div className="flex gap-6 pr-6" aria-hidden="true">
          {row2Testimonials.map((testimonial, idx) => (
            <div key={`track2-g2-${testimonial.id}-${idx}`} className="shrink-0 rounded-[20px]">
              <ImageTestimonialCard testimonial={testimonial} isPriority={false} />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-track {
          animation: testimonialScroll 80s linear infinite;
        }

        .testimonial-track-reverse {
          animation: testimonialScrollReverse 80s linear infinite;
        }

        @media (max-width: 768px) {
          .testimonial-track, .testimonial-track-reverse {
            animation-duration: 60s;
          }
        }

        /* Pause on hover for desktop */
        @media (hover: hover) and (pointer: fine) {
          .testimonial-container:hover .testimonial-track,
          .testimonial-container:hover .testimonial-track-reverse {
            animation-play-state: paused;
          }
        }

        @keyframes testimonialScroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes testimonialScrollReverse {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track, .testimonial-track-reverse {
            animation: none !important;
            transform: none !important;
            overflow-x: auto;
            width: 100%;
          }
        }
      `}} />
    </div>
  );
}
