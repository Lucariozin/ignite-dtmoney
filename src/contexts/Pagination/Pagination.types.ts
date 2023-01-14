import { ReactNode } from 'react'

export interface PaginationContextState {
  currentPage: number
  lastPage: number
}

export interface PaginationProviderProps {
  children: ReactNode
}
