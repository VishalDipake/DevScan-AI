import { ScanResult } from "../../types/scan.types.js";
import { AIReport } from "../../types/ai.types.js";
import { buildPrompt } from "./prompt.builder.js";
import { GeminiClient } from "./gemini.client.js";

export class AIService {
  private client = new GeminiClient();

  async analyze(scan: ScanResult): Promise<AIReport> {
    const prompt = buildPrompt(scan);

    return this.client.generate(prompt);
  }
}