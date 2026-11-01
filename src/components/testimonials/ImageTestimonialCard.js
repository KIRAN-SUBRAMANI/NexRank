"use client";
import React, { useState } from 'react';

const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const VerifiedBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.999 1.5C11.53 0.603333 12.834 0.603333 13.365 1.5L14.733 3.8058C15.021 4.29177 15.586 4.56842 16.155 4.50291L18.825 4.1956C19.866 4.07584 20.672 4.96696 20.472 5.99849L19.957 8.65345C19.851 9.19965 20.063 9.75704 20.491 10.0573L22.684 11.5959C23.538 12.195 23.538 13.5134 22.684 14.1125L20.491 15.6512C20.063 15.9514 19.851 16.5088 19.957 17.055L20.472 19.7099C20.672 20.7415 19.866 21.6326 18.825 21.5128L16.155 21.2055C15.586 21.14 15.021 21.4167 14.733 21.9026L13.365 24.2084C12.834 25.1051 11.53 25.1051 10.999 24.2084L9.63098 21.9026C9.34298 21.4167 8.77798 21.14 8.20898 21.2055L5.53898 21.5128C4.49798 21.6326 3.69198 20.7415 3.89198 19.7099L4.40698 17.055C4.51298 16.5088 4.30098 15.9514 3.87298 15.6512L1.67998 14.1125C0.825979 13.5134 0.825979 12.195 1.67998 11.5959L3.87298 10.0573C4.30098 9.75704 4.51298 9.19965 4.40698 8.65345L3.89198 5.99849C3.69198 4.96696 4.49798 4.07584 5.53898 4.1956L8.20898 4.50291C8.77798 4.56842 9.34298 4.29177 9.63098 3.8058L10.999 1.5Z" fill="#4285F4"/>
    <path d="M10.5 16.5L6.5 12.5L7.914 11.086L10.5 13.672L16.5 7.67201L17.914 9.08601L10.5 16.5Z" fill="white"/>
  </svg>
);

export default function ImageTestimonialCard({ testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = testimonial.review.length > 130;

  return (
    <div className={`relative w-[300px] md:w-[320px] flex-shrink-0 rounded-[14px] overflow-hidden bg-[#FFFFFF] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 p-5 flex flex-col justify-start ${isExpanded ? 'h-auto min-h-[250px] pb-5' : 'h-[250px]'}`}>
      
      {/* Header: Name and Google Logo */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[17px] font-bold text-[#202124] leading-tight pr-2 font-sans tracking-tight">
          {testimonial.clientName}
        </h3>
        <div className="flex-shrink-0 mt-0.5">
          <GoogleIcon />
        </div>
      </div>

      {/* Stars and Verified Badge */}
      <div className="flex items-center gap-2 mb-3">
        <VerifiedBadge />
        <div className="flex gap-[2px]">
          {[1, 2, 3, 4, 5].map((key) => (
            <svg key={key} style={{ width: '16px', height: '16px', fill: '#FBBC04' }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-grow">
        <p className={`text-[#3C4043] text-[15px] font-medium leading-[1.45] font-sans ${isExpanded ? '' : 'line-clamp-4'}`}>
          {testimonial.review}
        </p>
      </div>

      {/* Read More Link */}
      {isLong && (
        <button 
          suppressHydrationWarning
          onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             setIsExpanded(!isExpanded);
          }}
          className="text-[#70757A] text-[14px] font-medium text-left mt-3 hover:text-gray-900 transition-colors cursor-pointer w-fit"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}
