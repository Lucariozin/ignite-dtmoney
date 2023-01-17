import styled from 'styled-components'

export const Container = styled.div`
  @keyframes skeletonWave {
    0% {
      background-color: ${({ theme }) => theme.palette.gray[550]};
    }
    50% {
      background-color: ${({ theme }) => theme.palette.gray[500]};
    }
    100% {
      background-color: ${({ theme }) => theme.palette.gray[550]};
    }
  }

  border-radius: 6px;
  animation: skeletonWave 0.6s infinite ease-in-out;
`
