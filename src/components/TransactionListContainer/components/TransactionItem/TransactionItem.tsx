import {
  Category,
  Container,
  CreationDate,
  Description,
  Value,
} from './TransactionItem.styles'

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

const formatTransactionValue = ({
  value,
  type,
}: FormatTransactionValueParams) => {
  let formattedValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

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

  return (
    <Container>
      <Description>Desenvolvimento de site</Description>

      <Value type={type}>{formattedValue}</Value>

      <Category>Venda</Category>

      <CreationDate>13/04/2022</CreationDate>
    </Container>
  )
}
