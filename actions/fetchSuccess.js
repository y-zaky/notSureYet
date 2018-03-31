import { FETCH_SUCCESS } from '../actionTypes'

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data.items
})
