/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'post',
      uri: '/test_projectKey/image-search?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .imageSearch()
        .post({ body: null, headers: null, queryArgs: { limit: 7 } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/image-search?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .imageSearch()
        .post({ body: null, headers: null, queryArgs: { offset: 3 } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/image-search',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .imageSearch()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyImageSearchRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach((rm) => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})
