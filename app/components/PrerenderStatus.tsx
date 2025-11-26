"use client";

import { useEffect, useState } from "react";

export default function PrerenderStatus() {
  const [wasPrerendered, setWasPrerendered] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if document.prerendering is supported
    if (typeof document === "undefined") {
      setIsChecking(false);
      return;
    }

    // Check if page is currently being prerendered
    if ("prerendering" in document && document.prerendering) {
      setWasPrerendered(true);

      // Listen for when prerendering completes and page becomes visible
      document.addEventListener(
        "prerenderingchange",
        () => {
          setIsChecking(false);
        },
        { once: true },
      );
    } else {
      setIsChecking(false);
    }
  }, []);

  if (isChecking && !wasPrerendered) {
    return (
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-200 px-4 py-2 text-sm dark:bg-zinc-800">
        <div className="h-2 w-2 rounded-full bg-zinc-500" />
        <span>Checking prerender status...</span>
      </div>
    );
  }

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
      <span>{wasPrerendered ? "Prerendered" : "Normal Load"}</span>
    </div>
  );
}
