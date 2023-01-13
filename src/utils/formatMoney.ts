interface FormatMoneyParams {
  value: number
}

export const formatMoney = ({ value }: FormatMoneyParams) => {
  const formattedMoney = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return formattedMoney
}
