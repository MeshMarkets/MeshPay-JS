"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.create = create;
exports.fund = fund;
exports.refund = refund;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, options) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/charges", {
        method: "GET",
        params: options,
    });
}
function get(baseUrl, apiKey, id) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${id}`, { method: "GET" });
}
function create(baseUrl, apiKey, data, opts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/charges", {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    });
}
function fund(baseUrl, apiKey, chargeId, data, opts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${chargeId}/fund`, {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    });
}
function refund(baseUrl, apiKey, chargeId, data, opts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/charges/${chargeId}/refund`, {
        body: data ?? {},
        idempotencyKey: opts?.idempotencyKey,
    });
}
//# sourceMappingURL=charges.js.map