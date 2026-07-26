export const aiResponseSchema = {
  type: "object",
  properties: {
    overallScore: {
      type: "number",
    },

    summary: {
      type: "string",
    },

    strengths: {
      type: "array",
      items: {
        type: "string",
      },
    },

    issues: {
      type: "array",
      items: {
        type: "object",
        properties: {
          severity: {
            type: "string",
            enum: ["critical", "high", "medium", "low"],
          },

          category: {
            type: "string",
          },

          title: {
            type: "string",
          },

          description: {
            type: "string",
          },

          impact: {
            type: "string",
          },

          recommendation: {
            type: "string",
          },
        },

        required: [
          "severity",
          "category",
          "title",
          "description",
          "impact",
          "recommendation",
        ],
      },
    },

    quickWins: {
      type: "array",
      items: {
        type: "string",
      },
    },

    finalVerdict: {
      type: "string",
    },
  },

  required: [
    "overallScore",
    "summary",
    "strengths",
    "issues",
    "quickWins",
    "finalVerdict",
  ],
} as const;