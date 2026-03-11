import type {
  WebhookEndpoint,
  WebhookEndpointDetail,
  CreateWebhookEndpointRequest,
  UpdateWebhookEndpointRequest,
} from "../types.js";
import { request } from "../client.js";

export function list(baseUrl: string, apiKey: string): Promise<WebhookEndpoint[]> {
  return request<WebhookEndpoint[]>(baseUrl, apiKey, "/webhook-endpoints", {
    method: "GET",
  });
}

export function get(baseUrl: string, apiKey: string, id: string): Promise<WebhookEndpoint> {
  return request<WebhookEndpoint>(baseUrl, apiKey, `/webhook-endpoints/${id}`, {
    method: "GET",
  });
}

export function create(
  baseUrl: string,
  apiKey: string,
  data: CreateWebhookEndpointRequest
): Promise<WebhookEndpointDetail> {
  return request(baseUrl, apiKey, "/webhook-endpoints", { body: data });
}

export function update(
  baseUrl: string,
  apiKey: string,
  id: string,
  data: UpdateWebhookEndpointRequest
): Promise<WebhookEndpoint> {
  return request(baseUrl, apiKey, `/webhook-endpoints/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export function del(baseUrl: string, apiKey: string, id: string): Promise<void> {
  return request(baseUrl, apiKey, `/webhook-endpoints/${id}`, { method: "DELETE" });
}
