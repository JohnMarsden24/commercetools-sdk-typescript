/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { LocalizedString, Money, Reference } from './common'

/**
 *	Provides descriptive information specific to the resource.
 */
export type Label =
  | CustomObjectLabel
  | CustomerLabel
  | LocalizedLabel
  | OrderLabel
  | PaymentLabel
  | ProductLabel
  | QuoteLabel
  | QuoteRequestLabel
  | ReviewLabel
  | StagedQuoteLabel
  | StringLabel
export interface CustomObjectLabel {
  readonly type: 'CustomObjectLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly container: string
}
export interface CustomerLabel {
  readonly type: 'CustomerLabel'
  /**
   *
   */
  readonly firstName: string
  /**
   *
   */
  readonly lastName: string
  /**
   *
   */
  readonly customerNumber: string
}
export interface LocalizedLabel {
  readonly type: 'LocalizedLabel'
  /**
   *
   */
  readonly value: LocalizedString
}
export interface OrderLabel {
  readonly type: 'OrderLabel'
  /**
   *
   */
  readonly customerEmail: string
  /**
   *
   */
  readonly orderNumber: string
}
export interface PaymentLabel {
  readonly type: 'PaymentLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly amountPlanned: Money
}
export interface ProductLabel {
  readonly type: 'ProductLabel'
  /**
   *
   */
  readonly slug: LocalizedString
  /**
   *
   */
  readonly name: LocalizedString
}
export interface QuoteLabel {
  readonly type: 'QuoteLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly customer: Reference
  /**
   *
   */
  readonly stagedQuote: Reference
  /**
   *
   */
  readonly quoteRequest: Reference
}
export interface QuoteRequestLabel {
  readonly type: 'QuoteRequestLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly customer: Reference
}
export interface ReviewLabel {
  readonly type: 'ReviewLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly title: string
}
export interface StagedQuoteLabel {
  readonly type: 'StagedQuoteLabel'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly customer: Reference
  /**
   *
   */
  readonly quoteRequest: Reference
}
export interface StringLabel {
  readonly type: 'StringLabel'
  /**
   *
   */
  readonly value: string
}
