/**
 * Encoded integration token format
 */
export type EncodedIntegrationToken = string;
/**
 * Fields in decoded integration token
 */
export interface DecodedIntegrationToken {
    /**
     * Integration id of project
     */
    integrationId: string;
    /**
     * Secret hash
     */
    secret: string;
}
