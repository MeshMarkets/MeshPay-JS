/**
 * Mesh Pay JavaScript/TypeScript SDK for browser and React Native.
 * Aligned with mesh-pay/docs/openapi.yml (MeshPay API v1).
 */

import { getBaseUrl, type ClientConfig } from "./client.js";
import * as resources from "./resources/index.js";
import { verifySignature } from "./webhooks.js";

export type { ClientConfig, RequestConfig } from "./client.js";
export * from "./types.js";
export { verifySignature } from "./webhooks.js";

export interface Config extends ClientConfig {}

export class MeshPay {
  private baseUrl: string;
  private apiKey: string;
  private clientOpts: { useXApiKeyHeader?: boolean };

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = getBaseUrl(config);
    this.clientOpts = { useXApiKeyHeader: config.useXApiKeyHeader };
  }

  get health() {
    return {
      get: () => resources.health.getHealth(this.baseUrl, this.apiKey, this.clientOpts),
    };
  }

  get accounts() {
    return {
      list: () => resources.accounts.list(this.baseUrl, this.apiKey, this.clientOpts),
      create: (data: Parameters<typeof resources.accounts.create>[2]) =>
        resources.accounts.create(this.baseUrl, this.apiKey, data, this.clientOpts),
      deleteMembership: (membershipId: string) =>
        resources.accounts.deleteMembership(
          this.baseUrl,
          this.apiKey,
          membershipId,
          this.clientOpts
        ),
    };
  }

  get wallets() {
    return {
      list: () => resources.wallets.list(this.baseUrl, this.apiKey, this.clientOpts),
      getDetail: (
        membershipId: string,
        options?: Parameters<typeof resources.wallets.getDetail>[3]
      ) =>
        resources.wallets.getDetail(
          this.baseUrl,
          this.apiKey,
          membershipId,
          options,
          this.clientOpts
        ),
    };
  }

  get charges() {
    return {
      list: (options?: Parameters<typeof resources.charges.list>[2]) =>
        resources.charges.list(this.baseUrl, this.apiKey, options, this.clientOpts),
      get: (id: string) => resources.charges.get(this.baseUrl, this.apiKey, id, this.clientOpts),
      create: (
        data: Parameters<typeof resources.charges.create>[2],
        opts?: Parameters<typeof resources.charges.create>[3]
      ) => resources.charges.create(this.baseUrl, this.apiKey, data, opts, this.clientOpts),
      createPooled: (
        data: Parameters<typeof resources.charges.createPooled>[2],
        opts?: Parameters<typeof resources.charges.createPooled>[3]
      ) =>
        resources.charges.createPooled(
          this.baseUrl,
          this.apiKey,
          data,
          opts,
          this.clientOpts
        ),
      fund: (
        chargeId: string,
        data?: Parameters<typeof resources.charges.fund>[3],
        opts?: Parameters<typeof resources.charges.fund>[4]
      ) =>
        resources.charges.fund(
          this.baseUrl,
          this.apiKey,
          chargeId,
          data,
          opts,
          this.clientOpts
        ),
      cancel: (chargeId: string, opts?: Parameters<typeof resources.charges.cancel>[3]) =>
        resources.charges.cancel(this.baseUrl, this.apiKey, chargeId, opts, this.clientOpts),
      refund: (
        chargeId: string,
        data?: Parameters<typeof resources.charges.refund>[3],
        opts?: Parameters<typeof resources.charges.refund>[4]
      ) =>
        resources.charges.refund(
          this.baseUrl,
          this.apiKey,
          chargeId,
          data,
          opts,
          this.clientOpts
        ),
    };
  }

  get escrows() {
    return {
      list: (options?: Parameters<typeof resources.escrows.list>[2]) =>
        resources.escrows.list(this.baseUrl, this.apiKey, options, this.clientOpts),
      get: (id: string) => resources.escrows.get(this.baseUrl, this.apiKey, id, this.clientOpts),
      release: (
        escrowId: string,
        opts?: Parameters<typeof resources.escrows.release>[3]
      ) => resources.escrows.release(this.baseUrl, this.apiKey, escrowId, opts, this.clientOpts),
      createContribution: (
        escrowId: string,
        data: Parameters<typeof resources.escrows.createContribution>[3],
        opts?: Parameters<typeof resources.escrows.createContribution>[4]
      ) =>
        resources.escrows.createContribution(
          this.baseUrl,
          this.apiKey,
          escrowId,
          data,
          opts,
          this.clientOpts
        ),
      setPayee: (
        escrowId: string,
        data: Parameters<typeof resources.escrows.setPayee>[3],
        opts?: Parameters<typeof resources.escrows.setPayee>[4]
      ) =>
        resources.escrows.setPayee(
          this.baseUrl,
          this.apiKey,
          escrowId,
          data,
          opts,
          this.clientOpts
        ),
      cancelPool: (
        escrowId: string,
        opts?: Parameters<typeof resources.escrows.cancelPool>[3]
      ) =>
        resources.escrows.cancelPool(
          this.baseUrl,
          this.apiKey,
          escrowId,
          opts,
          this.clientOpts
        ),
      openDispute: (
        escrowId: string,
        data: Parameters<typeof resources.escrows.openDispute>[3]
      ) =>
        resources.escrows.openDispute(
          this.baseUrl,
          this.apiKey,
          escrowId,
          data,
          this.clientOpts
        ),
      resolveDispute: (
        escrowId: string,
        data: Parameters<typeof resources.escrows.resolveDispute>[3],
        opts?: Parameters<typeof resources.escrows.resolveDispute>[4]
      ) =>
        resources.escrows.resolveDispute(
          this.baseUrl,
          this.apiKey,
          escrowId,
          data,
          opts,
          this.clientOpts
        ),
    };
  }

  get webhookEndpoints() {
    return {
      list: () => resources.webhookEndpoints.list(this.baseUrl, this.apiKey, this.clientOpts),
      get: (id: string) =>
        resources.webhookEndpoints.get(this.baseUrl, this.apiKey, id, this.clientOpts),
      create: (data: Parameters<typeof resources.webhookEndpoints.create>[2]) =>
        resources.webhookEndpoints.create(this.baseUrl, this.apiKey, data, this.clientOpts),
      update: (
        id: string,
        data: Parameters<typeof resources.webhookEndpoints.update>[3]
      ) =>
        resources.webhookEndpoints.update(
          this.baseUrl,
          this.apiKey,
          id,
          data,
          this.clientOpts
        ),
      delete: (id: string) =>
        resources.webhookEndpoints.del(this.baseUrl, this.apiKey, id, this.clientOpts),
      listDeliveries: (
        id: string,
        options?: Parameters<typeof resources.webhookEndpoints.listDeliveries>[3]
      ) =>
        resources.webhookEndpoints.listDeliveries(
          this.baseUrl,
          this.apiKey,
          id,
          options,
          this.clientOpts
        ),
    };
  }

  get onRamp() {
    return {
      createSession: (data: Parameters<typeof resources.onRamp.createSession>[2]) =>
        resources.onRamp.createSession(this.baseUrl, this.apiKey, data, this.clientOpts),
    };
  }

  get offRamp() {
    return {
      createSession: (data: Parameters<typeof resources.offRamp.createSession>[2]) =>
        resources.offRamp.createSession(this.baseUrl, this.apiKey, data, this.clientOpts),
    };
  }

  get webhooks() {
    return {
      verifySignature,
    };
  }
}
