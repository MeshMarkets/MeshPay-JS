import type { Payout, CreatePayoutRequest, ListOptions, ListResponse, RequestOptions } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, options?: ListOptions): Promise<ListResponse<Payout>>;
export declare function get(baseUrl: string, apiKey: string, id: string): Promise<Payout>;
export declare function create(baseUrl: string, apiKey: string, data: CreatePayoutRequest, opts?: RequestOptions): Promise<Payout>;
//# sourceMappingURL=payouts.d.ts.map