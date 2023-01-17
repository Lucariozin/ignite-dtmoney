import { useCallback, useEffect } from 'react'

import { useTransactions } from '@contexts/Transactions'
import { usePagination } from '@contexts/Pagination'

import { Pagination, PaginationSkeleton } from '@components/Pagination'
import { SearchForTransactionsForm } from '@components/SearchForTransactionsForm'

import { TransactionList, TransactionListSkeleton } from './components/TransactionList'

import { Container, PaginationContainer } from './TransactionListContainer.styles'

export const TransactionListContainer = () => {
  const { transactions, isLoading, setLoading } = useTransactions()
  const { goToPage } = usePagination()

  const onFirstRender = useCallback(async () => {
    setLoading(true)

    await goToPage(1)

    setLoading(false)
  }, [goToPage, setLoading])

  useEffect(() => {
    onFirstRender()
  }, [onFirstRender])

  return (
    <Container>
      <SearchForTransactionsForm />

      {isLoading ? <TransactionListSkeleton /> : <TransactionList transactions={transactions} />}

      <PaginationContainer>{isLoading ? <PaginationSkeleton /> : <Pagination />}</PaginationContainer>
    </Container>
  )
}
