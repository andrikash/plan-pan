/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */
import type { AuthResponseUser } from './authResponseUser';

export interface AuthResponse {
  /** Authentication token. */
  token?: string;
  user?: AuthResponseUser;
}
