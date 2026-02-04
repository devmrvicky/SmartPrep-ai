export type railsmartType = "included" | "ai-powered" | "instant" | "adaptive";
export type traditionalType =
  | "not-included"
  | "manual"
  | "email-support"
  | "static";
export interface IComparisonRows {
  feature: string;
  railsmart: railsmartType;
  traditional: traditionalType;
}

export const comparisonRows: IComparisonRows[] = [
  {
    feature: "Personalized Roadmap",
    railsmart: "included",
    traditional: "not-included",
  },
  {
    feature: "Weakness Detection",
    railsmart: "ai-powered",
    traditional: "manual",
  },
  {
    feature: "Live Doubt Solving",
    railsmart: "instant",
    traditional: "email-support",
  },
  {
    feature: "Mock Test Quality",
    railsmart: "adaptive",
    traditional: "static",
  },
];
