/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */

export type GetApiOrdersStatus = typeof GetApiOrdersStatus[keyof typeof GetApiOrdersStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetApiOrdersStatus = {
  pending: 'pending',
  processing: 'processing',
  completed: 'completed',
  cancelled: 'cancelled',
} as const;
