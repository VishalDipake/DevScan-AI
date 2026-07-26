import { GoogleGenAI } from "@google/genai";
import { AIClient } from "./ai.client.js";
import { AIReport } from "../../types/ai.types.js";
import { aiResponseSchema } from "./ai.schema.js";
import { aiReportSchema } from "./ai.validator.js";

console.log({
  GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
  GOOGLE_GENAI_USE_VERTEXAI: process.env.GOOGLE_GENAI_USE_VERTEXAI,
  GOOGLE_APPLICATION_CREDENTIALS:
    process.env.GOOGLE_APPLICATION_CREDENTIALS,
});



export class GeminiClient implements AIClient {
 async generate(prompt: string): Promise<AIReport> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const ai = new GoogleGenAI({
    apiKey,
  });

  const model = process.env.GEMINI_MODEL ??  "gemini-3.5-flash";

const response = await ai.models.generateContent({
  model,
  contents: prompt,
  config: {
    responseMimeType: "application/json",
    responseSchema: aiResponseSchema,
  },
});

  const text = response.text;

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  const parsed = JSON.parse(text);

  return aiReportSchema.parse(parsed);
}
}