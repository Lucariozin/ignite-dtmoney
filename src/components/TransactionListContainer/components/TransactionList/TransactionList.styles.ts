import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 1.5rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
`
