"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.create = create;
exports.del = del;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/api-keys", { method: "GET" });
}
function create(baseUrl, apiKey, data) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/api-keys", { body: data ?? {} });
}
function del(baseUrl, apiKey, id) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/api-keys/${id}`, { method: "DELETE" });
}
//# sourceMappingURL=api-keys.js.map