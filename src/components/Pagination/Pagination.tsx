import { Container, NextPageButton, PageButton, PageButtonsContainer, PrevPageButton } from './Pagination.styles'

export const Pagination = () => {
  return (
    <Container>
      <PrevPageButton />

      <PageButtonsContainer>
        <PageButton type="button" isHighlighted>
          1
        </PageButton>
        <PageButton type="button">2</PageButton>
        <PageButton type="button">3</PageButton>
      </PageButtonsContainer>

      <NextPageButton />
    </Container>
  )
}
