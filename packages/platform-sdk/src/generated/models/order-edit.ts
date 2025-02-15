/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  ExternalLineItemTotalPrice,
  ExternalTaxAmountDraft,
  ExternalTaxRateDraft,
  ItemShippingDetailsDraft,
  RoundingMode,
  ShippingRateInputDraft,
  TaxCalculationMode,
  TaxedPrice,
  TaxMode,
  TaxPortionDraft,
} from './cart'
import { ChannelResourceIdentifier } from './channel'
import {
  BaseAddress,
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  Money,
  TypedMoney,
} from './common'
import { CustomerGroupResourceIdentifier } from './customer-group'
import { DiscountCodeReference } from './discount-code'
import { ErrorObject } from './error'
import { MessagePayload } from './message'
import {
  DeliveryItem,
  ItemState,
  Order,
  OrderReference,
  OrderState,
  ParcelDraft,
  ParcelMeasurements,
  PaymentState,
  ReturnInfoDraft,
  ReturnItemDraft,
  ReturnPaymentState,
  ReturnShipmentState,
  ShipmentState,
  StagedOrderUpdateAction,
  TrackingData,
} from './order'
import { PaymentResourceIdentifier } from './payment'
import {
  ShippingMethodResourceIdentifier,
  ShippingRateDraft,
} from './shipping-method'
import { ShoppingListResourceIdentifier } from './shopping-list'
import { StateResourceIdentifier } from './state'
import { TaxCategoryResourceIdentifier } from './tax-category'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface OrderEdit extends BaseResource {
  /**
   *	Unique identifier of the OrderEdit.
   *
   */
  readonly id: string
  /**
   *	The current version of the OrderEdit.
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the OrderEdit.
   *
   */
  readonly key?: string
  /**
   *	The order to be updated with this edit.
   *
   */
  readonly resource: OrderReference
  /**
   *	The actions to apply to the Order.
   *	Cannot be updated after the edit has been applied.
   *
   */
  readonly stagedActions: StagedOrderUpdateAction[]
  /**
   *
   */
  readonly custom?: CustomFields
  /**
   *	Contains a preview of the changes in case of unapplied edit.
   *	For applied edits, it contains the summary of the changes.
   *
   */
  readonly result: OrderEditResult
  /**
   *	This field can be used to add textual information regarding the edit.
   *
   */
  readonly comment?: string
}
export interface OrderEditApply {
  /**
   *
   */
  readonly editVersion: number
  /**
   *
   */
  readonly resourceVersion: number
}
export interface OrderEditDraft {
  /**
   *	User-defined unique identifier for the OrderEdit.
   *
   */
  readonly key?: string
  /**
   *	The order to be updated with this edit.
   *
   */
  readonly resource: OrderReference
  /**
   *	The actions to apply to `resource`.
   *
   */
  readonly stagedActions?: StagedOrderUpdateAction[]
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	This field can be used to add additional textual information regarding the edit.
   *
   */
  readonly comment?: string
  /**
   *	When set to `true` the edit is applied on the Order without persisting it.
   *
   */
  readonly dryRun?: boolean
}
export interface OrderEditPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total?: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: OrderEdit[]
}
/**
 *	[Reference](ctp:api:type:Reference) to an [OrderEdit](ctp:api:type:OrderEdit).
 *
 */
export interface OrderEditReference {
  readonly typeId: 'order-edit'
  /**
   *	Unique identifier of the referenced [OrderEdit](ctp:api:type:OrderEdit).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded OrderEdit. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for OrderEdits.
   *
   *
   */
  readonly obj?: OrderEdit
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to an [OrderEdit](ctp:api:type:OrderEdit).
 *
 */
export interface OrderEditResourceIdentifier {
  readonly typeId: 'order-edit'
  /**
   *	Unique identifier of the referenced [OrderEdit](ctp:api:type:OrderEdit). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [OrderEdit](ctp:api:type:OrderEdit). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export type OrderEditResult =
  | OrderEditApplied
  | OrderEditNotProcessed
  | OrderEditPreviewFailure
  | OrderEditPreviewSuccess
export interface OrderEditApplied {
  readonly type: 'Applied'
  /**
   *
   */
  readonly appliedAt: string
  /**
   *
   */
  readonly excerptBeforeEdit: OrderExcerpt
  /**
   *
   */
  readonly excerptAfterEdit: OrderExcerpt
}
export interface OrderEditNotProcessed {
  readonly type: 'NotProcessed'
}
export interface OrderEditPreviewFailure {
  readonly type: 'PreviewFailure'
  /**
   *
   */
  readonly errors: ErrorObject[]
}
export interface OrderEditPreviewSuccess {
  readonly type: 'PreviewSuccess'
  /**
   *
   */
  readonly preview: StagedOrder
  /**
   *
   */
  readonly messagePayloads: MessagePayload[]
}
export interface OrderEditUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: OrderEditUpdateAction[]
  /**
   *
   */
  readonly dryRun?: boolean
}
export type OrderEditUpdateAction =
  | OrderEditAddStagedActionAction
  | OrderEditSetCommentAction
  | OrderEditSetCustomFieldAction
  | OrderEditSetCustomTypeAction
  | OrderEditSetKeyAction
  | OrderEditSetStagedActionsAction
