/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder } from '../carts/by-project-key-in-store-key-by-store-key-carts-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder } from '../customers/by-project-key-in-store-key-by-store-key-customers-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyLoginRequestBuilder } from '../login/by-project-key-in-store-key-by-store-key-login-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder } from '../me/by-project-key-in-store-key-by-store-key-me-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder } from '../orders/by-project-key-in-store-key-by-store-key-orders-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder } from '../shipping-methods/by-project-key-in-store-key-by-store-key-shipping-methods-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder } from '../shopping-lists/by-project-key-in-store-key-by-store-key-shopping-lists-request-builder'

export class ByProjectKeyInStoreKeyByStoreKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	A shopping cart holds product variants and can be ordered.
   */
  public carts(): ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	An order can be created from a cart, usually after a checkout process has been completed.
   */
  public orders(): ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public me(): ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A customer is a person purchasing products. customers, Orders,
   *	Comments and Reviews can be associated to a customer.
   *
   */
  public customers(): ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Retrieves the authenticated customer.
   */
  public login(): ByProjectKeyInStoreKeyByStoreKeyLoginRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyLoginRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public shippingMethods(): ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	shopping-lists e.g. for wishlist support
   *
   */
  public shoppingLists(): ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
