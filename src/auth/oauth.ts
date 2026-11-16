/**
 * Possible {@link https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-17#name-authorization-grant | OAuth authorization grant types}
 */
export declare enum OAuthGrantType {
  /**
   * Used to obtain an access token
   */
  authorizationCode = 'authorization_code',

  /**
   * Used to obtain a new access token when the current access token becomes invalid or expires
   */
  refreshToken = 'refresh_token'
}

/**
 * Possible {@link https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-17#section-3.2.4 | OAuth error codes}
 */
export declare enum OAuthErrorCode {
  /**
   * The request is missing a required parameter, includes an unsupported parameter value
   * (other than grant type), repeats a parameter, includes multiple credentials, utilizes
   * more than one mechanism for authenticating the client, contains a code_verifier
   * although no code_challenge was sent in the authorization request, or is otherwise malformed
   */
  invalidRequest = 'invalid_request',

  /**
   * Client authentication failed (e.g., unknown client, no client authentication included,
   * or unsupported authentication method).
   */
  invalidClient = 'invalid_client',

  /**
   * The provided authorization grant (e.g., authorization code, resource owner credentials)
   * or refresh token is invalid, expired, revoked, does not match the redirect URI used in
   * the authorization request, or was issued to another client.
   */
  invalidGrant = 'invalid_grant',

  /**
   * The authenticated client is not authorized to use this authorization grant type
   */
  unauthorizedClient = 'unauthorized_client',

  /**
   * The authorization grant type is not supported by the authorization server
   */
  unsupportedGrantType = 'unsupported_grant_type',

  /**
   * requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner
   */
  invalidScope = 'invalid_scope'
}

/**
 * Authorization request
 */
export interface OAuthRequest {
  /**
   * Client Identifier
   */
  client_id: string;

  /**
   * The URL to return the user to after authorization is complete
   */
  redirect_uri: string;

  /**
   * Opaque value used by the client to maintain state between the request and callback
   */
  state?: string;

  /**
   * Base64-URL-encoded string of the SHA256 hash of the code verifier
   */
  code_challenge: string;

  /**
   * The code challenge transformation method
   */
  code_challenge_method: 'S256';

  /**
   * Target service or resource to which access is being requested.
   * MUST be an absolute URI
   */
  resource?: string;

  /**
   * Additional access requested by the application
   */
  scope?: string;

  /**
   * URL string that references a logo for the client
   */
  logoUrl?: string;
};

/**
 * Authorization response
 */
export interface OAuthResponse {
  /**
   * The URL to return the user to after authorization is complete.
   * Populated with additional parameters
   */
  redirect_uri: string;
};

/**
 * Authorization error
 */
export interface OAuthError {
  /**
   * Error code
   */
  error: OAuthErrorCode;

  /**
   * Optional text providing additional information
   */
  error_description?: string;
}

/**
 * Base OAuth token requset parameters
 */
type OAuthTokenRequestBase = {
  /**
   * Client Identifier
   */
  client_id: string;

  /**
   * Target service or resource to which access is being requested.
   * MUST be an absolute URI
   */
  resource?: string;
};

/**
 * Parameters for an authorization code token request
 */
type OAuthAuthorizationTokenRequest = OAuthTokenRequestBase & {
  /**
   * OAuth grant type
   */
  grant_type: OAuthGrantType.authorizationCode;

  /**
   * The authorization code received from the authorization server
   */
  code: string;

  /**
   * High-entropy cryptographic random STRING
   */
  code_verifier: string;

  /**
   * The URL to return the user to after authorization is complete
   * Populated with additional parameters
   */
  redirect_uri: string;
};

/**
 * Parameters for a refresh token request
 */
type OAuthRefreshTokenRequest = OAuthTokenRequestBase & {
  /**
   * OAuth grant type
   */
  grant_type: OAuthGrantType.refreshToken;

  /**
   * JWT refresh token
   */
  refresh_token: string;
};

/**
 * Union of authorization code and refresh token requests
 */
export type OAuthTokenRequest =
  | OAuthAuthorizationTokenRequest
  | OAuthRefreshTokenRequest;

/**
 * Parameters for {@link https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-16#name-token-endpoint-response | Token Endpoint Response}
 */
export type TokenResponse = {
  /**
   * JWT access token
   */
  access_token: string;

  /**
   * JWT refresh token
   */
  refresh_token?: string;

  /**
   * The type of the access token issued
   */
  token_type: 'Bearer';

  /**
   * A JSON number that represents the lifetime in seconds of the access token
   */
  expires_in: number;

  /**
   * Access provided by the OAuth server
   */
  scope: string;
};
