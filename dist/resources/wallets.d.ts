import type { ListResponse, WalletDetail, WalletNetwork, WalletSummary } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ListResponse<WalletSummary>>;
export declare function getDetail(baseUrl: string, apiKey: string, membershipId: string, options?: {
    network?: WalletNetwork;
}, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<WalletDetail>;
//# sourceMappingURL=wallets.d.ts.map