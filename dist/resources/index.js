"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.offRamp = exports.onRamp = exports.webhookEndpoints = exports.apiKeys = exports.payouts = exports.escrows = exports.charges = exports.wallets = exports.accounts = exports.health = void 0;
exports.health = __importStar(require("./health.js"));
exports.accounts = __importStar(require("./accounts.js"));
exports.wallets = __importStar(require("./wallets.js"));
exports.charges = __importStar(require("./charges.js"));
exports.escrows = __importStar(require("./escrows.js"));
exports.payouts = __importStar(require("./payouts.js"));
exports.apiKeys = __importStar(require("./api-keys.js"));
exports.webhookEndpoints = __importStar(require("./webhook-endpoints.js"));
exports.onRamp = __importStar(require("./on-ramp.js"));
exports.offRamp = __importStar(require("./off-ramp.js"));
//# sourceMappingURL=index.js.map