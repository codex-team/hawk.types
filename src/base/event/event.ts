import { BacktraceFrame } from "./backtraceFrame";
import { AffectedUser } from "./affectedUser";

/**
 * Represents simple JSON-like document
 */
type Dict = {[key: string]: DictNode};

/**
 * Represents possible field values in Dict
 */
type DictNode = string | number | boolean | Dict;

/**
 * Information about event
 * That object will be send as 'payload' to the Collector
 */
export interface EventData {
    /**
     * Event title
     */
    title: string;

    /**
     * Occurrence time
     * [!] Must be a Unix timestamp in seconds (example: 1567009247.576)
     */
    timestamp: number;

    /**
     * Stack
     * From the latest call to the earliest
     */
    backtrace?: BacktraceFrame[];

    /**
     * GET parameters
     */
    // eslint-disable-next-line
    get?: object;

    /**
     * POST parameters
     */
    // eslint-disable-next-line
    post?: object;

    /**
     * Headers map
     */
    // eslint-disable-next-line
    headers?: object;

    /**
     * Catcher-specific information
     */
    addons?: Dict | string;

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
    context?: Dict | string;
}

/**
 * Event data with decoded unsafe fields
 */
export interface DecodedEventData extends EventData {
    /**
     * Decoded context
     */
    context?: Dict;

    /**
     * Decoded addons
     */
    addons?: Dict;
}

/**
 * Event data with encoded unsafe fields
 *
 */
export interface EncodedEventData extends EventData {
    /**
     * Encoded context
     */
    context?: string;

    /**
     * Encoded addons
     */
    addons?: string;
}
