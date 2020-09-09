import { ReceiveTypes } from "../../index";
import { NotificationsChannelsDBScheme } from "../dbScheme/notificationsChannels";

/**
 * Payload for updating existing notifications rule
 */
export interface UpdateProjectNotificationsRulePayload {
    /**
     * Rule id to update
     */
    ruleId: string;

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
     * Available channels to receive
     */
    channels: NotificationsChannelsDBScheme;
}