export interface OrderExcerpt {
  /**
   *
   */
  readonly totalPrice: TypedMoney
  /**
   *
   */
  readonly taxedPrice?: TaxedPrice
  /**
   *
   */
  readonly version: number
}
export interface StagedOrder extends Order {}
export interface OrderEditAddStagedActionAction {
  readonly action: 'addStagedAction'
  /**
   *
   */
  readonly stagedAction: StagedOrderUpdateAction
}
export interface OrderEditSetCommentAction {
  readonly action: 'setComment'
  /**
   *
   */
  readonly comment?: string
}
export interface OrderEditSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface OrderEditSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the OrderEdit with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the OrderEdit.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the OrderEdit.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface OrderEditSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, this field will be removed if it exists.
   *
   */
  readonly key?: string
}
export interface OrderEditSetStagedActionsAction {
  readonly action: 'setStagedActions'
  /**
   *	The actions to edit the `resource`.
   *
   */
  readonly stagedActions: StagedOrderUpdateAction[]
}
export interface StagedOrderAddCustomLineItemAction {
  readonly action: 'addCustomLineItem'
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly money: Money
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly slug: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [TaxCategory](ctp:api:type:TaxCategory).
   *
   *
   */
  readonly taxCategory?: TaxCategoryResourceIdentifier
  /**
   *	The representation used when creating or updating a [customizable data type](/../api/projects/types#list-of-customizable-data-types) with Custom Fields.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderAddDeliveryAction {
  readonly action: 'addDelivery'
  /**
   *
   */
  readonly items?: DeliveryItem[]
  /**
   *
   */
  readonly address?: BaseAddress
  /**
   *
   */
  readonly parcels?: ParcelDraft[]
  /**
   *	Custom Fields for the Transaction.
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface StagedOrderAddDiscountCodeAction {
  readonly action: 'addDiscountCode'
  /**
   *
   */
  readonly code: string
}
export interface StagedOrderAddItemShippingAddressAction {
  readonly action: 'addItemShippingAddress'
  /**
   *
   */
  readonly address: BaseAddress
}
export interface StagedOrderAddLineItemAction {
  readonly action: 'addLineItem'
  /**
   *	The representation used when creating or updating a [customizable data type](/../api/projects/types#list-of-customizable-data-types) with Custom Fields.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
  /**
   *
   */
  readonly productId?: string
  /**
   *
   */
  readonly variantId?: number
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly addedAt?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly externalPrice?: Money
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
  /**
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
}
export interface StagedOrderAddParcelToDeliveryAction {
  readonly action: 'addParcelToDelivery'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly measurements?: ParcelMeasurements
  /**
   *
   */
  readonly trackingData?: TrackingData
  /**
   *
   */
  readonly items?: DeliveryItem[]
}
export interface StagedOrderAddPaymentAction {
  readonly action: 'addPayment'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Payment](ctp:api:type:Payment).
   *
   *
   */
  readonly payment: PaymentResourceIdentifier
}
export interface StagedOrderAddReturnInfoAction {
  readonly action: 'addReturnInfo'
  /**
   *
   */
  readonly returnTrackingId?: string
  /**
   *
   */
  readonly items: ReturnItemDraft[]
  /**
   *
   */
  readonly returnDate?: string
}
export interface StagedOrderAddShoppingListAction {
  readonly action: 'addShoppingList'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ShoppingList](ctp:api:type:ShoppingList).
   *
   *
   */
  readonly shoppingList: ShoppingListResourceIdentifier
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
}
export interface StagedOrderChangeCustomLineItemMoneyAction {
  readonly action: 'changeCustomLineItemMoney'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly money: Money
}
export interface StagedOrderChangeCustomLineItemQuantityAction {
  readonly action: 'changeCustomLineItemQuantity'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly quantity: number
}
export interface StagedOrderChangeLineItemQuantityAction {
  readonly action: 'changeLineItemQuantity'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity: number
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly externalPrice?: Money
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
}
export interface StagedOrderChangeOrderStateAction {
  readonly action: 'changeOrderState'
  /**
   *
   */
  readonly orderState: OrderState
}
export interface StagedOrderChangePaymentStateAction {
  readonly action: 'changePaymentState'
  /**
   *
   */
  readonly paymentState?: PaymentState
}
export interface StagedOrderChangeShipmentStateAction {
  readonly action: 'changeShipmentState'
  /**
   *
   */
  readonly shipmentState?: ShipmentState
}
export interface StagedOrderChangeTaxCalculationModeAction {
  readonly action: 'changeTaxCalculationMode'
  /**
   *
   */
  readonly taxCalculationMode: TaxCalculationMode
}
export interface StagedOrderChangeTaxModeAction {
  readonly action: 'changeTaxMode'
  /**
   *
   */
  readonly taxMode: TaxMode
}
export interface StagedOrderChangeTaxRoundingModeAction {
  readonly action: 'changeTaxRoundingMode'
  /**
   *
   */
  readonly taxRoundingMode: RoundingMode
}
export interface StagedOrderImportCustomLineItemStateAction {
  readonly action: 'importCustomLineItemState'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly state: ItemState[]
}
export interface StagedOrderImportLineItemStateAction {
  readonly action: 'importLineItemState'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly state: ItemState[]
}
export interface StagedOrderRemoveCustomLineItemAction {
  readonly action: 'removeCustomLineItem'
  /**
   *
   */
  readonly customLineItemId: string
}
export interface StagedOrderRemoveDeliveryAction {
  readonly action: 'removeDelivery'
  /**
   *
   */
  readonly deliveryId: string
}
export interface StagedOrderRemoveDiscountCodeAction {
  readonly action: 'removeDiscountCode'
  /**
   *	[Reference](ctp:api:type:Reference) to a [DiscountCode](ctp:api:type:DiscountCode).
   *
   *
   */
  readonly discountCode: DiscountCodeReference
}
export interface StagedOrderRemoveItemShippingAddressAction {
  readonly action: 'removeItemShippingAddress'
  /**
   *
   */
  readonly addressKey: string
}
export interface StagedOrderRemoveLineItemAction {
  readonly action: 'removeLineItem'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity?: number
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly externalPrice?: Money
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
  /**
   *
   */
  readonly shippingDetailsToRemove?: ItemShippingDetailsDraft
}
export interface StagedOrderRemoveParcelFromDeliveryAction {
  readonly action: 'removeParcelFromDelivery'
  /**
   *
   */
  readonly parcelId: string
}
export interface StagedOrderRemovePaymentAction {
  readonly action: 'removePayment'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Payment](ctp:api:type:Payment).
   *
   *
   */
  readonly payment: PaymentResourceIdentifier
}
export interface StagedOrderSetBillingAddressAction {
  readonly action: 'setBillingAddress'
  /**
   *
   */
  readonly address?: BaseAddress
}
export interface StagedOrderSetBillingAddressCustomFieldAction {
  readonly action: 'setBillingAddressCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetBillingAddressCustomTypeAction {
  readonly action: 'setBillingAddressCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the `billingAddress` with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the `billingAddress`.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the `billingAddress`.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetCountryAction {
  readonly action: 'setCountry'
  /**
   *
   */
  readonly country?: string
}
export interface StagedOrderSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetCustomLineItemCustomFieldAction {
  readonly action: 'setCustomLineItemCustomField'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetCustomLineItemCustomTypeAction {
  readonly action: 'setCustomLineItemCustomType'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the CustomLineItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the CustomLineItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the CustomLineItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetCustomLineItemShippingDetailsAction {
  readonly action: 'setCustomLineItemShippingDetails'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
}
export interface StagedOrderSetCustomLineItemTaxAmountAction {
  readonly action: 'setCustomLineItemTaxAmount'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly externalTaxAmount?: ExternalTaxAmountDraft
}
export interface StagedOrderSetCustomLineItemTaxRateAction {
  readonly action: 'setCustomLineItemTaxRate'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetCustomShippingMethodAction {
  readonly action: 'setCustomShippingMethod'
  /**
   *
   */
  readonly shippingMethodName: string
  /**
   *
   */
  readonly shippingRate: ShippingRateDraft
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [TaxCategory](ctp:api:type:TaxCategory).
   *
   *
   */
  readonly taxCategory?: TaxCategoryResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the StagedOrder with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the StagedOrder.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the StagedOrder.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetCustomerEmailAction {
  readonly action: 'setCustomerEmail'
  /**
   *
   */
  readonly email?: string
}
export interface StagedOrderSetCustomerGroupAction {
  readonly action: 'setCustomerGroup'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [CustomerGroup](ctp:api:type:CustomerGroup).
   *
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
}
export interface StagedOrderSetCustomerIdAction {
  readonly action: 'setCustomerId'
  /**
   *
   */
  readonly customerId?: string
}
export interface StagedOrderSetDeliveryAddressAction {
  readonly action: 'setDeliveryAddress'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly address?: BaseAddress
}
export interface StagedOrderSetDeliveryAddressCustomFieldAction {
  readonly action: 'setDeliveryAddressCustomField'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetDeliveryAddressCustomTypeAction {
  readonly action: 'setDeliveryAddressCustomType'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the `address` in a Delivery with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the `address` in a Delivery.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the `address` in a Delivery.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetDeliveryCustomFieldAction {
  readonly action: 'setDeliveryCustomField'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetDeliveryCustomTypeAction {
  readonly action: 'setDeliveryCustomType'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Delivery with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Delivery.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Delivery.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetDeliveryItemsAction {
  readonly action: 'setDeliveryItems'
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly items: DeliveryItem[]
}
export interface StagedOrderSetItemShippingAddressCustomFieldAction {
  readonly action: 'setItemShippingAddressCustomField'
  /**
   *
   */
  readonly addressKey: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetItemShippingAddressCustomTypeAction {
  readonly action: 'setItemShippingAddressCustomType'
  /**
   *
   */
  readonly addressKey: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the `itemShippingAddress` with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the `itemShippingAddress`.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the `itemShippingAddress`.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetLineItemCustomFieldAction {
  readonly action: 'setLineItemCustomField'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetLineItemCustomTypeAction {
  readonly action: 'setLineItemCustomType'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the LineItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the LineItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the LineItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetLineItemDistributionChannelAction {
  readonly action: 'setLineItemDistributionChannel'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
}
export interface StagedOrderSetLineItemPriceAction {
  readonly action: 'setLineItemPrice'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly externalPrice?: Money
}
export interface StagedOrderSetLineItemShippingDetailsAction {
  readonly action: 'setLineItemShippingDetails'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
}
export interface StagedOrderSetLineItemTaxAmountAction {
  readonly action: 'setLineItemTaxAmount'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly externalTaxAmount?: ExternalTaxAmountDraft
}
export interface StagedOrderSetLineItemTaxRateAction {
  readonly action: 'setLineItemTaxRate'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetLineItemTotalPriceAction {
  readonly action: 'setLineItemTotalPrice'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
}
export interface StagedOrderSetLocaleAction {
  readonly action: 'setLocale'
  /**
   *
   */
  readonly locale?: string
}
export interface StagedOrderSetOrderNumberAction {
  readonly action: 'setOrderNumber'
  /**
   *
   */
  readonly orderNumber?: string
}
export interface StagedOrderSetOrderTotalTaxAction {
  readonly action: 'setOrderTotalTax'
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly externalTotalGross: Money
  /**
   *
   */
  readonly externalTaxPortions?: TaxPortionDraft[]
}
export interface StagedOrderSetParcelCustomFieldAction {
  readonly action: 'setParcelCustomField'
  /**
   *
   */
  readonly parcelId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetParcelCustomTypeAction {
  readonly action: 'setParcelCustomType'
  /**
   *
   */
  readonly parcelId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Parcel with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Parcel.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Parcel.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetParcelItemsAction {
  readonly action: 'setParcelItems'
  /**
   *
   */
  readonly parcelId: string
  /**
   *
   */
  readonly items: DeliveryItem[]
}
export interface StagedOrderSetParcelMeasurementsAction {
  readonly action: 'setParcelMeasurements'
  /**
   *
   */
  readonly parcelId: string
  /**
   *
   */
  readonly measurements?: ParcelMeasurements
}
export interface StagedOrderSetParcelTrackingDataAction {
  readonly action: 'setParcelTrackingData'
  /**
   *
   */
  readonly parcelId: string
  /**
   *
   */
  readonly trackingData?: TrackingData
}
export interface StagedOrderSetReturnInfoAction {
  readonly action: 'setReturnInfo'
  /**
   *
   */
  readonly items?: ReturnInfoDraft[]
}
export interface StagedOrderSetReturnItemCustomFieldAction {
  readonly action: 'setReturnItemCustomField'
  /**
   *
   */
  readonly returnItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetReturnItemCustomTypeAction {
  readonly action: 'setReturnItemCustomType'
  /**
   *
   */
  readonly returnItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the ReturnItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the ReturnItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the ReturnItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetReturnPaymentStateAction {
  readonly action: 'setReturnPaymentState'
  /**
   *
   */
  readonly returnItemId: string
  /**
   *
   */
  readonly paymentState: ReturnPaymentState
}
export interface StagedOrderSetReturnShipmentStateAction {
  readonly action: 'setReturnShipmentState'
  /**
   *
   */
  readonly returnItemId: string
  /**
   *
   */
  readonly shipmentState: ReturnShipmentState
}
export interface StagedOrderSetShippingAddressAction {
  readonly action: 'setShippingAddress'
  /**
   *
   */
  readonly address?: BaseAddress
}
export interface StagedOrderSetShippingAddressAndCustomShippingMethodAction {
  readonly action: 'setShippingAddressAndCustomShippingMethod'
  /**
   *
   */
  readonly address: BaseAddress
  /**
   *
   */
  readonly shippingMethodName: string
  /**
   *
   */
  readonly shippingRate: ShippingRateDraft
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [TaxCategory](ctp:api:type:TaxCategory).
   *
   *
   */
  readonly taxCategory?: TaxCategoryResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetShippingAddressAndShippingMethodAction {
  readonly action: 'setShippingAddressAndShippingMethod'
  /**
   *
   */
  readonly address: BaseAddress
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ShippingMethod](ctp:api:type:ShippingMethod).
   *
   *
   */
  readonly shippingMethod?: ShippingMethodResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetShippingAddressCustomFieldAction {
  readonly action: 'setShippingAddressCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface StagedOrderSetShippingAddressCustomTypeAction {
  readonly action: 'setShippingAddressCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the `shippingAddress` with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the `shippingAddress`.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the `shippingAddress`.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedOrderSetShippingMethodAction {
  readonly action: 'setShippingMethod'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ShippingMethod](ctp:api:type:ShippingMethod).
   *
   *
   */
  readonly shippingMethod?: ShippingMethodResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetShippingMethodTaxAmountAction {
  readonly action: 'setShippingMethodTaxAmount'
  /**
   *
   */
  readonly externalTaxAmount?: ExternalTaxAmountDraft
}
export interface StagedOrderSetShippingMethodTaxRateAction {
  readonly action: 'setShippingMethodTaxRate'
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface StagedOrderSetShippingRateInputAction {
  readonly action: 'setShippingRateInput'
  /**
   *
   */
  readonly shippingRateInput?: ShippingRateInputDraft
}
export interface StagedOrderTransitionCustomLineItemStateAction {
  readonly action: 'transitionCustomLineItemState'
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly quantity: number
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly fromState: StateResourceIdentifier
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly toState: StateResourceIdentifier
  /**
   *
   */
  readonly actualTransitionDate?: string
}
export interface StagedOrderTransitionLineItemStateAction {
  readonly action: 'transitionLineItemState'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity: number
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly fromState: StateResourceIdentifier
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly toState: StateResourceIdentifier
  /**
   *
   */
  readonly actualTransitionDate?: string
}
export interface StagedOrderTransitionStateAction {
  readonly action: 'transitionState'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly state: StateResourceIdentifier
  /**
   *
   */
  readonly force?: boolean
}
export interface StagedOrderUpdateItemShippingAddressAction {
  readonly action: 'updateItemShippingAddress'
  /**
   *
   */
  readonly address: BaseAddress
}
export interface StagedOrderUpdateSyncInfoAction {
  readonly action: 'updateSyncInfo'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Channel](ctp:api:type:Channel).
   *
   *
   */
  readonly channel: ChannelResourceIdentifier
  /**
   *
   */
  readonly externalId?: string
  /**
   *
   */
  readonly syncedAt?: string
}
