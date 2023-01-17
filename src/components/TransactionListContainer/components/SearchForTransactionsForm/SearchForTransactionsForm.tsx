import { useCallback, useEffect } from 'react'
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
  const { filterTransactions, isLoading, setLoading, updateSummary } = useTransactions()
  const { currentPage, goToPage } = usePagination()

  const { register, handleSubmit, watch, formState } = useForm<SearchForTransactionsInputs>({
    resolver: zodResolver(zodValidationSchema),
    reValidateMode: 'onSubmit',
  })

  const query = watch('query')

  const onSearchForTransactionsFormSubmit = async (data: SearchForTransactionsInputs) => {
    const { query } = data

    setLoading(true)

    await filterTransactions({ query })

    setLoading(false)
  }

  const goToTheCurrentPage = useCallback(async () => {
    await Promise.all([goToPage(currentPage), updateSummary()])
  }, [goToPage, currentPage, updateSummary])

  useEffect(() => {
    if (query) return

    goToTheCurrentPage()
  }, [query, goToTheCurrentPage])

  const searchForTransactionsButtonIsDisabled = isLoading || !query

  return (
    <Container onSubmit={handleSubmit(onSearchForTransactionsFormSubmit)}>
      <SearchForTransactionsInput
        type="text"
        placeholder="Busque por transações"
        isError={!!formState.errors.query}
        {...register('query')}
      />

      <SearchForTransactionsButton type="submit" disabled={searchForTransactionsButtonIsDisabled}>
        <MagnifyingGlass size={20} weight="bold" /> Buscar
      </SearchForTransactionsButton>
    </Container>
  )
}
