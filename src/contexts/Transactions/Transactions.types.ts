import { ReactNode } from 'react'

export type Summary = {
  incomes: number
  outcomes: number
  total: number
}

export type Transaction = {
  id: number
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
  createdAt: Date
}

export interface TransactionsContextState {
  summary: Summary
  filterSummary?: Summary | null
  transactions: Transaction[]
}

export interface TransactionsProviderProps {
  children: ReactNode
}

export type Types = 'SET_SUMMARY'

export type TransactionsActions = {
  type: Types
  payload?: any
}

type ActionFunctionParams = {
  state: TransactionsContextState
  payload?: any
}

export type ActionsObjectType = {
  [K in TransactionsActions['type']]: (params: ActionFunctionParams) => TransactionsContextState // eslint-disable-line
}
