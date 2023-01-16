import styled from 'styled-components'

export const Container = styled.div`
  @keyframes skeletonWave {
    0% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    10% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[500]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    20% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[500]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    30% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[500]}
      );
    }
    40% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    50% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    60% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[500]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    70% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[500]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    80% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[500]}
      );
    }
    90% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
    100% {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]},
        ${({ theme }) => theme.palette.gray[550]}
      );
    }
  }

  border-radius: 6px;
  animation: skeletonWave 1.6s infinite ease-in-out;
`
