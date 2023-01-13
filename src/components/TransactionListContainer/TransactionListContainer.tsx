import { useEffect, useCallback } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { fetchTransactions } from '@services/api'

import { useTransactions } from '@contexts/Transactions'

import { Pagination } from '@components/Pagination'
import { TransactionItem } from './components/TransactionItem'

import {
  Container,
  PaginationContainer,
  SearchForTransactionsButton,
  SearchForTransactionsContainer,
  SearchForTransactionsInput,
  TransactionList,
} from './TransactionListContainer.styles'

export const TransactionListContainer = () => {
  const { transactions, setTransactions } = useTransactions()

  const getTransactions = useCallback(async () => {
    const { data } = await fetchTransactions()

    if (!data) return

    setTransactions({ transactions: data })
  }, [setTransactions])

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <Container>
      <SearchForTransactionsContainer>
        <SearchForTransactionsInput type="text" placeholder="Busque por transações" />

        <SearchForTransactionsButton>
          <MagnifyingGlass size={20} weight="bold" /> Buscar
        </SearchForTransactionsButton>
      </SearchForTransactionsContainer>

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
