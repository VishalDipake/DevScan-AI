import axios from "axios";
import type { ApiError } from "../types/api";

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL, timeout: 120000, headers: { "Content-Type": "application/json" } });
export const assetUrl = (path: string) => /^https?:/i.test(path) ? path : `${(import.meta.env.VITE_API_URL || "").replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
export function apiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const body = error.response?.data;
    const message = typeof body === "object" && body !== null && "message" in body ? String(body.message) : undefined;
    if (!error.response) return { status, message: error.code === "ECONNABORTED" ? "The scan took too long to respond. Please try again." : "Unable to reach DevLens API." };
    return { status, message: message || (status && status >= 500 ? "DevLens couldn't complete this scan." : "DevLens couldn't process this request.") };
  }
  return { message: error instanceof Error ? error.message : "An unexpected error occurred." };
}
