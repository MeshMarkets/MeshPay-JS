"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
const client_js_1 = require("../client.js");
/** POST /on-ramp/sessions — Coinbase-hosted onramp (returns session.onrampUrl per API). */
function createSession(baseUrl, apiKey, data, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/on-ramp/sessions", { body: data }, clientOpts);
}
//# sourceMappingURL=on-ramp.js.map