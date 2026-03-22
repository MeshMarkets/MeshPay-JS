import type { Escrow, ListOptions, ListResponse, OpenEscrowDisputeRequest, ReleaseEscrowResponse, RequestOptions, ResolveEscrowDisputeRequest, ResolveEscrowDisputeResponse } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, options?: Pick<ListOptions, "limit" | "status">, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ListResponse<Escrow>>;
export declare function get(baseUrl: string, apiKey: string, id: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<Escrow>;
export declare function release(baseUrl: string, apiKey: string, escrowId: string, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ReleaseEscrowResponse>;
export declare function openDispute(baseUrl: string, apiKey: string, escrowId: string, data: OpenEscrowDisputeRequest, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<{
    status: string;
    tx_hash: string;
}>;
export declare function resolveDispute(baseUrl: string, apiKey: string, escrowId: string, data: ResolveEscrowDisputeRequest, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ResolveEscrowDisputeResponse>;
//# sourceMappingURL=escrows.d.ts.map