/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

export interface ApiClient {
  /**
   *	Platform-generated unique identifier of the API Client.
   *	This is the OAuth2 `client_id` that can be used to [obtain an access token](/../api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server).
   *
   */
  readonly id: string
  /**
   *	Name of the API Client.
   *
   */
  readonly name: string
  /**
   *	Whitespace-separated list of [OAuth scopes](/../api/scopes) that can be used when [obtaining an access token](/../api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server).
   *
   */
  readonly scope: string
  /**
   *	Only shown once in the response of creating the API Client.
   *	This is the OAuth2 `client_secret` that can be used to [obtain an access token](/../api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server).
   *
   */
  readonly secret?: string
  /**
   *	Date of the last day this API Client was used to [obtain an access token](/../api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server).
   *
   */
  readonly lastUsedAt?: string
  /**
   *	If set, the Client will be deleted on (or shortly after) this point in time.
   *
   */
  readonly deleteAt?: string
  /**
   *	Date and time (UTC) the API Client was initially created at.
   *
   */
  readonly createdAt?: string
  /**
   *	Expiration time in seconds for each access token obtained by the API Client. Only present when set with the [APIClientDraft](ctp:api:type:ApiClientDraft). If not present the default value applies.
   *
   *
   */
  readonly accessTokenValiditySeconds?: number
  /**
   *	Inactivity expiration time in seconds for each refresh token obtained by the API Client. Only present when set with the [APIClientDraft](ctp:api:type:ApiClientDraft). If not present the default value applies.
   *
   *
   */
  readonly refreshTokenValiditySeconds?: number
}
export interface ApiClientDraft {
  /**
   *	Name of the API Client.
   *
   */
  readonly name: string
  /**
   *	Whitespace-separated list of [OAuth scopes](/../api/scopes) that can be used when [obtaining an access token](/../api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server).
   *
   */
  readonly scope: string
  /**
   *	If set, the Client will be deleted after the specified amount of days.
   *
   */
  readonly deleteDaysAfterCreation?: number
  /**
   *	Expiration time in seconds for each access token obtained by the API Client. If not set the default value applies.
   *
   *
   */
  readonly accessTokenValiditySeconds?: number
  /**
   *	Inactivity expiration time in seconds for each refresh token obtained by the API Client. The expiration time for refresh tokens is restarted each time the token is used. If not set the default value applies.
   *
   *
   */
  readonly refreshTokenValiditySeconds?: number
}
/**
 *	[PagedQueryResult](/general-concepts#pagedqueryresult) with `results` containing an array of [APIClient](ctp:api:type:ApiClient).
 *
 */
export interface ApiClientPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Offset supplied by the client or server default.
   *	It is the number of elements skipped, not a page number.
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	API Clients matching the query.
   *
   */
  readonly results: ApiClient[]
}
