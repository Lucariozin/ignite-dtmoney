import styled, { css } from 'styled-components'

import { TransactionType } from './TransactionItem'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.gray[550]};
`

export const Description = styled.span`
  width: 100%;
  max-width: 31.25rem;
`

interface ValueProps {
  type: TransactionType
}

export const Value = styled.span<ValueProps>`
  width: 100%;
  max-width: 12.5rem;

  ${({ theme, type }) => {
    const colorsOfTypes = {
      income: theme.palette.green[400],
      outcome: theme.palette.red[300],
    }

    const valueColor = colorsOfTypes[type]

    return css`
      color: ${valueColor};
    `
  }}
`

export const Category = styled.span`
  width: 100%;
  max-width: 15rem;
`

export const CreationDate = styled.span``
