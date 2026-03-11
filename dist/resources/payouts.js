"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.create = create;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, options) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/payouts", {
        method: "GET",
        params: options,
    });
}
function get(baseUrl, apiKey, id) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/payouts/${id}`, { method: "GET" });
}
function create(baseUrl, apiKey, data, opts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/payouts", {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    });
}
//# sourceMappingURL=payouts.js.map