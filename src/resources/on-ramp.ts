import type {
  OnRampQuoteRequest,
  OnRampQuoteResponse,
  OnRampTradeRequest,
  RequestOptions,
} from "../types.js";
import { request } from "../client.js";

export function getQuote(
  baseUrl: string,
  apiKey: string,
  data: OnRampQuoteRequest
): Promise<OnRampQuoteResponse> {
  return request<OnRampQuoteResponse>(baseUrl, apiKey, "/on-ramp/quote", { body: data });
}

export function executeTrade(
  baseUrl: string,
  apiKey: string,
  data: OnRampTradeRequest,
  opts?: RequestOptions
): Promise<Record<string, unknown>> {
  return request(baseUrl, apiKey, "/on-ramp/trade", {
    body: data,
    idempotencyKey: opts?.idempotencyKey,
  });
}
