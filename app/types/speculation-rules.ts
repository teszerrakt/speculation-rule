// Shared TypeScript types for speculation rules configuration
export type Eagerness = "immediate" | "eager" | "moderate" | "conservative";

export type SpeculationRuleWhere = {
  and?: Array<{
    selector_matches?: string;
    href_matches?: string;
    relative_to?: "document" | "ruleset";
  }>;
  or?: Array<SpeculationRuleWhere>;
  not?: SpeculationRuleWhere;
};

export type SpeculationRule = {
  urls?: string[];
  where?: SpeculationRuleWhere;
  eagerness?: Eagerness;
  requires?: string[];
};

export type SpeculationRulesConfig = {
  prerender?: SpeculationRule[];
  prefetch?: SpeculationRule[];
  prefetch_with_subresources?: SpeculationRule[];
};
