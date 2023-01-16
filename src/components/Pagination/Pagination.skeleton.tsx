import { Skeleton } from '@components/Skeleton'
import { Container, PrevPageButton, PageButtonsContainer, NextPageButton } from './Pagination.styles'

export const PaginationSkeleton = () => {
  return (
    <Container>
      <PrevPageButton disabled={true} />

      <PageButtonsContainer>
        <Skeleton width={'2.5rem'} height={'2.5rem'} />
        <Skeleton width={'2.5rem'} height={'2.5rem'} />
        <Skeleton width={'2.5rem'} height={'2.5rem'} />
      </PageButtonsContainer>

      <NextPageButton disabled={true} />
    </Container>
  )
}
