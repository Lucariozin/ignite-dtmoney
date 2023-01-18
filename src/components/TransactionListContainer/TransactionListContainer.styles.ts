import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 73rem;
  margin: 21rem auto 0;
  padding: 0 1.5rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 19.5rem;
  }
`

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`
