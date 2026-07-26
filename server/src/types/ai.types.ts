export type Severity = "critical" | "high" | "medium" | "low";

export interface AIIssue {
  severity: Severity;
  category:
    | "Performance"
    | "Accessibility"
    | "SEO"
    | "Security"
    | "Network"
    | "JavaScript"
    | "Best Practices";

  title: string;
  description: string;
  impact: string;
   evidence: string;
  recommendation: string;
}

export interface AIReport {
  overallScore: number;
  summary: string;

  strengths: string[];

  issues: AIIssue[];

  quickWins: string[];

  finalVerdict: string;
}

