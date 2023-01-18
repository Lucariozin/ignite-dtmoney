import { ReactNode } from 'react'

export interface PaginationProviderProps {
  children: ReactNode
}

export interface GetPagesParams {
  currentPage: number
  lastPage: number
  visiblePages: number
}

export interface GetPagesReturn {
  pages: number[]
  previousPages: number[]
  nextPages: number[]
}

export interface GetNextPagesParams {
  pages: number[]
  currentPage: number
  visiblePages: number
}

export interface GetPreviousPagesParams {
  pages: number[]
  currentPage: number
  lastPage: number
  visiblePages: number
}

export interface GoToPageParams {
  page: number
  scroll?: boolean
}

export interface PaginationContextState {
  currentPage: number
  lastPage: number
  goToPage: (params: GoToPageParams) => Promise<void>
  goToThePreviousPage: () => Promise<void>
  goToTheNextPage: () => Promise<void>
  getPages: (params: GetPagesParams) => GetPagesReturn
}
