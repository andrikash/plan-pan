/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Calendar Service API
 * API for managing chat, orders and payments.
 * OpenAPI spec version: 1.0.0
 */

export interface UserRegister {
  /** User's email (must be valid and unique). */
  email: string;
  /** Password requirements:
- At least 8 characters long
- At most 32 characters long
- Contain at least one uppercase letter
- Contain at least one lowercase letter
- Contain at least one number
- Contain at least one special character
- Must not contain spaces
 */
  password: string;
}
