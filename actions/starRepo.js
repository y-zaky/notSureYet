import { STAR_REPO } from '../actionTypes'

export const starRepo = (repo) => {
    repo.isStarred = true
    
    return {
        type: STAR_REPO,
        payload: repo
    }
}