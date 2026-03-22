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
export declare function getBaseUrl(config: ClientConfig): string;
export declare function request<T>(baseUrl: string, apiKey: string, path: string, opts?: RequestConfig, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map