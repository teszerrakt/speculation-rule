import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "href_matches Demo - Speculation Rules",
  description: "Demonstration of href_matches speculation rule pattern",
};

export default function HrefMatchesDemo() {
  return (
    <>
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            prerender: [
              {
                where: {
                  and: [{ href_matches: "*/flight/*search*" }],
                },
              },
            ],
          }),
        }}
      />

      <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <main className="flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold">href_matches Demo</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Pattern-based URL matching for speculation rules
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold">How it works</h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              The <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">href_matches</code> pattern
              allows you to specify URL patterns using wildcards. Any link matching the pattern will be prerendered.
            </p>

            <div className="rounded bg-zinc-50 p-4 dark:bg-zinc-950">
              <p className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Current Rule:
              </p>
              <pre className="overflow-x-auto rounded bg-zinc-100 p-3 text-xs dark:bg-zinc-800">
{`{
  "prerender": [
    {
      "where": {
        "and": [
          { "href_matches": "*/flight/*search*" }
        ]
      }
    }
  ]
}`}
              </pre>
            </div>

            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              This pattern matches any URL containing <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">/flight/</code> followed
              by any text containing <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">search</code>.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold">Test Links</h2>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              Click these links to see instant navigation (they should be prerendered):
            </p>

            <div className="space-y-3">
              <Link
                href="/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY"
                className="block rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <div className="font-medium">One Way Flight Search</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  /en-id/flight/fullsearch
                </div>
              </Link>

              <Link
                href="/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY"
                className="block rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <div className="font-medium">Round Trip Flight Search</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  /en-id/flight/fulltwosearch
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
            <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-100">
              How to verify:
            </h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-amber-800 dark:text-amber-200">
              <li>Open DevTools (F12)</li>
              <li>Go to Application → Speculation Rules</li>
              <li>See the active prerender rules and matched URLs</li>
              <li>Check Network tab for prerender requests</li>
              <li>Click links and notice instant navigation</li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}
