import { Transaction } from '@contexts/Transactions/Transactions.types'

import { TransactionItem } from '../TransactionItem'

import { Container } from './TransactionList.styles'

interface TransactionListProps {
  transactions: Transaction[]
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <Container>
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
    </Container>
  )
}
