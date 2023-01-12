import * as ToggleGroup from '@radix-ui/react-toggle-group'

import styled, { css } from 'styled-components'

export const Container = styled.form`
  margin-top: 2rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface InputProps {
  isError: boolean
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[200]};

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme, isError }) => {
    if (!isError) return css``

    return css`
      outline: 1px solid ${theme.palette.red[300]};
    `
  }}

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.gray[400]};
  }
`

export const TypeButtonsContainer = styled(ToggleGroup.Root)`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0 2.5rem 0;
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

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.green[400]};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }
`
