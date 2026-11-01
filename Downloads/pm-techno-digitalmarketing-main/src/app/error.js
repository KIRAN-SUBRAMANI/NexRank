"use client"; // Error boundaries must be Client Components

import ErrorState from "@/components/states/ErrorState";

export default function GlobalError({ error, reset }) {
  return <ErrorState error={error} reset={reset} />;
}
