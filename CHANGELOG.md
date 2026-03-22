# Changelog

## 2.0.0

Breaking changes — aligned with `mesh-pay/docs/openapi.yml` (Supabase Edge Functions base URL).

- **Removed** `payouts` and `apiKeys` client surfaces (not part of the public OpenAPI).
- **Accounts**: `list()`, `deleteMembership(membershipId)`; create response includes `membership_id`.
- **Wallets**: `list()`, `getDetail(membershipId, { network? })`, fiat helpers `listFiatAccounts`, `linkFiatAccount`, `unlinkFiatAccount`. Removed `create` / `getByAccountId` against deprecated routes.
- **Charges**: create uses `payee_membership_id`, `amount`, optional `payer_membership_id` / `buyer_id`; added `cancel()`; fund/refund support `tx_hash` (contract escrow).
- **Escrows**: `openDispute`, `resolveDispute`; release response fields use `meshpay_fee` / `developer_fee`.
- **Webhooks**: `listDeliveries` on an endpoint.
- **On-ramp / Off-ramp**: `createSession()` calling `POST /on-ramp/sessions` and `POST /off-ramp/sessions` (replaces quote/trade helpers).
- **Default `baseUrl`**: `https://YOUR_PROJECT_REF.supabase.co/functions/v1/api`.
- Optional `useXApiKeyHeader` on `Config` for `X-Api-Key` instead of Bearer.
