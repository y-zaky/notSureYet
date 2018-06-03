import {UNSTAR_REPO} from '../actionTypes'

export const unStarRepo = (repo) => {
    repo.isStarred= false;
    return {
        type: UNSTAR_REPO,
        payload: repo
    }
}