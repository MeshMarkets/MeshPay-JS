import type {
  AccountMembership,
  CreateAccountRequest,
  CreateAccountResponse,
  ListResponse,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ListResponse<AccountMembership>> {
  return request<ListResponse<AccountMembership>>(
    baseUrl,
    apiKey,
    "/accounts",
    { method: "GET" },
    clientOpts
  );
}

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreateAccountRequest,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<CreateAccountResponse> {
  return request<CreateAccountResponse>(
    baseUrl,
    apiKey,
    "/accounts",
    { body: data },
    clientOpts
  );
}

export function deleteMembership(
  baseUrl: string,
  apiKey: string,
  membershipId: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<void> {
  return request<void>(
    baseUrl,
    apiKey,
    `/accounts/${membershipId}`,
    { method: "DELETE" },
    clientOpts
  );
}
