/**
 * Issue status changes supported by project notifications.
 */
export declare enum IssueStatusChangeType {
    /**
     * Hawk issue was marked as resolved.
     */
    RESOLVED = "RESOLVED",
    /**
     * Hawk issue was marked as unresolved.
     */
    UNRESOLVED = "UNRESOLVED",
    /**
     * Hawk issue was ignored.
     */
    IGNORED = "IGNORED",
    /**
     * Hawk issue was unignored.
     */
    UNIGNORED = "UNIGNORED",
    /**
     * Hawk issue was starred.
     */
    STARRED = "STARRED",
    /**
     * Hawk issue was unstarred.
     */
    UNSTARRED = "UNSTARRED",
    /**
     * Any Hawk mark change (resolve / ignore / star toggles). Matches granular RESOLVED… events.
     */
    MARK_CHANGED = "MARK_CHANGED",
    /**
     * External GitHub issue was created by task manager.
     */
    GITHUB_ISSUE_CREATED = "GITHUB_ISSUE_CREATED",
    /**
     * GitHub Copilot was assigned to created issue.
     */
    GITHUB_COPILOT_ASSIGNED = "GITHUB_COPILOT_ASSIGNED"
}
