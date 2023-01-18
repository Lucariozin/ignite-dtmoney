import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;

  overflow-x: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${({ theme }) => theme.breakpoints.down(950)} {
    gap: 1rem;
  }
`
