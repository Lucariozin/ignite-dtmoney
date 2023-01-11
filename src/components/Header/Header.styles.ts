import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;
  inset: 0;
  height: 13.25rem;
  background-color: ${({ theme }) => theme.palette.gray[700]};
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
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`

export const LogoImg = styled.img``

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[100]};
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
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }
`

export const SummaryContainer = styled.div`
  margin-top: 2.5rem;
`
