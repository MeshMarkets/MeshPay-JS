import type { OnRampSessionRequest } from "../types.js";
/** POST /on-ramp/sessions — Coinbase-hosted onramp (returns session.onrampUrl per API). */
export declare function createSession(baseUrl: string, apiKey: string, data: OnRampSessionRequest, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<Record<string, unknown>>;
//# sourceMappingURL=on-ramp.d.ts.map