import { useTransactions } from '@contexts/Transactions'

import { SummaryCard } from './components/SummaryCard'

import { Container } from './Summary.styles'

export const Summary = () => {
  const { summary } = useTransactions()

  const { incomes, outcomes, total } = summary

  return (
    <Container>
      <SummaryCard type="income" value={incomes} />
      <SummaryCard type="outcome" value={outcomes} />
      <SummaryCard type="total" value={total} />
    </Container>
  )
}
