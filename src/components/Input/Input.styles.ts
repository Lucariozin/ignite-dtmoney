import styled, { css } from 'styled-components'

interface ContainerProps {
  isError: boolean
}

export const Container = styled.input<ContainerProps>`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[200]};

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[700]};

  &::placeholder {
    color: ${({ theme }) => theme.palette.gray[400]};
  }

  ${({ theme, isError }) => {
    if (!isError) {
      return css`
        &:focus-visible {
          outline: 1px solid ${({ theme }) => theme.palette.green[400]};
        }
      `
    }

    return css`
      outline: 1px solid ${theme.palette.red[300]};
    `
  }}
`
