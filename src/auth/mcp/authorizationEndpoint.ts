/**
 * MCP Authorization Endpoint request body interface
 */
export interface AuthorizationEndpointRequest {
  /**
   * MCP Client Identifier
   */
  client_id: string;

  /**
   * Indicates the URL to return the user to after authorization is complete
   */
  redirect_uri: string;

  /**
   * Opaque value used by the client to maintain state between the request and callback
   */
  state: string;

  /**
   * Base64-URL-encoded string of the SHA256 hash of the code verifier
   */
  code_challenge: string;
};

/**
 * MCP Authorization Endpoint response body interface
 */
export interface AuthorizationEndpointResponse {
  /**
   * Indicates the URL to return the user to after authorization is complete.
   * Populated with additional parameters
   */
  redirect_uri: string;
};
