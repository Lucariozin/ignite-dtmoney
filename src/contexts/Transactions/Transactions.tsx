import { createContext, useEffect, useReducer, useContext, useCallback } from 'react'

import { createNewTransaction, fetchTransactionsSummary } from '@services/api'

import { reducer } from './Transactions.reducer'

import {
  CreateTransactionParams,
  SetTransactionsParams,
  TransactionsContextState,
  TransactionsProviderProps,
} from './Transactions.types'

const initialState: TransactionsContextState = {
  summary: {
    incomes: 0,
    outcomes: 0,
    total: 0,
  },
  transactions: [],
  createTransaction: async () => {},
  setTransactions: () => {},
}

const TransactionsContext = createContext<TransactionsContextState>(initialState)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setTransactions = useCallback(({ transactions }: SetTransactionsParams) => {
    dispatch({ type: 'SET_TRANSACTIONS', payload: { transactions } })
  }, [])

  const createTransaction = useCallback(async ({ type, description, value, category }: CreateTransactionParams) => {
    const { data } = await createNewTransaction({ type, description, value, category })

    if (!data) return

    dispatch({ type: 'CREATE_TRANSACTION', payload: { transaction: data } })
  }, [])

  const getSummary = async () => {
    const { data } = await fetchTransactionsSummary()

    if (!data) return

    dispatch({ type: 'SET_SUMMARY', payload: { summary: data } })
  }

  useEffect(() => {
    getSummary()
  }, [])

  const value: TransactionsContextState = {
    ...state,
    createTransaction,
    setTransactions,
  }

  return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
}

export const useTransactions = () => useContext(TransactionsContext)
