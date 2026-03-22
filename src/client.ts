/**
 * Base HTTP client for the Mesh Pay API (fetch-based for browser/React Native).
 */

export interface ClientConfig {
  apiKey: string;
  baseUrl?: string;
  /** When true, send the API key as `X-Api-Key` instead of `Authorization: Bearer`. */
  useXApiKeyHeader?: boolean;
}

export interface RequestConfig {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: object;
  idempotencyKey?: string;
  params?: Record<string, string | number | boolean | undefined>;
  /** Skip auth headers (e.g. health). Default false. */
  skipAuth?: boolean;
}

export function getBaseUrl(config: ClientConfig): string {
  return (
    config.baseUrl ??
    "https://YOUR_PROJECT_REF.supabase.co/functions/v1/api"
  ).replace(/\/$/, "");
}

export async function request<T>(
  baseUrl: string,
  apiKey: string,
  path: string,
  opts: RequestConfig = {},
  clientOpts?: { useXApiKeyHeader?: boolean }
): Promise<T> {
  const url = new URL(path.startsWith("/") ? path.slice(1) : path, baseUrl + "/");
  if (opts.params) {
    Object.entries(opts.params).forEach(([k, v]) => {
      if (v !== undefined) url.searchParams.set(k, String(v));
    });
  }
  const headers: Record<string, string> = {};
  if (opts.body !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  if (!opts.skipAuth) {
    if (clientOpts?.useXApiKeyHeader) {
      headers["X-Api-Key"] = apiKey;
    } else {
      headers.Authorization = `Bearer ${apiKey}`;
    }
  }
  if (opts.idempotencyKey) headers["Idempotency-Key"] = opts.idempotencyKey;
  const res = await fetch(url.toString(), {
    method: opts.method ?? "POST",
    headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Mesh Pay API error ${res.status}: ${text}`);
  }
  if (res.status === 204 || res.status === 205) {
    return undefined as T;
  }
  const text = await res.text();
  if (!text) {
    return undefined as T;
  }
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(`Mesh Pay API: invalid JSON response (${res.status})`);
  }
}
