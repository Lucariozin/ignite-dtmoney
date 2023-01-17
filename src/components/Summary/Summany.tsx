import { useTransactions } from '@contexts/Transactions'

import { SummaryCard } from './components/SummaryCard'

import { Container } from './Summary.styles'

export const Summary = () => {
  const { summary, isLoading } = useTransactions()

  const { incomes, outcomes, total } = summary

  return (
    <Container>
      <SummaryCard type="income" value={incomes} isLoading={isLoading} />
      <SummaryCard type="outcome" value={outcomes} isLoading={isLoading} />
      <SummaryCard type="total" value={total} isLoading={isLoading} />
    </Container>
  )
}
