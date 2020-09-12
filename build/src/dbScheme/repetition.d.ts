import { ObjectId } from "mongodb";
import { EventData } from "../base/event/event";
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
    payload: EventData;
}
