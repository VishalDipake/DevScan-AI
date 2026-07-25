import { scanWebsite } from "../core/browser/playwright.scanner.js";
import { ScanInput } from "../validators/scan.validator.js";
import { runLighthouse } from "./lighthouse.service.js";

export class ScanService {
  public async scan(payload: ScanInput) {
    const scanResult = await scanWebsite(payload.url);

    const lighthouse = await runLighthouse(payload.url);

    return {
      ...scanResult,
      lighthouse,
    };
  }
}