import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 73rem;
  margin: 21rem auto 0;
  padding: 0 1.5rem;
`

export const SearchForTransactionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const SearchForTransactionsInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[200]};

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[700]};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.gray[400]};
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

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.green[400]};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.green[400]};

  background-color: transparent;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.green[500]};
    border-color: ${({ theme }) => theme.palette.green[500]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }
`

export const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 1.5rem;
`

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`
