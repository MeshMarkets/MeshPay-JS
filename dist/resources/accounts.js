"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.create = create;
exports.deleteMembership = deleteMembership;
const client_js_1 = require("../client.js");
function list(baseUrl, apiKey, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/accounts", { method: "GET" }, clientOpts);
}
function create(baseUrl, apiKey, data, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/accounts", { body: data }, clientOpts);
}
function deleteMembership(baseUrl, apiKey, membershipId, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, `/accounts/${membershipId}`, { method: "DELETE" }, clientOpts);
}
//# sourceMappingURL=accounts.js.map