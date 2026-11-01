"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import IconWrapper from "@/components/common/IconWrapper";
import Container from "@/components/ui/Container";

export default function ErrorState({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service in the future
    console.error("Application Error Boundary Caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-bg-secondary">
      <Container>
        <div className="max-w-xl mx-auto bg-surface p-10 md:p-16 rounded-3xl shadow-sm border border-border-divider text-center">
          
          <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-8 text-[#D4AF37]">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
            Something went wrong
          </h2>
          
          <p className="text-text-secondary mb-10 leading-relaxed">
            We apologize for the inconvenience. A technical error occurred while trying to load this page. Our engineers have been notified.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="px-8 py-3 bg-[#D4AF37] text-text-primary font-semibold rounded-lg hover:bg-[#D4AF37] transition-colors w-full sm:w-auto"
            >
              Try Again
            </button>
            <Button href="/" variant="secondary" className="w-full sm:w-auto">
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
