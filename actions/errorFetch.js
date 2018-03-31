import { FETCH_ERROR } from '../actionTypes'

export const errorFetch = (error) => ({
  type: FETCH_ERROR,
  payload: error.message
})
