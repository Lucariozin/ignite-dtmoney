import { useTransactions } from '@contexts/Transactions'

import { SearchForTransactionsForm } from './components/SearchForTransactionsForm'
import { TransactionItem } from './components/TransactionItem'
import { Pagination } from '@components/Pagination'

import { Container, PaginationContainer, TransactionList } from './TransactionListContainer.styles'

export const TransactionListContainer = () => {
  const { transactions } = useTransactions()

  return (
    <Container>
      <SearchForTransactionsForm />

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
