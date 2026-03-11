import type { Account, CreateAccountRequest } from "../types.js";
import { request } from "../client.js";

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreateAccountRequest
): Promise<Account> {
  return request<Account>(baseUrl, apiKey, "/accounts", { body: data });
}
