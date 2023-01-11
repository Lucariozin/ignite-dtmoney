import { MagnifyingGlass } from 'phosphor-react'

import {
  Container,
  SearchForTransactionsButton,
  SearchForTransactionsContainer,
  SearchForTransactionsInput,
  TransactionList,
} from './TransactionListContainer.styles'

export const TransactionListContainer = () => {
  return (
    <Container>
      <SearchForTransactionsContainer>
        <SearchForTransactionsInput placeholder="Busque por transações" />

        <SearchForTransactionsButton>
          <MagnifyingGlass size={20} weight="bold" /> Buscar
        </SearchForTransactionsButton>
      </SearchForTransactionsContainer>

      <TransactionList></TransactionList>
    </Container>
  )
}
