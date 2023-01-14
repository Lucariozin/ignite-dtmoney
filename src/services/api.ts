import axios from 'axios'

import { Summary, Transaction, TransactionType } from '@contexts/Transactions/Transactions.types'

import { mapPaginationData } from './mapPaginationData'
import { mapTransactions } from './mapTransactions'

type ResponseObj<T = any> = {
  status?: number
  data?: T
}

type FetchTransactionsResponseData = {
  transactions: Transaction[]
  paginationData: {
    currentPage: number
    lastPage: number
  }
}

interface CreateNewTransactionParams {
  type: TransactionType
  description: string
  value: number
  category: string
}

interface FetchTransactionsParams {
  query?: string
  page?: number
  limit?: number
}

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const fetchTransactions = async ({ query = '', page, limit }: FetchTransactionsParams) => {
  const url = `/transactions?q=${query}&_page=${page ?? ''}&_limit=${limit ?? ''}`

  let response: ResponseObj<FetchTransactionsResponseData> = {}

  try {
    const { status, data, headers } = await api.get<Transaction[]>(url)

    const transactions = mapTransactions(data)
    const paginationData = mapPaginationData(headers?.link ?? '')

    response = { status, data: { transactions, paginationData } }
  } catch {}

  return response
}

export const fetchTransactionsSummary = async ({ query }: { query?: string }) => {
  const url = query ? `/transactions/summary?q=${query}` : '/transactions/summary'

  let response: ResponseObj<Summary> = {}

  try {
    const { status, data } = await api.get<Summary>(url)

    response = { status, data }
  } catch {}

  return response
}

export const createNewTransaction = async ({ type, description, value, category }: CreateNewTransactionParams) => {
  let response: ResponseObj<Transaction> = {}

  try {
    const { status, data } = await api.post<Transaction>('/transactions', {
      type,
      description,
      value,
      category,
    })

    const mappedData: Transaction = { ...data, createdAt: new Date(data.createdAt) }

    response = { status, data: mappedData }
  } catch {}

  return response
}
