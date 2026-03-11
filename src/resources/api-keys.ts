import type { ApiKey, CreateApiKeyRequest } from "../types.js";
import { request } from "../client.js";

export function list(baseUrl: string, apiKey: string): Promise<ApiKey[]> {
  return request<ApiKey[]>(baseUrl, apiKey, "/api-keys", { method: "GET" });
}

export function create(
  baseUrl: string,
  apiKey: string,
  data?: CreateApiKeyRequest
): Promise<ApiKey> {
  return request(baseUrl, apiKey, "/api-keys", { body: data ?? {} });
}

export function del(baseUrl: string, apiKey: string, id: string): Promise<void> {
  return request(baseUrl, apiKey, `/api-keys/${id}`, { method: "DELETE" });
}
