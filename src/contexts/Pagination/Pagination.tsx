import { createContext, useCallback, useContext, useEffect, useReducer } from 'react'

import { reducer } from './Pagination.reducer'

import { useTransactions } from '@contexts/Transactions'

import { PaginationContextState, PaginationProviderProps } from './Pagination.types'

const initialState: PaginationContextState = {
  currentPage: 1,
  lastPage: 1,
}

const PaginationContext = createContext<PaginationContextState>(initialState)

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { getTransactions } = useTransactions()

  const getPaginationData = useCallback(async () => {
    const { paginationData } = await getTransactions({ page: 1, limit: 5 })

    if (!paginationData) return

    dispatch({ type: 'SET_STATE', payload: { state: paginationData } })
  }, [getTransactions])

  useEffect(() => {
    getPaginationData()
  }, [getPaginationData])

  return <PaginationContext.Provider value={state}>{children}</PaginationContext.Provider>
}

export const usePagination = () => useContext(PaginationContext)
