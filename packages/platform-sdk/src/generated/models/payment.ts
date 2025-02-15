/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  Money,
  TypedMoney,
} from './common'
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import { StateReference, StateResourceIdentifier } from './state'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface Payment extends BaseResource {
  /**
   *	Unique identifier of the Payment.
   *
   */
  readonly id: string
  /**
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
   *	A reference to the customer this payment belongs to.
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Identifies payments belonging to an anonymous session (the customer has not signed up/in yet).
   *
   */
  readonly anonymousId?: string
  /**
   *	The identifier that is used by the interface that manages the payment (usually the PSP).
   *	Cannot be changed once it has been set.
   *	The combination of this ID and the PaymentMethodInfo `paymentInterface` must be unique.
   *
   */
  readonly interfaceId?: string
  /**
   *	How much money this payment intends to receive from the customer.
   *	The value usually matches the cart or order gross total.
   *
   */
  readonly amountPlanned: TypedMoney
  /**
   *
   */
  readonly paymentMethodInfo: PaymentMethodInfo
  /**
   *
   */
  readonly paymentStatus: PaymentStatus
  /**
   *	A list of financial transactions of different TransactionTypes with different TransactionStates.
   *
   */
  readonly transactions: Transaction[]
  /**
   *	Interface interactions can be requests sent to the PSP, responses received from the PSP or notifications received from the PSP.
   *	Some interactions may result in a transaction.
   *	If so, the `interactionId` in the Transaction should be set to match the ID of the PSP for the interaction.
   *	Interactions are managed by the PSP integration and are usually neither written nor read by the user facing frontends or other services.
   *
   */
  readonly interfaceInteractions: CustomFields[]
  /**
   *
   */
  readonly custom?: CustomFields
  /**
   *	User-defined unique identifier of the Payment.
   *
   */
  readonly key?: string
}
export interface PaymentDraft {
  /**
   *	A reference to the customer this payment belongs to.
   *
   */
  readonly customer?: CustomerResourceIdentifier
  /**
   *	Identifies payments belonging to an anonymous session (the customer has not signed up/in yet).
   *
   */
  readonly anonymousId?: string
  /**
   *	@deprecated
   */
  readonly externalId?: string
  /**
   *	The identifier that is used by the interface that manages the payment (usually the PSP).
   *	Cannot be changed once it has been set.
   *	The combination of this ID and the PaymentMethodInfo `paymentInterface` must be unique.
   *
   */
  readonly interfaceId?: string
  /**
   *	How much money this payment intends to receive from the customer.
   *	The value usually matches the cart or order gross total.
   *
   */
  readonly amountPlanned: Money
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly amountAuthorized?: Money
  /**
   *
   */
  readonly authorizedUntil?: string
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly amountPaid?: Money
  /**
   *	Draft type that stores amounts in cent precision for the specified currency.
   *
   *	For storing money values in fractions of the minor unit in a currency, use [HighPrecisionMoneyDraft](ctp:api:type:HighPrecisionMoneyDraft) instead.
   *
   *
   */
  readonly amountRefunded?: Money
  /**
   *
   */
  readonly paymentMethodInfo?: PaymentMethodInfo
  /**
   *
   */
  readonly paymentStatus?: PaymentStatusDraft
  /**
   *	A list of financial transactions of different TransactionTypes with different TransactionStates.
   *
   */
  readonly transactions?: TransactionDraft[]
  /**
   *	Interface interactions can be requests send to the PSP, responses received from the PSP or notifications received from the PSP.
   *	Some interactions may result in a transaction.
   *	If so, the `interactionId` in the Transaction should be set to match the ID of the PSP for the interaction.
   *	Interactions are managed by the PSP integration and are usually neither written nor read by the user facing frontends or other services.
   *
   */
  readonly interfaceInteractions?: CustomFieldsDraft[]
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	User-defined unique identifier for the Payment.
   *
   */
  readonly key?: string
}
export interface PaymentMethodInfo {
  /**
   *	The interface that handles the payment (usually a PSP).
   *	Cannot be changed once it has been set.
   *	The combination of Payment`interfaceId` and this field must be unique.
   *
   */
  readonly paymentInterface?: string
  /**
   *	The payment method that is used, e.g.
   *	e.g.
   *	a conventional string representing Credit Card, Cash Advance etc.
   *
   */
  readonly method?: string
  /**
   *	A human-readable, localized name for the payment method, e.g.
   *	'Credit Card'.
   *
   */
  readonly name?: LocalizedString
}
export interface PaymentPagedQueryResponse {
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
  readonly results: Payment[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Payment](ctp:api:type:Payment).
 *
 */
export interface PaymentReference {
  readonly typeId: 'payment'
  /**
   *	Unique identifier of the referenced [Payment](ctp:api:type:Payment).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Payment. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Payments.
   *
   *
   */
  readonly obj?: Payment
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Payment](ctp:api:type:Payment).
 *
 */
export interface PaymentResourceIdentifier {
  readonly typeId: 'payment'
  /**
   *	Unique identifier of the referenced [Payment](ctp:api:type:Payment). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Payment](ctp:api:type:Payment). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface PaymentStatus {
  /**
   *	A code describing the current status returned by the interface that processes the payment.
   *
   */
  readonly interfaceCode?: string
  /**
   *	A text describing the current status returned by the interface that processes the payment.
   *
   */
  readonly interfaceText?: string
  /**
   *
   */
  readonly state?: StateReference
}
export interface PaymentStatusDraft {
  /**
   *
   */
  readonly interfaceCode?: string
  /**
   *
   */
  readonly interfaceText?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly state?: StateResourceIdentifier
}
export interface PaymentUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: PaymentUpdateAction[]
}
export type PaymentUpdateAction =
  | PaymentAddInterfaceInteractionAction
  | PaymentAddTransactionAction
  | PaymentChangeAmountPlannedAction
  | PaymentChangeTransactionInteractionIdAction
  | PaymentChangeTransactionStateAction
  | PaymentChangeTransactionTimestampAction
  | PaymentSetAnonymousIdAction
  | PaymentSetCustomFieldAction
  | PaymentSetCustomTypeAction
  | PaymentSetCustomerAction
  | PaymentSetInterfaceIdAction
  | PaymentSetKeyAction
  | PaymentSetMethodInfoInterfaceAction
  | PaymentSetMethodInfoMethodAction
  | PaymentSetMethodInfoNameAction
  | PaymentSetStatusInterfaceCodeAction
  | PaymentSetStatusInterfaceTextAction
  | PaymentSetTransactionCustomFieldAction
  | PaymentSetTransactionCustomTypeAction
  | PaymentTransitionStateAction
