import type { OffRampSessionRequest } from "../types.js";
import { request } from "../client.js";

/** POST /off-ramp/sessions — Coinbase-hosted offramp (sessionToken + offrampUrl per API). */
export function createSession(
  baseUrl: string,
  apiKey: string,
  data: OffRampSessionRequest,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<Record<string, unknown>> {
  return request<Record<string, unknown>>(
    baseUrl,
    apiKey,
    "/off-ramp/sessions",
    { body: data },
    clientOpts
  );
}
