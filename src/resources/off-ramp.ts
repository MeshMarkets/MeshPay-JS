import type {
  OffRampQuoteRequest,
  OffRampQuoteResponse,
  OffRampTradeRequest,
  RequestOptions,
} from "../types.js";
import { request } from "../client.js";

export function getQuote(
  baseUrl: string,
  apiKey: string,
  data: OffRampQuoteRequest
): Promise<OffRampQuoteResponse> {
  return request<OffRampQuoteResponse>(baseUrl, apiKey, "/off-ramp/quote", { body: data });
}

export function executeTrade(
  baseUrl: string,
  apiKey: string,
  data: OffRampTradeRequest,
  opts?: RequestOptions
): Promise<Record<string, unknown>> {
  return request(baseUrl, apiKey, "/off-ramp/trade", {
    body: data,
    idempotencyKey: opts?.idempotencyKey,
  });
}