export interface Transaction {
  /**
   *	Unique identifier of the Transaction.
   *
   */
  readonly id: string
  /**
   *	The time at which the transaction took place.
   *
   */
  readonly timestamp?: string
  /**
   *	The type of this transaction.
   *
   */
  readonly type: TransactionType
  /**
   *
   */
  readonly amount: TypedMoney
  /**
   *	The identifier that is used by the interface that managed the transaction (usually the PSP).
   *	If a matching interaction was logged in the `interfaceInteractions` array, the corresponding interaction should be findable with this ID.
   *
   */
  readonly interactionId?: string
  /**
   *	The state of this transaction.
   *
   */
  readonly state?: TransactionState
  /**
   *	Custom Fields for the Transaction.
   *
   */
  readonly custom?: CustomFields
}
export interface TransactionDraft {
  /**
   *	The time at which the transaction took place.
   *
   */
  readonly timestamp?: string
  /**
   *	The type of this transaction.
   *
   */
  readonly type: TransactionType
  /**
   *
   */
  readonly amount: Money
  /**
   *	The identifier that is used by the interface that managed the transaction (usually the PSP).
   *	If a matching interaction was logged in the `interfaceInteractions` array, the corresponding interaction should be findable with this ID.
   *
   */
  readonly interactionId?: string
  /**
   *	The state of this transaction.
   *	If not set, defaults to `Initial`.
   *
   */
  readonly state?: TransactionState
  /**
   *	Custom Fields for the Transaction.
   *
   */
  readonly custom?: CustomFieldsDraft
}
export type TransactionState = 'Failure' | 'Initial' | 'Pending' | 'Success'
export type TransactionType =
  | 'Authorization'
  | 'CancelAuthorization'
  | 'Charge'
  | 'Chargeback'
  | 'Refund'
