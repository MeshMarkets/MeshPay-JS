"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.getByAccountId = getByAccountId;
const client_js_1 = require("../client.js");
function create(baseUrl, apiKey, data) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/wallets", { body: data });
}
function getByAccountId(baseUrl, apiKey, accountId) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/wallets", {
        method: "GET",
        params: { account_id: accountId },
    });
}
//# sourceMappingURL=wallets.js.map