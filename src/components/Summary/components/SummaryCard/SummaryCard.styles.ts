import styled, { css } from 'styled-components'

interface ContainerProps {
  type: 'income' | 'outcome' | 'total'
  value: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  max-width: 22rem;
  padding: 1.5rem 2rem 1.7rem;
  border-radius: 6px;

  ${({ theme, type, value }) => {
    const backgroundColors = {
      income: theme.palette.gray[500],
      outcome: theme.palette.gray[500],
      total: value < 0 ? theme.palette.red[400] : theme.palette.green[600],
    }

    const backgroundColor = backgroundColors[type]

    return css`
      background-color: ${backgroundColor};
    `
  }}
`

export const TypeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    margin-right: -4px;
  }
`

export const TypeText = styled.span`
  color: ${({ theme }) => theme.palette.gray[200]};
`

export const Value = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[100]};
`
