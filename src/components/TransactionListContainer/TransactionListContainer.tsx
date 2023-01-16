import { useTransactions } from '@contexts/Transactions'

import { Pagination, PaginationSkeleton } from '@components/Pagination'

import { SearchForTransactionsForm } from './components/SearchForTransactionsForm'
import { TransactionList, TransactionListSkeleton } from './components/TransactionList'

import { Container, PaginationContainer } from './TransactionListContainer.styles'

export const TransactionListContainer = () => {
  const { transactions, isLoading } = useTransactions()

  return (
    <Container>
      <SearchForTransactionsForm />

      {isLoading ? <TransactionListSkeleton /> : <TransactionList transactions={transactions} />}

      <PaginationContainer>{isLoading ? <PaginationSkeleton /> : <Pagination />}</PaginationContainer>
    </Container>
  )
}
