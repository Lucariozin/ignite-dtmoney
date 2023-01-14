import { ReactNode } from 'react'

export type TransactionType = 'income' | 'outcome'

export type Transaction = {
  id: number
  description: string
  value: number
  category: string
  type: TransactionType
  createdAt: Date
}

export type Summary = {
  incomes: number
  outcomes: number
  total: number
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

export interface GetTransactionsParams {
  page?: number
  limit?: number
}

type PaginationData = {
  currentPage: number
  lastPage: number
}

export interface TransactionsContextState {
  summary: Summary
  transactions: Transaction[]
  createTransaction: (params: CreateTransactionParams) => Promise<void>
  getTransactions: (params: GetTransactionsParams) => Promise<{ paginationData: PaginationData | null }>
  filterTransactions: (params: FilterTransactionsParams) => Promise<void>
}

export interface TransactionsProviderProps {
  children: ReactNode
}
