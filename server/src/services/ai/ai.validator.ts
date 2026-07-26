import { z } from "zod";

export const aiReportSchema = z.object({
  overallScore: z.number(),

  summary: z.string(),

  strengths: z.array(z.string()),

  issues: z.array(
    z.object({
        evidence: z.string().optional().default("Not provided by AI"),
      severity: z.enum([
        "critical",
        "high",
        "medium",
        "low",
      ]),

     category: z.enum([
  "Performance",
  "Accessibility",
  "SEO",
  "Security",
  "Network",
  "JavaScript",
  "Best Practices",
]),
      title: z.string(),

      description: z.string(),

      impact: z.string(),

      recommendation: z.string(),
    })
  ),

  quickWins: z.array(z.string()),

  finalVerdict: z.string(),
});