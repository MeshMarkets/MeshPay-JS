import type { Escrow, ReleaseEscrowResponse, ListOptions, ListResponse, RequestOptions } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, options?: ListOptions): Promise<ListResponse<Escrow>>;
export declare function get(baseUrl: string, apiKey: string, id: string): Promise<Escrow>;
export declare function release(baseUrl: string, apiKey: string, escrowId: string, opts?: RequestOptions): Promise<ReleaseEscrowResponse>;
//# sourceMappingURL=escrows.d.ts.map