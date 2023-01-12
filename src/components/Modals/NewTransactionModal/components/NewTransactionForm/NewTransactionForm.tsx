import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import {
  Container,
  Input,
  InputsContainer,
  RegisterButton,
  TypeButton,
  TypeButtonsContainer,
} from './NewTransactionForm.styles'

import { zodValidationSchema } from './zodValidationSchema'

type NewTransactionFormInputs = zod.infer<typeof zodValidationSchema>

export const NewTransactionForm = () => {
  const { register, control, watch, setValue, handleSubmit, formState } = useForm<NewTransactionFormInputs>({
    defaultValues: { type: 'income' },
    resolver: zodResolver(zodValidationSchema),
  })

  const type = watch('type')

  const fieldErrors = formState.errors

  const onTransactionTypeValueChange = (value: 'income' | 'outcome') => {
    if (!value) return

    setValue('type', value)
  }

  const onNewTransactionFormSubmit = (data: NewTransactionFormInputs) => {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(onNewTransactionFormSubmit)}>
      <InputsContainer>
        <Input
          placeholder="Descrição"
          type="text"
          {...register('description')}
          defaultValue=""
          isError={!!fieldErrors.description}
        />

        <Input placeholder="Preço" type="text" {...register('price')} defaultValue="" isError={!!fieldErrors.price} />

        <Input
          placeholder="Categoria"
          type="text"
          {...register('category')}
          defaultValue=""
          isError={!!fieldErrors.category}
        />
      </InputsContainer>

      <Controller
        name="type"
        control={control}
        render={() => (
          <TypeButtonsContainer type="single" defaultValue="income" onValueChange={onTransactionTypeValueChange}>
            <TypeButton type="button" value="income" selected={type === 'income'} tabIndex={0}>
              <ArrowCircleUp size={24} /> Entrada
            </TypeButton>

            <TypeButton type="button" value="outcome" selected={type === 'outcome'} tabIndex={0}>
              <ArrowCircleDown size={24} /> Saída
            </TypeButton>
          </TypeButtonsContainer>
        )}
      />

      <RegisterButton type="submit">Cadastrar</RegisterButton>
    </Container>
  )
}
