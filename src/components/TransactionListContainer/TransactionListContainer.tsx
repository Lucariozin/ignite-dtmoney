import { MagnifyingGlass } from 'phosphor-react'

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
  return (
    <Container>
      <SearchForTransactionsContainer>
        <SearchForTransactionsInput type="text" placeholder="Busque por transações" />

        <SearchForTransactionsButton>
          <MagnifyingGlass size={20} weight="bold" /> Buscar
        </SearchForTransactionsButton>
      </SearchForTransactionsContainer>

      <TransactionList>
        <TransactionItem
          type="income"
          description="Desenvolvimento de site"
          value={12000}
          category="Venda"
          createdAt={new Date()}
        />
        <TransactionItem
          type="outcome"
          description="Hamburguer"
          value={59}
          category="Alimentação"
          createdAt={new Date()}
        />
        <TransactionItem
          type="income"
          description="Desenvolvimento de site"
          value={12000}
          category="Venda"
          createdAt={new Date()}
        />
        <TransactionItem
          type="outcome"
          description="Hamburguer"
          value={59}
          category="Alimentação"
          createdAt={new Date()}
        />
        <TransactionItem
          type="income"
          description="Desenvolvimento de site"
          value={12000}
          category="Venda"
          createdAt={new Date()}
        />
        <TransactionItem
          type="outcome"
          description="Hamburguer"
          value={59}
          category="Alimentação"
          createdAt={new Date()}
        />
        <TransactionItem
          type="income"
          description="Desenvolvimento de site"
          value={12000}
          category="Venda"
          createdAt={new Date()}
        />
        <TransactionItem
          type="outcome"
          description="Hamburguer"
          value={59}
          category="Alimentação"
          createdAt={new Date()}
        />
        <TransactionItem
          type="income"
          description="Desenvolvimento de site"
          value={12000}
          category="Venda"
          createdAt={new Date()}
        />
        <TransactionItem
          type="outcome"
          description="Hamburguer"
          value={59}
          category="Alimentação"
          createdAt={new Date()}
        />
      </TransactionList>

      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </Container>
  )
}
