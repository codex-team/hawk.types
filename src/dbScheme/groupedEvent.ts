import { ObjectId } from "mongodb";
import { EventData } from "../base/event/event";
import { UserDBScheme } from "./user";

export interface GroupedEventDBScheme {
    /**
     * Internal mongo id
     */
    _id?: ObjectId;

    /**
     * Hash for grouping similar events
     */
    groupHash: string;

    /**
     * Number of events repetitions
     */
    totalCount: number;

    /**
     * Error language type
     */
    catcherType: string;

    /**
     * Event data
     */
    payload: EventData;

    /**
     * How many users catch this error
     */
    usersAffected: number;

    /**
     * Array of users who visited this event
     */
    visitedBy: UserDBScheme[];
}
