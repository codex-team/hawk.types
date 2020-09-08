/**
 * Setting of a channel
 */
export interface NotificationsChannelSettingsDBScheme {
    /**
     * Allows to disable channel without removing endpoint
     */
    isEnabled: boolean;

    /**
     * Endpoint: email, slack webhook, telegram bot webhook, push subscription id, etc
     */
    endpoint: string;

    /**
     * Minimal pause between second notification, in seconds
     */
    minPeriod: number;
}
