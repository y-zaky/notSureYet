import { FETCH_ERROR } from '../actionTypes'

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error.message
})
