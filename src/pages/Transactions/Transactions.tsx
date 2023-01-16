import { PaginationProvider } from '@contexts/Pagination'

import { Header } from '@components/Header'
import { TransactionListContainer } from '@components/TransactionListContainer'

import { Container } from './Transactions.styles'

export const Transactions = () => {
  return (
    <Container>
      <Header />

      <PaginationProvider>
        <TransactionListContainer />
      </PaginationProvider>
    </Container>
  )
}
