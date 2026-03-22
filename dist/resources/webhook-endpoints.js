"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.create = create;
exports.update = update;
exports.del = del;
exports.listDeliveries = listDeliveries;
const client_js_1 = require("../client.js");
function normalizeWebhookList(raw) {
    if (Array.isArray(raw))
        return raw;
    if (raw &&
        typeof raw === "object" &&
        "data" in raw &&
        Array.isArray(raw.data)) {
        return raw.data;
    }
    return [];
}
function normalizeDeliveries(raw) {
    if (Array.isArray(raw))
        return raw;
    if (raw &&
        typeof raw === "object" &&
        "data" in raw &&
        Array.isArray(raw.data)) {
        return raw.data;
    }
    return [];
}
async function list(baseUrl, apiKey, clientOpts) {
    const raw = await (0, client_js_1.request)(baseUrl, apiKey, "/webhook-endpoints", { method: "GET" }, clientOpts);
    return normalizeWebhookList(raw);
}
function get(baseUrl, apiKey, id, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}`, { method: "GET" }, clientOpts);
}
function create(baseUrl, apiKey, data, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/webhook-endpoints", { body: data }, clientOpts);
}
function update(baseUrl, apiKey, id, data, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}`, {
        method: "PATCH",
        body: data,
    }, clientOpts);
}
function del(baseUrl, apiKey, id, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}`, { method: "DELETE" }, clientOpts);
}
async function listDeliveries(baseUrl, apiKey, id, options, clientOpts) {
    const raw = await (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}/deliveries`, {
        method: "GET",
        params: options?.limit !== undefined ? { limit: options.limit } : undefined,
    }, clientOpts);
    return normalizeDeliveries(raw);
}
//# sourceMappingURL=webhook-endpoints.js.map