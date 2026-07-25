export interface ConsoleLog {
  type: string;
  message: string;
}

export interface ScanRequest {
  url: string;
}

export interface ScanResult {
  title: string;
  screenshot: string;
  consoleLogs: ConsoleLog[];
}

export interface NetworkRequest {
  url: string;
  method: string;
  status: number;
}

export interface ScanResult {
  title: string;
  screenshot: string;
  consoleLogs: ConsoleLog[];
  networkRequests: NetworkRequest[];
  exceptions: JavaScriptException[];
}

export interface JavaScriptException {
  message: string;
}