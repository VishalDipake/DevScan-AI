export type Severity = "critical" | "high" | "medium" | "low";
export interface Issue { evidence?: string; severity: Severity; category: string; title: string; description: string; impact: string; recommendation: string }
export interface Audit { id: string; title: string; description: string; score: number }
export interface Lighthouse { performance: number; accessibility: number; bestPractices: number; seo: number; failedAudits: Audit[] }
export interface NetworkRequest { method?: string; status?: number; url?: string; [key: string]: unknown }
export interface ConsoleLog { type?: string; level?: string; text?: string; message?: string; [key: string]: unknown }
export interface Exception { message?: string; stack?: string; source?: string; [key: string]: unknown }
export interface ScanResult { title?: string; screenshot?: string; consoleLogs?: ConsoleLog[]; networkRequests?: NetworkRequest[]; exceptions?: Exception[]; lighthouse: Lighthouse; aiReport: { overallScore: number; summary?: string; strengths?: string[]; issues?: Issue[]; quickWins?: string[]; finalVerdict?: string } }
export interface ScanOutcome { url: string; result: ScanResult }
