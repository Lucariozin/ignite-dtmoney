import { Skeleton } from '@components/Skeleton'
import { Container } from './TransactionList.styles'

export const TransactionListSkeleton = () => {
  return (
    <Container>
      <Skeleton width="100%" height="4.125rem" />
      <Skeleton width="100%" height="4.125rem" />
      <Skeleton width="100%" height="4.125rem" />
      <Skeleton width="100%" height="4.125rem" />
      <Skeleton width="100%" height="4.125rem" />
    </Container>
  )
}
