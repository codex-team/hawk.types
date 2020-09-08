/**
 * Available options of 'What to receive'
 */
export enum UserNotificationType {
    /**
     * When user is assigned to the issue (event)
     */
    IssueAssigning = 'IssueAssigning',

    /**
     * Regular digest of what happened on the project for the week
     */
    WeeklyDigest = 'WeeklyDigest',

    /**
     * Only important messages from Hawk team
     */
    SystemMessages = 'SystemMessages',
}
