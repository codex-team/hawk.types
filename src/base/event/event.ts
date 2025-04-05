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

    /**
     * Catcher version
     */
    catcherVersion?: string;
}

/**
 * Event accepted and processed by Collector.
 */
export interface EventDataAccepted<EventAddons> extends EventData<EventAddons> {}


/**
 * Event data with decoded unsafe fields
 */
export interface DecodedEventData<EventAddons> extends EventDataAccepted<EventAddons> {
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
export interface EncodedEventData extends EventDataAccepted<EventAddons> {
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
