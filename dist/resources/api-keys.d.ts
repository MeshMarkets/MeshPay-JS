import type { ApiKey, CreateApiKeyRequest } from "../types.js";
export declare function list(baseUrl: string, apiKey: string): Promise<ApiKey[]>;
export declare function create(baseUrl: string, apiKey: string, data?: CreateApiKeyRequest): Promise<ApiKey>;
export declare function del(baseUrl: string, apiKey: string, id: string): Promise<void>;
//# sourceMappingURL=api-keys.d.ts.map