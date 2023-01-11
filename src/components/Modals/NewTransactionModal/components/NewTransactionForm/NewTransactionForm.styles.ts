import * as ToggleGroup from '@radix-ui/react-toggle-group'

import styled from 'styled-components'

export const Container = styled.form`
  margin-top: 2rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
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

export const TypeButtonsContainer = styled(ToggleGroup.Root)`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0 2.5rem 0;
`

export const TypeButton = styled(ToggleGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  max-width: 13.25rem;
  padding: 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.gray[550]};

  border: 0;
  border-radius: 6px;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[500]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }
`

export const RegisterButton = styled.button`
  width: 100%;
  height: 3.625rem;

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.green[500]};

  border: 0;
  border-radius: 6px;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.green[400]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
    outline-offset: 3px;
  }
`
