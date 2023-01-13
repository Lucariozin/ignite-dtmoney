import { createContext, ReactNode, useEffect, useReducer, useContext } from 'react'
import { fetchTransactionsSummary } from '@services/api'

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

interface TransactionsContextState {
  summary: Summary
  filterSummary?: Summary | null
  transactions: Transaction[]
}

const initialState: TransactionsContextState = {
  summary: {
    incomes: 0,
    outcomes: 0,
    total: 0,
  },
  transactions: [],
}

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext<TransactionsContextState>(initialState)

type TransactionsActions = {
  type: string
  payload?: any
}

const reducer = (state: TransactionsContextState, action: TransactionsActions) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_SUMMARY':
      return { ...state, summary: payload.summary }
    default:
      return state
  }
}

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getSummary = async () => {
    const { data } = await fetchTransactionsSummary()

    if (!data) return

    dispatch({ type: 'SET_SUMMARY', payload: { summary: data } })
  }

  useEffect(() => {
    getSummary()
  }, [])

  return <TransactionsContext.Provider value={state}>{children}</TransactionsContext.Provider>
}

export const useTransactions = () => useContext(TransactionsContext)
