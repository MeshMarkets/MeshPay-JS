import type {
  Payout,
  CreatePayoutRequest,
  ListOptions,
  ListResponse,
  RequestOptions,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  options?: ListOptions
): Promise<ListResponse<Payout>> {
  return request<ListResponse<Payout>>(baseUrl, apiKey, "/payouts", {
    method: "GET",
    params: options as Record<string, string | number | undefined>,
  });
}

export function get(baseUrl: string, apiKey: string, id: string): Promise<Payout> {
  return request<Payout>(baseUrl, apiKey, `/payouts/${id}`, { method: "GET" });
}

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreatePayoutRequest,
  opts?: RequestOptions
): Promise<Payout> {
  return request(baseUrl, apiKey, "/payouts", {
    body: data,
    idempotencyKey: opts?.idempotencyKey,
  });
}
