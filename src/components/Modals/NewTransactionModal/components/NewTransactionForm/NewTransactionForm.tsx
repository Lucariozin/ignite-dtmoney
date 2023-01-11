import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import { useTheme } from 'styled-components'

import {
  Container,
  Input,
  InputsContainer,
  RegisterButton,
  TypeButton,
  TypeButtonsContainer,
} from './NewTransactionForm.styles'

export const NewTransactionForm = () => {
  const { palette } = useTheme()

  return (
    <Container>
      <InputsContainer>
        <Input placeholder="Descrição" type="text" />
        <Input placeholder="Preço" type="number" />
        <Input placeholder="Categoria" type="text" />
      </InputsContainer>

      <TypeButtonsContainer type="single" defaultValue="income">
        <TypeButton type="button" value="income">
          <ArrowCircleUp size={24} color={palette.green[400]} /> Entrada
        </TypeButton>

        <TypeButton type="button" value="outcome">
          <ArrowCircleDown size={24} color={palette.red[300]} /> Saída
        </TypeButton>
      </TypeButtonsContainer>

      <RegisterButton type="submit">Cadastrar</RegisterButton>
    </Container>
  )
}
