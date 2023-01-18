import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 8px;
  }
`

export const SearchForTransactionsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 9.25rem;
  height: 3.375rem;

  color: ${({ theme }) => theme.palette.green[400]};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.green[400]};

  background-color: transparent;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s, filter 0.2s;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.green[500]};
    border-color: ${({ theme }) => theme.palette.green[500]};
  }

  &:focus-visible {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.green[500]};
    border-color: ${({ theme }) => theme.palette.green[500]};

    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 3.375rem;
  }
`

export const SearchForTransactionsText = styled.span`
  font-size: 1rem;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`
