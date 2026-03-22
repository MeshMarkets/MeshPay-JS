import type {
  CreateWebhookEndpointRequest,
  UpdateWebhookEndpointRequest,
  WebhookEndpoint,
  WebhookEndpointDetail,
} from "../types.js";
import { request } from "../client.js";

function normalizeWebhookList(raw: unknown): WebhookEndpoint[] {
  if (Array.isArray(raw)) return raw as WebhookEndpoint[];
  if (
    raw &&
    typeof raw === "object" &&
    "data" in raw &&
    Array.isArray((raw as { data: unknown }).data)
  ) {
    return (raw as { data: WebhookEndpoint[] }).data;
  }
  return [];
}

function normalizeDeliveries(raw: unknown): Record<string, unknown>[] {
  if (Array.isArray(raw)) return raw as Record<string, unknown>[];
  if (
    raw &&
    typeof raw === "object" &&
    "data" in raw &&
    Array.isArray((raw as { data: unknown }).data)
  ) {
    return (raw as { data: Record<string, unknown>[] }).data;
  }
  return [];
}

export async function list(
  baseUrl: string,
  apiKey: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<WebhookEndpoint[]> {
  const raw = await request<unknown>(
    baseUrl,
    apiKey,
    "/webhook-endpoints",
    { method: "GET" },
    clientOpts
  );
  return normalizeWebhookList(raw);
}

export function get(
  baseUrl: string,
  apiKey: string,
  id: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<WebhookEndpoint> {
  return request<WebhookEndpoint>(
    baseUrl,
    apiKey,
    `/webhook-endpoints/${id}`,
    { method: "GET" },
    clientOpts
  );
}

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreateWebhookEndpointRequest,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<WebhookEndpointDetail> {
  return request<WebhookEndpointDetail>(
    baseUrl,
    apiKey,
    "/webhook-endpoints",
    { body: data },
    clientOpts
  );
}

export function update(
  baseUrl: string,
  apiKey: string,
  id: string,
  data: UpdateWebhookEndpointRequest,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<WebhookEndpoint> {
  return request<WebhookEndpoint>(
    baseUrl,
    apiKey,
    `/webhook-endpoints/${id}`,
    {
      method: "PATCH",
      body: data,
    },
    clientOpts
  );
}

export function del(
  baseUrl: string,
  apiKey: string,
  id: string,
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<void> {
  return request<void>(
    baseUrl,
    apiKey,
    `/webhook-endpoints/${id}`,
    { method: "DELETE" },
    clientOpts
  );
}

export async function listDeliveries(
  baseUrl: string,
  apiKey: string,
  id: string,
  options?: { limit?: number },
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<Record<string, unknown>[]> {
  const raw = await request<unknown>(
    baseUrl,
    apiKey,
    `/webhook-endpoints/${id}/deliveries`,
    {
      method: "GET",
      params: options?.limit !== undefined ? { limit: options.limit } : undefined,
    },
    clientOpts
  );
  return normalizeDeliveries(raw);
}
