import { ObjectId } from "mongodb";
import { DecodedEventData, EncodedEventData, EventData } from '../base/event/event';
import { EventAddons } from '../base/event/addons';
export interface RepetitionDBScheme {
    /**
     * Internal mongo id
     */
    _id?: ObjectId;
    /**
     * Hash for grouping similar events
     */
    groupHash: string;
    /**
     * @deprecated, use delta instead
     * And any of EventData field with diff
     * except fields that used in groupHash
     */
    payload?: EventData<EventAddons>;
    /**
     * Delta between original event and repetition
     */
    delta?: string;
    /**
     * Occurrence time
     * Unix timestamp in seconds (example: 1567009247.576)
     * (created by the Collector)
     */
    timestamp: number;
}
/**
 * Repetition with decoded event data
 */
export interface DecodedRepetition {
    payload: DecodedEventData<EventAddons>;
}
/**
 * Repetition with decoded event data
 */
export interface EncodedRepetition {
    payload: EncodedEventData;
}
