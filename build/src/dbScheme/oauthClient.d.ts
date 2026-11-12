import type { ObjectId, Timestamp } from 'bson';
/**
 * Permissions granted to token
 */
export type TokenPermissions = 'read' | 'write';
/**
 * Database representation of active to oauth client
 */
export interface OAuthClientDBScheme {
    /**
     * External client identifier
     */
    _id: ObjectId;
    /**
     * Token owner id
     */
    userId: string;
    /**
     * User agent id
     */
    clientId: string;
    /**
     * Unique JSON Web Token Identifier
     */
    jti: string;
    /**
     * What client is allowed to do
     */
    permissions: TokenPermissions[];
    /**
     * Label set by user
     */
    lable: string;
    /**
     * Last time the client interacted with hawk api
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
