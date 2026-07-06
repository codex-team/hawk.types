/**
 * Trace metadata attached to error events for linking related frontend/backend occurrences.
 */
export interface TraceContext {
  /**
   * Shared identifier for events from the same execution chain.
   */
  traceId: string;
}
