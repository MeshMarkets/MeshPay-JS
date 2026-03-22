import type { AccountMembership, CreateAccountRequest, CreateAccountResponse, ListResponse } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<ListResponse<AccountMembership>>;
export declare function create(baseUrl: string, apiKey: string, data: CreateAccountRequest, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<CreateAccountResponse>;
export declare function deleteMembership(baseUrl: string, apiKey: string, membershipId: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<void>;
//# sourceMappingURL=accounts.d.ts.map