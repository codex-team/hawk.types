/**
 * Serialized Long Task addon payload.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming
 */
export interface LongTaskAddon {
    /** Start time of the long task relative to navigation start (ms) */
    taskStartTimeMs: number;
    /** Rounded duration of the long task (ms) */
    taskDurationMs: number;
    /** Attribution source type (e.g. "same-origin-ancestor", "cross-origin-descendant") */
    attributionSourceType?: string;
    /** Container element type ("iframe", "embed", "object") */
    containerElementType?: string;
    /** Source URL of the container element */
    containerSourceUrl?: string;
    /** DOM id of the container element */
    containerElementId?: string;
    /** DOM name attribute of the container element */
    containerElementName?: string;
}
/**
 * Serialized PerformanceScriptTiming entry within a Long Animation Frame.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceScriptTiming
 */
export interface LoAFScriptEntry {
    /** How the script was called (e.g. "DOMWindow.onclick", "TimerHandler:setTimeout") */
    invokerName?: string;
    /** Entry point type ("event-listener", "user-callback", "resolve-promise", etc.) */
    invokerType?: string;
    /** Source URL of the script */
    sourceUrl?: string;
    /** Top-level function name at the entry point */
    sourceFunctionName?: string;
    /** Character position in the source file */
    sourceCharPosition?: number;
    /** Start time of script execution relative to navigation start (ms) */
    scriptStartTimeMs?: number;
    /** Rounded duration of script execution (ms) */
    scriptDurationMs?: number;
    /** When compilation finished and execution began (ms) */
    executionStartTimeMs?: number;
    /** Time spent in forced synchronous style/layout recalculations (ms) */
    forcedStyleAndLayoutDurationMs?: number;
    /** Time spent on synchronous pausing operations (ms) */
    pauseDurationMs?: number;
    /** Relationship of the script's container to the top-level document */
    windowAttribution?: string;
}
/**
 * Serialized Long Animation Frame addon payload.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongAnimationFrameTiming
 */
export interface LongAnimationFrameAddon {
    /** Start time of the animation frame relative to navigation start (ms) */
    frameStartTimeMs: number;
    /** Rounded total duration of the animation frame (ms) */
    frameDurationMs: number;
    /** Time the main thread was blocked from responding to high-priority tasks (ms) */
    frameBlockingDurationMs?: number;
    /** Start time of the rendering cycle (ms) */
    renderStartTimeMs?: number;
    /** When style and layout calculations began (ms) */
    styleAndLayoutStartTimeMs?: number;
    /** Timestamp of the first UI event queued during this frame (ms) */
    firstUIEventTimeMs?: number;
    /** Script timing entries that contributed to this frame, keyed as "script_0", "script_1", etc. */
    scripts?: Record<string, LoAFScriptEntry>;
}
/**
 * Serialized Web Vital metric addon payload.
 */
export interface WebVitalAddon {
    /** Metric identifier (LCP, FCP, TTFB, INP, CLS) */
    metricName: string;
    /** Raw metric value (ms for timing metrics, unitless for CLS) */
    metricValue: number;
    /** Rating bucket: "good", "needs-improvement", or "poor" */
    metricRating: string;
    /** Delta since the last report */
    metricDelta?: number;
}
/**
 * Top-level addon keys for performance issue events.
 * Used by both the JavaScript catcher (serialization) and Hawk Garage (rendering).
 */
export interface PerformanceIssueAddons {
    /** Long Task performance issue data */
    'Long Task'?: LongTaskAddon;
    /** Long Animation Frame performance issue data */
    'Long Animation Frame'?: LongAnimationFrameAddon;
    /** Web Vital metric data */
    'Web Vitals'?: WebVitalAddon;
}
