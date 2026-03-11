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
export declare function getBaseUrl(config: ClientConfig): string;
export declare function request<T>(baseUrl: string, apiKey: string, path: string, opts?: RequestConfig): Promise<T>;
//# sourceMappingURL=client.d.ts.map