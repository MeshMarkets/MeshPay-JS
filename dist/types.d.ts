/**
 * Request/response types aligned with mesh-pay/docs/openapi.yml (MeshPay API v1).
 */
export interface ListOptions {
    limit?: number;
    cursor?: string;
    status?: string;
}
export interface ListResponse<T> {
    data: T[];
    next_cursor?: string | null;
}
export interface RequestOptions {
    idempotencyKey?: string;
}
export type WalletNetwork = "base" | "base-sepolia" | "ethereum";
export interface AccountMembership {
    id: string;
    account_id: string;
    status: string;
    created_at: string;
    email: string | null;
}
export interface CreateAccountRequest {
    email: string;
}
export interface CreateAccountResponse {
    id: string;
    membership_id: string;
    wallet_id?: string;
    status: string;
}
export interface WalletSummary {
    membership_id: string;
    account_id: string;
    status: string;
    created_at: string;
    wallet_id: string | null;
    address: string | null;
    blockchain: string | null;
    external_wallet_id: string | null;
}
export interface TokenBalance {
    symbol: string;
    name: string;
    contract_address: string;
    amount_raw: string;
    decimals: number;
    amount: string;
    network: string;
}
export interface WalletDetail {
    wallet_id: string;
    address: string;
    blockchain: string;
    external_wallet_id: string | null;
    balance_network: string;
    balances: TokenBalance[];
    balance_error?: string;
}
export interface Charge {
    charge_id: string;
    escrow_id: string;
    buyer_id?: string;
    payer_membership_id?: string | null;
    payee_membership_id?: string | null;
    status: string;
    amount?: number;
    currency?: string;
    created_at?: string;
    /** Present for pooled escrows */
    target_amount?: number;
    funded_amount?: number;
    pool_mode?: string;
}
export interface CreateChargeRequest {
    payee_membership_id: string;
    amount: number;
    payer_membership_id?: string;
    buyer_id?: string;
    currency?: string;
}
export interface CreateChargeResponse {
    charge_id: string;
    escrow_id: string;
    status: string;
    escrow_contract_address?: string;
    escrow_slot_id?: string;
    amount?: number;
    deposit_instructions?: string;
}
export type PooledPoolMode = "closed" | "open";
export interface CreatePooledChargeRequest {
    target_amount: number;
    pool_mode: PooledPoolMode | string;
    contributor_membership_ids?: string[];
    payee_membership_id?: string;
    currency?: string;
}
export interface CreatePooledChargeResponse {
    charge_id: string;
    escrow_id: string;
    status: string;
    target_amount: number;
    funded_amount: number;
    pool_mode: string;
    payee_membership_id?: string;
}
export interface RefundChargeRequest {
    amount?: number;
    tx_hash?: string;
}
export interface FundChargeRequest {
    tx_hash?: string;
    entity_secret_ciphertext?: string;
}
export interface Escrow {
    id: string;
    buyer_id: string;
    wallet_id?: string | null;
    amount: number;
    status: string;
    created_at?: string;
    payer_membership_id?: string | null;
    payee_membership_id?: string | null;
    escrow_contract_address?: string | null;
    fund_tx_hash?: string | null;
    target_amount?: number | null;
    funded_amount?: number | null;
    pool_mode?: string | null;
}
export interface ReleaseEscrowResponse {
    status: string;
    seller_payout: number;
    meshpay_fee: number;
    developer_fee: number;
    release_tx_hash?: string;
}
export interface CreateEscrowContributionRequest {
    contributor_membership_id: string;
    amount: number;
}
export interface SetEscrowPayeeRequest {
    payee_membership_id: string;
}
export interface OpenEscrowDisputeRequest {
    tx_hash: string;
}
export interface ResolveEscrowDisputeRequest {
    release_to_seller: boolean;
}
export interface ResolveEscrowDisputeResponse {
    status: string;
    seller_payout?: number;
    meshpay_fee?: number;
    developer_fee?: number;
    resolve_tx_hash?: string;
}
export interface WebhookEndpoint {
    id: string;
    url: string;
    events: string[];
    active: boolean;
    createdAt?: string;
}
export interface WebhookEndpointDetail extends WebhookEndpoint {
    secret?: string;
}
export interface CreateWebhookEndpointRequest {
    url: string;
    events: string[];
    secret?: string;
}
export interface UpdateWebhookEndpointRequest {
    active?: boolean;
    events?: string[];
}
export interface OnRampSessionRequest {
    destinationAddress: string;
    purchaseCurrency: string;
    destinationNetwork: string;
    paymentAmount?: string;
    purchaseAmount?: string;
    paymentCurrency?: string;
    paymentMethod?: string;
    country?: string;
    subdivision?: string;
    redirectUrl?: string;
    clientIp?: string;
    partnerUserRef?: string;
}
export interface OffRampAddress {
    address: string;
    blockchains: string[];
}
export interface OffRampSessionRequest {
    addresses: OffRampAddress[];
    partnerUserRef: string;
    redirectUrl: string;
    clientIp?: string;
    defaultNetwork?: string;
    defaultAsset?: string;
    presetCryptoAmount?: number;
    presetFiatAmount?: number;
    defaultCashoutMethod?: string;
    fiatCurrency?: string;
    disableEdit?: boolean;
}
export interface HealthResponse {
    status: string;
}
//# sourceMappingURL=types.d.ts.map