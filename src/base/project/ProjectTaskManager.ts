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
     * GitHub App installation ID
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
     * Delegated user OAuth token for user-to-server authentication
     * Used for creating issues and assigning Copilot on behalf of the user
     */
    delegatedUser?: {
      /**
       * Hawk user ID who authorized the GitHub App
       */
      hawkUserId: string;

      /**
       * GitHub user ID
       */
      githubUserId: number;

      /**
       * GitHub username/login
       */
      githubLogin: string;

      /**
       * OAuth access token (user-to-server token)
       */
      accessToken: string;

      /**
       * Date when token was created/saved
       */
      tokenCreatedAt: Date;

      /**
       * Date when token was last successfully validated
       * null if never validated
       */
      tokenLastValidatedAt: Date | null;

      /**
       * Token status
       * - active: token is valid (GET /user returns 200)
       * - revoked: token was revoked (GET /user returns 401/403) or user removed authorization
       * - missing: token is not present in project
       */
      status: 'active' | 'revoked' | 'missing';
    };
  };
}
