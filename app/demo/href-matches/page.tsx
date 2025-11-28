import { Metadata } from "next";
import { SpeculationRules } from "@/components/SpeculationRules";
import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InfoBox } from "@/components/ui/InfoBox";
import { SpeculationRulesConfig } from "@/types/speculation-rules";

export const metadata: Metadata = {
  title: "href_matches Demo - Speculation Rules",
  description: "Demonstration of href_matches speculation rule pattern",
};

const SPECULATION_RULE_CONFIG: SpeculationRulesConfig = {
  prerender: [
    {
      where: {
        and: [{ href_matches: "/*-*/flight/*search*" }],
      },
      eagerness: "moderate",
    },
  ],
};

export default function HrefMatchesDemo() {
  return (
    <>
      <SpeculationRules config={SPECULATION_RULE_CONFIG} />

      <PageContainer>
        <PageHeader
          title="href_matches Demo"
          description="Pattern-based URL matching for speculation rules"
        />

        <Card>
          <h2 className="mb-4 text-xl font-semibold">How it works</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            The{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              href_matches
            </code>{" "}
            pattern allows you to specify URL patterns using wildcards. Any link
            matching the pattern will be prerendered.
          </p>

          <CodeBlock title="Current Rule:" code={SPECULATION_RULE_CONFIG} />

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            This pattern matches URLs with a locale format{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              /*-*/
            </code>{" "}
            (e.g., /en-id/, /en-us/, /th-th/), followed by{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              /flight/
            </code>
            , and containing{" "}
            <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
              search
            </code>
            . The eagerness level is set to "moderate", which means prerendering
            is triggered when you hover over a matching link for 200ms.
          </p>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-semibold">Test Links</h2>
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            Hover over these links to trigger prerendering, then click to see
            instant navigation:
          </p>

          <div className="space-y-3">
            <a
              href="/en-id/flight/fullsearch?ap=CGK.SIN&dt=28-12-2025.NA&ps=1.0.0&sc=ECONOMY"
              className="block rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <div className="font-medium">One Way Flight Search</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                /en-id/flight/fullsearch
              </div>
            </a>

            <a
              href="/en-id/flight/fulltwosearch?ap=CGK.SIN&dt=28-12-2025.30-12-2025&ps=1.0.0&sc=ECONOMY"
              className="block rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <div className="font-medium">Round Trip Flight Search</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                /en-id/flight/fulltwosearch
              </div>
            </a>
          </div>
        </Card>

        <InfoBox variant="warning" title="How to verify:">
          <ol className="list-inside list-decimal space-y-1 text-sm">
            <li>Open DevTools (F12)</li>
            <li>Go to Application → Speculation Rules</li>
            <li>See the active prerender rules and matched URLs</li>
            <li>Check Network tab for prerender requests</li>
            <li>Hover over links for 200ms to trigger prerendering</li>
            <li>Click links and notice instant navigation</li>
          </ol>
        </InfoBox>
      </PageContainer>
    </>
  );
}
