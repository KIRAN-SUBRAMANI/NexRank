"use client";

import React from "react";
import ContactCard from "./ContactCard";

export default function ContactCards({ contactInfo }) {
  if (!contactInfo || contactInfo.length === 0) return null;

  return (
    <section className="w-full py-8 md:py-12 bg-[#F8FAFC] border-b border-slate-100 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} info={info} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
