/**
 * Webhook signature verification using Web Crypto API (browser/React Native).
 * Prefer verifying webhooks on your backend with @mesh-pay/sdk for security.
 */
export declare function verifySignature(payload: string, signature: string, secret: string): Promise<boolean>;
//# sourceMappingURL=webhooks.d.ts.map