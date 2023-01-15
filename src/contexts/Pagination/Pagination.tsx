import { createContext, useCallback, useContext, useEffect, useReducer } from 'react'

import { reducer } from './Pagination.reducer'

import { useTransactions } from '@contexts/Transactions'

import { PaginationContextState, PaginationProviderProps } from './Pagination.types'

const initialState: PaginationContextState = {
  currentPage: 1,
  lastPage: 1,
  goToPage: async () => {},
  goToThePreviousPage: async () => {},
  goToTheNextPage: async () => {},
}

const PaginationContext = createContext<PaginationContextState>(initialState)

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { getTransactions } = useTransactions()

  const goToPage = useCallback(
    async (page: number = 1) => {
      const { paginationData } = await getTransactions({ page, limit: 1 })

      if (!paginationData) return

      dispatch({ type: 'SET_STATE', payload: { state: { ...paginationData } } })
    },
    [getTransactions],
  )

  const goToThePreviousPage = async () => await goToPage(state.currentPage - 1)

  const goToTheNextPage = async () => await goToPage(state.currentPage + 1)

  useEffect(() => {
    goToPage(1)
  }, [goToPage])

  const value: PaginationContextState = {
    ...state,
    goToPage,
    goToThePreviousPage,
    goToTheNextPage,
  }

  return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>
}

export const usePagination = () => useContext(PaginationContext)
