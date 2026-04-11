import type {
  ListResponse,
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
