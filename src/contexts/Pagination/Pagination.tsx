import { createContext, useCallback, useContext, useEffect, useReducer } from 'react'

import { reducer } from './Pagination.reducer'

import { useTransactions } from '@contexts/Transactions'

import {
  GetNextPagesParams,
  GetPagesParams,
  GetPreviousPagesParams,
  PaginationContextState,
  PaginationProviderProps,
} from './Pagination.types'

const initialState: PaginationContextState = {
  currentPage: 1,
  lastPage: 1,
  goToPage: async () => {},
  goToThePreviousPage: async () => {},
  goToTheNextPage: async () => {},
  getPages: () => ({ pages: [], previousPages: [], nextPages: [] }),
}

const PaginationContext = createContext<PaginationContextState>(initialState)

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { updateTransactions } = useTransactions()

  const goToPage = useCallback(
    async (page: number = 1) => {
      const { paginationData } = await updateTransactions({ page, limit: 10 })

      if (!paginationData) return

      dispatch({ type: 'SET_STATE', payload: { state: { ...paginationData } } })
    },
    [updateTransactions],
  )

  const goToThePreviousPage = useCallback(async () => {
    await goToPage(state.currentPage - 1)
  }, [goToPage, state.currentPage])

  const goToTheNextPage = useCallback(async () => {
    await goToPage(state.currentPage + 1)
  }, [goToPage, state.currentPage])

  const getNextPages = ({ pages, currentPage, visiblePages }: GetNextPagesParams) => {
    const pagesOnEachSide = Math.floor(visiblePages / 2)

    if (currentPage <= pagesOnEachSide) {
      const nextPages = pages.slice(currentPage, visiblePages)
      return nextPages
    }

    const nextPages = pages.slice(currentPage, currentPage + pagesOnEachSide)
    return nextPages
  }

  const getPreviousPages = ({ pages, currentPage, lastPage, visiblePages }: GetPreviousPagesParams) => {
    const pagesOnEachSide = Math.floor(visiblePages / 2)

    if (currentPage <= pagesOnEachSide) {
      const previousPages = pages.slice(0, currentPage - 1)
      return previousPages
    }

    if (currentPage + pagesOnEachSide >= lastPage) {
      const start = lastPage - visiblePages <= 0 ? 0 : lastPage - visiblePages
      const previousPages = pages.slice(start, currentPage - 1)

      return previousPages
    }

    const previousPages = pages.slice(currentPage - pagesOnEachSide - 1, currentPage - 1)
    return previousPages
  }

  const getPages = useCallback(({ currentPage, visiblePages, lastPage }: GetPagesParams) => {
    const pages: number[] = []

    for (let c = 1; c <= lastPage; c++) {
      pages.push(c)
    }

    const previousPages = getPreviousPages({ pages, currentPage, lastPage, visiblePages })
    const nextPages = getNextPages({ pages, currentPage, visiblePages })

    return { pages, previousPages, nextPages }
  }, [])

  useEffect(() => {
    goToPage(1)
  }, [goToPage])

  const value: PaginationContextState = {
    ...state,
    goToPage,
    goToThePreviousPage,
    goToTheNextPage,
    getPages,
  }

  return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>
}

export const usePagination = () => useContext(PaginationContext)
