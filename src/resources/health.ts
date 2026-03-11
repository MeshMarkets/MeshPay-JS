import type { HealthResponse } from "../types.js";
import { request } from "../client.js";

export function getHealth(baseUrl: string, apiKey: string): Promise<HealthResponse> {
  return request<HealthResponse>(baseUrl, apiKey, "/health", { method: "GET" });
}
