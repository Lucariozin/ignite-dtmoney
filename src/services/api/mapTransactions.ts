import { Transaction } from '@contexts/Transactions/Transactions.types'

export const mapTransactions = (data: Transaction[]) => {
  const mappedTransactions = data.map((transaction) => ({
    ...transaction,
    createdAt: new Date(transaction.createdAt),
  }))

  return mappedTransactions
}
