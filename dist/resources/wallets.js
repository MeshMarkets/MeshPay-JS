"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.getDetail = getDetail;
exports.listFiatAccounts = listFiatAccounts;
exports.linkFiatAccount = linkFiatAccount;
exports.unlinkFiatAccount = unlinkFiatAccount;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/wallets", { method: "GET" }, clientOpts);
}
function getDetail(baseUrl, apiKey, membershipId, options, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/wallets/${membershipId}`, {
        method: "GET",
        params: options?.network ? { network: options.network } : undefined,
    }, clientOpts);
}
function listFiatAccounts(baseUrl, apiKey, membershipId, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/wallets/fiat-accounts", {
        method: "GET",
        params: { membership_id: membershipId },
    }, clientOpts);
}
function linkFiatAccount(baseUrl, apiKey, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/wallets/fiat-accounts", {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function unlinkFiatAccount(baseUrl, apiKey, membershipId, fiatAccountId, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/wallets/fiat-accounts", {
        method: "DELETE",
        params: { membership_id: membershipId, fiat_account_id: fiatAccountId },
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
//# sourceMappingURL=wallets.js.map