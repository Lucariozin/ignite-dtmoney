import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'

import { useTransactions } from '@contexts/Transactions'
import { usePagination } from '@contexts/Pagination'

import { Container, SearchForTransactionsButton, SearchForTransactionsInput } from './SearchForTransactionsForm.styles'

const zodValidationSchema = zod.object({
  query: zod.string().max(100, 'Ops, sua busca ultrapassou o limite permitido'),
})

type SearchForTransactionsInputs = zod.infer<typeof zodValidationSchema>

export const SearchForTransactionsForm = () => {
  const { filterTransactions, updateSummary } = useTransactions()
  const { currentPage, goToPage } = usePagination()

  const { register, handleSubmit, watch, formState } = useForm<SearchForTransactionsInputs>({
    resolver: zodResolver(zodValidationSchema),
    reValidateMode: 'onSubmit',
  })

  const query = watch('query')

  const onSearchForTransactionsFormSubmit = (data: SearchForTransactionsInputs) => {
    const { query } = data

    filterTransactions({ query })
  }

  useEffect(() => {
    if (query) return

    goToPage(currentPage)
    updateSummary()
  }, [query, currentPage, goToPage, updateSummary])

  return (
    <Container onSubmit={handleSubmit(onSearchForTransactionsFormSubmit)}>
      <SearchForTransactionsInput
        type="text"
        placeholder="Busque por transações"
        isError={!!formState.errors.query}
        {...register('query')}
      />

      <SearchForTransactionsButton type="submit">
        <MagnifyingGlass size={20} weight="bold" /> Buscar
      </SearchForTransactionsButton>
    </Container>
  )
}
