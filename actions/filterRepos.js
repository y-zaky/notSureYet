import { FILTER_REPOS } from '../actionTypes';

export const filterRepos = (language) => ({
    type: FILTER_REPOS,
    payload: language
})