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
      uri: '/test_projectKey/product-projections?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { staged: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { priceCurrency: 'priceCurrency' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { priceCountry: 'priceCountry' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { priceCustomerGroup: 'priceCustomerGroup' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { priceChannel: 'priceChannel' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { localeProjection: 'localeProjection' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { storeProjection: 'storeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyProductProjectionsRequestBuilder Requests', () => {
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
