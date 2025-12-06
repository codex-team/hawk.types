import { Json } from '../../utils';

/**
 * Breadcrumb severity level
 */
export type BreadcrumbLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';

/**
 * Breadcrumb type - controls categorization and UI appearance
 * Common types suitable for both client and backend
 */
export type BreadcrumbType =
  | 'default'
  | 'request'    // fetch, xhr, db calls, etc
  | 'ui'         // click, mousemove, scroll, etc
  | 'navigation' // page open, route change, etc
  | 'logic'      // gql resolvers, internal methods calls, etc
  | 'error';     // errors, exceptions, etc

/**
 * Single breadcrumb entry - represents an event that occurred before the error
 */
export interface Breadcrumb {
  /**
   * Timestamp when the breadcrumb occurred
   * ISO 8601 string format (e.g., "2025-12-06T12:34:56.789Z")
   *
   * @example "2025-12-06T12:34:56.789Z"
   */
  timestamp: string;

  /**
   * Type of breadcrumb - controls UI categorization
   */
  type?: BreadcrumbType;

  /**
   * Category of the event - more specific than type, provides detailed classification
   *
   * Examples:
   * - For type='ui': "ui.click", "ui.scroll", "ui.mousemove"
   * - For type='request': "fetch", "xhr", "db.query", "db.insert"
   * - For type='logic': "gql.resolver", "service.method", "middleware.auth"
   * - For type='navigation': "history.push", "history.replace", "route.change"
   *
   * @example "ui.click"
   * @example "fetch"
   * @example "gql.resolver"
   */
  category?: string;

  /**
   * Human-readable message describing the event
   *
   * @example "GET /api/profile 200"
   * @example "Click on button#submit"
   * @example "Navigated to /dashboard"
   * @example "User logged in"
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

