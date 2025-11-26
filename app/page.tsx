import Link from "next/link";
import Script from "next/script";

function SpeculationRules({ config }: { config: object }) {
  return (
    <Script id="speculation-rules" type="speculationrules">
      {JSON.stringify(config)}
    </Script>
  );
}

export default function Home() {
  return (
    <>
      <SpeculationRules
        config={{
          prerender: [
            {
              where: {
                and: [{ href_matches: "/en-id/flight/*search*" }],
              },
              eagerness: "moderate",
            },
          ],
        }}
      />

      <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <main className="flex max-w-4xl flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-5xl font-bold">Speculation Rules API Demo</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Test different prerendering strategies with the Speculation Rules
              API
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-2xl font-semibold">What is this?</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The Speculation Rules API allows browsers to prerender pages
              before users navigate to them, resulting in instant page loads.
              This demo showcases three different methods to specify which pages
              should be prerendered.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/demo/href-matches"
              className="group flex flex-col gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="text-2xl">🎯</div>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                href_matches
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Pattern-based URL matching using wildcards
              </p>
              <div className="mt-auto text-xs font-mono text-zinc-500 dark:text-zinc-500">
                href_matches: &quot;*/flight/*search*&quot;
              </div>
            </Link>

            <Link
              href="/demo/selector-matches"
              className="group flex flex-col gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="text-2xl">🎨</div>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                selector_matches
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Target specific links using CSS selectors
              </p>
              <div className="mt-auto text-xs font-mono text-zinc-500 dark:text-zinc-500">
                selector_matches: &quot;.prerender-link&quot;
              </div>
            </Link>

            <Link
              href="/demo/urls"
              className="group flex flex-col gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="text-2xl">📝</div>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                urls
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Explicit list of exact URLs to prerender
              </p>
              <div className="mt-auto text-xs font-mono text-zinc-500 dark:text-zinc-500">
                urls: [&quot;/page1&quot;, &quot;/page2&quot;]
              </div>
            </Link>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
            <h3 className="mb-3 text-lg font-semibold text-amber-900 dark:text-amber-100">
              How to use this demo
            </h3>
            <ol className="list-inside list-decimal space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>
                Open Chrome DevTools (F12) → Application tab → Speculation Rules
              </li>
              <li>
                Choose a demo above to see different speculation rule patterns
              </li>
              <li>Watch the Network tab to see prerender requests</li>
              <li>Click the test links and notice instant page loads</li>
              <li>
                Each demo page explains its specific pattern with examples
              </li>
            </ol>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              Built with Next.js 16 • Tailwind CSS • Speculation Rules API
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
