"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusChangeType = void 0;
/**
 * Issue status changes supported by project notifications.
 */
var IssueStatusChangeType;
(function (IssueStatusChangeType) {
    /**
     * Hawk issue was marked as resolved.
     */
    IssueStatusChangeType["RESOLVED"] = "RESOLVED";
    /**
     * Hawk issue was marked as unresolved.
     */
    IssueStatusChangeType["UNRESOLVED"] = "UNRESOLVED";
    /**
     * Hawk issue was ignored.
     */
    IssueStatusChangeType["IGNORED"] = "IGNORED";
    /**
     * Hawk issue was unignored.
     */
    IssueStatusChangeType["UNIGNORED"] = "UNIGNORED";
    /**
     * Hawk issue was starred.
     */
    IssueStatusChangeType["STARRED"] = "STARRED";
    /**
     * Hawk issue was unstarred.
     */
    IssueStatusChangeType["UNSTARRED"] = "UNSTARRED";
    /**
     * Any Hawk mark change (resolve / ignore / star toggles). Matches granular RESOLVED… events.
     */
    IssueStatusChangeType["MARK_CHANGED"] = "MARK_CHANGED";
    /**
     * External GitHub issue was created by task manager.
     */
    IssueStatusChangeType["GITHUB_ISSUE_CREATED"] = "GITHUB_ISSUE_CREATED";
    /**
     * GitHub Copilot was assigned to created issue.
     */
    IssueStatusChangeType["GITHUB_COPILOT_ASSIGNED"] = "GITHUB_COPILOT_ASSIGNED";
})(IssueStatusChangeType || (exports.IssueStatusChangeType = IssueStatusChangeType = {}));
