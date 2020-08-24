import {ObjectId} from "mongodb";


/**
 * Represents pending member info in DB
 */
export interface PendingMemberDBScheme {
    /**
     * Document id
     */
    _id: ObjectId;

    /**
     * User email for invitation
     */
    userEmail: string;
}
