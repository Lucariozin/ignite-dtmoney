import { useTransactions } from '@contexts/Transactions'

import { createContext, ReactNode, useCallback, useContext, useEffect, useReducer } from 'react'

interface PaginationContextState {
  currentPage: number
  lastPage: number
}

const initialState: PaginationContextState = {
  currentPage: 1,
  lastPage: 1,
}

const PaginationContext = createContext<PaginationContextState>(initialState)

const reducer = (state: PaginationContextState, action: any) => {
  return initialState
}

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { getTransactions } = useTransactions()

  const getPaginationData = useCallback(async () => {
    const { paginationData } = await getTransactions({ page: 1, limit: 5 })

    if (!paginationData) return

    console.log(paginationData)
  }, [getTransactions])

  useEffect(() => {
    getPaginationData()
  }, [getPaginationData])

  return <PaginationContext.Provider value={state}>{children}</PaginationContext.Provider>
}

export const usePagination = () => useContext(PaginationContext)
