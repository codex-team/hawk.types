import type { ObjectId, Timestamp } from 'bson';

/**
 * Permissions granted to token
 */
export type TokenPermissions = 'read' | 'write';

/**
 * Database representation of active to third-party clients
 */
export interface ThirdpartyDBScheme {
  /**
   * External token identifier
   */
  _id: ObjectId;

  /**
   * Token owner id
   */
  userId: string;

  /**
   * Unique JSON Web Token Identifier
   */
  jti: string;

  /**
   * Last characters of the token, used to tell tokens apart in user settings
   */
  preview: string;

  /**
   * What token can be used for
   */
  permissions: TokenPermissions[];

  /**
   * Label set by user
   */
  lable: string;

  /**
   * Last time token was used
   */
  lastUsedAt: Timestamp | null;

  /**
   * Usage count
   */
  requestCount: number;

  /**
   * Creation date
   */
  createdAt: Timestamp;
}
