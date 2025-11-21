import { NotificationsChannelSettingsDBScheme } from "../../index";

/**
 * Available channels
 */
export interface NotificationsChannelsDBScheme {
    /**
     * Alerts on email
     */
    email?: NotificationsChannelSettingsDBScheme;

    /**
     * Alerts through the Slack
     */
    slack?: NotificationsChannelSettingsDBScheme;

    /**
     * Alerts through the Telegram
     */
    telegram?: NotificationsChannelSettingsDBScheme;

    /**
     * Browser pushes
     */
    webPush?: NotificationsChannelSettingsDBScheme;

    /**
     * Pushes through the Hawk Desktop app
     */
    desktopPush?: NotificationsChannelSettingsDBScheme;

    /**
     * Alerts through the Loop
     */
    loop?: NotificationsChannelSettingsDBScheme;
}
