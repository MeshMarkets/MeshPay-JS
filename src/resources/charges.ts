import type {
  Charge,
  CreateChargeRequest,
  RefundChargeRequest,
  FundChargeRequest,
  ListOptions,
  ListResponse,
  RequestOptions,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  options?: ListOptions
): Promise<ListResponse<Charge>> {
  return request<ListResponse<Charge>>(baseUrl, apiKey, "/charges", {
    method: "GET",
    params: options as Record<string, string | number | undefined>,
  });
}

export function get(baseUrl: string, apiKey: string, id: string): Promise<Charge> {
  return request<Charge>(baseUrl, apiKey, `/charges/${id}`, { method: "GET" });
}

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreateChargeRequest,
  opts?: RequestOptions
): Promise<{ charge_id: string; escrow_id: string; status: string }> {
  return request(baseUrl, apiKey, "/charges", {
    body: data,
    idempotencyKey: opts?.idempotencyKey,
  });
}

export function fund(
  baseUrl: string,
  apiKey: string,
  chargeId: string,
  data: FundChargeRequest,
  opts?: RequestOptions
): Promise<{ status: string }> {
  return request(baseUrl, apiKey, `/charges/${chargeId}/fund`, {
    body: data,
    idempotencyKey: opts?.idempotencyKey,
  });
}

export function refund(
  baseUrl: string,
  apiKey: string,
  chargeId: string,
  data?: RefundChargeRequest,
  opts?: RequestOptions
): Promise<{ status: string }> {
  return request(baseUrl, apiKey, `/charges/${chargeId}/refund`, {
    body: data ?? {},
    idempotencyKey: opts?.idempotencyKey,
  });
}
