import * as zod from 'zod'

const errorMessages = {
  transactionTypeError: 'O tipo da transação precisa ser uma "Entrada" ou uma "Saída"',
  addDescriptionError: 'Adicione uma descrição',
  addCategoryError: 'Adicione uma categoria',
  addPriceError: 'Adicione um preço maior que 0',
  maxTextLengthError: 'Ops, seu texto ultrapassou o limite permitido',
}

export const zodValidationSchema = zod.object({
  type: zod.string().refine((value) => {
    const possibilities = ['income', 'outcome']

    if (!possibilities.includes(value)) return false

    return true
  }, errorMessages.transactionTypeError),
  description: zod.string().min(1, errorMessages.addDescriptionError).max(100, errorMessages.maxTextLengthError),
  price: zod
    .string()
    .transform((value) => Number(value))
    .refine((value) => {
      const valueIsNaN = Number.isNaN(value)

      if (valueIsNaN || value <= 0) return false

      return true
    }, errorMessages.addPriceError),
  category: zod.string().min(1, errorMessages.addCategoryError).max(100, errorMessages.maxTextLengthError),
})
