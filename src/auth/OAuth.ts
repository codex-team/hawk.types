/**
 * Authorization request
 */
export interface OAuthRequest {
  /**
   * Client Identifier
   */
  client_id: string;

  /**
   * Indicates the URL to return the user to after authorization is complete
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
   * Indicates the URL to return the user to after authorization is complete.
   * Populated with additional parameters
   */
  redirect_uri: string;
};

/**
 * Authorization error
 */
export interface OAuthError {
  error: string; 
  error_description?: string;
}
