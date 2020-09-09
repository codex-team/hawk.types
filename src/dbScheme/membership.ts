import { ObjectId } from "mongodb";

/**
 * Membership collection DB implementation
 */
export interface MembershipDBScheme {
    /**
     * Document id
     */
    _id: ObjectId;

    /**
     * User's workspace id
     */
    workspaceId: ObjectId;

    /**
     * Shows if member is pending
     */
    isPending?: boolean;
}