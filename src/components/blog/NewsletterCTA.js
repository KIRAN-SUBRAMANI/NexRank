"use client";

import { useState } from "react";
import IconWrapper from "@/components/common/IconWrapper";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="bg-[#D4AF37] rounded-3xl p-8 text-text-primary relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-surface opacity-10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

      <div className="relative z-10">
        <IconWrapper name="mail" size="w-10 h-10 mb-4 opacity-90" />
        <h3 className="text-2xl font-bold font-serif mb-3">Subscribe for Insights</h3>
        <p className="text-[var(--color-primary-light)] mb-6 text-sm leading-relaxed">
          Get the latest strategies in digital marketing, SEO, and web development delivered to your inbox.
        </p>

        {status === "success" ? (
          <div className="bg-surface/10 rounded-xl p-4 flex items-center border border-white/20">
            <IconWrapper name="check" size="w-5 h-5 text-[#D4AF37] mr-2" />
            <span className="font-medium text-sm">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface/10 border border-white/20 text-text-primary placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-surface text-[#D4AF37] font-bold rounded-xl text-sm hover:bg-bg-secondary transition-colors flex justify-center items-center"
            >
              {status === "loading" ? (
                <div className="w-5 h-5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Subscribe Now"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
