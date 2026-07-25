import { scanWebsite } from "../core/browser/playwright.scanner.js";import { ScanInput } from "../validators/scan.validator.js";

export class ScanService {
  public async scan(payload: ScanInput) {
    return await scanWebsite(payload.url);
  }
}