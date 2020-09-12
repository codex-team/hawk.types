import { ObjectId } from "mongodb";
/**
 * Represents confirmed member info in DB
 */
export interface ConfirmedMemberDBScheme {
    /**
     * Document id
     */
    _id: ObjectId;
    /**
     * Id of the member of workspace
     */
    userId: ObjectId;
    /**
     * Is user admin in workspace
     */
    isAdmin?: boolean;
}
