import { Header } from '@components/Header'
import { TransactionListContainer } from '@components/TransactionListContainer'

import { Container } from './Transactions.styles'

export const Transactions = () => {
  return (
    <Container>
      <Header />

      <TransactionListContainer />
    </Container>
  )
}
