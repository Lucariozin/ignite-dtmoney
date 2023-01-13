import { createContext, useEffect, useReducer, useContext } from 'react'

import { fetchTransactionsSummary } from '@services/api'

import { reducer } from './Transactions.reducer'

import { TransactionsContextState, TransactionsProviderProps } from './Transactions.types'

const initialState: TransactionsContextState = {
  summary: {
    incomes: 0,
    outcomes: 0,
    total: 0,
  },
  transactions: [],
}

const TransactionsContext = createContext<TransactionsContextState>(initialState)

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
