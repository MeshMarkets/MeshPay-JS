/**
 * Mesh Pay JavaScript/TypeScript SDK for browser and React Native.
 * Aligned with mesh-pay/docs/openapi.yml (MeshPay API v1).
 */
import { type ClientConfig } from "./client.js";
import * as resources from "./resources/index.js";
import { verifySignature } from "./webhooks.js";
export type { ClientConfig, RequestConfig } from "./client.js";
export * from "./types.js";
export { verifySignature } from "./webhooks.js";
export interface Config extends ClientConfig {
}
export declare class MeshPay {
    private baseUrl;
    private apiKey;
    private clientOpts;
    constructor(config: Config);
    get health(): {
        get: () => Promise<import("./types.js").HealthResponse>;
    };
    get accounts(): {
        list: () => Promise<import("./types.js").ListResponse<import("./types.js").AccountMembership>>;
        create: (data: Parameters<typeof resources.accounts.create>[2]) => Promise<import("./types.js").CreateAccountResponse>;
        deleteMembership: (membershipId: string) => Promise<void>;
    };
    get wallets(): {
        list: () => Promise<import("./types.js").ListResponse<import("./types.js").WalletSummary>>;
        getDetail: (membershipId: string, options?: Parameters<typeof resources.wallets.getDetail>[3]) => Promise<import("./types.js").WalletDetail>;
    };
    get charges(): {
        list: (options?: Parameters<typeof resources.charges.list>[2]) => Promise<import("./types.js").ListResponse<import("./types.js").Charge>>;
        get: (id: string) => Promise<import("./types.js").Charge>;
        create: (data: Parameters<typeof resources.charges.create>[2], opts?: Parameters<typeof resources.charges.create>[3]) => Promise<import("./types.js").CreateChargeResponse>;
        createPooled: (data: Parameters<typeof resources.charges.createPooled>[2], opts?: Parameters<typeof resources.charges.createPooled>[3]) => Promise<import("./types.js").CreatePooledChargeResponse>;
        fund: (chargeId: string, data?: Parameters<typeof resources.charges.fund>[3], opts?: Parameters<typeof resources.charges.fund>[4]) => Promise<{
            status: string;
            tx_hash?: string;
        }>;
        cancel: (chargeId: string, opts?: Parameters<typeof resources.charges.cancel>[3]) => Promise<{
            status: string;
            charge_id: string;
            escrow_id: string;
        }>;
        refund: (chargeId: string, data?: Parameters<typeof resources.charges.refund>[3], opts?: Parameters<typeof resources.charges.refund>[4]) => Promise<{
            status: string;
            tx_hash?: string;
        }>;
    };
    get escrows(): {
        list: (options?: Parameters<typeof resources.escrows.list>[2]) => Promise<import("./types.js").ListResponse<import("./types.js").Escrow>>;
        get: (id: string) => Promise<import("./types.js").Escrow>;
        release: (escrowId: string, opts?: Parameters<typeof resources.escrows.release>[3]) => Promise<import("./types.js").ReleaseEscrowResponse>;
        createContribution: (escrowId: string, data: Parameters<typeof resources.escrows.createContribution>[3], opts?: Parameters<typeof resources.escrows.createContribution>[4]) => Promise<Record<string, unknown>>;
        setPayee: (escrowId: string, data: Parameters<typeof resources.escrows.setPayee>[3], opts?: Parameters<typeof resources.escrows.setPayee>[4]) => Promise<Record<string, unknown>>;
        cancelPool: (escrowId: string, opts?: Parameters<typeof resources.escrows.cancelPool>[3]) => Promise<Record<string, unknown>>;
        openDispute: (escrowId: string, data: Parameters<typeof resources.escrows.openDispute>[3]) => Promise<{
            status: string;
            tx_hash: string;
        }>;
        resolveDispute: (escrowId: string, data: Parameters<typeof resources.escrows.resolveDispute>[3], opts?: Parameters<typeof resources.escrows.resolveDispute>[4]) => Promise<import("./types.js").ResolveEscrowDisputeResponse>;
    };
    get webhookEndpoints(): {
        list: () => Promise<import("./types.js").WebhookEndpoint[]>;
        get: (id: string) => Promise<import("./types.js").WebhookEndpoint>;
        create: (data: Parameters<typeof resources.webhookEndpoints.create>[2]) => Promise<import("./types.js").WebhookEndpointDetail>;
        update: (id: string, data: Parameters<typeof resources.webhookEndpoints.update>[3]) => Promise<import("./types.js").WebhookEndpoint>;
        delete: (id: string) => Promise<void>;
        listDeliveries: (id: string, options?: Parameters<typeof resources.webhookEndpoints.listDeliveries>[3]) => Promise<Record<string, unknown>[]>;
    };
    get onRamp(): {
        createSession: (data: Parameters<typeof resources.onRamp.createSession>[2]) => Promise<Record<string, unknown>>;
    };
    get offRamp(): {
        createSession: (data: Parameters<typeof resources.offRamp.createSession>[2]) => Promise<Record<string, unknown>>;
    };
    get webhooks(): {
        verifySignature: typeof verifySignature;
    };
}
//# sourceMappingURL=index.d.ts.map