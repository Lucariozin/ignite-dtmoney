import { ReactNode } from 'react'

export type Summary = {
  incomes: number
  outcomes: number
  total: number
}

export type TransactionType = 'income' | 'outcome'

export type Transaction = {
  id: number
  description: string
  value: number
  category: string
  type: TransactionType
  createdAt: Date
}

export interface SetTransactionsParams {
  transactions: Transaction[]
}

export interface CreateTransactionParams {
  type: TransactionType
  description: string
  value: number
  category: string
}

export interface FilterTransactionsParams {
  query: string
}

export interface TransactionsContextState {
  summary: Summary
  filterSummary?: Summary | null
  transactions: Transaction[]
  createTransaction: (params: CreateTransactionParams) => Promise<void>
  setTransactions: (params: SetTransactionsParams) => void
  filterTransactions: (params: FilterTransactionsParams) => Promise<void>
}

export interface TransactionsProviderProps {
  children: ReactNode
}

export type Types = 'SET_SUMMARY' | 'CREATE_TRANSACTION' | 'SET_TRANSACTIONS'

export type TransactionsActions = {
  type: Types
  payload?: {
    summary?: Summary
    transaction?: Transaction
    transactions?: Transaction[]
  }
}

type ActionFunctionParams = {
  state: TransactionsContextState
  payload?: any
}

export type ActionsObjectType = {
  [K in TransactionsActions['type']]: (params: ActionFunctionParams) => TransactionsContextState // eslint-disable-line
}
