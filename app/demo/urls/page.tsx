import { Metadata } from "next";
import { SpeculationRules } from "@/components/SpeculationRules";
import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InfoBox } from "@/components/ui/InfoBox";
import { SpeculationRulesConfig } from "@/types/speculation-rules";

export const metadata: Metadata = {
  title: "urls Demo - Speculation Rules",
  description: "Demonstration of explicit URLs speculation rule pattern",
};

const SPECULATION_RULE_CONFIG: SpeculationRulesConfig = {
  prerender: [
    {
      urls: [
        "/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY",
        "/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY",
      ],
      eagerness: "immediate",
    },
  ],
};

export default function UrlsDemo() {
  return (
    <>
      <SpeculationRules config={SPECULATION_RULE_CONFIG} />

      <PageContainer>
        <PageHeader
          title="urls Demo"
          description="Explicit URL list for speculation rules"
        />

        <Card>
          <h2 className="mb-4 text-xl font-semibold">How it works</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            The{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              urls
            </code>{" "}
            pattern allows you to specify an explicit array of URLs to
            prerender. This is the most precise method.
          </p>

          <CodeBlock title="Current Rule:" code={SPECULATION_RULE_CONFIG} />

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Only these exact URLs (including query parameters) will be
            prerendered, regardless of whether there are links to them on the
            page. The eagerness level is set to "immediate", which means these
            URLs are prerendered as soon as the page loads, without waiting for
            any user interaction.
          </p>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-semibold">Test Links</h2>

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
              ✓ These WILL be prerendered (in URLs list):
            </h3>
            <div className="space-y-3">
              <a
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
              </a>

              <a
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
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
              ✗ This will NOT be prerendered (not in URLs list):
            </h3>
            <a
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
            </a>
          </div>
        </Card>

        <InfoBox variant="info" title="Use cases:">
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>High-traffic pages you want to prerender immediately</li>
            <li>Critical user journeys (e.g., checkout flow)</li>
            <li>
              Pages that don&apos;t have links but you know users will visit
            </li>
            <li>When you need precise control over what gets prerendered</li>
          </ul>
        </InfoBox>

        <InfoBox variant="warning" title="How to verify:">
          <ol className="list-inside list-decimal space-y-1 text-sm">
            <li>Open DevTools (F12)</li>
            <li>Go to Application → Speculation Rules</li>
            <li>See exactly 2 URLs listed for prerendering</li>
            <li>Check Network tab for immediate prerender requests</li>
            <li>Click green links: instant navigation</li>
            <li>Click red link: normal loading</li>
          </ol>
        </InfoBox>
      </PageContainer>
    </>
  );
}
