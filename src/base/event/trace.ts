/**
 * Distributed trace metadata attached to error and performance events.
 */
export interface EventTrace {
  /**
   * Shared identifier for events from the same execution chain.
   */
  id: string;
}
