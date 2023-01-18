import { createContext, useReducer, useContext, useCallback, useEffect } from 'react'

import { createNewTransaction, fetchTransactions, fetchTransactionsSummary } from '@services/api'

import { reducer } from './Transactions.reducer'

import {
  CreateTransactionParams,
  UpdateTransactionsParams,
  TransactionsContextState,
  TransactionsProviderProps,
} from './Transactions.types'

const initialState: TransactionsContextState = {
  isLoading: true,
  summary: {
    incomes: 0,
    outcomes: 0,
    total: 0,
  },
  transactions: [],
  createTransaction: async () => {},
  updateTransactions: async () => ({ paginationData: null }),
  filterTransactions: async () => {},
  updateSummary: async () => {},
  setLoading: () => {},
}

const TransactionsContext = createContext<TransactionsContextState>(initialState)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateTransactions = useCallback(async ({ page, limit }: UpdateTransactionsParams) => {
    const { data } = await fetchTransactions({ page, limit })

    if (!data) return { paginationData: null }

    const { transactions, paginationData } = data

    dispatch({ type: 'SET_TRANSACTIONS', payload: { transactions } })

    return { paginationData }
  }, [])

  const updateSummary = useCallback(async () => {
    const { data } = await fetchTransactionsSummary({})

    if (!data) return

    dispatch({ type: 'SET_SUMMARY', payload: { summary: data } })
  }, [])

  const filterTransactions = useCallback(async ({ query }: { query: string }) => {
    const [transactionsResponse, summaryResponse] = await Promise.all([
      fetchTransactions({ query }),
      fetchTransactionsSummary({ query }),
    ])

    const transactions = transactionsResponse.data?.transactions
    const summary = summaryResponse.data

    if (!transactions || !summary) return

    dispatch({ type: 'SET_TRANSACTIONS', payload: { transactions } })
    dispatch({ type: 'SET_SUMMARY', payload: { summary } })
  }, [])

  const createTransaction = useCallback(async ({ type, description, value, category }: CreateTransactionParams) => {
    await createNewTransaction({ type, description, value, category })
  }, [])

  const setLoading = useCallback((value: boolean) => {
    dispatch({ type: 'SET_IS_LOADING', payload: { isLoading: value } })
  }, [])

  useEffect(() => {
    updateSummary()
  }, [updateSummary])

  const value: TransactionsContextState = {
    ...state,
    updateTransactions,
    updateSummary,
    filterTransactions,
    createTransaction,
    setLoading,
  }

  return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
}

export const useTransactions = () => useContext(TransactionsContext)