export interface PaymentAddInterfaceInteractionAction {
  readonly action: 'addInterfaceInteraction'
  /**
   *
   */
  readonly type: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface PaymentAddTransactionAction {
  readonly action: 'addTransaction'
  /**
   *
   */
  readonly transaction: TransactionDraft
}
export interface PaymentChangeAmountPlannedAction {
  readonly action: 'changeAmountPlanned'
  /**
   *
   */
  readonly amount: Money
}
export interface PaymentChangeTransactionInteractionIdAction {
  readonly action: 'changeTransactionInteractionId'
  /**
   *
   */
  readonly transactionId: string
  /**
   *
   */
  readonly interactionId: string
}
export interface PaymentChangeTransactionStateAction {
  readonly action: 'changeTransactionState'
  /**
   *
   */
  readonly transactionId: string
  /**
   *
   */
  readonly state: TransactionState
}
export interface PaymentChangeTransactionTimestampAction {
  readonly action: 'changeTransactionTimestamp'
  /**
   *
   */
  readonly transactionId: string
  /**
   *
   */
  readonly timestamp: string
}
export interface PaymentSetAnonymousIdAction {
  readonly action: 'setAnonymousId'
  /**
   *	Anonymous ID of the anonymous customer that this payment belongs to.
   *	If this field is not set any existing `anonymousId` is removed.
   *
   */
  readonly anonymousId?: string
}
export interface PaymentSetCustomFieldAction {
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
export interface PaymentSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Payment with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Payment.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Payment.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface PaymentSetCustomerAction {
  readonly action: 'setCustomer'
  /**
   *	A reference to the customer this payment belongs to.
   *
   */
  readonly customer?: CustomerResourceIdentifier
}
export interface PaymentSetInterfaceIdAction {
  readonly action: 'setInterfaceId'
  /**
   *
   */
  readonly interfaceId: string
}
export interface PaymentSetKeyAction {
  readonly action: 'setKey'
  /**
   *	User-specific unique identifier for the payment (max.
   *	256 characters).
   *	If not provided an existing key will be removed.
   *
   */
  readonly key?: string
}
export interface PaymentSetMethodInfoInterfaceAction {
  readonly action: 'setMethodInfoInterface'
  /**
   *
   */
  readonly interface: string
}
export interface PaymentSetMethodInfoMethodAction {
  readonly action: 'setMethodInfoMethod'
  /**
   *	If not provided, the method is unset.
   *
   */
  readonly method?: string
}
export interface PaymentSetMethodInfoNameAction {
  readonly action: 'setMethodInfoName'
  /**
   *	If not provided, the name is unset.
   *
   */
  readonly name?: LocalizedString
}
export interface PaymentSetStatusInterfaceCodeAction {
  readonly action: 'setStatusInterfaceCode'
  /**
   *
   */
  readonly interfaceCode?: string
}
export interface PaymentSetStatusInterfaceTextAction {
  readonly action: 'setStatusInterfaceText'
  /**
   *
   */
  readonly interfaceText: string
}
export interface PaymentSetTransactionCustomFieldAction {
  readonly action: 'setTransactionCustomField'
  /**
   *
   */
  readonly transactionId: string
  /**
   *	description: |
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
export interface PaymentSetTransactionCustomTypeAction {
  readonly action: 'setTransactionCustomType'
  /**
   *
   */
  readonly transactionId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Transaction with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Transaction.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Transaction.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface PaymentTransitionStateAction {
  readonly action: 'transitionState'
  /**
   *
   */
  readonly state: StateResourceIdentifier
  /**
   *
   */
  readonly force?: boolean
}
