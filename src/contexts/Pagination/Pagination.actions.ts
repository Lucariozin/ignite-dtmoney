import { PaginationContextState } from './Pagination.types'

export type ActionTypes = 'SET_STATE'

type Payload = {
  state?: Partial<PaginationContextState>
}

export type PaginationActions = {
  type: ActionTypes
  payload?: Payload
}

interface ActionFunctionParams {
  state: PaginationContextState
  payload?: Payload
}

export type ActionsObjectType = {
  [K in ActionTypes]: (params: ActionFunctionParams) => PaginationContextState // eslint-disable-line
}
