import { Json } from '../../../utils';
/**
 * Parsed user agent
 */
export interface BeautifiedUserAgent {
    /**
     * Operation system
     */
    os: string;
    /**
     * Version of operation system
     */
    osVersion: string;
    /**
     * Browser name
     */
    browser: string;
    /**
     * Full browser version
     */
    browserVersion: string;
}
/**
 * Event from the browser console
 */
export interface ConsoleLogEvent {
    /**
     * Log method used (e.g., "log", "warn", "error")
     */
    method: string;
    /**
     * Timestamp of the log event
     */
    timestamp: Date;
    /**
     * Type of the log message (e.g., "error", "warning", "info")
     */
    type: string;
    /**
     * The main log message
     */
    message: string;
    /**
     * Stack trace if available
     */
    stack?: string;
    /**
     * File and line number where the log occurred
     */
    fileLine?: string;
    /**
     * CSS styles for %c formatting
     */
    styles?: string[];
}
/**
 * Additional data that can be sent by the JavaScript Catcher
 */
export interface JavaScriptAddons {
    /**
     * Information about the window
     */
    window: WindowData;
    /**
     * User Agent string
     */
    userAgent: string;
    /**
     * Where error happened
     */
    url: string;
    /**
     * Parsed user agent
     */
    beautifiedUserAgent?: BeautifiedUserAgent;
    /**
     * Query parameters for the current URL
     */
    get?: Json;
    /**
     * Unparsed error data that can be send by enabling 'debug' option on the catcher side
     */
    RAW_EVENT_DATA?: Json;
    /**
     * Vue integration data
     */
    vue?: VueIntegrationAddons;
    /**
     * Additional data extracted from the Sentry event addons
     */
    sentry?: SentryAddons;
    /**
     * Console log events collected from the browser
     */
    consoleOutput?: ConsoleLogEvent[];
}
/**
 * Information about the window
 */
export interface WindowData {
    /**
     * Window offset width in pixels
     */
    innerWidth: number;
    /**
     * Window offset height in pixels
     */
    innerHeight: number;
}
/**
 * Additional data spoiled from Vue app
 */
export interface VueIntegrationAddons {
    /**
     * A Vue-specific error info, e.g. which lifecycle hook the error was found in.
     */
    lifecycle: string;
    /**
     * Component name where error occurred
     */
    component: string | null;
    /**
     * Component props
     */
    props?: Json;
    /**
     * Component local variables
     */
    data?: Json;
    /**
     * Component computed variables
     */
    computed?: Json;
}
/**
 * Additional data extracted from the Sentry event payload
 */
export interface SentryAddons {
    /**
     * The main message associated with the event.
     */
    message?: string;
    /**
     * The log entry data (if any) for the event.
     */
    logentry?: string;
    /**
     * The timestamp when the event occurred.
     */
    timestamp?: string;
    /**
     * The timestamp when the event started.
     */
    start_timestamp?: string;
    /**
     * The severity level of the event (e.g., "error", "warning").
     */
    level?: string;
    /**
     * The platform where the event occurred (e.g., "browser", "node").
     */
    platform?: string;
    /**
     * The name of the server where the event occurred.
     */
    server_name?: string;
    /**
     * The release version for the event.
     */
    release?: string;
    /**
     * The distribution version for the event.
     */
    dist?: string;
    /**
     * The environment in which the event occurred (e.g., "production", "staging").
     */
    environment?: string;
    /**
     * The request data associated with the event.
     */
    request?: Json;
    /**
     * The transaction ID for the event.
     */
    transaction?: string;
    /**
     * The modules data for the event.
     */
    modules?: Json;
    /**
     * A fingerprint used to group the event with others.
     */
    fingerprint?: string[];
    /**
     * Tags associated with the event.
     */
    tags?: Json;
    /**
     * Additional custom data associated with the event.
     */
    extra?: Json;
}
