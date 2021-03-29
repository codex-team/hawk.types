import { ObjectId } from "mongodb";
import { DecodedEventData, EncodedEventData, EventData } from "../base/event/event";
import { UserDBScheme } from "./user";
import {EventAddons} from '../base/event/addons';

/**
 * Event data after grouper-worker transformation to store it in database
 */
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
    payload: EventData<EventAddons>;

    /**
     * How many users catch this error
     */
    usersAffected: number;

    /**
     * Array of users who visited this event
     */
    visitedBy: UserDBScheme[];
}

/**
 * Grouped event with decoded event data
 */
export interface DecodedGroupedEvent extends GroupedEventDBScheme {
    payload: DecodedEventData;
}

/**
 * Grouped event with encoded event data
 */
export interface EncodedGroupedEvent extends GroupedEventDBScheme {
    payload: EncodedEventData;
}
