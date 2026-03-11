"use strict";
/**
 * Mesh Pay JavaScript/TypeScript SDK for browser and React Native.
 * Full API client with separation of concerns.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshPay = exports.verifySignature = void 0;
const client_js_1 = require("./client.js");
const resources = __importStar(require("./resources/index.js"));
const webhooks_js_1 = require("./webhooks.js");
__exportStar(require("./types.js"), exports);
var webhooks_js_2 = require("./webhooks.js");
Object.defineProperty(exports, "verifySignature", { enumerable: true, get: function () { return webhooks_js_2.verifySignature; } });
class MeshPay {
    baseUrl;
    apiKey;
    constructor(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = (0, client_js_1.getBaseUrl)(config);
    }
    get health() {
        return {
            get: () => resources.health.getHealth(this.baseUrl, this.apiKey),
        };
    }
    get accounts() {
        return {
            create: (data) => resources.accounts.create(this.baseUrl, this.apiKey, data),
        };
    }
    get wallets() {
        return {
            create: (data) => resources.wallets.create(this.baseUrl, this.apiKey, data),
            getByAccountId: (accountId) => resources.wallets.getByAccountId(this.baseUrl, this.apiKey, accountId),
        };
    }
    get charges() {
        return {
            list: (options) => resources.charges.list(this.baseUrl, this.apiKey, options),
            get: (id) => resources.charges.get(this.baseUrl, this.apiKey, id),
            create: (data, opts) => resources.charges.create(this.baseUrl, this.apiKey, data, opts),
            fund: (chargeId, data, opts) => resources.charges.fund(this.baseUrl, this.apiKey, chargeId, data, opts),
            refund: (chargeId, data, opts) => resources.charges.refund(this.baseUrl, this.apiKey, chargeId, data, opts),
        };
    }
    get escrows() {
        return {
            list: (options) => resources.escrows.list(this.baseUrl, this.apiKey, options),
            get: (id) => resources.escrows.get(this.baseUrl, this.apiKey, id),
            release: (escrowId, opts) => resources.escrows.release(this.baseUrl, this.apiKey, escrowId, opts),
        };
    }
    get payouts() {
        return {
            list: (options) => resources.payouts.list(this.baseUrl, this.apiKey, options),
            get: (id) => resources.payouts.get(this.baseUrl, this.apiKey, id),
            create: (data, opts) => resources.payouts.create(this.baseUrl, this.apiKey, data, opts),
        };
    }
    get apiKeys() {
        return {
            list: () => resources.apiKeys.list(this.baseUrl, this.apiKey),
            create: (data) => resources.apiKeys.create(this.baseUrl, this.apiKey, data),
            delete: (id) => resources.apiKeys.del(this.baseUrl, this.apiKey, id),
        };
    }
    get webhookEndpoints() {
        return {
            list: () => resources.webhookEndpoints.list(this.baseUrl, this.apiKey),
            get: (id) => resources.webhookEndpoints.get(this.baseUrl, this.apiKey, id),
            create: (data) => resources.webhookEndpoints.create(this.baseUrl, this.apiKey, data),
            update: (id, data) => resources.webhookEndpoints.update(this.baseUrl, this.apiKey, id, data),
            delete: (id) => resources.webhookEndpoints.del(this.baseUrl, this.apiKey, id),
        };
    }
    get onRamp() {
        return {
            getQuote: (data) => resources.onRamp.getQuote(this.baseUrl, this.apiKey, data),
            executeTrade: (data, opts) => resources.onRamp.executeTrade(this.baseUrl, this.apiKey, data, opts),
        };
    }
    get offRamp() {
        return {
            getQuote: (data) => resources.offRamp.getQuote(this.baseUrl, this.apiKey, data),
            executeTrade: (data, opts) => resources.offRamp.executeTrade(this.baseUrl, this.apiKey, data, opts),
        };
    }
    get webhooks() {
        return {
            verifySignature: webhooks_js_1.verifySignature,
        };
    }
}
exports.MeshPay = MeshPay;
//# sourceMappingURL=index.js.map