import { usePagination } from '@contexts/Pagination'
import { useTransactions } from '@contexts/Transactions'

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
  const { setLoading } = useTransactions()

  const visiblePages = 5

  const { previousPages, nextPages } = getPages({ currentPage, lastPage, visiblePages })

  const handlePageButtonClick = async (page: number) => {
    setLoading(true)

    await goToPage({ page, scroll: true })

    setLoading(false)
  }

  const handleGoToThePreviousPage = async () => {
    setLoading(true)

    await goToThePreviousPage()

    setLoading(false)
  }

  const handleGoToTheNextPage = async () => {
    setLoading(true)

    await goToTheNextPage()

    setLoading(false)
  }

  const shouldShowFirstPageButton = !!previousPages.length && previousPages.at(0) !== 1
  const shouldShowLastPageButton = !!nextPages.length && nextPages.at(-1) !== lastPage

  const prevPageButtonIsDisabled = currentPage === 1
  const nextPageButtonIsDisabled = currentPage === lastPage

  return (
    <Container>
      <PrevPageButton disabled={prevPageButtonIsDisabled} onClick={handleGoToThePreviousPage} />

      <PageButtonsContainer>
        {shouldShowFirstPageButton && (
          <>
            <PageButton onClick={() => handlePageButtonClick(1)}>1</PageButton>
            <Separator>...</Separator>
          </>
        )}

        {previousPages.map((page) => (
          <PageButton key={page} onClick={() => handlePageButtonClick(page)}>
            {page}
          </PageButton>
        ))}

        <PageButton isHighlighted>{currentPage}</PageButton>

        {nextPages.map((page) => (
          <PageButton key={page} onClick={() => handlePageButtonClick(page)}>
            {page}
          </PageButton>
        ))}

        {shouldShowLastPageButton && (
          <>
            <Separator>...</Separator>
            <PageButton onClick={() => handlePageButtonClick(lastPage)}>{lastPage}</PageButton>
          </>
        )}
      </PageButtonsContainer>

      <NextPageButton disabled={nextPageButtonIsDisabled} onClick={handleGoToTheNextPage} />
    </Container>
  )
}
