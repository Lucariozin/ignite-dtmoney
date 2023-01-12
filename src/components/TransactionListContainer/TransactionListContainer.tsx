import { useEffect, useState } from 'react'

import { MagnifyingGlass } from 'phosphor-react'

import { fetchTransactions } from 'src/services/api'

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

type Transaction = {
  id: number
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
  createdAt: Date
}

export const TransactionListContainer = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = async () => {
    const { data } = await fetchTransactions()

    if (!data) return

    setTransactions(data)
  }

  useEffect(() => {
    getTransactions()
  }, [])

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
