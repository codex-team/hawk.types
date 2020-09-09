import { NotificationsChannelsDBScheme, UserNotificationType } from "../../index";

/**
 * This structure represents how user notifications are stored at the DB (in 'users' collection)
 */
export interface UserNotificationsDBScheme {
    /**
     * Channels with their settings
     */
    channels: NotificationsChannelsDBScheme;

    /**
     * Types of notifications to receive
     */
    whatToReceive: {[key in UserNotificationType]: boolean};
}
