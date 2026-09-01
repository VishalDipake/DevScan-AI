import { useCallback, useState } from "react";
import { scanWebsite } from "../services/scan.service";
import type { ApiError } from "../types/api";
import type { ScanOutcome } from "../types/scan";
export const scanStages = ["Preparing browser scan", "Collecting runtime behaviour", "Running Lighthouse audit", "Generating AI engineering review", "Building report"];
export function useScan() {
  const [loading, setLoading] = useState(false); const [error, setError] = useState<ApiError | null>(null); const [stage, setStage] = useState(0);
  const run = useCallback(async (url: string): Promise<ScanOutcome | null> => { setLoading(true); setError(null); setStage(0); const timer = window.setInterval(() => setStage(i => Math.min(i + 1, scanStages.length - 1)), 1800); try { const result = await scanWebsite(url); return { url, result }; } catch (err) { setError(err as ApiError); return null; } finally { window.clearInterval(timer); setLoading(false); } }, []);
  return { loading, error, stage, run, clearError: () => setError(null) };
}
