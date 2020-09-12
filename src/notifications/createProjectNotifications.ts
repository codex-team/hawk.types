import { ReceiveTypes } from "../../index";
import { NotificationsChannelsDBScheme } from "../dbScheme/notificationsChannels";

/**
 * Payload for creating new notification rule
 */
export interface CreateProjectNotificationsRulePayload {
    /**
     * Allows to disable rule without removing
     */
    isEnabled: true;

    /**
     * Receive type: 'ALL'  or 'ONLY_NEW'
     */
    whatToReceive: ReceiveTypes;

    /**
     * Only those which contains passed words
     */
    including: string[];

    /**
     * Skip those which contains passed words
     */
    excluding: string[];

    /**
     * Creator of the rule
     */
    uidAdded: string;

    /**
     * Available channels to receive
     */
    channels: NotificationsChannelsDBScheme;
}