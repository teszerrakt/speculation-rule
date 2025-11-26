import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "urls Demo - Speculation Rules",
  description: "Demonstration of explicit URLs speculation rule pattern",
};

function SpeculationRules({ config }: { config: object }) {
  return (
    <Script id="speculation-rules" type="speculationrules">
      {JSON.stringify(config)}
    </Script>
  );
}

export default function UrlsDemo() {
  return (
    <>
      <SpeculationRules
        config={{
          prerender: [
            {
              urls: [
                "/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY",
                "/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY",
              ],
              eagerness: "immediate",
            },
          ],
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
            <h1 className="text-4xl font-bold">urls Demo</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Explicit URL list for speculation rules
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold">How it works</h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              The{" "}
              <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                urls
              </code>{" "}
              pattern allows you to specify an explicit array of URLs to
              prerender. This is the most precise method.
            </p>

            <div className="rounded bg-zinc-50 p-4 dark:bg-zinc-950">
              <p className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Current Rule:
              </p>
              <pre className="overflow-x-auto rounded bg-zinc-100 p-3 text-xs dark:bg-zinc-800">
                {`{
  "prerender": [
    {
      "urls": [
        "/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY",
        "/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY"
      ],
      "eagerness": "immediate"
    }
  ]
}`}
              </pre>
            </div>

            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Only these exact URLs (including query parameters) will be
              prerendered, regardless of whether there are links to them on the
              page. The eagerness level is set to "immediate", which means these
              URLs are prerendered as soon as the page loads, without waiting for
              any user interaction.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold">Test Links</h2>

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
                ✓ These WILL be prerendered (in URLs list):
              </h3>
              <div className="space-y-3">
                <Link
                  href="/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY"
                  className="block rounded-lg border border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:hover:bg-green-900"
                >
                  <div className="font-medium">One Way Flight Search</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    /en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY
                  </div>
                  <div className="mt-2 text-xs text-green-700 dark:text-green-400">
                    ✓ Exact URL match
                  </div>
                </Link>

                <Link
                  href="/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY"
                  className="block rounded-lg border border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:hover:bg-green-900"
                >
                  <div className="font-medium">Round Trip Flight Search</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    /en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY
                  </div>
                  <div className="mt-2 text-xs text-green-700 dark:text-green-400">
                    ✓ Exact URL match
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
                ✗ This will NOT be prerendered (not in URLs list):
              </h3>
              <Link
                href="/en-id/flight/fullsearch?ap=DPS.CGK&dt=01-01-2026.NA&ps=1.0.0&sc=ECONOMY"
                className="block rounded-lg border border-red-200 bg-red-50 p-4 transition-colors hover:bg-red-100 dark:border-red-900 dark:bg-red-950 dark:hover:bg-red-900"
              >
                <div className="font-medium">
                  Different Flight Search (No Prerender)
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  /en-id/flight/fullsearch?ap=DPS.CGK&dt=01-01-2026.NA&ps=1.0.0&sc=ECONOMY
                </div>
                <div className="mt-2 text-xs text-red-700 dark:text-red-400">
                  ✗ Different query parameters
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
            <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
              Use cases:
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>High-traffic pages you want to prerender immediately</li>
              <li>Critical user journeys (e.g., checkout flow)</li>
              <li>
                Pages that don&apos;t have links but you know users will visit
              </li>
              <li>When you need precise control over what gets prerendered</li>
            </ul>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
            <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-100">
              How to verify:
            </h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-amber-800 dark:text-amber-200">
              <li>Open DevTools (F12)</li>
              <li>Go to Application → Speculation Rules</li>
              <li>See exactly 2 URLs listed for prerendering</li>
              <li>Check Network tab for immediate prerender requests</li>
              <li>Click green links: instant navigation</li>
              <li>Click red link: normal loading</li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}
