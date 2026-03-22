"use strict";
/**
 * Base HTTP client for the Mesh Pay API (fetch-based for browser/React Native).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = getBaseUrl;
exports.request = request;
function getBaseUrl(config) {
    return (config.baseUrl ??
        "https://YOUR_PROJECT_REF.supabase.co/functions/v1/api").replace(/\/$/, "");
}
async function request(baseUrl, apiKey, path, opts = {}, clientOpts) {
    const url = new URL(path.startsWith("/") ? path.slice(1) : path, baseUrl + "/");
    if (opts.params) {
        Object.entries(opts.params).forEach(([k, v]) => {
            if (v !== undefined)
                url.searchParams.set(k, String(v));
        });
    }
    const headers = {};
    if (opts.body !== undefined) {
        headers["Content-Type"] = "application/json";
    }
    if (!opts.skipAuth) {
        if (clientOpts?.useXApiKeyHeader) {
            headers["X-Api-Key"] = apiKey;
        }
        else {
            headers.Authorization = `Bearer ${apiKey}`;
        }
    }
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
    if (res.status === 204 || res.status === 205) {
        return undefined;
    }
    const text = await res.text();
    if (!text) {
        return undefined;
    }
    try {
        return JSON.parse(text);
    }
    catch {
        throw new Error(`Mesh Pay API: invalid JSON response (${res.status})`);
    }
}
//# sourceMappingURL=client.js.map