/**
 * GitHub OAuth authorization stored at user level.
 *
 * accessToken is NOT stored persistently — it is obtained via refreshToken
 * each time an action is needed on behalf of the user (e.g. Copilot assignment).
 *
 * GitHub may return a new refreshToken during refresh (token rotation),
 * so it must be updated in the user document.
 */
export interface GitHubAuthorization {
    /**
     * GitHub user ID
     */
    githubUserId: number;
    /**
     * GitHub username/login
     */
    githubLogin: string;
    /**
     * OAuth refresh token.
     * Used to obtain ephemeral access tokens on demand.
     */
    refreshToken: string;
    /**
     * Date when refresh token expires.
     * null if refresh token expiration is disabled by GitHub.
     */
    refreshTokenExpiresAt: Date | null;
    /**
     * Date when this authorization (refreshToken) was originally created/saved
     */
    tokenCreatedAt: Date;
    /**
     * Date when refreshToken was last successfully used to obtain an accessToken.
     * null if never validated after initial creation.
     */
    tokenLastValidatedAt: Date | null;
    /**
     * Token status:
     * - 'active': token is valid
     * - 'revoked': token was revoked or user removed authorization
     */
    status: 'active' | 'revoked';
}
