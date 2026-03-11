"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealth = getHealth;
const client_js_1 = require("../client.js");
function getHealth(baseUrl, apiKey) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/health", { method: "GET" });
}
//# sourceMappingURL=health.js.map