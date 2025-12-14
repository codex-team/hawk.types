import type { ObjectId } from 'bson';
import type { DecodedEventData, EncodedEventData, EventData } from '../base/event/event.ts';
import type { EventAddons } from '../base/event/addons/index.ts';

/**
 * Repetition - is a record about event that was already processed. It stores only difference between original event and repetition.
 */
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
   * @deprecated use delta instead
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
  /**
   * Event data where 'context' and 'addons' are objects
   */
  payload: DecodedEventData<EventAddons>;
}

/**
 * Repetition with decoded event data
 */
export interface EncodedRepetition {
  /**
   * Event data where 'context' and 'addons' are json strings
   */
  payload: EncodedEventData;
}
