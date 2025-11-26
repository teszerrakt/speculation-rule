import Link from "next/link";
import ProgressBar from "@/app/components/ProgressBar";
import PrerenderStatus from "@/app/components/PrerenderStatus";

export default async function FullSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  // Construct the full URL path
  const queryString = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Array.isArray(value) ? value[0] : value;
        }
        return acc;
      },
      {} as Record<string, string>,
    ),
  ).toString();

  const fullPath = `/en-id/flight/fullsearch${queryString ? `?${queryString}` : ""}`;

  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Flight Search (One Way)</h1>
          <PrerenderStatus />
        </div>

        <div className="w-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-xl font-semibold">Page Information</h2>

          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Current URL:
              </span>
              <p className="mt-1 break-all rounded bg-zinc-100 p-2 font-mono text-sm dark:bg-zinc-800">
                {fullPath}
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Query Parameters:
              </span>
              <div className="mt-2 space-y-1">
                {Object.keys(params).length > 0 ? (
                  Object.entries(params).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex gap-2 rounded bg-zinc-100 p-2 font-mono text-sm dark:bg-zinc-800"
                    >
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                        {key}:
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    No query parameters
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <ProgressBar />
        </div>

        <div className="flex gap-4">
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:text-base"
          >
            Back to Home
          </Link>
          <Link
            href="/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY"
            className="rounded-full border border-solid border-black/[.08] px-5 py-2.5 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:text-base"
          >
            Go to Round Trip Search
          </Link>
        </div>
      </main>
    </div>
  );
}
