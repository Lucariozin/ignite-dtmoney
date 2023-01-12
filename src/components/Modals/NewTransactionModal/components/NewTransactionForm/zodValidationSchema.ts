import * as zod from 'zod'

export const zodValidationSchema = zod.object({
  type: zod.string().refine((value) => {
    const possibilities = ['income', 'outcome']

    if (!possibilities.includes(value)) return false

    return true
  }, 'O tipo da transação precisa ser uma "Entrada" ou uma "Saída"'),
  description: zod.string().min(1, 'Adicione uma descrição').max(100, 'Ops, seu texto ultrapassou o limite permitido'),
  price: zod
    .string()
    .transform((value) => Number(value))
    .refine((value) => {
      const valueIsNaN = Number.isNaN(value)

      if (valueIsNaN || value <= 0) return false

      return true
    }, 'Adicione um preço maior que 0'),
  category: zod.string().min(1, 'Adicione uma categoria').max(100, 'Ops, seu texto ultrapassou o limite permitido'),
})
