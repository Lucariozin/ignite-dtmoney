import { ReactNode } from 'react'

export interface PaginationContextState {
  currentPage: number
  lastPage: number
  goToPage: (page: number) => Promise<void>
  goToThePreviousPage: () => Promise<void>
  goToTheNextPage: () => Promise<void>
}

export interface PaginationProviderProps {
  children: ReactNode
}
