import { LOAD_COMPLETE, FETCH_ERROR } from '../actionTypes'

const initialState = {
  error: null,
  isLoaded: false,
  repos: {items: []}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPLETE :
      return {
        ...state,
        isLoaded: action.payload
      }
    case FETCH_ERROR :
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
