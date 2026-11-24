"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthErrorCode = exports.OAuthGrantType = void 0;
/**
 * Possible {@link https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-17#name-authorization-grant | OAuth authorization grant types}
 */
var OAuthGrantType;
(function (OAuthGrantType) {
    /**
     * Used to obtain an access token
     */
    OAuthGrantType["authorizationCode"] = "authorization_code";
    /**
     * Used to obtain a new access token when the current access token becomes invalid or expires
     */
    OAuthGrantType["refreshToken"] = "refresh_token";
})(OAuthGrantType || (exports.OAuthGrantType = OAuthGrantType = {}));
/**
 * Possible {@link https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-17#section-3.2.4 | OAuth error codes}
 */
var OAuthErrorCode;
(function (OAuthErrorCode) {
    /**
     * The request is missing a required parameter, includes an unsupported parameter value
     * (other than grant type), repeats a parameter, includes multiple credentials, utilizes
     * more than one mechanism for authenticating the client, contains a code_verifier
     * although no code_challenge was sent in the authorization request, or is otherwise malformed
     */
    OAuthErrorCode["invalidRequest"] = "invalid_request";
    /**
     * Client authentication failed (e.g., unknown client, no client authentication included,
     * or unsupported authentication method).
     */
    OAuthErrorCode["invalidClient"] = "invalid_client";
    /**
     * The provided authorization grant (e.g., authorization code, resource owner credentials)
     * or refresh token is invalid, expired, revoked, does not match the redirect URI used in
     * the authorization request, or was issued to another client.
     */
    OAuthErrorCode["invalidGrant"] = "invalid_grant";
    /**
     * The authenticated client is not authorized to use this authorization grant type
     */
    OAuthErrorCode["unauthorizedClient"] = "unauthorized_client";
    /**
     * The authorization grant type is not supported by the authorization server
     */
    OAuthErrorCode["unsupportedGrantType"] = "unsupported_grant_type";
    /**
     * requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner
     */
    OAuthErrorCode["invalidScope"] = "invalid_scope";
})(OAuthErrorCode || (exports.OAuthErrorCode = OAuthErrorCode = {}));
;
;
