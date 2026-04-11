"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.create = create;
exports.createPooled = createPooled;
exports.fund = fund;
exports.cancel = cancel;
exports.refund = refund;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, options, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/charges", {
        method: "GET",
        params: options,
    }, clientOpts);
}
function get(baseUrl, apiKey, id, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${id}`, { method: "GET" }, clientOpts);
}
function create(baseUrl, apiKey, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/charges", {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function createPooled(baseUrl, apiKey, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/pooled-charges", {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function fund(baseUrl, apiKey, chargeId, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${chargeId}/fund`, {
        body: data ?? {},
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function cancel(baseUrl, apiKey, chargeId, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${chargeId}/cancel`, {
        body: {},
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
function refund(baseUrl, apiKey, chargeId, data, opts, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${chargeId}/refund`, {
        body: data ?? {},
        idempotencyKey: opts?.idempotencyKey,
    }, clientOpts);
}
//# sourceMappingURL=charges.js.map