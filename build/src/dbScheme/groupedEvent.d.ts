import type { ObjectId } from 'bson';
import type { DecodedEventData, EncodedEventData, EventData } from '../base/event/event.ts';
import type { UserDBScheme } from './user.ts';
import type { EventAddons } from '../base/event/addons/index.ts';
import type { TaskManagerItem } from '../base/event/taskManagerItem.ts';
/**
 * Event marks interface for tracking event status
 */
export interface EventMarks {
    /**
     * Whether the event is ignored
     */
    ignored?: boolean;
}
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
    /**
     * Occurrence time
     * Unix timestamp in seconds (example: 1567009247.576)
     * (created by the Collector)
     */
    timestamp: number;
    /**
     * Event marks for tracking status
     */
    marks?: EventMarks;
    /**
     * Task Manager item linked to this event (e.g., GitHub Issue)
     */
    taskManagerItem?: TaskManagerItem;
}
/**
 * Event where 'context' and 'addons' are decoded from json strings to objects
 */
export interface DecodedGroupedEvent extends GroupedEventDBScheme {
    /**
     * Event data where 'context' and 'addons' are objects
     */
    payload: DecodedEventData<EventAddons>;
}
/**
 * In database we store 'context' and 'addons' as json strings to avoind mongo keys conflict
 */
export interface EncodedGroupedEvent extends GroupedEventDBScheme {
    /**
     * Event data where 'context' and 'addons' are json strings
     */
    payload: EncodedEventData;
}
