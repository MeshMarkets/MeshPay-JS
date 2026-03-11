"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuote = getQuote;
exports.executeTrade = executeTrade;
const client_js_1 = require("../client.js");
function getQuote(baseUrl, apiKey, data) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/off-ramp/quote", { body: data });
}
function executeTrade(baseUrl, apiKey, data, opts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/off-ramp/trade", {
        body: data,
        idempotencyKey: opts?.idempotencyKey,
    });
}
//# sourceMappingURL=off-ramp.js.map