# Changelog

## 3.1.0

- **Added** pooled charge and pooled escrow routes from OpenAPI: `charges.createPooled` (`POST /pooled-charges`); `escrows.createContribution`, `escrows.setPayee`, `escrows.cancelPool` (`POST /escrows/{id}/contributions`, `/set-payee`, `/cancel-pool`). Extended `Charge` and `Escrow` types with optional pooled fields (`target_amount`, `funded_amount`, `pool_mode`).

## 3.0.0

- **Removed** wallet fiat-account helpers (`listFiatAccounts`, `linkFiatAccount`, `unlinkFiatAccount`). Use Coinbase **on-ramp** / **off-ramp** session flows (`onRamp.createSession`, `offRamp.createSession`) instead.

## 2.0.0

Breaking changes — aligned with `mesh-pay/docs/openapi.yml` (Supabase Edge Functions base URL).

- **Removed** `payouts` and `apiKeys` client surfaces (not part of the public OpenAPI).
- **Accounts**: `list()`, `deleteMembership(membershipId)`; create response includes `membership_id`.
- **Wallets**: `list()`, `getDetail(membershipId, { network? })`. Removed `create` / `getByAccountId` against deprecated routes.
- **Charges**: create uses `payee_membership_id`, `amount`, optional `payer_membership_id` / `buyer_id`; added `cancel()`; fund/refund support `tx_hash` (contract escrow).
- **Escrows**: `openDispute`, `resolveDispute`; release response fields use `meshpay_fee` / `developer_fee`.
- **Webhooks**: `listDeliveries` on an endpoint.
- **On-ramp / Off-ramp**: `createSession()` calling `POST /on-ramp/sessions` and `POST /off-ramp/sessions` (replaces quote/trade helpers).
- **Default `baseUrl`**: `https://YOUR_PROJECT_REF.supabase.co/functions/v1/api`.
- Optional `useXApiKeyHeader` on `Config` for `X-Api-Key` instead of Bearer.
