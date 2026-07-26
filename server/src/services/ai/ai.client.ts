import { AIReport } from "../../types/ai.types.js";

export interface AIClient {
  generate(prompt: string): Promise<AIReport>;
}