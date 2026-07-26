export interface ConsoleLog {
  type: string;
  message: string;
}

export interface NetworkRequest {
  url: string;
  method: string;
  status: number;
}

export interface JavaScriptException {
  message: string;
}

export interface LighthouseReport {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface ScanRequest {
  url: string;
}

/**
 * Result returned by the Playwright scanner only
 */
export interface BrowserScanResult {
  title: string;
  screenshot: string;
  consoleLogs: ConsoleLog[];
  networkRequests: NetworkRequest[];
  exceptions: JavaScriptException[];
}

/**
 * Final result returned to the API
 */
export interface ScanResult extends BrowserScanResult {
  lighthouse: LighthouseReport;
}

export interface LighthouseAudit {
  id: string;
  title: string;
  description: string;
  score: number | null;
}

export interface LighthouseReport {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;

  failedAudits: LighthouseAudit[];
}