import { SummaryCard } from './components/SummaryCard'

import { Container } from './Summary.styles'

export const Summary = () => {
  return (
    <Container>
      <SummaryCard type="income" value={17400} />
      <SummaryCard type="outcome" value={1259} />
      <SummaryCard type="total" value={16141} />
    </Container>
  )
}
