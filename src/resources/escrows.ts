import type {
  Escrow,
  ListOptions,
  ListResponse,
  OpenEscrowDisputeRequest,
  ReleaseEscrowResponse,
  RequestOptions,
  ResolveEscrowDisputeRequest,
  ResolveEscrowDisputeResponse,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  options?: Pick<ListOptions, "limit" | "status">,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ListResponse<Escrow>> {
  return request<ListResponse<Escrow>>(
    baseUrl,
    apiKey,
    "/escrows",
    {
      method: "GET",
      params: options as Record<string, string | number | undefined>,
    },
    clientOpts
  );
}

export function get(
  baseUrl: string,
  apiKey: string,
  id: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<Escrow> {
  return request<Escrow>(
    baseUrl,
    apiKey,
    `/escrows/${id}`,
    { method: "GET" },
    clientOpts
  );
}

export function release(
  baseUrl: string,
  apiKey: string,
  escrowId: string,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ReleaseEscrowResponse> {
  return request<ReleaseEscrowResponse>(
    baseUrl,
    apiKey,
    `/escrows/${escrowId}/release`,
    {
      body: {},
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}

export function openDispute(
  baseUrl: string,
  apiKey: string,
  escrowId: string,
  data: OpenEscrowDisputeRequest,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<{ status: string; tx_hash: string }> {
  return request(
    baseUrl,
    apiKey,
    `/escrows/${escrowId}/open-dispute`,
    { body: data },
    clientOpts
  );
}

export function resolveDispute(
  baseUrl: string,
  apiKey: string,
  escrowId: string,
  data: ResolveEscrowDisputeRequest,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ResolveEscrowDisputeResponse> {
  return request<ResolveEscrowDisputeResponse>(
    baseUrl,
    apiKey,
    `/escrows/${escrowId}/resolve-dispute`,
    {
      body: data,
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}
