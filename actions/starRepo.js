import { STAR_REPO } from '../actionTypes'

export const starRepo = (repo) => ({
    type: STAR_REPO,
    payload: repo
})