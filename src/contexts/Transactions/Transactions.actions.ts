import { Summary, Transaction, TransactionsContextState } from './Transactions.types'

export type ActionTypes = 'SET_IS_LOADING' | 'SET_SUMMARY' | 'CREATE_TRANSACTION' | 'SET_TRANSACTIONS'

export type Payload = {
  isLoading?: boolean
  summary?: Summary
  transaction?: Transaction
  transactions?: Transaction[]
}

export type TransactionActions = {
  type: ActionTypes
  payload?: Payload
}

type ActionFunctionParams = {
  state: TransactionsContextState
  payload?: Payload
}

export type ActionsObjectType = {
  [K in ActionTypes]: (params: ActionFunctionParams) => TransactionsContextState // eslint-disable-line
}
