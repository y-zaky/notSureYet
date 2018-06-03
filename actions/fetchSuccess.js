import { FETCH_SUCCESS } from '../actionTypes'

export const fetchSuccess = (data) => {
  
  data.items.forEach( repo => repo.isStarred = false )
  
    return {
    type: FETCH_SUCCESS,
    payload: data.items
  }
}
