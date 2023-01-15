import { usePagination } from '@contexts/Pagination'

import {
  Container,
  NextPageButton,
  PageButton,
  PageButtonsContainer,
  PrevPageButton,
  Separator,
} from './Pagination.styles'

interface GetPageButtonsDataParam {
  lastPage: number
}

const getPages = ({ lastPage }: GetPageButtonsDataParam) => {
  const pages: number[] = []

  for (let c = 1; c <= lastPage; c++) {
    pages.push(c)
  }

  return pages
}

export const Pagination = () => {
  const { currentPage, lastPage, goToPage, goToThePreviousPage, goToTheNextPage } = usePagination()

  const visiblePages = 5

  const halfOfVisiblePages = Math.floor(visiblePages / 2)

  const pages = getPages({ lastPage })

  const beforePages = pages.slice(
    currentPage - (currentPage === lastPage && currentPage !== 2 ? 3 : halfOfVisiblePages + 1),
    currentPage - 1,
  )

  const afterPages = pages.slice(currentPage, currentPage + (currentPage === 1 ? 2 : halfOfVisiblePages))

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
