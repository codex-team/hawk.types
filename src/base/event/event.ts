import { BacktraceFrame } from './backtraceFrame';
import { AffectedUser } from './affectedUser';
import { EventAddons } from './addons';
import { Json } from '../../utils';

/**
 * Information about event (Payload of the event)
 * That object will be send as 'payload' to the Collector
 */
export interface EventData<Addons extends EventAddons> {
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
    addons?: Addons;

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
 * Event data with decoded unsafe fields
 */
export interface DecodedEventData<Addons extends EventAddons> extends EventData<Addons> {
    /**
     * Json parsed context string
     */
    context?: EventContext;

    /**
     * Json parsed addons string
     */
    addons?: Addons;
}

/**
 * Event data with encoded unsafe fields
 */
export interface EncodedEventData extends EventData<EventAddons> {
    /**
     * Stringified context object
     */
    context?: string;

    /**
     * Stringified addons object
     */
    addons?: string;
}

/**
 * Context is any additional data sent by developer
 */
export type EventContext = Json;
