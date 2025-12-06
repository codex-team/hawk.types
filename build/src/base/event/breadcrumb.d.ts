import { Json } from '../../utils';
/**
 * Breadcrumb severity level
 */
export declare type BreadcrumbLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';
/**
 * Breadcrumb type - controls categorization and UI appearance
 * Common types suitable for both client and backend
 */
export declare type BreadcrumbType = 'default' | 'request' | 'ui' | 'navigation' | 'logic' | 'error';
/**
 * Single breadcrumb entry - represents an event that occurred before the error
 */
export interface Breadcrumb {
    /**
     * Timestamp when the breadcrumb occurred
     * ISO 8601 string or Unix timestamp (seconds or milliseconds)
     */
    timestamp: string | number;
    /**
     * Type of breadcrumb - controls UI categorization
     */
    type?: BreadcrumbType;
    /**
     * Category of the event (e.g., "ui.click", "fetch", "navigation")
     */
    category?: string;
    /**
     * Human-readable message describing the event
     */
    message?: string;
    /**
     * Severity level of the breadcrumb
     */
    level?: BreadcrumbLevel;
    /**
     * Arbitrary key-value data associated with the breadcrumb
     */
    data?: Record<string, Json>;
}
