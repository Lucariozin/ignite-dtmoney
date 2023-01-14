import axios from 'axios'

import { Summary, Transaction, TransactionType } from '@contexts/Transactions/Transactions.types'

type ResponseObj<T = any> = {
  status?: number
  data?: T
}

interface CreateNewTransactionParams {
  type: TransactionType
  description: string
  value: number
  category: string
}

interface FetchTransactionsParams {
  query?: string
}

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const fetchTransactions = async ({ query }: FetchTransactionsParams) => {
  const url = query ? `/transactions?q=${query}` : '/transactions'

  let response: ResponseObj<Transaction[]> = {}

  try {
    const { status, data } = await api.get<Transaction[]>(url)

    const mappedData = data.map((transaction) => ({ ...transaction, createdAt: new Date(transaction.createdAt) }))

    response = { status, data: mappedData }
  } catch {}

  return response
}

export const fetchTransactionsSummary = async () => {
  let response: ResponseObj<Summary> = {}

  try {
    const { status, data } = await api.get<Summary>('/transactions/summary')

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
