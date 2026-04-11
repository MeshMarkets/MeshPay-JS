"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.getDetail = getDetail;
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
//# sourceMappingURL=wallets.js.map