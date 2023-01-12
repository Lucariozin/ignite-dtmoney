import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import { useForm, Controller } from 'react-hook-form'

import { TransactionType } from '@components/TransactionListContainer/components/TransactionItem/TransactionItem'

import {
  Container,
  Input,
  InputsContainer,
  RegisterButton,
  TypeButton,
  TypeButtonsContainer,
} from './NewTransactionForm.styles'

export const NewTransactionForm = () => {
  const { register, control, setValue, handleSubmit } = useForm({
    defaultValues: {
      description: '',
      price: '',
      category: '',
      type: 'income',
    },
  })

  const onTransactionTypeValueChange = (value: TransactionType) => {
    if (!value) return

    setValue('type', value)
  }

  const onNewTransactionFormSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(onNewTransactionFormSubmit)}>
      <InputsContainer>
        <Input
          placeholder="Descrição"
          type="text"
          {...register('description')}
        />

        <Input placeholder="Preço" type="number" {...register('price')} />
        <Input placeholder="Categoria" type="text" {...register('category')} />
      </InputsContainer>

      <Controller
        name="type"
        control={control}
        render={() => (
          <TypeButtonsContainer
            type="single"
            defaultValue="income"
            onValueChange={onTransactionTypeValueChange}
          >
            <TypeButton type="button" value="income" tabIndex={0}>
              <ArrowCircleUp size={24} /> Entrada
            </TypeButton>

            <TypeButton type="button" value="outcome" tabIndex={0}>
              <ArrowCircleDown size={24} /> Saída
            </TypeButton>
          </TypeButtonsContainer>
        )}
      />

      <RegisterButton type="submit">Cadastrar</RegisterButton>
    </Container>
  )
}
