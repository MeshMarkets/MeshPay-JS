import type { OffRampSessionRequest } from "../types.js";
/** POST /off-ramp/sessions — Coinbase-hosted offramp (sessionToken + offrampUrl per API). */
export declare function createSession(baseUrl: string, apiKey: string, data: OffRampSessionRequest, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<Record<string, unknown>>;
//# sourceMappingURL=off-ramp.d.ts.map