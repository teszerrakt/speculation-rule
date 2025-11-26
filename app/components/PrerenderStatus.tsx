"use client";

import { useEffect, useState } from "react";

// Extend PerformanceNavigationTiming to include activationStart
interface ExtendedPerformanceNavigationTiming
  extends PerformanceNavigationTiming {
  activationStart?: number;
}

function checkIfPrerendered(): boolean {
  if (typeof window === "undefined" || !window.performance) {
    return false;
  }

  // Use PerformanceNavigationTiming.activationStart to detect prerender
  // A non-zero activationStart indicates the page was prerendered
  const navEntry = performance.getEntriesByType(
    "navigation"
  )[0] as ExtendedPerformanceNavigationTiming;

  if (navEntry && navEntry.activationStart !== undefined) {
    // activationStart > 0 means page was prerendered
    return navEntry.activationStart > 0;
  }

  return false;
}

export default function PrerenderStatus() {
  const [wasPrerendered, setWasPrerendered] = useState<boolean>(() =>
    checkIfPrerendered()
  );

  useEffect(() => {
    // Check if still in prerendering state
    if (
      typeof document !== "undefined" &&
      "prerendering" in document &&
      document.prerendering
    ) {
      // Listen for when prerendering completes
      const handleActivation = () => {
        setWasPrerendered(true);
      };

      document.addEventListener("prerenderingchange", handleActivation, {
        once: true,
      });

      return () => {
        document.removeEventListener("prerenderingchange", handleActivation);
      };
    }
  }, []);

  return (
    <div
      className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm ${
        wasPrerendered
          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
      }`}
    >
      <div
        className={`h-2 w-2 rounded-full ${
          wasPrerendered
            ? "bg-green-600 dark:bg-green-400"
            : "bg-blue-600 dark:bg-blue-400"
        }`}
      />
      <span>{wasPrerendered ? "✓ Prerendered" : "Normal Load"}</span>
    </div>
  );
}
