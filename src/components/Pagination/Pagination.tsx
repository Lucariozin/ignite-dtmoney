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

interface GetNextPagesParams {
  pages: number[]
  currentPage: number
  visiblePages: number
}

interface GetPreviousPagesParams {
  pages: number[]
  currentPage: number
  lastPage: number
  visiblePages: number
}

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

const getPages = ({ currentPage, visiblePages, lastPage }: GetPagesParams) => {
  const pages: number[] = []

  for (let c = 1; c <= lastPage; c++) {
    pages.push(c)
  }

  const previousPages = getPreviousPages({ pages, currentPage, lastPage, visiblePages })
  const nextPages = getNextPages({ pages, currentPage, visiblePages })

  return { pages, previousPages, nextPages }
}

export const Pagination = () => {
  const { currentPage, lastPage, goToPage, goToThePreviousPage, goToTheNextPage } = usePagination()

  const visiblePages = 5

  const { previousPages, nextPages } = getPages({ currentPage, lastPage, visiblePages })

  const shouldShowFirstPageButton = !!previousPages.length && previousPages.at(0) !== 1
  const shouldShowLastPageButton = !!nextPages.length && nextPages.at(-1) !== lastPage

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

        {previousPages.map((page) => (
          <PageButton key={page} onClick={() => goToPage(page)}>
            {page}
          </PageButton>
        ))}

        <PageButton isHighlighted>{currentPage}</PageButton>

        {nextPages.map((page) => (
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
