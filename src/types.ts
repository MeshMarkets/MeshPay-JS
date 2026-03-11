/**
 * Request/response types for the Mesh Pay API (browser/React Native).
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

export interface Account {
  id: string;
  wallet_id: string;
  status: string;
  created_at?: string;
}

export interface CreateAccountRequest {
  email: string;
}

export interface Wallet {
  wallet_id: string;
  address: string;
  account_id?: string;
}

export interface Charge {
  charge_id: string;
  escrow_id: string;
  status: string;
  amount?: number;
  currency?: string;
}

export interface CreateChargeRequest {
  buyer_id: string;
  seller_account_id: string;
  amount: number;
  currency?: string;
}

export interface RefundChargeRequest {
  amount?: number;
}

export interface FundChargeRequest {
  entity_secret_ciphertext: string;
}

export interface Escrow {
  id: string;
  buyer_id: string;
  seller_id: string;
  wallet_id: string;
  amount: number;
  status: string;
}

export interface ReleaseEscrowResponse {
  status: string;
  seller_payout: number;
  platform_fee: number;
}

export interface Payout {
  id: string;
  account_id: string;
  amount: number;
  status: string;
}

export interface CreatePayoutRequest {
  account_id: string;
  amount: number;
}

export interface ApiKey {
  id: string;
  name?: string | null;
  keyPrefix: string;
  key?: string;
  createdAt: string;
}

export interface CreateApiKeyRequest {
  name?: string;
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

export interface OnRampQuoteRequest {
  amount_usd?: number;
  amount_usdc?: number;
}

export interface OnRampQuoteResponse {
  quote_id: string;
  from: string;
  to: string;
  rate: number;
  fee?: number;
  expires_at: string;
}

export interface OnRampTradeRequest {
  quote_id: string;
}

export interface OffRampQuoteRequest {
  amount_usdc?: number;
  amount_usd?: number;
}

export interface OffRampQuoteResponse {
  quote_id: string;
  from: string;
  to: string;
  rate: number;
  fee?: number;
  expires_at: string;
}

export interface OffRampTradeRequest {
  quote_id: string;
}

export interface HealthResponse {
  status: string;
}
