import { TransactionsContextState } from './Transactions.types'
import { ActionsObjectType, TransactionActions } from './Transactions.actions'

const actionsObject: ActionsObjectType = {
  SET_SUMMARY: ({ state, payload }) => {
    if (!payload?.summary) return state

    const { summary } = payload

    return { ...state, summary }
  },
  SET_TRANSACTIONS: ({ state, payload }) => {
    if (!payload?.transactions) return state

    const { transactions } = payload

    return { ...state, transactions }
  },
  CREATE_TRANSACTION: ({ state, payload }) => {
    if (!payload?.transaction) return state

    const { transaction } = payload

    const newTransactions = [transaction, ...state.transactions]

    return { ...state, transactions: newTransactions }
  },
}

export const reducer = (state: TransactionsContextState, action: TransactionActions) => {
  const { type, payload } = action

  const actionFunction = actionsObject[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
