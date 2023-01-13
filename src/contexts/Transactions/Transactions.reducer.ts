import { ActionsObjectType, TransactionsActions, TransactionsContextState } from './Transactions.types'

const actionsObject: ActionsObjectType = {
  SET_SUMMARY: ({ state, payload }) => {
    if (!payload?.summary) return state

    const { summary } = payload

    return { ...state, summary }
  },
}

export const reducer = (state: TransactionsContextState, action: TransactionsActions) => {
  const { type, payload } = action

  const actionFunction = actionsObject[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
