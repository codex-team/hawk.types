import { BacktraceFrame } from './backtraceFrame';
import { AffectedUser } from './affectedUser';
import { EventAddons } from './addons';
import { Json } from '../../utils';

/**
 * Information about event
 * That object will be send as 'payload' to the Collector
 */
export interface EventData<CatcherAddons extends EventAddons> {
    /**
     * Event title
     */
    title: string;

    /**
     * Event type (severity level)
     */
    type?: string;

    /**
     * Stack
     * From the latest call to the earliest
     */
    backtrace?: BacktraceFrame[];

    /**
     * Catcher-specific information
     */
    addons?: CatcherAddons | string;

    /**
     * Current release (aka version, revision) of an application
     */
    release?: string;

    /**
     * Current authenticated user
     */
    user?: AffectedUser;

    /**
     * Any other information collected and passed by user
     */
    context?: EventContext | string;
}

/**
 * Event accepted and processed by Collector.
 * It sets the timestamp to the event payload.
 */
export interface EventDataAccepted extends EventData<EventAddons> {
    /**
     * Occurrence time
     * Unix timestamp in seconds (example: 1567009247.576)
     * (Set by the Collector)
     */
    timestamp: number;
}


/**
 * Event data with decoded unsafe fields
 */
export interface DecodedEventData extends EventData<EventAddons> {
    /**
     * Decoded context
     */
    context?: EventContext;

    /**
     * Decoded addons
     */
    addons?: EventAddons;
}

/**
 * Event data with encoded unsafe fields
 *
 */
export interface EncodedEventData extends EventData<EventAddons> {
    /**
     * Encoded context
     */
    context?: string;

    /**
     * Encoded addons
     */
    addons?: string;
}

/**
 * Context is any additional data sent by developer
 */
export type EventContext = Json;
