/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?fuzzy=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { fuzzy: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { staged: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/suggest?searchKeywords.locale=searchKeywords.locale',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({
          queryArgs: { 'searchKeywords.locale': 'searchKeywords.locale' },
        }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyProductProjectionsSuggestRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach(rm => {
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
