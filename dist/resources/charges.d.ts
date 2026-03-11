import type { Charge, CreateChargeRequest, RefundChargeRequest, FundChargeRequest, ListOptions, ListResponse, RequestOptions } from "../types.js";
export declare function list(baseUrl: string, apiKey: string, options?: ListOptions): Promise<ListResponse<Charge>>;
export declare function get(baseUrl: string, apiKey: string, id: string): Promise<Charge>;
export declare function create(baseUrl: string, apiKey: string, data: CreateChargeRequest, opts?: RequestOptions): Promise<{
    charge_id: string;
    escrow_id: string;
    status: string;
}>;
export declare function fund(baseUrl: string, apiKey: string, chargeId: string, data: FundChargeRequest, opts?: RequestOptions): Promise<{
    status: string;
}>;
export declare function refund(baseUrl: string, apiKey: string, chargeId: string, data?: RefundChargeRequest, opts?: RequestOptions): Promise<{
    status: string;
}>;
//# sourceMappingURL=charges.d.ts.map