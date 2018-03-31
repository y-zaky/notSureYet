import { LOAD_COMPLETE } from '../actionTypes'

export const loadComplete = (boolean) => ({
  type: LOAD_COMPLETE,
  payload: boolean
})
