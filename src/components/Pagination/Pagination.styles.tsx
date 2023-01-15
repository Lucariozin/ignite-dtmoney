import styled, { css } from 'styled-components'

import { CaretLeft, CaretRight } from 'phosphor-react'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const BaseControlButton = styled.button`
  font-size: 0;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.green[500]};

  transition: color 0.2s;
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.palette.gray[500]};
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.palette.green[400]};
  }
`

export const PrevPageButton = styled(BaseControlButton)``

PrevPageButton.defaultProps = {
  children: <CaretLeft size={26} weight="bold" />,
}

export const NextPageButton = styled(BaseControlButton)``

NextPageButton.defaultProps = {
  children: <CaretRight size={26} weight="bold" />,
}

export const PageButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`

interface PageButtonProps {
  isHighlighted?: boolean
}

export const PageButton = styled.button<PageButtonProps>`
  width: 2.5rem;
  height: 2.5rem;

  font-size: 1rem;
  font-weight: 700;

  border: 0;
  border-radius: 6px;

  transition: filter 0.2s;
  cursor: pointer;
  user-select: none;

  ${({ theme, isHighlighted }) => {
    if (isHighlighted) {
      return css`
        color: ${theme.palette.gray[100]};
        background-color: ${theme.palette.green[600]};
      `
    }

    return css`
      color: ${({ theme }) => theme.palette.gray[300]};
      background-color: ${theme.palette.gray[500]};

      &:hover {
        filter: brightness(1.5);
      }
    `
  }}
`

export const Separator = styled.span`
  position: relative;
  top: 6px;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[300]};
  user-select: none;
`
