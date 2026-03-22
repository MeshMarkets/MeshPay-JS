"use strict";
/**
 * Mesh Pay JavaScript/TypeScript SDK for browser and React Native.
 * Aligned with mesh-pay/docs/openapi.yml (MeshPay API v1).
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
    clientOpts;
    constructor(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = (0, client_js_1.getBaseUrl)(config);
        this.clientOpts = { useXApiKeyHeader: config.useXApiKeyHeader };
    }
    get health() {
        return {
            get: () => resources.health.getHealth(this.baseUrl, this.apiKey, this.clientOpts),
        };
    }
    get accounts() {
        return {
            list: () => resources.accounts.list(this.baseUrl, this.apiKey, this.clientOpts),
            create: (data) => resources.accounts.create(this.baseUrl, this.apiKey, data, this.clientOpts),
            deleteMembership: (membershipId) => resources.accounts.deleteMembership(this.baseUrl, this.apiKey, membershipId, this.clientOpts),
        };
    }
    get wallets() {
        return {
            list: () => resources.wallets.list(this.baseUrl, this.apiKey, this.clientOpts),
            getDetail: (membershipId, options) => resources.wallets.getDetail(this.baseUrl, this.apiKey, membershipId, options, this.clientOpts),
            listFiatAccounts: (membershipId) => resources.wallets.listFiatAccounts(this.baseUrl, this.apiKey, membershipId, this.clientOpts),
            linkFiatAccount: (data, opts) => resources.wallets.linkFiatAccount(this.baseUrl, this.apiKey, data, opts, this.clientOpts),
            unlinkFiatAccount: (membershipId, fiatAccountId, opts) => resources.wallets.unlinkFiatAccount(this.baseUrl, this.apiKey, membershipId, fiatAccountId, opts, this.clientOpts),
        };
    }
    get charges() {
        return {
            list: (options) => resources.charges.list(this.baseUrl, this.apiKey, options, this.clientOpts),
            get: (id) => resources.charges.get(this.baseUrl, this.apiKey, id, this.clientOpts),
            create: (data, opts) => resources.charges.create(this.baseUrl, this.apiKey, data, opts, this.clientOpts),
            fund: (chargeId, data, opts) => resources.charges.fund(this.baseUrl, this.apiKey, chargeId, data, opts, this.clientOpts),
            cancel: (chargeId, opts) => resources.charges.cancel(this.baseUrl, this.apiKey, chargeId, opts, this.clientOpts),
            refund: (chargeId, data, opts) => resources.charges.refund(this.baseUrl, this.apiKey, chargeId, data, opts, this.clientOpts),
        };
    }
    get escrows() {
        return {
            list: (options) => resources.escrows.list(this.baseUrl, this.apiKey, options, this.clientOpts),
            get: (id) => resources.escrows.get(this.baseUrl, this.apiKey, id, this.clientOpts),
            release: (escrowId, opts) => resources.escrows.release(this.baseUrl, this.apiKey, escrowId, opts, this.clientOpts),
            openDispute: (escrowId, data) => resources.escrows.openDispute(this.baseUrl, this.apiKey, escrowId, data, this.clientOpts),
            resolveDispute: (escrowId, data, opts) => resources.escrows.resolveDispute(this.baseUrl, this.apiKey, escrowId, data, opts, this.clientOpts),
        };
    }
    get webhookEndpoints() {
        return {
            list: () => resources.webhookEndpoints.list(this.baseUrl, this.apiKey, this.clientOpts),
            get: (id) => resources.webhookEndpoints.get(this.baseUrl, this.apiKey, id, this.clientOpts),
            create: (data) => resources.webhookEndpoints.create(this.baseUrl, this.apiKey, data, this.clientOpts),
            update: (id, data) => resources.webhookEndpoints.update(this.baseUrl, this.apiKey, id, data, this.clientOpts),
            delete: (id) => resources.webhookEndpoints.del(this.baseUrl, this.apiKey, id, this.clientOpts),
            listDeliveries: (id, options) => resources.webhookEndpoints.listDeliveries(this.baseUrl, this.apiKey, id, options, this.clientOpts),
        };
    }
    get onRamp() {
        return {
            createSession: (data) => resources.onRamp.createSession(this.baseUrl, this.apiKey, data, this.clientOpts),
        };
    }
    get offRamp() {
        return {
            createSession: (data) => resources.offRamp.createSession(this.baseUrl, this.apiKey, data, this.clientOpts),
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