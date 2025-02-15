/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  ChannelReference,
  ChannelResourceIdentifier,
  ChannelRoleEnum,
} from './channel'
import {
  LocalizedString,
  Price,
  PriceDraft,
  Reference,
  ReferenceTypeId,
} from './common'
import {
  CustomerGroupReference,
  CustomerGroupResourceIdentifier,
} from './customer-group'
import { OrderEditPreviewFailure } from './order-edit'
import { Attribute } from './product'
import { StandalonePriceReference } from './standalone-price'

export interface ErrorByExtension {
  /**
   *	Unique identifier of the Extension.
   *
   */
  readonly id: string
  /**
   *	User-defined unique identifier of the Extension.
   *
   */
  readonly key?: string
}
export type ErrorObject =
  | AccessDeniedError
  | AnonymousIdAlreadyInUseError
  | AttributeDefinitionAlreadyExistsError
  | AttributeDefinitionTypeConflictError
  | AttributeNameDoesNotExistError
  | BadGatewayError
  | ConcurrentModificationError
  | DiscountCodeNonApplicableError
  | DuplicateAttributeValueError
  | DuplicateAttributeValuesError
  | DuplicateEnumValuesError
  | DuplicateFieldError
  | DuplicateFieldWithConflictingResourceError
  | DuplicatePriceScopeError
  | DuplicateStandalonePriceScopeError
  | DuplicateVariantValuesError
  | EditPreviewFailedError
  | EnumKeyAlreadyExistsError
  | EnumKeyDoesNotExistError
  | EnumValueIsUsedError
  | EnumValuesMustMatchError
  | ExtensionBadResponseError
  | ExtensionNoResponseError
  | ExtensionUpdateActionsFailedError
  | ExternalOAuthFailedError
  | FeatureRemovedError
  | GeneralError
  | InsufficientScopeError
  | InternalConstraintViolatedError
  | InvalidCredentialsError
  | InvalidCurrentPasswordError
  | InvalidFieldError
  | InvalidInputError
  | InvalidItemShippingDetailsError
  | InvalidJsonInputError
  | InvalidOperationError
  | InvalidSubjectError
  | InvalidTokenError
  | LanguageUsedInStoresError
  | MatchingPriceNotFoundError
  | MaxResourceLimitExceededError
  | MissingRoleOnChannelError
  | MissingTaxRateForCountryError
  | NoMatchingProductDiscountFoundError
  | NotEnabledError
  | ObjectNotFoundError
  | OutOfStockError
  | OverCapacityError
  | OverlappingStandalonePriceValidityError
  | PendingOperationError
  | PriceChangedError
  | ProjectNotConfiguredForLanguagesError
  | QueryComplexityLimitExceededError
  | QueryTimedOutError
  | ReferenceExistsError
  | ReferencedResourceNotFoundError
  | RequiredFieldError
  | ResourceNotFoundError
  | ResourceSizeLimitExceededError
  | SearchDeactivatedError
  | SearchExecutionFailureError
  | SearchFacetPathNotFoundError
  | SearchIndexingInProgressError
  | SemanticErrorError
  | ShippingMethodDoesNotMatchCartError
  | SyntaxErrorError
  | WeakPasswordError
