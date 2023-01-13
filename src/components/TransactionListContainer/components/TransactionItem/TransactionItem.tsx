import { formatMoney } from '@utils/formatMoney'

import { Category, Container, CreationDate, Description, Value } from './TransactionItem.styles'

export type TransactionType = 'income' | 'outcome'

interface TransactionItemProps {
  type: TransactionType
  description: string
  value: number
  category: string
  createdAt: Date
}

interface FormatTransactionValueParams {
  value: number
  type: TransactionType
}

const formatTransactionValue = ({ value, type }: FormatTransactionValueParams) => {
  let formattedValue = formatMoney({ value })

  if (type === 'outcome') {
    formattedValue = '- ' + formattedValue
  }

  return formattedValue
}

export const TransactionItem = ({
  type = 'income',
  description = '',
  value = 0,
  category = '',
  createdAt = new Date(),
}: TransactionItemProps) => {
  const formattedValue = formatTransactionValue({ value, type })
  const formattedCreationDate = createdAt.toLocaleDateString()

  return (
    <Container>
      <Description>{description}</Description>

      <Value type={type}>{formattedValue}</Value>

      <Category>{category}</Category>

      <CreationDate>{formattedCreationDate}</CreationDate>
    </Container>
  )
}
