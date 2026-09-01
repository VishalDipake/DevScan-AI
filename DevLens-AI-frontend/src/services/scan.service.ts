import { api, apiError } from "./api";
import type { ApiResponse } from "../types/api";
import type { ScanResult } from "../types/scan";
export async function scanWebsite(url: string): Promise<ScanResult> {
  try { const { data } = await api.post<ApiResponse<ScanResult>>("/api/scan", { url }); if (!data?.success || !data.data) throw new Error(data?.message || "DevLens returned an invalid scan response."); return data.data; }
  catch (error) { throw apiError(error); }
}
