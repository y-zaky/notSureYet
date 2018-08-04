import {
    STAR_REPO
} from '../actionTypes'

const starRepoFunc = (repo) => {
    return {
        type: STAR_REPO,
        payload: repo
    }
}

const saveRepoInDb = (repo) => (
    fetch("http://localhost:1234/save", {
        method: 'POST',
        body: JSON.stringify({
            name: repo.name
        })
    })
)

export const starRepo = (repo) => {
    repo.isStarred = true
    // return {
    //     type: STAR_REPO,
    //     payload: repo
    // }

    return (dispatch, getState) => {
        const state = getState()
        console.log('action state', state)

        saveRepoInDb(repo)
            .then(res => res.json())
            .then(data => console.log('action complete data in DB', data))
            .then(() => dispatch(starRepoFunc(repo)))

    }

}