import type { OnRampSessionRequest } from "../types.js";
import { request } from "../client.js";

/** POST /on-ramp/sessions — Coinbase-hosted onramp (returns session.onrampUrl per API). */
export function createSession(
  baseUrl: string,
  apiKey: string,
  data: OnRampSessionRequest,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<Record<string, unknown>> {
  return request<Record<string, unknown>>(
    baseUrl,
    apiKey,
    "/on-ramp/sessions",
    { body: data },
    clientOpts
  );
}
