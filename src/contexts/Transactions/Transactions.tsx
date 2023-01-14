import { createContext, useEffect, useReducer, useContext, useCallback } from 'react'

import { createNewTransaction, fetchTransactions, fetchTransactionsSummary } from '@services/api'

import { reducer } from './Transactions.reducer'

import { CreateTransactionParams, TransactionsContextState, TransactionsProviderProps } from './Transactions.types'

const initialState: TransactionsContextState = {
  summary: {
    incomes: 0,
    outcomes: 0,
    total: 0,
  },
  transactions: [],
  createTransaction: async () => {},
  getTransactions: async () => {},
  filterTransactions: async () => {},
}

const TransactionsContext = createContext<TransactionsContextState>(initialState)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getTransactions = useCallback(async () => {
    const { data } = await fetchTransactions({})

    if (!data) return

    dispatch({ type: 'SET_TRANSACTIONS', payload: { transactions: data } })
  }, [])

  const getSummary = async () => {
    const { data } = await fetchTransactionsSummary({})

    if (!data) return

    dispatch({ type: 'SET_SUMMARY', payload: { summary: data } })
  }

  const filterTransactions = async ({ query }: { query: string }) => {
    const [transactionsResponse, summaryResponse] = await Promise.all([
      fetchTransactions({ query }),
      fetchTransactionsSummary({ query }),
    ])

    const transactions = transactionsResponse.data
    const summary = summaryResponse.data

    if (!transactions || !summary) return

    dispatch({ type: 'SET_TRANSACTIONS', payload: { transactions } })
    dispatch({ type: 'SET_SUMMARY', payload: { summary } })
  }

  const createTransaction = useCallback(async ({ type, description, value, category }: CreateTransactionParams) => {
    const { data } = await createNewTransaction({ type, description, value, category })

    if (!data) return

    dispatch({ type: 'CREATE_TRANSACTION', payload: { transaction: data } })
  }, [])

  useEffect(() => {
    getSummary()
  }, [])

  const value: TransactionsContextState = {
    ...state,
    createTransaction,
    getTransactions,
    filterTransactions,
  }

  return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
}

export const useTransactions = () => useContext(TransactionsContext)
