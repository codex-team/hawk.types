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
    planId: string;
}
