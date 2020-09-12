import { ObjectId } from "mongodb";
import { ReceiveTypes } from "../../index";
import { NotificationsChannelsDBScheme } from "./notificationsChannels";

/**
 * This structure represents a single rule of notifications settings
 */
export interface ProjectNotificationsRuleDBScheme {
    /**
     * Id of Rule
     */
    _id: ObjectId;

    /**
     * Allows to disable rule without removing
     */
    isEnabled: boolean;

    /**
     * Creator of the rule
     */
    uidAdded: ObjectId;

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
