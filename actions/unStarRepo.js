import {UNSTAR_REPO} from '../actionTypes'

export const unstarRepo = (repo) => ({
    type: UNSTAR_REPO,
    payload: repo
})