import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;
  inset: 0;
  height: 13.25rem;
  background-color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 11.5rem;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 73rem;
  padding: 0 1.5rem;
  margin: 2.5rem auto 0;
`

export const NewTransactionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  user-select: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 7.3125rem;
    height: 1.5625rem;
  }
`

export const NewTransactionButton = styled.button`
  width: 100%;
  max-width: 9.5rem;
  height: 3.125rem;
  font-size: 1rem;
  font-weight: 700;

  border: 0;
  border-radius: 6px;

  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.green[500]};

  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.green[400]};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
    max-width: 8.125rem;
    height: 2.375rem;
  }
`

export const SummaryContainer = styled.div`
  margin-top: 2.5rem;
`
