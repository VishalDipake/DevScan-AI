import { LighthouseReport } from "../types/scan.types.js";

export async function runLighthouse(
  url: string
): Promise<LighthouseReport> {
  console.log(`Running Lighthouse for ${url}`);

  return {
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  };
}