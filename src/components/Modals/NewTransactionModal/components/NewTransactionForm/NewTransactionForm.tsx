import { useForm, Controller } from 'react-hook-form'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { zodValidationSchema } from './zodValidationSchema'

import { useTransactions } from '@contexts/Transactions'

import {
  Container,
  Input,
  InputsContainer,
  RegisterButton,
  TypeButton,
  TypeButtonsContainer,
} from './NewTransactionForm.styles'

interface NewTransactionFormInputs extends zod.infer<typeof zodValidationSchema> {
  type: 'income' | 'outcome'
}

interface NewTransactionFormProps {
  closeModal: () => void
}

export const NewTransactionForm = ({ closeModal }: NewTransactionFormProps) => {
  const { createTransaction } = useTransactions()

  const { register, control, watch, setValue, handleSubmit, formState } = useForm<NewTransactionFormInputs>({
    defaultValues: { type: 'income' },
    resolver: zodResolver(zodValidationSchema),
  })

  const type = watch('type')

  const fieldErrors = formState.errors

  const onTransactionTypeValueChange = (value: NewTransactionFormInputs['type']) => {
    if (!value) return

    setValue('type', value)
  }

  const onNewTransactionFormSubmit = async (data: NewTransactionFormInputs) => {
    const newTransaction = {
      ...data,
      value: data.price,
    }

    await createTransaction(newTransaction)

    closeModal()
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
