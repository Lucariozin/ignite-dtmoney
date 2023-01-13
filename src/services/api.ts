import axios from 'axios'

import { Summary, Transaction } from '@contexts/Transactions/Transactions.types'

type ResponseObj<T = any> = {
  status?: number
  data?: T
}

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const fetchTransactions = async () => {
  let response: ResponseObj<Transaction[]> = {}

  try {
    const { status, data } = await api.get<Transaction[]>('/transactions')

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
