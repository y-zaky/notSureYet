import {UNSTAR_REPO} from '../actionTypes'

export const unStarRepo = (repo) => ({
    type: UNSTAR_REPO,
    payload: repo
})