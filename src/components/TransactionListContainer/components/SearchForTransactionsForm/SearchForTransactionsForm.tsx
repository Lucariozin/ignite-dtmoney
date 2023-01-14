import { useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'

import { useTransactions } from '@contexts/Transactions'

import { Container, SearchForTransactionsButton, SearchForTransactionsInput } from './SearchForTransactionsForm.styles'

const zodValidationSchema = zod.object({
  query: zod.string().max(100, 'Ops, sua busca ultrapassou o limite permitido'),
})

type SearchForTransactionsInputs = zod.infer<typeof zodValidationSchema>

export const SearchForTransactionsForm = () => {
  const { filterTransactions } = useTransactions()

  const { register, handleSubmit, formState } = useForm<SearchForTransactionsInputs>({
    resolver: zodResolver(zodValidationSchema),
    reValidateMode: 'onSubmit',
  })

  const onSearchForTransactionsFormSubmit = (data: SearchForTransactionsInputs) => {
    const { query } = data

    filterTransactions({ query })
  }

  return (
    <Container onSubmit={handleSubmit(onSearchForTransactionsFormSubmit)}>
      <SearchForTransactionsInput
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
        isError={!!formState.errors.query}
      />

      <SearchForTransactionsButton type="submit">
        <MagnifyingGlass size={20} weight="bold" /> Buscar
      </SearchForTransactionsButton>
    </Container>
  )
}
