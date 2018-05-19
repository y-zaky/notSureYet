import React, {Component} from 'react'

import RepoListItem from './repoListItem'

export default class RepoList extends Component {

  render () {
    const repoList = this.props.data.map(
      (repo) => < RepoListItem starRepo={this.props.starRepo} data={repo}/>
    )
    
    return repoList
  }
}