export interface AccessDeniedError {
  readonly code: 'access_denied'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface AnonymousIdAlreadyInUseError {
  readonly code: 'AnonymousIdAlreadyInUse'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface AttributeDefinitionAlreadyExistsError {
  readonly code: 'AttributeDefinitionAlreadyExists'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly conflictingProductTypeId: string
  /**
   *
   */
  readonly conflictingProductTypeName: string
  /**
   *
   */
  readonly conflictingAttributeName: string
}
export interface AttributeDefinitionTypeConflictError {
  readonly code: 'AttributeDefinitionTypeConflict'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly conflictingProductTypeId: string
  /**
   *
   */
  readonly conflictingProductTypeName: string
  /**
   *
   */
  readonly conflictingAttributeName: string
}
export interface AttributeNameDoesNotExistError {
  readonly code: 'AttributeNameDoesNotExist'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly invalidAttributeName: string
}
export interface BadGatewayError {
  readonly code: 'BadGateway'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface ConcurrentModificationError {
  readonly code: 'ConcurrentModification'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly currentVersion?: number
}
export interface DiscountCodeNonApplicableError {
  readonly code: 'DiscountCodeNonApplicable'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly discountCode?: string
  /**
   *
   */
  readonly reason?: string
  /**
   *
   */
  readonly dicountCodeId?: string
  /**
   *
   */
  readonly validFrom?: string
  /**
   *
   */
  readonly validUntil?: string
  /**
   *
   */
  readonly validityCheckTime?: string
}
export interface DuplicateAttributeValueError {
  readonly code: 'DuplicateAttributeValue'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly attribute: Attribute
}
export interface DuplicateAttributeValuesError {
  readonly code: 'DuplicateAttributeValues'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly attributes: Attribute[]
}
export interface DuplicateEnumValuesError {
  readonly code: 'DuplicateEnumValues'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly duplicates: string[]
}
export interface DuplicateFieldError {
  readonly code: 'DuplicateField'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly field?: string
  /**
   *
   */
  readonly duplicateValue?: any
  /**
   *	A Reference represents a loose reference to another resource in the same Project identified by its `id`. The `typeId` indicates the type of the referenced resource. Each resource type has its corresponding Reference type, like [ChannelReference](ctp:api:type:ChannelReference).  A referenced resource can be embedded through [Reference Expansion](/general-concepts#reference-expansion). The expanded reference is the value of an additional `obj` field then.
   *
   *
   */
  readonly conflictingResource?: Reference
}
export interface DuplicateFieldWithConflictingResourceError {
  readonly code: 'DuplicateFieldWithConflictingResource'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly field: string
  /**
   *
   */
  readonly duplicateValue: any
  /**
   *	A Reference represents a loose reference to another resource in the same Project identified by its `id`. The `typeId` indicates the type of the referenced resource. Each resource type has its corresponding Reference type, like [ChannelReference](ctp:api:type:ChannelReference).  A referenced resource can be embedded through [Reference Expansion](/general-concepts#reference-expansion). The expanded reference is the value of an additional `obj` field then.
   *
   *
   */
  readonly conflictingResource: Reference
}
export interface DuplicatePriceScopeError {
  readonly code: 'DuplicatePriceScope'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly conflictingPrices: Price[]
}
export interface DuplicateStandalonePriceScopeError {
  readonly code: 'DuplicateStandalonePriceScope'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	[Reference](/../api/types#reference) to a [StandalonePrice](ctp:api:type:StandalonePrice).
   *
   *
   */
  readonly conflictingStandalonePrice: StandalonePriceReference
  /**
   *
   */
  readonly sku: string
  /**
   *
   */
  readonly currency: string
  /**
   *
   */
  readonly country?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [CustomerGroup](ctp:api:type:CustomerGroup).
   *
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly channel?: ChannelResourceIdentifier
  /**
   *
   */
  readonly validFrom?: string
  /**
   *
   */
  readonly validUntil?: string
}
export interface DuplicateVariantValuesError {
  readonly code: 'DuplicateVariantValues'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly variantValues: VariantValues
}
export interface EditPreviewFailedError {
  readonly code: 'EditPreviewFailed'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly result: OrderEditPreviewFailure
}
export interface EnumKeyAlreadyExistsError {
  readonly code: 'EnumKeyAlreadyExists'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly conflictingEnumKey: string
  /**
   *
   */
  readonly conflictingAttributeName: string
}
export interface EnumKeyDoesNotExistError {
  readonly code: 'EnumKeyDoesNotExist'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly conflictingEnumKey: string
  /**
   *
   */
  readonly conflictingAttributeName: string
}
export interface EnumValueIsUsedError {
  readonly code: 'EnumValueIsUsed'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface EnumValuesMustMatchError {
  readonly code: 'EnumValuesMustMatch'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface ErrorResponse {
  /**
   *
   */
  readonly statusCode: number
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly error?: string
  /**
   *
   */
  readonly error_description?: string
  /**
   *
   */
  readonly errors?: ErrorObject[]
}
export interface ExtensionBadResponseError {
  readonly code: 'ExtensionBadResponse'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly localizedMessage?: LocalizedString
  /**
   *
   */
  readonly extensionExtraInfo?: any
  /**
   *
   */
  readonly errorByExtension: ErrorByExtension
}
export interface ExtensionNoResponseError {
  readonly code: 'ExtensionNoResponse'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly extensionId: string
  /**
   *
   */
  readonly extensionKey?: string
}
export interface ExtensionUpdateActionsFailedError {
  readonly code: 'ExtensionUpdateActionsFailed'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly localizedMessage?: LocalizedString
  /**
   *
   */
  readonly extensionExtraInfo?: any
  /**
   *
   */
  readonly errorByExtension: ErrorByExtension
}
export interface ExternalOAuthFailedError {
  readonly code: 'ExternalOAuthFailed'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface FeatureRemovedError {
  readonly code: 'FeatureRemoved'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface GeneralError {
  readonly code: 'General'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InsufficientScopeError {
  readonly code: 'insufficient_scope'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InternalConstraintViolatedError {
  readonly code: 'InternalConstraintViolated'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidCredentialsError {
  readonly code: 'InvalidCredentials'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidCurrentPasswordError {
  readonly code: 'InvalidCurrentPassword'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidFieldError {
  readonly code: 'InvalidField'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly field: string
  /**
   *
   */
  readonly invalidValue: any
  /**
   *
   */
  readonly allowedValues?: any[]
}
export interface InvalidInputError {
  readonly code: 'InvalidInput'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidItemShippingDetailsError {
  readonly code: 'InvalidItemShippingDetails'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly subject: string
  /**
   *
   */
  readonly itemId: string
}
export interface InvalidJsonInputError {
  readonly code: 'InvalidJsonInput'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidOperationError {
  readonly code: 'InvalidOperation'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidSubjectError {
  readonly code: 'InvalidSubject'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface InvalidTokenError {
  readonly code: 'invalid_token'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface LanguageUsedInStoresError {
  readonly code: 'LanguageUsedInStores'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface MatchingPriceNotFoundError {
  readonly code: 'MatchingPriceNotFound'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly productId: string
  /**
   *
   */
  readonly variantId: number
  /**
   *
   */
  readonly currency?: string
  /**
   *
   */
  readonly country?: string
  /**
   *	[Reference](ctp:api:type:Reference) to a [CustomerGroup](ctp:api:type:CustomerGroup).
   *
   *
   */
  readonly customerGroup?: CustomerGroupReference
  /**
   *	[Reference](ctp:api:type:Reference) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly channel?: ChannelReference
}
export interface MaxResourceLimitExceededError {
  readonly code: 'MaxResourceLimitExceeded'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	Type of resource the value should reference. Supported resource type identifiers are:
   *
   *
   */
  readonly exceededResource: ReferenceTypeId
}
export interface MissingRoleOnChannelError {
  readonly code: 'MissingRoleOnChannel'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly channel?: ChannelResourceIdentifier
  /**
   *	Describes the purpose and type of the Channel. A Channel can have one or more roles.
   *
   *
   */
  readonly missingRole: ChannelRoleEnum
}
export interface MissingTaxRateForCountryError {
  readonly code: 'MissingTaxRateForCountry'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly taxCategoryId: string
  /**
   *
   */
  readonly country?: string
  /**
   *
   */
  readonly state?: string
}
export interface NoMatchingProductDiscountFoundError {
  readonly code: 'NoMatchingProductDiscountFound'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface NotEnabledError {
  readonly code: 'NotEnabled'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface ObjectNotFoundError {
  readonly code: 'ObjectNotFound'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface OutOfStockError {
  readonly code: 'OutOfStock'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly lineItems: string[]
  /**
   *
   */
  readonly skus: string[]
}
export interface OverCapacityError {
  readonly code: 'OverCapacity'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface OverlappingStandalonePriceValidityError {
  readonly code: 'OverlappingStandalonePriceValidity'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	[Reference](/../api/types#reference) to a [StandalonePrice](ctp:api:type:StandalonePrice).
   *
   *
   */
  readonly conflictingStandalonePrice: StandalonePriceReference
  /**
   *
   */
  readonly sku: string
  /**
   *
   */
  readonly currency: string
  /**
   *
   */
  readonly country?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [CustomerGroup](ctp:api:type:CustomerGroup).
   *
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly channel?: ChannelResourceIdentifier
  /**
   *
   */
  readonly validFrom?: string
  /**
   *
   */
  readonly validUntil?: string
  /**
   *
   */
  readonly conflictingValidFrom?: string
  /**
   *
   */
  readonly conflictingValidUntil?: string
}
export interface PendingOperationError {
  readonly code: 'PendingOperation'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface PriceChangedError {
  readonly code: 'PriceChanged'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly lineItems: string[]
  /**
   *
   */
  readonly shipping: boolean
}
export interface ProjectNotConfiguredForLanguagesError {
  readonly code: 'ProjectNotConfiguredForLanguages'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly languages?: string[]
}
export interface QueryComplexityLimitExceededError {
  readonly code: 'QueryComplexityLimitExceeded'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface QueryTimedOutError {
  readonly code: 'QueryTimedOut'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface ReferenceExistsError {
  readonly code: 'ReferenceExists'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	Type of resource the value should reference. Supported resource type identifiers are:
   *
   *
   */
  readonly referencedBy?: ReferenceTypeId
}
export interface ReferencedResourceNotFoundError {
  readonly code: 'ReferencedResourceNotFound'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *	Type of resource the value should reference. Supported resource type identifiers are:
   *
   *
   */
  readonly typeId: ReferenceTypeId
  /**
   *
   */
  readonly id?: string
  /**
   *
   */
  readonly key?: string
}
export interface RequiredFieldError {
  readonly code: 'RequiredField'
  [key: string]: any
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly field: string
}
export interface ResourceNotFoundError {
  readonly code: 'ResourceNotFound'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface ResourceSizeLimitExceededError {
  readonly code: 'ResourceSizeLimitExceeded'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface SearchDeactivatedError {
  readonly code: 'SearchDeactivated'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface SearchExecutionFailureError {
  readonly code: 'SearchExecutionFailure'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface SearchFacetPathNotFoundError {
  readonly code: 'SearchFacetPathNotFound'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface SearchIndexingInProgressError {
  readonly code: 'SearchIndexingInProgress'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface SemanticErrorError {
  readonly code: 'SemanticError'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface ShippingMethodDoesNotMatchCartError {
  readonly code: 'ShippingMethodDoesNotMatchCart'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface SyntaxErrorError {
  readonly code: 'SyntaxError'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
export interface VariantValues {
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly prices: PriceDraft[]
  /**
   *
   */
  readonly attributes: Attribute[]
}
export interface WeakPasswordError {
  readonly code: 'WeakPassword'
  [key: string]: any
  /**
   *
   */
  readonly message: string
}
