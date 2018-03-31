import { LOAD_COMPLETE } from '../actionTypes'

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
    default:
      return state
  }
}
