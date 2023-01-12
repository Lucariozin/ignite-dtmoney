import axios from 'axios'

type Transaction = {
  id: number
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
  createdAt: Date
}

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
