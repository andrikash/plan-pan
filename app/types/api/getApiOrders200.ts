/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */
import type { Order } from './order';
import type { GetApiOrders200Pagination } from './getApiOrders200Pagination';

export type GetApiOrders200 = {
  success?: boolean;
  data?: Order[];
  pagination?: GetApiOrders200Pagination;
};
