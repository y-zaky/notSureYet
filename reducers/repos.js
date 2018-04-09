import { LOAD_COMPLETE, FETCH_ERROR, FETCH_SUCCESS, FILTER_REPOS } from '../actionTypes'

const initialState = {
  error: null,
  isLoaded: false,
  repos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPLETE:
      return {
        ...state,
        isLoaded: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        repos: state.repos.concat(action.payload)
      }
    // case FILTER_REPOS:
    //   return {
    //     ...state,
    //     repos: state.repos.map( repo => repo.language === action.payload )
    //   }
    default:
      return state
  }
}
