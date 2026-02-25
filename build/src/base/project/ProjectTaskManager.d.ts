/**
 * Task Manager usage tracking for daily auto-task budget
 */
export interface ProjectTaskManagerUsage {
    /**
     * UTC day boundary (e.g. 2026-01-17T00:00:00.000Z)
     */
    dayStartUtc: Date;
    /**
     * Number of auto-created tasks since dayStartUtc
     */
    autoTasksCreated: number;
}
/**
 * Task Manager configuration for project
 */
export interface ProjectTaskManagerConfig {
    /**
     * Type of task manager (currently only 'github' is supported)
     */
    type: 'github';
    /**
     * Enable automatic task creation by scheduled worker
     */
    autoTaskEnabled: boolean;
    /**
     * Threshold for auto task creation (minimum totalCount)
     */
    taskThresholdTotalCount: number;
    /**
     * Assign agent (e.g. Copilot) to newly created tasks
     */
    assignAgent: boolean;
    /**
     * Usage tracking for daily auto-task budget
     */
    usage?: ProjectTaskManagerUsage;
    /**
     * Date when integration was connected
     */
    connectedAt: Date;
    /**
     * Date when configuration was last updated
     */
    updatedAt: Date;
    /**
     * Task manager specific configuration (typed by `type`)
     */
    config: {
        /**
         * GitHub App installation ID.
         *
         * This is a **copy** from workspace.integrations.github.installations[].
         * Stored here for worker optimization — allows the worker to operate
         * per-project without additional joins/lookups to the workspaces collection.
         */
        installationId: string;
        /**
         * Repository ID
         */
        repoId: string | number;
        /**
         * Repository full name (owner/repo)
         */
        repoFullName: string;
        /**
         * Primary programming language of the repository (as reported by GitHub)
         */
        repoLanguage?: string;
    };
}
