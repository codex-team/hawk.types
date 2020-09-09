import { UserDBScheme } from "../../dbScheme/user";

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
    // eslint-disable-next-line
    addons?: {[key: string]: string|object};

    /**
     * Current release (aka version, revision) of an application
     */
    release?: string;

    /**
     * Current authenticated user
     */
    user?: UserDBScheme;

    /**
     * Any other information collected and passed by user
     */
    // eslint-disable-next-line
    context?: object;
}

