import styled, { css } from 'styled-components'

import { TransactionType } from './TransactionItem'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.gray[550]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    align-items: flex-end;
    padding: 1.5rem 1.25rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 12px;
  }
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
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 15rem;

  & > svg {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    color: ${({ theme }) => theme.palette.gray[400]};
    margin-top: 4px;

    & > svg {
      display: block;
    }
  }
`

export const CreationDate = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  & > svg {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    color: ${({ theme }) => theme.palette.gray[400]};

    & > svg {
      display: block;
    }
  }
`
