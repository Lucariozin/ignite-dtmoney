import { PaginationContextState } from './Pagination.types'
import { ActionsObjectType, PaginationActions } from './Pagination.actions'

const actionsObject: ActionsObjectType = {
  SET_STATE: ({ state, payload }) => {
    if (!payload?.state) return state

    const newState = payload.state

    return newState
  },
}

export const reducer = (state: PaginationContextState, action: PaginationActions) => {
  const { type, payload } = action

  const actionFunction = actionsObject[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
