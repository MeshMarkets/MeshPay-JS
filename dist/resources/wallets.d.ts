import type { FiatAccount, LinkFiatAccountRequest, ListResponse, RequestOptions, WalletDetail, WalletNetwork, WalletSummary } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ListResponse<WalletSummary>>;
export declare function getDetail(baseUrl: string, apiKey: string, membershipId: string, options?: {
    network?: WalletNetwork;
}, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<WalletDetail>;
export declare function listFiatAccounts(baseUrl: string, apiKey: string, membershipId: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ListResponse<FiatAccount>>;
export declare function linkFiatAccount(baseUrl: string, apiKey: string, data: LinkFiatAccountRequest, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<Record<string, unknown> | void>;
export declare function unlinkFiatAccount(baseUrl: string, apiKey: string, membershipId: string, fiatAccountId: string, opts?: RequestOptions, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<void>;
//# sourceMappingURL=wallets.d.ts.map