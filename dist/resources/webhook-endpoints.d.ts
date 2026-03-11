import type { WebhookEndpoint, WebhookEndpointDetail, CreateWebhookEndpointRequest, UpdateWebhookEndpointRequest } from "../types.js";
export declare function list(baseUrl: string, apiKey: string): Promise<WebhookEndpoint[]>;
export declare function get(baseUrl: string, apiKey: string, id: string): Promise<WebhookEndpoint>;
export declare function create(baseUrl: string, apiKey: string, data: CreateWebhookEndpointRequest): Promise<WebhookEndpointDetail>;
export declare function update(baseUrl: string, apiKey: string, id: string, data: UpdateWebhookEndpointRequest): Promise<WebhookEndpoint>;
export declare function del(baseUrl: string, apiKey: string, id: string): Promise<void>;
//# sourceMappingURL=webhook-endpoints.d.ts.map