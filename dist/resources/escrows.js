"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.release = release;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, options) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/escrows", {
        method: "GET",
        params: options,
    });
}
function get(baseUrl, apiKey, id) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${id}`, { method: "GET" });
}
function release(baseUrl, apiKey, escrowId, opts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/escrows/${escrowId}/release`, {
        body: {},
        idempotencyKey: opts?.idempotencyKey,
    });
}
//# sourceMappingURL=escrows.js.map