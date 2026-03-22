import type {
  FiatAccount,
  LinkFiatAccountRequest,
  ListResponse,
  RequestOptions,
  WalletDetail,
  WalletNetwork,
  WalletSummary,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ListResponse<WalletSummary>> {
  return request<ListResponse<WalletSummary>>(
    baseUrl,
    apiKey,
    "/wallets",
    { method: "GET" },
    clientOpts
  );
}

export function getDetail(
  baseUrl: string,
  apiKey: string,
  membershipId: string,
  options?: { network?: WalletNetwork },
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<WalletDetail> {
  return request<WalletDetail>(
    baseUrl,
    apiKey,
    `/wallets/${membershipId}`,
    {
      method: "GET",
      params: options?.network ? { network: options.network } : undefined,
    },
    clientOpts
  );
}

export function listFiatAccounts(
  baseUrl: string,
  apiKey: string,
  membershipId: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ListResponse<FiatAccount>> {
  return request<ListResponse<FiatAccount>>(
    baseUrl,
    apiKey,
    "/wallets/fiat-accounts",
    {
      method: "GET",
      params: { membership_id: membershipId },
    },
    clientOpts
  );
}

export function linkFiatAccount(
  baseUrl: string,
  apiKey: string,
  data: LinkFiatAccountRequest,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<Record<string, unknown> | void> {
  return request(
    baseUrl,
    apiKey,
    "/wallets/fiat-accounts",
    {
      body: data,
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}

export function unlinkFiatAccount(
  baseUrl: string,
  apiKey: string,
  membershipId: string,
  fiatAccountId: string,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<void> {
  return request<void>(
    baseUrl,
    apiKey,
    "/wallets/fiat-accounts",
    {
      method: "DELETE",
      params: { membership_id: membershipId, fiat_account_id: fiatAccountId },
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}
