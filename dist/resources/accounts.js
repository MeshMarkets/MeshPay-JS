"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
const client_js_1 = require("../client.js");
function create(baseUrl, apiKey, data) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/accounts", { body: data });
}
//# sourceMappingURL=accounts.js.map