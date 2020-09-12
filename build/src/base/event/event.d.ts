import { BacktraceFrame } from "./backtraceFrame";
import { AffectedUser } from "./affectedUser";
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
    get?: object;
    /**
     * POST parameters
     */
    post?: object;
    /**
     * Headers map
     */
    headers?: object;
    /**
     * Catcher-specific information
     */
    addons?: {
        [key: string]: string | object;
    };
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
    context?: object;
}
