import { scanWebsite } from "../core/browser/playwright.scanner.js";
import { ScanInput } from "../validators/scan.validator.js";
import { runLighthouse } from "./lighthouse.service.js";
import { AIService } from "./ai/ai.service.js";

export class ScanService {
  private readonly aiService = new AIService();

  public async scan(payload: ScanInput) {
    const browserResult = await scanWebsite(payload.url);

    const lighthouse = await runLighthouse(payload.url);

    const scanResult = {
      ...browserResult,
      lighthouse,
    };

    const aiReport = await this.aiService.analyze(scanResult);

    return {
      ...scanResult,
      aiReport,
    };
  }
}