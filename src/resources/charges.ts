import type {
  Charge,
  CreateChargeRequest,
  CreateChargeResponse,
  FundChargeRequest,
  ListOptions,
  ListResponse,
  RefundChargeRequest,
  RequestOptions,
} from "../types.js";
import { request } from "../client.js";

export function list(
  baseUrl: string,
  apiKey: string,
  options?: ListOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<ListResponse<Charge>> {
  return request<ListResponse<Charge>>(
    baseUrl,
    apiKey,
    "/charges",
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
): Promise<Charge> {
  return request<Charge>(
    baseUrl,
    apiKey,
    `/charges/${id}`,
    { method: "GET" },
    clientOpts
  );
}

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreateChargeRequest,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<CreateChargeResponse> {
  return request<CreateChargeResponse>(
    baseUrl,
    apiKey,
    "/charges",
    {
      body: data,
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}

export function fund(
  baseUrl: string,
  apiKey: string,
  chargeId: string,
  data?: FundChargeRequest,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<{ status: string; tx_hash?: string }> {
  return request(
    baseUrl,
    apiKey,
    `/charges/${chargeId}/fund`,
    {
      body: data ?? {},
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}

export function cancel(
  baseUrl: string,
  apiKey: string,
  chargeId: string,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<{ status: string; charge_id: string; escrow_id: string }> {
  return request(
    baseUrl,
    apiKey,
    `/charges/${chargeId}/cancel`,
    {
      body: {},
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}

export function refund(
  baseUrl: string,
  apiKey: string,
  chargeId: string,
  data?: RefundChargeRequest,
  opts?: RequestOptions,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<{ status: string; tx_hash?: string }> {
  return request(
    baseUrl,
    apiKey,
    `/charges/${chargeId}/refund`,
    {
      body: data ?? {},
      idempotencyKey: opts?.idempotencyKey,
    },
    clientOpts
  );
}
