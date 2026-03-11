import type { Wallet } from "../types.js";
import { request } from "../client.js";

export function create(
  baseUrl: string,
  apiKey: string,
  data: { account_id: string }
): Promise<Wallet> {
  return request<Wallet>(baseUrl, apiKey, "/wallets", { body: data });
}

export function getByAccountId(
  baseUrl: string,
  apiKey: string,
  accountId: string
): Promise<Wallet> {
  return request<Wallet>(baseUrl, apiKey, "/wallets", {
    method: "GET",
    params: { account_id: accountId },
  });
}
