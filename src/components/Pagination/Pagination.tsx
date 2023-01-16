import { usePagination } from '@contexts/Pagination'

import {
  Container,
  NextPageButton,
  PageButton,
  PageButtonsContainer,
  PrevPageButton,
  Separator,
} from './Pagination.styles'

export const Pagination = () => {
  const { currentPage, lastPage, getPages, goToPage, goToThePreviousPage, goToTheNextPage } = usePagination()

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
