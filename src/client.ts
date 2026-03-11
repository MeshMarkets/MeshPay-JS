/**
 * Base HTTP client for the Mesh Pay API (fetch-based for browser/React Native).
 */

export interface ClientConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface RequestConfig {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: object;
  idempotencyKey?: string;
  params?: Record<string, string | number | undefined>;
}

export function getBaseUrl(config: ClientConfig): string {
  return (config.baseUrl ?? "http://localhost:3000").replace(/\/$/, "");
}

export async function request<T>(
  baseUrl: string,
  apiKey: string,
  path: string,
  opts: RequestConfig = {}
): Promise<T> {
  const url = new URL(path.startsWith("/") ? path.slice(1) : path, baseUrl + "/");
  if (opts.params) {
    Object.entries(opts.params).forEach(([k, v]) => {
      if (v !== undefined) url.searchParams.set(k, String(v));
    });
  }
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
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
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return res.json() as Promise<T>;
  }
  return undefined as unknown as T;
}
