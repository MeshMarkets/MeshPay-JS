import type { OffRampQuoteRequest, OffRampQuoteResponse, OffRampTradeRequest, RequestOptions } from "../types.js";
export declare function getQuote(baseUrl: string, apiKey: string, data: OffRampQuoteRequest): Promise<OffRampQuoteResponse>;
export declare function executeTrade(baseUrl: string, apiKey: string, data: OffRampTradeRequest, opts?: RequestOptions): Promise<Record<string, unknown>>;
//# sourceMappingURL=off-ramp.d.ts.map