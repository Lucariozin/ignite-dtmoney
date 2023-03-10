import { useTheme } from 'styled-components'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { formatMoney } from '@utils/formatMoney'

import { Skeleton } from '@components/Skeleton'

import { Container, TypeHeader, TypeText, Value } from './SummaryCard.styles'

interface SummaryCardProps {
  type: 'income' | 'outcome' | 'total'
  value: number
  isLoading: boolean
}

export const SummaryCard = ({ type = 'income', value = 0, isLoading = false }: SummaryCardProps) => {
  const { palette } = useTheme()

  const dataOfTypes = {
    income: {
      text: 'Entradas',
      icon: <ArrowCircleUp size={34} color={palette.green[400]} />,
    },
    outcome: {
      text: 'Saídas',
      icon: <ArrowCircleDown size={34} color={palette.red[300]} />,
    },
    total: {
      text: 'Total',
      icon: <CurrencyDollar size={34} color={palette.white} />,
    },
  }

  const typeData = dataOfTypes[type]

  const formattedValue = formatMoney({ value })

  return (
    <Container type={type} value={value}>
      <TypeHeader>
        <TypeText>{typeData.text}</TypeText>

        {typeData.icon}
      </TypeHeader>

      {isLoading ? <Skeleton width="100%" height="2.375rem" /> : <Value>{formattedValue}</Value>}
    </Container>
  )
}
