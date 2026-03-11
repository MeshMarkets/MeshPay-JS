/**
 * Mesh Pay JavaScript/TypeScript SDK for browser and React Native.
 * Full API client with separation of concerns.
 */

import { getBaseUrl } from "./client.js";
import * as resources from "./resources/index.js";
import { verifySignature } from "./webhooks.js";

export type { ClientConfig, RequestConfig } from "./client.js";
export * from "./types.js";
export { verifySignature } from "./webhooks.js";

export interface Config {
  apiKey: string;
  baseUrl?: string;
}

export class MeshPay {
  private baseUrl: string;
  private apiKey: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = getBaseUrl(config);
  }

  get health() {
    return {
      get: () => resources.health.getHealth(this.baseUrl, this.apiKey),
    };
  }

  get accounts() {
    return {
      create: (data: Parameters<typeof resources.accounts.create>[2]) =>
        resources.accounts.create(this.baseUrl, this.apiKey, data),
    };
  }

  get wallets() {
    return {
      create: (data: { account_id: string }) =>
        resources.wallets.create(this.baseUrl, this.apiKey, data),
      getByAccountId: (accountId: string) =>
        resources.wallets.getByAccountId(this.baseUrl, this.apiKey, accountId),
    };
  }

  get charges() {
    return {
      list: (options?: Parameters<typeof resources.charges.list>[2]) =>
        resources.charges.list(this.baseUrl, this.apiKey, options),
      get: (id: string) => resources.charges.get(this.baseUrl, this.apiKey, id),
      create: (
        data: Parameters<typeof resources.charges.create>[2],
        opts?: Parameters<typeof resources.charges.create>[3]
      ) => resources.charges.create(this.baseUrl, this.apiKey, data, opts),
      fund: (
        chargeId: string,
        data: Parameters<typeof resources.charges.fund>[3],
        opts?: Parameters<typeof resources.charges.fund>[4]
      ) => resources.charges.fund(this.baseUrl, this.apiKey, chargeId, data, opts),
      refund: (
        chargeId: string,
        data?: Parameters<typeof resources.charges.refund>[3],
        opts?: Parameters<typeof resources.charges.refund>[4]
      ) => resources.charges.refund(this.baseUrl, this.apiKey, chargeId, data, opts),
    };
  }

  get escrows() {
    return {
      list: (options?: Parameters<typeof resources.escrows.list>[2]) =>
        resources.escrows.list(this.baseUrl, this.apiKey, options),
      get: (id: string) => resources.escrows.get(this.baseUrl, this.apiKey, id),
      release: (
        escrowId: string,
        opts?: Parameters<typeof resources.escrows.release>[3]
      ) => resources.escrows.release(this.baseUrl, this.apiKey, escrowId, opts),
    };
  }

  get payouts() {
    return {
      list: (options?: Parameters<typeof resources.payouts.list>[2]) =>
        resources.payouts.list(this.baseUrl, this.apiKey, options),
      get: (id: string) => resources.payouts.get(this.baseUrl, this.apiKey, id),
      create: (
        data: Parameters<typeof resources.payouts.create>[2],
        opts?: Parameters<typeof resources.payouts.create>[3]
      ) => resources.payouts.create(this.baseUrl, this.apiKey, data, opts),
    };
  }

  get apiKeys() {
    return {
      list: () => resources.apiKeys.list(this.baseUrl, this.apiKey),
      create: (data?: Parameters<typeof resources.apiKeys.create>[2]) =>
        resources.apiKeys.create(this.baseUrl, this.apiKey, data),
      delete: (id: string) => resources.apiKeys.del(this.baseUrl, this.apiKey, id),
    };
  }

  get webhookEndpoints() {
    return {
      list: () => resources.webhookEndpoints.list(this.baseUrl, this.apiKey),
      get: (id: string) => resources.webhookEndpoints.get(this.baseUrl, this.apiKey, id),
      create: (data: Parameters<typeof resources.webhookEndpoints.create>[2]) =>
        resources.webhookEndpoints.create(this.baseUrl, this.apiKey, data),
      update: (
        id: string,
        data: Parameters<typeof resources.webhookEndpoints.update>[3]
      ) => resources.webhookEndpoints.update(this.baseUrl, this.apiKey, id, data),
      delete: (id: string) => resources.webhookEndpoints.del(this.baseUrl, this.apiKey, id),
    };
  }

  get onRamp() {
    return {
      getQuote: (data: Parameters<typeof resources.onRamp.getQuote>[2]) =>
        resources.onRamp.getQuote(this.baseUrl, this.apiKey, data),
      executeTrade: (
        data: Parameters<typeof resources.onRamp.executeTrade>[2],
        opts?: Parameters<typeof resources.onRamp.executeTrade>[3]
      ) => resources.onRamp.executeTrade(this.baseUrl, this.apiKey, data, opts),
    };
  }

  get offRamp() {
    return {
      getQuote: (data: Parameters<typeof resources.offRamp.getQuote>[2]) =>
        resources.offRamp.getQuote(this.baseUrl, this.apiKey, data),
      executeTrade: (
        data: Parameters<typeof resources.offRamp.executeTrade>[2],
        opts?: Parameters<typeof resources.offRamp.executeTrade>[3]
      ) => resources.offRamp.executeTrade(this.baseUrl, this.apiKey, data, opts),
    };
  }

  get webhooks() {
    return {
      verifySignature,
    };
  }
}
