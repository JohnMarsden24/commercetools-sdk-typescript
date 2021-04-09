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

export interface LocalizedString {
  [key: string]: string
}
export interface Money {
  /**
   *
   */
  readonly centAmount: number
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
}
export type ReferenceTypeId =
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'inventory-entry'
  | 'key-value-document'
  | 'order'
  | 'order-edit'
  | 'payment'
  | 'product'
  | 'product-discount'
  | 'product-type'
  | 'review'
  | 'shipping-method'
  | 'shopping-list'
  | 'state'
  | 'store'
  | 'tax-category'
  | 'type'
  | 'zone'
export type Reference =
  | CategoryReference
  | ProductReference
  | ProductTypeReference
export interface CategoryReference {
  readonly typeId: 'category'
  /**
   *
   */
  readonly id: string
}
export interface ProductReference {
  readonly typeId: 'product'
  /**
   *
   */
  readonly id: string
}
export interface ProductTypeReference {
  readonly typeId: 'product-type'
  /**
   *
   */
  readonly id: string
}
/**
 *	The product variant that contains the image.
 */
export interface ProductVariant {
  /**
   *	The product that contains this variant.
   *
   */
  readonly product: ProductReference
  /**
   *	The state of the product variant.
   *
   */
  readonly staged: boolean
  /**
   *	The id of the product variant.
   *
   */
  readonly variantId: number
}
export type TaskStatusEnum = 'PENDING' | 'SUCCESS'
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface TaskToken {
  /**
   *	The ID for the task. Used to find the status of the task.
   *
   */
  readonly taskId: string
  /**
   *	The URI path to poll for the status of the task.
   *
   */
  readonly uriPath: string
}
