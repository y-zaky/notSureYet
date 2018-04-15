import { LOAD_COMPLETE, FETCH_ERROR, FETCH_SUCCESS, FILTER_REPOS, STAR_REPO } from '../actionTypes'

const initialState = {
  error: null,
  isLoaded: false,
  repos: [],
  renderedRepos: [],
  starredRepos: []
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
        repos: state.repos.concat(action.payload),
        renderedRepos: state.repos.concat(action.payload)
      }
    case STAR_REPO:
      return {
        ...state,
        starredRepos: state.starredRepos.concat(action.payload)
      }
    case FILTER_REPOS:
      console.log('action PAYLOAD', action.payload);
      if (action.payload === "Select All") {
        return {
          ...state,
          repos: state.repos.concat(action.payload),
          renderedRepos: state.repos.concat(action.payload)
        }
      }
     else return {
        ...state,
        renderedRepos: state.repos.filter( repo => repo.language === action.payload )
      }
    default:
      return state
  }
}
