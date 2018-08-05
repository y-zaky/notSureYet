import {
    STAR_REPO
} from '../actionTypes'
import { resolve } from 'path';

const starRepoFunc = (repo) => {
    return {
        type: STAR_REPO,
        payload: repo
    }
}

const saveRepoInDb = (repo) => {
    const reponame = JSON.stringify({name:repo.name, id: repo.id});
    return fetch("http://localhost:1234/save", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: reponame
    }) 
}


export const starRepo = (repo) => {
    repo.isStarred = true

    return (dispatch, getState) => {
        const state = getState()
        // console.log('action state', state)

        saveRepoInDb(repo)
            .then(res => res.json())
            .then(data => console.log('action complete data in DB', data))
            .then(() => dispatch(starRepoFunc(repo)))
            .catch(() => console.log('err in starRepo Action', err))
    }

}