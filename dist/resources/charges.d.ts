import type { Charge, CreateChargeRequest, CreateChargeResponse, CreatePooledChargeRequest, CreatePooledChargeResponse, FundChargeRequest, ListOptions, ListResponse, RefundChargeRequest, RequestOptions } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, options?: ListOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ListResponse<Charge>>;
export declare function get(baseUrl: string, apiKey: string, id: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<Charge>;
export declare function create(baseUrl: string, apiKey: string, data: CreateChargeRequest, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<CreateChargeResponse>;
export declare function createPooled(baseUrl: string, apiKey: string, data: CreatePooledChargeRequest, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<CreatePooledChargeResponse>;
export declare function fund(baseUrl: string, apiKey: string, chargeId: string, data?: FundChargeRequest, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<{
    status: string;
    tx_hash?: string;
}>;
export declare function cancel(baseUrl: string, apiKey: string, chargeId: string, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<{
    status: string;
    charge_id: string;
    escrow_id: string;
}>;
export declare function refund(baseUrl: string, apiKey: string, chargeId: string, data?: RefundChargeRequest, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<{
    status: string;
    tx_hash?: string;
}>;
//# sourceMappingURL=charges.d.ts.map