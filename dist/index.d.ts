/**
 * Mesh Pay JavaScript/TypeScript SDK for browser and React Native.
 * Full API client with separation of concerns.
 */
import * as resources from "./resources/index.js";
import { verifySignature } from "./webhooks.js";
export type { ClientConfig, RequestConfig } from "./client.js";
export * from "./types.js";
export { verifySignature } from "./webhooks.js";
export interface Config {
    apiKey: string;
    baseUrl?: string;
}
export declare class MeshPay {
    private baseUrl;
    private apiKey;
    constructor(config: Config);
    get health(): {
        get: () => Promise<import("./types.js").HealthResponse>;
    };
    get accounts(): {
        create: (data: Parameters<typeof resources.accounts.create>[2]) => Promise<import("./types.js").Account>;
    };
    get wallets(): {
        create: (data: {
            account_id: string;
        }) => Promise<import("./types.js").Wallet>;
        getByAccountId: (accountId: string) => Promise<import("./types.js").Wallet>;
    };
    get charges(): {
        list: (options?: Parameters<typeof resources.charges.list>[2]) => Promise<import("./types.js").ListResponse<import("./types.js").Charge>>;
        get: (id: string) => Promise<import("./types.js").Charge>;
        create: (data: Parameters<typeof resources.charges.create>[2], opts?: Parameters<typeof resources.charges.create>[3]) => Promise<{
            charge_id: string;
            escrow_id: string;
            status: string;
        }>;
        fund: (chargeId: string, data: Parameters<typeof resources.charges.fund>[3], opts?: Parameters<typeof resources.charges.fund>[4]) => Promise<{
            status: string;
        }>;
        refund: (chargeId: string, data?: Parameters<typeof resources.charges.refund>[3], opts?: Parameters<typeof resources.charges.refund>[4]) => Promise<{
            status: string;
        }>;
    };
    get escrows(): {
        list: (options?: Parameters<typeof resources.escrows.list>[2]) => Promise<import("./types.js").ListResponse<import("./types.js").Escrow>>;
        get: (id: string) => Promise<import("./types.js").Escrow>;
        release: (escrowId: string, opts?: Parameters<typeof resources.escrows.release>[3]) => Promise<import("./types.js").ReleaseEscrowResponse>;
    };
    get payouts(): {
        list: (options?: Parameters<typeof resources.payouts.list>[2]) => Promise<import("./types.js").ListResponse<import("./types.js").Payout>>;
        get: (id: string) => Promise<import("./types.js").Payout>;
        create: (data: Parameters<typeof resources.payouts.create>[2], opts?: Parameters<typeof resources.payouts.create>[3]) => Promise<import("./types.js").Payout>;
    };
    get apiKeys(): {
        list: () => Promise<import("./types.js").ApiKey[]>;
        create: (data?: Parameters<typeof resources.apiKeys.create>[2]) => Promise<import("./types.js").ApiKey>;
        delete: (id: string) => Promise<void>;
    };
    get webhookEndpoints(): {
        list: () => Promise<import("./types.js").WebhookEndpoint[]>;
        get: (id: string) => Promise<import("./types.js").WebhookEndpoint>;
        create: (data: Parameters<typeof resources.webhookEndpoints.create>[2]) => Promise<import("./types.js").WebhookEndpointDetail>;
        update: (id: string, data: Parameters<typeof resources.webhookEndpoints.update>[3]) => Promise<import("./types.js").WebhookEndpoint>;
        delete: (id: string) => Promise<void>;
    };
    get onRamp(): {
        getQuote: (data: Parameters<typeof resources.onRamp.getQuote>[2]) => Promise<import("./types.js").OnRampQuoteResponse>;
        executeTrade: (data: Parameters<typeof resources.onRamp.executeTrade>[2], opts?: Parameters<typeof resources.onRamp.executeTrade>[3]) => Promise<Record<string, unknown>>;
    };
    get offRamp(): {
        getQuote: (data: Parameters<typeof resources.offRamp.getQuote>[2]) => Promise<import("./types.js").OffRampQuoteResponse>;
        executeTrade: (data: Parameters<typeof resources.offRamp.executeTrade>[2], opts?: Parameters<typeof resources.offRamp.executeTrade>[3]) => Promise<Record<string, unknown>>;
    };
    get webhooks(): {
        verifySignature: typeof verifySignature;
    };
}
//# sourceMappingURL=index.d.ts.map