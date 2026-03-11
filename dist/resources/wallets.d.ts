import type { Wallet } from "../types.js";
export declare function create(baseUrl: string, apiKey: string, data: {
    account_id: string;
}): Promise<Wallet>;
export declare function getByAccountId(baseUrl: string, apiKey: string, accountId: string): Promise<Wallet>;
//# sourceMappingURL=wallets.d.ts.map