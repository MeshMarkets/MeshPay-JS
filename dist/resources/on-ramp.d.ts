import type { OnRampQuoteRequest, OnRampQuoteResponse, OnRampTradeRequest, RequestOptions } from "../types.js";
export declare function getQuote(baseUrl: string, apiKey: string, data: OnRampQuoteRequest): Promise<OnRampQuoteResponse>;
export declare function executeTrade(baseUrl: string, apiKey: string, data: OnRampTradeRequest, opts?: RequestOptions): Promise<Record<string, unknown>>;
//# sourceMappingURL=on-ramp.d.ts.map