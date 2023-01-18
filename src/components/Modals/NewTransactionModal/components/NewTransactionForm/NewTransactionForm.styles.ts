import * as ToggleGroup from '@radix-ui/react-toggle-group'

import styled, { css } from 'styled-components'

export const Container = styled.form`
  margin-top: 2rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 12px;
  }
`

export const TypeButtonsContainer = styled(ToggleGroup.Root)`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0 2.5rem 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 8px;
    justify-content: space-between;
  }
`

interface TypeButtonProps {
  selected: boolean
}

export const TypeButton = styled(ToggleGroup.Item)<TypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  max-width: 13.25rem;
  padding: 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.gray[550]};

  border: 0;
  border-radius: 6px;

  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  & > svg {
    ${({ theme, value }) => {
      const type = value as 'income' | 'outcome'

      const colorsOfTypes = {
        income: theme.palette.green[400],
        outcome: theme.palette.red[300],
      }

      const typeColor = colorsOfTypes[type]

      return css`
        transition: color 0.2s;
        color: ${typeColor};
      `
    }}
  }

  ${({ theme, value, selected }) => {
    if (!selected) return css``

    const type = value as 'income' | 'outcome'

    const colorsOfTypes = {
      income: theme.palette.green[600],
      outcome: theme.palette.red[500],
    }

    const typeColor = colorsOfTypes[type]

    return css`
      & > svg {
        color: ${theme.palette.white};
      }

      color: ${theme.palette.white};
      background-color: ${typeColor};
    `
  }}

  ${({ theme, selected }) => {
    if (selected) return css``

    return css`
      &:hover {
        background-color: ${theme.palette.gray[500]};
      }
    `
  }}

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }
`

export const RegisterButton = styled.button`
  width: 100%;
  height: 3.625rem;

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.green[500]};

  border: 0;
  border-radius: 6px;

  transition: background-color 0.2s, filter 0.2s;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.palette.green[400]};
  }

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 3.125rem;
  }
`
