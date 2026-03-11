"use strict";
/**
 * Base HTTP client for the Mesh Pay API (fetch-based for browser/React Native).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = getBaseUrl;
exports.request = request;
function getBaseUrl(config) {
    return (config.baseUrl ?? "http://localhost:3000").replace(/\/$/, "");
}
async function request(baseUrl, apiKey, path, opts = {}) {
    const url = new URL(path.startsWith("/") ? path.slice(1) : path, baseUrl + "/");
    if (opts.params) {
        Object.entries(opts.params).forEach(([k, v]) => {
            if (v !== undefined)
                url.searchParams.set(k, String(v));
        });
    }
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
    };
    if (opts.idempotencyKey)
        headers["Idempotency-Key"] = opts.idempotencyKey;
    const res = await fetch(url.toString(), {
        method: opts.method ?? "POST",
        headers,
        body: opts.body ? JSON.stringify(opts.body) : undefined,
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Mesh Pay API error ${res.status}: ${text}`);
    }
    const contentType = res.headers.get("content-type");
    if (contentType?.includes("application/json")) {
        return res.json();
    }
    return undefined;
}
//# sourceMappingURL=client.js.map