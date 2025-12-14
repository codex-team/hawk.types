/**
 * Tokens pair for User authentication.
 * Authorization by access token and refreshing pair by refresh token (after access token was expired).
 */
export interface TokensPair {
  /**
   * User's access token
   */
  accessToken: string;

  /**
   * User's refresh token for getting new tokens pair
   */
  refreshToken: string;
}
