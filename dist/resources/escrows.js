"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.release = release;
exports.createContribution = createContribution;
exports.setPayee = setPayee;
exports.cancelPool = cancelPool;
exports.openDispute = openDispute;
exports.resolveDispute = resolveDispute;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, options, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/escrows", {
        method: "GET",
        params: options,
    }, clientOpts);
}
function get(baseUrl, apiKey, id, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${id}`, { method: "GET" }, clientOpts);
}
function release(baseUrl, apiKey, escrowId, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/release`, {
        body: {},
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function createContribution(baseUrl, apiKey, escrowId, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/contributions`, {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function setPayee(baseUrl, apiKey, escrowId, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/set-payee`, {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function cancelPool(baseUrl, apiKey, escrowId, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/cancel-pool`, {
        body: {},
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function openDispute(baseUrl, apiKey, escrowId, data, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/open-dispute`, { body: data }, clientOpts);
}
function resolveDispute(baseUrl, apiKey, escrowId, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/resolve-dispute`, {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
//# sourceMappingURL=escrows.js.map