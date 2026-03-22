import type { CreateWebhookEndpointRequest, UpdateWebhookEndpointRequest, WebhookEndpoint, WebhookEndpointDetail } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<WebhookEndpoint[]>;
export declare function get(baseUrl: string, apiKey: string, id: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<WebhookEndpoint>;
export declare function create(baseUrl: string, apiKey: string, data: CreateWebhookEndpointRequest, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<WebhookEndpointDetail>;
export declare function update(baseUrl: string, apiKey: string, id: string, data: UpdateWebhookEndpointRequest, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<WebhookEndpoint>;
export declare function del(baseUrl: string, apiKey: string, id: string, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<void>;
export declare function listDeliveries(baseUrl: string, apiKey: string, id: string, options?: {
    limit?: number;
}, clientOpts?: {
    useXApiKeyHeader?: boolean;
}): Promise<Record<string, unknown>[]>;
//# sourceMappingURL=webhook-endpoints.d.ts.map