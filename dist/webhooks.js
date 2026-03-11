"use strict";
/**
 * Webhook signature verification using Web Crypto API (browser/React Native).
 * Prefer verifying webhooks on your backend with @mesh-pay/sdk for security.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySignature = verifySignature;
async function verifySignature(payload, signature, secret) {
    try {
        const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
        const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
        const expected = Array.from(new Uint8Array(sig))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
        if (expected.length !== signature.length)
            return false;
        let out = 0;
        for (let i = 0; i < expected.length; i++) {
            out |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
        }
        return out === 0;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=webhooks.js.map