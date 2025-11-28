import { Metadata } from "next";
import { SpeculationRules } from "@/components/SpeculationRules";
import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InfoBox } from "@/components/ui/InfoBox";
import { SpeculationRulesConfig } from "@/types/speculation-rules";

export const metadata: Metadata = {
  title: "selector_matches Demo - Speculation Rules",
  description: "Demonstration of selector_matches speculation rule pattern",
};

const SPECULATION_RULE_CONFIG: SpeculationRulesConfig = {
  prerender: [
    {
      where: {
        and: [{ selector_matches: ".prerender-link" }],
      },
      eagerness: "moderate",
    },
  ],
};

export default function SelectorMatchesDemo() {
  return (
    <>
      <SpeculationRules config={SPECULATION_RULE_CONFIG} />

      <PageContainer>
        <PageHeader
          title="selector_matches Demo"
          description="CSS selector-based matching for speculation rules"
        />

        <Card>
          <h2 className="mb-4 text-xl font-semibold">How it works</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            The{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              selector_matches
            </code>{" "}
            pattern allows you to target specific links using CSS selectors.
            Only links matching the selector will be prerendered.
          </p>

          <CodeBlock title="Current Rule:" code={SPECULATION_RULE_CONFIG} />

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            This pattern matches any link with the{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              prerender-link
            </code>{" "}
            CSS class. The eagerness level is set to "moderate", which means
            prerendering is triggered when you hover over a matching link for
            200ms.
          </p>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-semibold">Test Links</h2>

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
              ✓ These WILL be prerendered (have .prerender-link class):
            </h3>
            <div className="space-y-3">
              <a
                href="/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY"
                className="prerender-link block rounded-lg border border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:hover:bg-green-900"
              >
                <div className="font-medium">One Way Flight Search</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  /en-id/flight/fullsearch
                </div>
                <div className="mt-2 text-xs font-mono text-green-700 dark:text-green-400">
                  className="prerender-link"
                </div>
              </a>

              <a
                href="/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY"
                className="prerender-link block rounded-lg border border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:hover:bg-green-900"
              >
                <div className="font-medium">Round Trip Flight Search</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  /en-id/flight/fulltwosearch
                </div>
                <div className="mt-2 text-xs font-mono text-green-700 dark:text-green-400">
                  className="prerender-link"
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
              ✗ This will NOT be prerendered (no .prerender-link class):
            </h3>
            <a
              href="/en-id/flight/fullsearch?ap=DPS.CGK&dt=01-01-2026.NA&ps=1.0.0&sc=ECONOMY"
              className="block rounded-lg border border-red-200 bg-red-50 p-4 transition-colors hover:bg-red-100 dark:border-red-900 dark:bg-red-950 dark:hover:bg-red-900"
            >
              <div className="font-medium">
                Different Flight Search (No Prerender)
              </div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                /en-id/flight/fullsearch (different params)
              </div>
              <div className="mt-2 text-xs font-mono text-red-700 dark:text-red-400">
                No prerender-link class
              </div>
            </a>
          </div>
        </Card>

        <InfoBox variant="warning" title="How to verify:">
          <ol className="list-inside list-decimal space-y-1 text-sm">
            <li>Open DevTools (F12)</li>
            <li>Go to Application → Speculation Rules</li>
            <li>Notice only the green-bordered links are prerendered</li>
            <li>Click the green links: instant navigation</li>
            <li>Click the red link: normal loading (not prerendered)</li>
          </ol>
        </InfoBox>
      </PageContainer>
    </>
  );
}
