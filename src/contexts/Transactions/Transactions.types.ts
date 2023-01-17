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

export interface UpdateTransactionsParams {
  page?: number
  limit?: number
}

type PaginationData = {
  currentPage: number
  lastPage: number
}

export interface TransactionsContextState {
  isLoading: boolean
  summary: Summary
  transactions: Transaction[]
  filterTransactions: (params: FilterTransactionsParams) => Promise<void>
  updateTransactions: (params: UpdateTransactionsParams) => Promise<{ paginationData: PaginationData | null }>
  updateSummary: () => Promise<void>
  createTransaction: (params: CreateTransactionParams) => Promise<void>
  setLoading: (value: boolean) => void
}

export interface TransactionsProviderProps {
  children: ReactNode
}
