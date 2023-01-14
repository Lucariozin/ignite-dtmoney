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

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const fetchTransactions = async ({ query }: { query?: string }) => {
  const url = query
    ? `/transactions?_sort=createdAt&_order=desc&q=${query}`
    : '/transactions?_sort=createdAt&_order=desc'

  let response: ResponseObj<Transaction[]> = {}

  try {
    const { status, data } = await api.get<Transaction[]>(url)

    const mappedData = data.map((transaction) => ({ ...transaction, createdAt: new Date(transaction.createdAt) }))

    response = { status, data: mappedData }
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
