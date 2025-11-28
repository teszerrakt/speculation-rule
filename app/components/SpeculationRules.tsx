import Script from "next/script";
import { SpeculationRulesConfig } from "@/types/speculation-rules";

type SpeculationRulesProps = {
  config: SpeculationRulesConfig;
};

export function SpeculationRules({ config }: SpeculationRulesProps) {
  return (
    <Script id="speculation-rules" type="speculationrules">
      {JSON.stringify(config)}
    </Script>
  );
}
