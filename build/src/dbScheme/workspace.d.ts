import { ObjectId } from "mongodb";
/**
 * Workspace representation in DataBase
 */
export interface WorkspaceDBScheme {
    /**
     * Workspace's id
     */
    _id: ObjectId;
    /**
     * Workspace's name
     */
    name: string;
    /**
     * Workspace's invite hash
     */
    inviteHash: string;
    /**
     * Workspace account uuid in accounting microservice
     */
    accountId: string;
    /**
     * Workspace's description
     */
    description?: string;
    /**
     * Workspace's image URL
     */
    image?: string;
    /**
     * Id of the Workspace's plan
     */
    tariffPlanId: ObjectId;
    /**
     * Workspace balance
     */
    balance: number;
    /**
     * Date when workspace was charged last time
     */
    lastChargeDate: Date;
    /**
     * Total number of errors since the last charge date
     */
    billingPeriodEventsCount: number;
    /**
     * ID of subscription if it subscribed
     * Returns from CloudPayments
     */
    subscriptionId?: string;
    /**
     * Is workspace blocked for catching new events
     */
    isBlocked?: boolean;
    /**
     * List of last dates for notifications
     * Used to reduce frequency of some system messages
     */
    lastNotificationDate?: {
        [key: string]: Date;
    };
}
