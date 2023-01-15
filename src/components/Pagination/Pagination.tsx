import { usePagination } from '@contexts/Pagination'

import {
  Container,
  NextPageButton,
  PageButton,
  PageButtonsContainer,
  PrevPageButton,
  Separator,
} from './Pagination.styles'

interface GetPagesParams {
  currentPage: number
  lastPage: number
  visiblePages: number
}

interface GetAfterPagesParams {
  pages: number[]
  currentPage: number
  visiblePages: number
}

interface GetBeforePagesParams {
  pages: number[]
  currentPage: number
  lastPage: number
  visiblePages: number
}

const getAfterPages = ({ pages, currentPage, visiblePages }: GetAfterPagesParams) => {
  const halfOfVisiblePages = Math.floor(visiblePages / 2)

  if (currentPage <= halfOfVisiblePages) {
    const afterPages = pages.slice(currentPage, visiblePages)
    return afterPages
  }

  const afterPages = pages.slice(currentPage, currentPage + halfOfVisiblePages)
  return afterPages
}

const getBeforePages = ({ pages, currentPage, lastPage, visiblePages }: GetBeforePagesParams) => {
  const halfOfVisiblePages = Math.floor(visiblePages / 2)

  if (currentPage <= halfOfVisiblePages) {
    const beforePages = pages.slice(0, currentPage - 1)
    return beforePages
  }

  if (currentPage + halfOfVisiblePages > lastPage && currentPage !== lastPage) {
    if (currentPage + halfOfVisiblePages - 1 === lastPage) {
      const beforePages = pages.slice(currentPage - 1 + halfOfVisiblePages - visiblePages, currentPage - 1)
      return beforePages
    }

    const beforePages = pages.slice(visiblePages - (currentPage + 1), currentPage - 1)
    return beforePages
  }

  if (currentPage === lastPage) {
    const beforePages = pages.slice(lastPage - visiblePages, currentPage - 1)
    return beforePages
  }

  const beforePages = pages.slice(currentPage - halfOfVisiblePages - 1, currentPage - 1)
  return beforePages
}

const getPages = ({ currentPage, visiblePages, lastPage }: GetPagesParams) => {
  const pages: number[] = []

  for (let c = 1; c <= lastPage; c++) {
    pages.push(c)
  }

  const afterPages = getAfterPages({ pages, currentPage, visiblePages })
  const beforePages = getBeforePages({ pages, currentPage, lastPage, visiblePages })

  return { pages, afterPages, beforePages }
}

export const Pagination = () => {
  const { currentPage, lastPage, goToPage, goToThePreviousPage, goToTheNextPage } = usePagination()

  const visiblePages = 5

  const { beforePages, afterPages } = getPages({ currentPage, lastPage, visiblePages })

  console.log(beforePages, currentPage, afterPages)

  const shouldShowFirstPageButton = !!beforePages.length && beforePages.at(0) !== 1
  const shouldShowLastPageButton = !!afterPages.length && afterPages.at(-1) !== lastPage

  const prevPageButtonIsDisabled = currentPage === 1
  const nextPageButtonIsDisabled = currentPage === lastPage

  return (
    <Container>
      <PrevPageButton disabled={prevPageButtonIsDisabled} onClick={goToThePreviousPage} />

      <PageButtonsContainer>
        {shouldShowFirstPageButton && (
          <>
            <PageButton onClick={() => goToPage(1)}>1</PageButton>
            <Separator>...</Separator>
          </>
        )}

        {beforePages.map((page) => (
          <PageButton key={page} onClick={() => goToPage(page)}>
            {page}
          </PageButton>
        ))}

        <PageButton isHighlighted>{currentPage}</PageButton>

        {afterPages.map((page) => (
          <PageButton key={page} onClick={() => goToPage(page)}>
            {page}
          </PageButton>
        ))}

        {shouldShowLastPageButton && (
          <>
            <Separator>...</Separator>
            <PageButton onClick={() => goToPage(lastPage)}>{lastPage}</PageButton>
          </>
        )}
      </PageButtonsContainer>

      <NextPageButton disabled={nextPageButtonIsDisabled} onClick={goToTheNextPage} />
    </Container>
  )
}
