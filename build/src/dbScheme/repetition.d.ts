import { ObjectId } from "mongodb";
import { DecodedEventData, EncodedEventData, EventDataAccepted } from '../base/event/event';
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
     * And any of EventDataAccepted field with diff
     * except fields that used in groupHash
     */
    payload: EventDataAccepted<EventAddons>;
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
