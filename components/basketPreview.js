import React, {Component} from 'react'

export default class BasketPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let starredRepos = this.props.starredRepos.map(
            (repo) => (
                <ul className={"basketPreview__repoContianer"} key={repo.id}>
                    <li>{repo.name}</li> 
                    <li>{repo.language || "Language Unknown"}</li>
                </ul>
            )
        )
        
        return starredRepos
             
    }
}

