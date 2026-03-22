"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
const client_js_1 = require("../client.js");
/** POST /off-ramp/sessions — Coinbase-hosted offramp (sessionToken + offrampUrl per API). */
function createSession(baseUrl, apiKey, data, clientOpts) {
    return (0, client_js_1.request)(baseUrl, apiKey, "/off-ramp/sessions", { body: data }, clientOpts);
}
//# sourceMappingURL=off-ramp.js.map