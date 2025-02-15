import nock from 'nock'
import fetch from 'node-fetch'
import createAuthMiddlewareBase from '../../src/sdk-middleware-auth/base-auth-flow'
import * as buildRequests from '../../src/sdk-middleware-auth/build-requests'
import store from '../../src/sdk-middleware-auth/utils'

function createTestRequest(options) {
  return {
    url: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestResponse(options) {
  return {
    ...options,
  }
}

function createTestMiddlewareOptions(options) {
  return {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: 'foo',
    credentials: {
      clientId: '123',
      clientSecret: 'secret',
    },
    fetch,
    ...options,
  }
}

function createBaseMiddleware(options, next, refreshOptions) {
  const params = {
    request: createTestRequest(null),
    response: createTestResponse(null),
    pendingTasks: [],
    ...buildRequests.buildRequestForClientCredentialsFlow(
      createTestMiddlewareOptions(null)
    ),
    requestState: store(false),
    tokenCache: store({}),
    fetch,
    ...options,
  } as any
  return createAuthMiddlewareBase(params, next, refreshOptions)
}

describe('Base Auth Flow', () => {
  beforeEach(() => {
    nock.cleanAll()
  })

  test('throw without `fetch` passed and globally available', () => {
    const middlewareOptions = createTestMiddlewareOptions({ fetch: undefined })

    expect(() => {
      createBaseMiddleware(middlewareOptions, () => {}, null)
    }).toThrow(
      new Error(
        '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.'
      )
    )
  })

  test('get a new auth token if not present in request headers', () =>
    new Promise((resolve) => {
      const next = (req) => {
        expect(req).toHaveProperty('headers.Authorization', 'Bearer xxx')
        resolve(null)
      }
      const middlewareOptions = createTestMiddlewareOptions(null)

      nock(middlewareOptions.host)
        .filteringRequestBody((body) => {
          expect(body).toBe('grant_type=client_credentials')
          return '*'
        })
        .post('/oauth/token', '*')
        .reply(200, {
          access_token: 'xxx',
          expires_in: 100,
        })
      createBaseMiddleware({}, next, null)
    }))

  test('reject if network error occur while fetching token', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject: (error) => {
          expect(error.message).toMatch('socket timeout')
          resolve(null)
        },
      })
      const next = () => {
        reject(new Error('this method should not be called.'))
      }
      const middlewareOptions = createTestMiddlewareOptions(null)

      nock(middlewareOptions.host)
        .filteringRequestBody((body) => {
          expect(body).toBe('grant_type=client_credentials')
          return '*'
        })
        .post('/oauth/token', '*')
        .replyWithError('socket timeout')
      createBaseMiddleware({ response }, next, null)
    }))

  test('reject if auth request fails (JSON error response)', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject: (error) => {
          expect(error.message).toBe('Oops')
          expect(error.body).toEqual({ message: 'Oops' })
          resolve(null)
        },
      })
      const next = () => {
        reject(
          new Error(
            'This function should never be called, the response was rejected'
          )
        )
      }
      const middlewareOptions = createTestMiddlewareOptions(null)
      nock(middlewareOptions.host)
        .filteringRequestBody(/.*/, '*')
        .post('/oauth/token', '*')
        .reply(400, { message: 'Oops' }) // <-- JSON error response

      createBaseMiddleware({ response }, next, null)
    }))

  test('reject if auth request fails (non JSON error response)', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject: (error) => {
          expect(error.message).toBe('Oops')
          expect(error.body).toBeUndefined()
          resolve(null)
        },
      })
      const next = () => {
        reject(
          new Error(
            'This function should never be called, the response was rejected'
          )
        )
      }
      const middlewareOptions = createTestMiddlewareOptions(null)
      nock(middlewareOptions.host)
        .filteringRequestBody(/.*/, '*')
        .post('/oauth/token', '*')
        .reply(400, 'Oops') // <-- non JSON error response

      createBaseMiddleware({ response }, next, null)
    }))

  test('retrieve a new token if previous one expired', () =>
    new Promise((resolve) => {
      const middlewareOptions = createTestMiddlewareOptions(null)
      let requestCount = 0
      nock(middlewareOptions.host)
        .persist() // <-- use the same interceptor for all requests
        .log(() => {
          requestCount += 1
        }) // keep track of the request count
        .filteringRequestBody(/.*/, '*')
        .post('/oauth/token', '*')
        .reply(200, () => ({
          access_token: 'xxx',
          // Return the first 2 requests with an expired token
          expires_in:
            requestCount < 2
              ? 1 // <-- to ensure it expires
              : Date.now() + 60 * 60 * 24,
        }))

      const next = () => {
        expect(requestCount).toBe(2)
        resolve(null)
      }
      const tokenCache = store({})
      const requestState = store(false)
      // Third call:
      // - we simulate that the request has a token set in the headers
      // - the previous token is still valid, no more requests
      const call3 = () => {
        expect(requestCount).toBe(2)
        createBaseMiddleware({ requestState, tokenCache }, next, null)
      }
      // Second call:
      // - we simulate that the request has a token set in the headers
      // - the previous token was expired though, so we need to refetch it
      const call2 = () => {
        expect(requestCount).toBe(1)
        createBaseMiddleware({ requestState, tokenCache }, call3, null)
      }
      // First call:
      // - there is no token yet
      // - a new token is fetched
      createBaseMiddleware({ requestState, tokenCache }, call2, null)
    }))

  test('use refresh token to fetch a new token if no token or is expired', () =>
    new Promise((resolve) => {
      const spy = jest.spyOn(buildRequests, 'buildRequestForRefreshTokenFlow')
      const middlewareOptions = createTestMiddlewareOptions(null)
      let requestCount = 0
      nock(middlewareOptions.host)
        .persist() // <-- use the same interceptor for all requests
        .log(() => {
          requestCount += 1
        }) // keep track of the request count
        .filteringRequestBody(/.*/, '*')
        .post('/oauth/token', '*')
        .reply(200, () => ({
          access_token: 'xxx',
          refresh_token: 'foobar123',
          // Return the first request with an expired token
          expires_in:
            requestCount < 2
              ? 1 // <-- to ensure it expires
              : Date.now() + 60 * 60 * 24,
        }))

      const next = () => {
        expect(requestCount).toBe(2)
        expect(spy).toHaveBeenCalledTimes(2)
        spy.mockReset()
        spy.mockRestore()
        resolve(null)
      }
      const tokenCache = store({ refreshToken: 'foobar123' })
      const requestState = store(false)
      // Third call:
      // - we simulate that the request has a token set in the headers
      // - the previous token is still valid, no more requests
      const call3 = () => {
        expect(requestCount).toBe(2)
        expect(spy).toHaveBeenCalledTimes(2)
        createBaseMiddleware({ requestState, tokenCache }, next, null)
      }
      // Second call:
      // - we simulate that the request has an expired token set in the headers
      // - the previous token was expired though, so we need to refetch it
      const call2 = () => {
        expect(requestCount).toBe(1)
        expect(spy).toHaveBeenCalledTimes(1)
        createBaseMiddleware(
          { requestState, tokenCache },
          call3,
          middlewareOptions
        )
      }
      // First call:
      // - there is no token
      // - a new token is fetched with refreshToken
      createBaseMiddleware(
        { requestState, tokenCache },
        call2,
        middlewareOptions
      )
    }))

  test(
    'do not get a new token if one is already present in request headers ' +
      'but it does not match one of the cached tokens',
    () =>
      new Promise((resolve, reject) => {
        const response = createTestResponse({
          resolve,
          reject,
        })
        const middlewareOptions = createTestMiddlewareOptions(null)
        let requestCount = 0
        nock(middlewareOptions.host)
          .persist() // <-- use the same interceptor for all requests
          .log(() => {
            requestCount += 1
          }) // keep track of the request count
          .filteringRequestBody(/.*/, '*')
          .post('/oauth/token', '*')
          .reply(200, {
            access_token: 'xxx',
            expires_in: Date.now() + 60 * 60 * 24,
          })

        const next = () => {
          expect(requestCount).toBe(1)
          resolve(null)
        }
        const tokenCache = store({})
        const requestState = store(false)
        // Second call:
        // - we simulate that the request has a token set in the headers
        // which does not match any of the cached tokens. In this case
        // do not refetch and keep going.
        const call2 = (rq) => {
          const requestWithHeaders = {
            ...rq,
            headers: {
              Authorization: 'Bearer yyy',
            },
          }
          createBaseMiddleware({ request: requestWithHeaders }, next, null)
          createAuthMiddlewareBase(
            {
              request: requestWithHeaders,
              response,
              pendingTasks: [],
              ...buildRequests.buildRequestForClientCredentialsFlow(
                middlewareOptions
              ),
              requestState,
              tokenCache,
            },
            next
          )
        }
        // First call:
        // - there is no token yet
        // - a new token is fetched
        createBaseMiddleware({}, call2, null)
      })
  )

  test('ensure to fetch new token only once and keep track of pending tasks', () =>
    new Promise((resolve) => {
      const middlewareOptions = createTestMiddlewareOptions(null)
      let requestCount = 0
      nock(middlewareOptions.host)
        .persist() // <-- use the same interceptor for all requests
        .log(() => {
          requestCount += 1
        }) // keep track of the request count
        .filteringRequestBody(/.*/, '*')
        .post('/oauth/token', '*')
        .reply(200, {
          access_token: 'xxx',
          expires_in: Date.now() + 60 * 60 * 24,
        })

      let nextCount = 0
      const next = () => {
        nextCount += 1
        if (nextCount === 6) {
          expect(requestCount).toBe(1)
          resolve(null)
        }
      }
      const pendingTasks = []
      const tokenCache = store({})
      const requestState = store(false)
      // Execute multiple requests at once.
      // This should queue all of them until the token has been fetched.
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
    }))

  test('should change requestState to false when createAuthMiddlewareBase fails', async () => {
    const middlewareOptions = createTestMiddlewareOptions(null)
    let requestCount = 0

    nock(middlewareOptions.host)
      .persist() // <-- use the same interceptor for all requests
      .log(() => {
        requestCount += 1
      }) // keep track of the request count
      .filteringRequestBody(/.*/, '*')
      .post('/oauth/token', '*')
      .delay(2000) // <-- Delay the response
      .reply(401, {
        message: 'invalid_client',
        error: 'invalid_client',
      })

    const requestState = store(false)
    const pendingTasks = []

    const startCreateBaseMiddleware = () =>
      new Promise((resolve, reject) => {
        expect(requestState.get()).toBe(false)

        // fire off promise returning function and change requestState to true
        // we do not await the response before the assertion since we set
        // `reqeustState` to `false` after the promise is fulfilled or rejected.
        const start = createBaseMiddleware(
          {
            response: { resolve, reject },
            pendingTasks,
            requestState,
          },
          null,
          null
        )

        expect(requestState.get()).toBe(true)
        expect(requestCount).toBe(1) // Make sure that nock runned the mocked request

        return start
      })

    try {
      // await promise failure which should set `requestState` to `false`
      await startCreateBaseMiddleware()
    } catch (error) {
      expect(requestState.get()).toBe(false)
    }
  })

  test('if a token has been fetched, use it for the new incoming requests', () =>
    new Promise((resolve) => {
      const middlewareOptions = createTestMiddlewareOptions(null)
      let requestCount = 0
      nock(middlewareOptions.host)
        .persist() // <-- use the same interceptor for all requests
        .log(() => {
          requestCount += 1
        }) // keep track of the request count
        .filteringRequestBody(/.*/, '*')
        .post('/oauth/token', '*')
        .reply(200, {
          access_token: 'xxx',
          expires_in: Date.now() + 60 * 60 * 24,
        })
      const pendingTasks = []
      const tokenCache = store({})
      const requestState = store(false)
      const next = (rq2) => {
        // 2. Should not get a new token
        expect(requestCount).toBe(1)
        expect(rq2).toEqual(
          expect.objectContaining({
            headers: expect.objectContaining({
              Authorization: 'Bearer xxx',
            }),
          })
        )
        resolve(null)
      }
      // 2. Should not get a new token
      const call2 = createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        next,
        null
      )
      createBaseMiddleware(
        { pendingTasks, tokenCache, requestState },
        call2,
        null
      )
    }))

  describe('client id token cache', () => {
    let tokenCache
    const createCacheKey = (options) =>
      `${options.clientId}-${options.projectKey}-${options.host}`

    beforeEach(() => {
      tokenCache = {
        cache: {},
        get(client) {
          return this.cache[client]
        },
        set(value, client) {
          this.cache[client] = value
        },
      }
    })

    test('it stores token in token cache in context of token cache key', () =>
      new Promise((resolve) => {
        const tokenCacheKeyOptions = {
          clientId: 'clientId',
          projectKey: 'projectKey',
          host: 'host',
        }
        const tokenCacheKey = createCacheKey(tokenCacheKeyOptions)
        const customTokenCache = {
          cache: {},
          get(cacheKey) {
            return this.cache[createCacheKey(cacheKey)]
          },
          set(token, cacheKey) {
            this.cache[createCacheKey(cacheKey)] = token
          },
        }
        const next = (req) => {
          expect(req).toHaveProperty('headers.Authorization', 'Bearer xxx')
          expect(customTokenCache.get(tokenCacheKey)).toEqual(
            expect.objectContaining({
              token: 'xxx',
            })
          )
          resolve(null)
        }

        const middlewareOptions = createTestMiddlewareOptions(null)

        nock(middlewareOptions.host)
          .filteringRequestBody((body) => {
            expect(body).toBe('grant_type=client_credentials')
            return '*'
          })
          .post('/oauth/token', '*')
          .reply(200, {
            access_token: 'xxx',
            expires_in: 100,
          })
        createBaseMiddleware(
          { tokenCache: customTokenCache, tokenCacheKey },
          next,
          null
        )
      }))

    test('ensure to fetch new token only once for each client and keep track of pending tasks in context of client instance of middleware', () =>
      new Promise((resolve) => {
        const middlewareOptions = createTestMiddlewareOptions(null)
        let requestCount = 0

        const tokenCacheKeyOne = {
          clientId: 'clientIdOne',
          projectKey: 'projectKey',
          host: 'host',
        }
        const tokenCacheKeyTwo = {
          clientId: 'clientIdTwo',
          projectKey: 'projectKey',
          host: 'host',
        }
        nock(middlewareOptions.host)
          .persist() // <-- use the same interceptor for all requests
          .log(() => {
            requestCount += 1
          }) // keep track of the request count
          .filteringRequestBody(/.*/, '*')
          .post('/oauth/token', '*')
          .reply(200, {
            access_token: 'xxx',
            expires_in: Date.now() + 60 * 60 * 24,
          })

        let nextCount = 0
        const next = () => {
          nextCount += 1
          if (nextCount === 6) {
            expect(requestCount).toBe(2)
            // assert that shared cached has been populated
            expect(tokenCache.get(tokenCacheKeyOne)).toEqual(
              expect.objectContaining({
                token: 'xxx',
              })
            )
            expect(tokenCache.get(tokenCacheKeyTwo)).toEqual(
              expect.objectContaining({
                token: 'xxx',
              })
            )
            resolve(null)
          }
        }
        // configure 2 instances of separate clients
        const pendingTasksClientOne = []
        const requestStateClientOne = store(false)
        const pendingTasksClientTwo = []
        const requestStateClientTwo = store(false)
        // Execute multiple requests at once.
        // This should queue all of them for each client
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientOne,
            tokenCache,
            requestState: requestStateClientOne,
            tokenCacheKey: tokenCacheKeyOne,
          },
          next,
          null
        )
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientOne,
            tokenCache,
            requestState: requestStateClientOne,
            tokenCacheKey: tokenCacheKeyOne,
          },
          next,
          null
        )
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientTwo,
            tokenCache,
            requestState: requestStateClientTwo,
            tokenCacheKey: tokenCacheKeyTwo,
          },
          next,
          null
        )
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientTwo,
            tokenCache,
            requestState: requestStateClientTwo,
            tokenCacheKey: tokenCacheKeyTwo,
          },
          next,
          null
        )
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientTwo,
            tokenCache,
            requestState: requestStateClientTwo,
            tokenCacheKey: tokenCacheKeyTwo,
          },
          next,
          null
        )
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientTwo,
            tokenCache,
            requestState: requestStateClientTwo,
            tokenCacheKey: tokenCacheKeyTwo,
          },
          next,
          null
        )
        createBaseMiddleware(
          {
            pendingTasks: pendingTasksClientOne,
            tokenCache,
            requestState: requestStateClientOne,
            tokenCacheKey: tokenCacheKeyOne,
          },
          next,
          null
        )
      }))
  })
})
