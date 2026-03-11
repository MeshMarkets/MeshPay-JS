import type {
  Escrow,
  ReleaseEscrowResponse,
  ListOptions,
  ListResponse,
  RequestOptions,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  options?: ListOptions
): Promise<ListResponse<Escrow>> {
  return request<ListResponse<Escrow>>(baseUrl, apiKey, "/escrows", {
    method: "GET",
    params: options as Record<string, string | number | undefined>,
  });
}

export function get(baseUrl: string, apiKey: string, id: string): Promise<Escrow> {
  return request<Escrow>(baseUrl, apiKey, `/escrows/${id}`, { method: "GET" });
}

export function release(
  baseUrl: string,
  apiKey: string,
  escrowId: string,
  opts?: RequestOptions
): Promise<ReleaseEscrowResponse> {
  return request(baseUrl, apiKey, `/escrows/${escrowId}/release`, {
    body: {},
    idempotencyKey: opts?.idempotencyKey,
  });
}
