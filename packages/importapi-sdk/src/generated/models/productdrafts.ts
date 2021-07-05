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

import {
  Asset,
  CategoryKeyReference,
  ChannelKeyReference,
  CustomerGroupKeyReference,
  DiscountedPrice,
  Image,
  ImportResource,
  LocalizedString,
  PriceTier,
  ProductTypeKeyReference,
  StateKeyReference,
  TaxCategoryKeyReference,
  TypedMoney,
} from './common'
import { Custom } from './customfields'
import { SearchKeywords } from './products'
import { Attribute } from './productvariants'

/**
 *	The representation of a Product Draft for the import purpose.
 *
 */
export interface ProductDraftImport extends ImportResource {
  /**
   *	The `productType` of a [Product](/../api/projects/products#product).
   *	Maps to `Product.productType`.
   *	The Reference to the [ProductType](/../api/projects/productTypes#producttype) with which the ProductDraft is associated.
   *	If referenced ProductType does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary ProductType is created.
   *
   *
   */
  readonly productType: ProductTypeKeyReference
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a project,
   *	but a product can have the same slug for different languages. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters.
   *
   *
   */
  readonly slug: LocalizedString
  /**
   *	Maps to `Product.description`.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	The Reference to the [Categories](/../api/projects/categories#category) with which the ProductDraft is associated.
   *	If referenced Categories do not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary Categories are created.
   *
   *
   */
  readonly categories?: CategoryKeyReference[]
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	The master Product variant.
   *	Required if the `variants` array contains a Product Variant.
   *
   *
   */
  readonly masterVariant?: ProductVariantDraftImport
  /**
   *	An array of related Product Variants.
   *
   */
  readonly variants?: ProductVariantDraftImport[]
  /**
   *	The Reference to the [TaxCategory](/../api/projects/taxCategories#taxcategory) with which the ProductDraft is associated.
   *	If referenced TaxCategory does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary TaxCategory is created.
   *
   *
   */
  readonly taxCategory?: TaxCategoryKeyReference
  /**
   *	Search keywords are primarily used by the suggester but are also considered for the full-text search. SearchKeywords is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). The value to a language tag key is an array of SearchKeyword for the specific language.
   *	```json
   *	{
   *	  "en": [
   *	    { "text": "Multi tool" },
   *	    { "text": "Swiss Army Knife", "suggestTokenizer": { "type": "whitespace" } }
   *	  ],
   *	  "de": [
   *	    {
   *	      "text": "Schweizer Messer",
   *	      "suggestTokenizer": {
   *	        "type": "custom",
   *	        "inputs": ["schweizer messer", "offiziersmesser", "sackmesser"]
   *	      }
   *	    }
   *	  ]
   *	}
   *	```
   *
   *
   */
  readonly searchKeywords?: SearchKeywords
  /**
   *	The Reference to the [State](/../api/projects/states#state) with which the ProductDraft is associated.
   *	If referenced State does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary State is created.
   *
   *
   */
  readonly state?: StateKeyReference
  /**
   *	If there were updates, only the updates will be published to `staged` and `current` projection.
   *
   *
   */
  readonly publish?: boolean
}
/**
 *	The representation of a Product Variant Draft for the import purpose.
 *
 */
export interface ProductVariantDraftImport {
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly prices?: PriceDraftImport[]
  /**
   *
   */
  readonly attributes?: Attribute[]
  /**
   *
   */
  readonly images?: Image[]
  /**
   *
   */
  readonly assets?: Asset[]
}
/**
 *	The representation of a Price Draft for the import purpose.
 *
 */
export interface PriceDraftImport {
  /**
   *	TypedMoney is what is called BaseMoney in the HTTP API.
   *
   *
   */
  readonly value: TypedMoney
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly country?: string
  /**
   *	References a customer group by its key.
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	References a channel by its key.
   *
   */
  readonly channel?: ChannelKeyReference
  /**
   *
   */
  readonly validFrom?: string
  /**
   *
   */
  readonly validUntil?: string
  /**
   *	The custom fields for this category.
   *
   */
  readonly custom?: Custom
  /**
   *	Sets a discounted price from an external service.
   *
   */
  readonly discounted?: DiscountedPrice
  /**
   *	The tiered prices for this price.
   *
   */
  readonly tiers?: PriceTier[]
  /**
   *
   */
  readonly key?: string
}
