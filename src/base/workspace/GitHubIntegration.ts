/**
 * GitHub App installation account info
 */
export interface GitHubInstallationAccount {
  /**
   * GitHub account ID
   */
  id: number;

  /**
   * GitHub account login (username or org name)
   */
  login: string;

  /**
   * Account type
   */
  type: 'User' | 'Organization';
}

/**
 * Delegate user for agent operations (e.g. Copilot assignment).
 * Points to a Hawk user who has an active GitHub authorization.
 */
export interface GitHubInstallationDelegatedUser {
  /**
   * Hawk user ID of the delegate
   */
  hawkUserId: string;

  /**
   * GitHub user ID of the delegate
   */
  githubUserId: number;

  /**
   * GitHub login of the delegate
   */
  githubLogin: string;

  /**
   * Delegate status:
   * - 'active': delegate has a valid GitHub authorization
   * - 'missing': no workspace member has a GitHub authorization
   * - 'revoked': delegate's GitHub authorization was revoked
   */
  status: 'active' | 'missing' | 'revoked';
}

/**
 * GitHub App installation record stored at workspace level.
 *
 * GitHub issues installationId per organization/account, not per repository.
 * One workspace can have multiple installations
 * (e.g. client's GitHub org + personal account).
 */
export interface GitHubInstallation {
  /**
   * GitHub App installation ID
   */
  installationId: number;

  /**
   * GitHub account where the App is installed
   */
  account: GitHubInstallationAccount;

  /**
   * Hawk user ID of who connected this installation (for audit)
   */
  connectedByHawkUserId: string;

  /**
   * Date when installation was connected
   */
  connectedAt: Date;

  /**
   * Date when installation record was last updated
   */
  updatedAt: Date;

  /**
   * Delegate user for agent actions in Worker
   */
  delegatedUser: GitHubInstallationDelegatedUser;
}

/**
 * GitHub integration data stored at workspace level
 */
export interface WorkspaceGitHubIntegration {
  /**
   * List of GitHub App installations for this workspace
   */
  installations: GitHubInstallation[];
}

/**
 * All integrations stored at workspace level
 */
export interface WorkspaceIntegrations {
  /**
   * GitHub integration (installations, etc.)
   */
  github?: WorkspaceGitHubIntegration;
}
