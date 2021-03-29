import { ObjectId } from "mongodb";
import { DecodedEventData, EncodedEventData, EventData } from "../base/event/event";
import {EventAddons} from '../base/event/addons';

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
     * And any of EventData field with diff
     * except fields that used in groupHash
     */
    payload: EventData<EventAddons>;
}

/**
 * Repetition with decoded event data
 */
export interface DecodedRepetition {
    payload: DecodedEventData
}

/**
 * Repetition with decoded event data
 */
export interface EncodedRepetition {
    payload: EncodedEventData
}
