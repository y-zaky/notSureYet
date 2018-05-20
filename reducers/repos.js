import { LOAD_COMPLETE, FETCH_ERROR, FETCH_SUCCESS, FILTER_REPOS, STAR_REPO, UNSTAR_REPO } from '../actionTypes'

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
      if (state.starredRepos.includes(action.payload)) return state
      return {
        ...state,
        starredRepos: state.starredRepos.concat(action.payload)
      }
    case UNSTAR_REPO:
      return {
        ...state,
        starredRepos: state.starredRepos.filter( repo => repo != action.payload )
      }
    case FILTER_REPOS:
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
