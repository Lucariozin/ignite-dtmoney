import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);

  &[data-state='open'] {
    animation: fadeIn 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: fadeOut 300ms ease-in;
  }
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 33.5rem;
  padding: 3rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[600]};

  &[data-state='open'] {
    animation: fadeIn 200ms ease-out;
  }

  &[data-state='closed'] {
    animation: fadeOut 200ms ease-in;
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.gray[100]};
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  font-size: 0;
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.gray[400]};
  background-color: transparent;

  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.green[400]};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.green[400]};
  }
`

CloseButton.defaultProps = {
  children: <X size={24} />,
}
