import { useEffect, useCallback } from 'react'

import { fetchTransactions } from '@services/api'

import { useTransactions } from '@contexts/Transactions'

import { SearchForTransactionsForm } from './components/SearchForTransactionsForm'
import { TransactionItem } from './components/TransactionItem'
import { Pagination } from '@components/Pagination'

import { Container, PaginationContainer, TransactionList } from './TransactionListContainer.styles'

export const TransactionListContainer = () => {
  const { transactions, setTransactions } = useTransactions()

  const handleFilterTransactions = async ({ query }: { query: string }) => {
    const { data } = await fetchTransactions({ query })

    if (!data) return

    setTransactions({ transactions: data })
  }

  const getTransactions = useCallback(async () => {
    const { data } = await fetchTransactions({})

    if (!data) return

    setTransactions({ transactions: data })
  }, [setTransactions])

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <Container>
      <SearchForTransactionsForm handleFilterTransactions={handleFilterTransactions} />

      <TransactionList>
        {transactions.map(({ id, type, description, value, category, createdAt }) => (
          <TransactionItem
            key={id}
            type={type}
            description={description}
            value={value}
            category={category}
            createdAt={createdAt}
          />
        ))}
      </TransactionList>

      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </Container>
  )
}
