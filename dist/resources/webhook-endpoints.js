"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.get = get;
exports.create = create;
exports.update = update;
exports.del = del;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/webhook-endpoints", {
        method: "GET",
    });
}
function get(baseUrl, apiKey, id) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}`, {
        method: "GET",
    });
}
function create(baseUrl, apiKey, data) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/webhook-endpoints", { body: data });
}
function update(baseUrl, apiKey, id, data) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}`, {
        method: "PATCH",
        body: data,
    });
}
function del(baseUrl, apiKey, id) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/webhook-endpoints/${id}`, { method: "DELETE" });
}
//# sourceMappingURL=webhook-endpoints.js.map