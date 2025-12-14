"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationType = void 0;
/**
 * Available options of 'What to receive'
 */
var UserNotificationType;
(function (UserNotificationType) {
    /**
     * When user is assigned to the issue (event)
     */
    UserNotificationType["IssueAssigning"] = "IssueAssigning";
    /**
     * Regular digest of what happened on the project for the week
     */
    UserNotificationType["WeeklyDigest"] = "WeeklyDigest";
    /**
     * Only important messages from Hawk team
     */
    UserNotificationType["SystemMessages"] = "SystemMessages";
})(UserNotificationType || (exports.UserNotificationType = UserNotificationType = {}));
